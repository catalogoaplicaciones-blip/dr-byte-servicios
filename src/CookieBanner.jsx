// CookieBanner.jsx - Banner de consentimiento y panel de configuración de cookies (RGPD / AEPD)
import React, { useState, useEffect } from 'react';
import { Cookie, ShieldCheck, Check, Settings2, X } from 'lucide-react';

export default function CookieBanner({ onOpenLegal }) {
  const [showBanner, setShowBanner] = useState(false);
  const [showConfigModal, setShowConfigModal] = useState(false);
  const [analyticsAllowed, setAnalyticsAllowed] = useState(false);

  useEffect(() => {
    // Comprobar si ya existe consentimiento previo guardado
    const savedConsent = localStorage.getItem('drbyte_cookie_consent');
    if (!savedConsent) {
      // Mostrar con ligero retardo suave
      const timer = setTimeout(() => setShowBanner(true), 600);
      return () => clearTimeout(timer);
    } else {
      try {
        const parsed = JSON.parse(savedConsent);
        setAnalyticsAllowed(!!parsed.analytics);
      } catch {
        // En caso de formato legado
        setAnalyticsAllowed(savedConsent === 'all');
      }
    }
  }, []);

  const handleAcceptAll = () => {
    const consent = { necessary: true, analytics: true, date: new Date().toISOString() };
    localStorage.setItem('drbyte_cookie_consent', JSON.stringify(consent));
    setAnalyticsAllowed(true);
    setShowBanner(false);
    setShowConfigModal(false);
  };

  const handleRejectAll = () => {
    const consent = { necessary: true, analytics: false, date: new Date().toISOString() };
    localStorage.setItem('drbyte_cookie_consent', JSON.stringify(consent));
    setAnalyticsAllowed(false);
    setShowBanner(false);
    setShowConfigModal(false);
  };

  const handleSaveCustom = () => {
    const consent = { necessary: true, analytics: analyticsAllowed, date: new Date().toISOString() };
    localStorage.setItem('drbyte_cookie_consent', JSON.stringify(consent));
    setShowBanner(false);
    setShowConfigModal(false);
  };

  return (
    <>
      {/* 1. BANNER FLOTANTE INFERIOR */}
      {showBanner && (
        <div className="cookie-banner-wrapper" role="region" aria-label="Aviso de cookies">
          <div className="cookie-banner-card">
            <div className="cookie-banner-header">
              <div className="cookie-icon-glow">
                <Cookie size={24} className="cookie-icon" />
              </div>
              <div>
                <h4 className="cookie-title">Tu Privacidad en DR. BYTE</h4>
                <p className="cookie-text">
                  Utilizamos cookies técnicas necesarias para el correcto funcionamiento del portal y, si lo autorizas, cookies analíticas anónimas para mejorar nuestros servicios y plantillas conforme al RGPD y la normativa de la AEPD.
                </p>
              </div>
            </div>

            <div className="cookie-banner-actions">
              <div className="cookie-links-left">
                <button 
                  type="button" 
                  className="cookie-link-btn"
                  onClick={() => onOpenLegal('cookies')}
                >
                  Política de Cookies
                </button>
                <span className="cookie-separator">•</span>
                <button 
                  type="button" 
                  className="cookie-link-btn"
                  onClick={() => onOpenLegal('privacidad')}
                >
                  Privacidad
                </button>
              </div>

              <div className="cookie-btn-group">
                <button 
                  type="button" 
                  className="cookie-btn-config"
                  onClick={() => setShowConfigModal(true)}
                >
                  <Settings2 size={16} />
                  <span>Configurar</span>
                </button>
                <button 
                  type="button" 
                  className="cookie-btn-reject"
                  onClick={handleRejectAll}
                >
                  Rechazar
                </button>
                <button 
                  type="button" 
                  className="cookie-btn-accept"
                  onClick={handleAcceptAll}
                >
                  <Check size={16} />
                  <span>Aceptar Todas</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 2. MODAL DE CONFIGURACIÓN GRANULAR DE COOKIES */}
      {showConfigModal && (
        <div className="modal-overlay" onClick={() => setShowConfigModal(false)}>
          <div 
            className="modal-content-box cookie-config-modal" 
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="btn-modal-close" 
              onClick={() => setShowConfigModal(false)}
              aria-label="Cerrar configuración"
            >
              <X size={22} />
            </button>

            <div className="modal-header-section" style={{ borderBottom: '1px solid var(--border-card)', paddingBottom: '1rem', marginBottom: '1.25rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div className="cookie-icon-glow">
                  <ShieldCheck size={26} color="var(--drbyte-cyan)" />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.35rem', fontWeight: '800', color: '#0f172a', margin: 0 }}>
                    Panel de Preferencias de Cookies
                  </h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: '0.2rem 0 0' }}>
                    Control transparente de tus datos en DR. BYTE
                  </p>
                </div>
              </div>
            </div>

            <div className="cookie-categories-list">
              {/* Categoría 1: Necesarias */}
              <div className="cookie-cat-item">
                <div className="cookie-cat-header">
                  <div>
                    <h5 className="cookie-cat-title">Cookies Técnicas y Esenciales</h5>
                    <span className="cookie-cat-status-badge">Siempre Activas (Obligatorias)</span>
                  </div>
                  <input type="checkbox" checked disabled className="cookie-toggle-disabled" />
                </div>
                <p className="cookie-cat-desc">
                  Son imprescindibles para permitir la navegación segura, la visualización del contenido técnico y guardar la configuración básica de tu sesión. No pueden desactivarse.
                </p>
              </div>

              {/* Categoría 2: Analíticas */}
              <div className="cookie-cat-item">
                <div className="cookie-cat-header">
                  <div>
                    <h5 className="cookie-cat-title">Cookies Analíticas y de Rendimiento</h5>
                    <span className="cookie-cat-status-badge optional">Opcionales</span>
                  </div>
                  <label className="cookie-switch">
                    <input 
                      type="checkbox" 
                      checked={analyticsAllowed}
                      onChange={(e) => setAnalyticsAllowed(e.target.checked)}
                    />
                    <span className="slider round"></span>
                  </label>
                </div>
                <p className="cookie-cat-desc">
                  Nos ayudan a conocer qué plantillas de Excel y artículos técnicos resultan más útiles a la comunidad de forma 100% anonimizada (Vercel Analytics), sin rastrear tu actividad entre otras páginas web.
                </p>
              </div>
            </div>

            <div className="cookie-modal-footer">
              <button 
                type="button" 
                className="cookie-btn-reject"
                onClick={handleRejectAll}
              >
                Rechazar Opcionales
              </button>
              <button 
                type="button" 
                className="cookie-btn-accept"
                onClick={handleSaveCustom}
              >
                Guardar Selección
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
