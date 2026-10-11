// LegalModal.jsx - Visor interactivo de documentos legales (Aviso Legal, Privacidad, Cookies, Términos)
import React from 'react';
import { X, ShieldCheck, Scale, FileText, Lock, Cookie, Calendar, ChevronRight } from 'lucide-react';
import { legalSections } from './legalData';

export default function LegalModal({ activeLegalDoc, onClose, onSelectDoc }) {
  if (!activeLegalDoc) return null;

  const currentDoc = legalSections[activeLegalDoc] || legalSections.avisoLegal;

  const tabs = [
    { key: 'avisoLegal', label: 'Aviso Legal', icon: Scale },
    { key: 'privacidad', label: 'Privacidad (RGPD)', icon: Lock },
    { key: 'cookies', label: 'Política de Cookies', icon: Cookie },
    { key: 'terminos', label: 'Términos y Contratación', icon: FileText }
  ];

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div 
        className="modal-content-box legal-modal-container" 
        onClick={(e) => e.stopPropagation()}
      >
        <button className="btn-modal-close" onClick={onClose} aria-label="Cerrar modal">
          <X size={22} />
        </button>

        {/* Barra superior de pestañas legales */}
        <div className="legal-tabs-bar">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeLegalDoc === tab.key;
            return (
              <button
                key={tab.key}
                type="button"
                className={`legal-tab-btn ${isActive ? 'active' : ''}`}
                onClick={() => onSelectDoc(tab.key)}
              >
                <Icon size={16} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Encabezado del documento */}
        <div className="legal-doc-header">
          <div className="legal-badge-pill">
            <ShieldCheck size={14} />
            <span>Marco Legal Español y Europeo (RGPD & LSSI-CE)</span>
          </div>
          <h2 className="legal-doc-title">{currentDoc.title}</h2>
          <p className="legal-doc-subtitle">{currentDoc.subtitle}</p>
          <div className="legal-doc-date">
            <Calendar size={14} />
            <span>Última revisión: {currentDoc.updated} • DR. BYTE (Manuel Aragonés)</span>
          </div>
        </div>

        {/* Cuerpo del documento con scroll suave */}
        <div className="legal-doc-body">
          {currentDoc.sections.map((sec, idx) => (
            <div key={idx} className="legal-section-block">
              <h4 className="legal-section-heading">{sec.heading}</h4>
              <div className="legal-section-content">
                {sec.content.split('\n\n').map((paragraph, pIdx) => {
                  if (paragraph.startsWith('|')) {
                    // Render simple table
                    const lines = paragraph.split('\n').filter(l => l.trim().length > 0);
                    const headerCols = lines[0].split('|').filter(c => c.trim().length > 0);
                    const rows = lines.slice(2).map(r => r.split('|').filter(c => c.trim().length > 0));
                    return (
                      <div key={pIdx} className="legal-table-responsive">
                        <table className="legal-table">
                          <thead>
                            <tr>
                              {headerCols.map((h, hIdx) => (
                                <th key={hIdx}>{h.trim()}</th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {rows.map((row, rIdx) => (
                              <tr key={rIdx}>
                                {row.map((cell, cIdx) => (
                                  <td key={cIdx}>{cell.replace(/\*\*/g, '').trim()}</td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    );
                  }

                  return (
                    <p key={pIdx} style={{ whiteSpace: 'pre-line', margin: '0.6rem 0' }}>
                      {paragraph.replace(/\*\*(.*?)\*\*/g, '$1')}
                    </p>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Footer del visor legal */}
        <div className="legal-modal-footer">
          <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
            ¿Dudas sobre el tratamiento de datos? Escríbenos a <strong style={{ color: 'var(--drbyte-cyan)' }}>hola.drbyte@gmail.com</strong>
          </span>
          <button 
            type="button" 
            className="btn-secondary-glass" 
            onClick={onClose}
          >
            <span>Cerrar</span>
          </button>
        </div>
      </div>
    </div>
  );
}
