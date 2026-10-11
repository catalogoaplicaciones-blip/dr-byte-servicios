// LandingCursoGratis.jsx - Landing Page de Captación directa para Reels de Facebook / Instagram
import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Download, 
  Sparkles, 
  FileSpreadsheet, 
  ShieldCheck, 
  ArrowRight, 
  PlayCircle, 
  BookOpen, 
  Check, 
  Mail, 
  User, 
  Lock, 
  Clock,
  Award,
  MessageCircle,
  ExternalLink
} from 'lucide-react';
import './LandingCursoGratis.css';

export default function LandingCursoGratis({ onOpenLegal, onGoToMainWeb }) {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [consent, setConsent] = useState(true);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    // Simular registro seguro inmediato y almacenamiento local
    setTimeout(() => {
      // Guardar lead localmente
      const leads = JSON.parse(localStorage.getItem('drbyte_leads') || '[]');
      leads.push({ nombre, email, fecha: new Date().toISOString() });
      localStorage.setItem('drbyte_leads', JSON.stringify(leads));

      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const whatsappMessage = encodeURIComponent(
    `Hola Manuel, acabo de registrarme para el Curso Gratuito de Excel 365 (${email}). ¿Me pasas el material por WhatsApp?`
  );

  return (
    <div className="lead-landing-page">
      {/* 1. BARRA SUPERIOR MINIMALISTA (SIN MENÚ DISTRACTOR) */}
      <header className="lead-top-bar">
        <div className="lead-top-container">
          <div className="lead-brand-pill">
            <img src="/assets/dr_byte_logo.jpg" alt="DR. BYTE Logo" className="lead-logo-mini" />
            <div className="lead-brand-text">
              <span className="lead-brand-name">DR. BYTE</span>
              <span className="lead-brand-sub">Tu academia online desde Canarias</span>
            </div>
          </div>
          <div className="lead-top-right">
            <span className="lead-badge-free">100% GRATUITO</span>
          </div>
        </div>
      </header>

      {/* 2. HERO PRINCIPAL CENTRADO EN LA OFERTA */}
      <main className="lead-main-content">
        <div className="lead-container">
          
          <div className="lead-grid">
            
            {/* COLUMNA IZQUIERDA: PROPUESTA DE VALOR */}
            <div className="lead-info-col">
              <div className="lead-tagline">
                <Sparkles size={16} />
                <span>ACCESO EXCLUSIVO DESDE FACEBOOK REELS</span>
              </div>

              <h1 className="lead-main-title">
                Domina <span className="highlight-cyan">Excel 365</span> sin rodeos: <br />
                <span className="highlight-gold">Guía Maestra & Prácticas Reales</span>
              </h1>

              <p className="lead-lead-paragraph">
                Aprende las fórmulas modernas que sustituyen al 90% de los métodos antiguos. Despídete de <code className="lead-code-old">BUSCARV</code> y descubre cómo automatizar reportes con una sola función.
              </p>

              {/* Banner visual Dr. Byte */}
              <div className="lead-banner-card">
                <img 
                  src="/assets/drbyte_banner.png" 
                  alt="Dr. Byte con Manuel Aragonés" 
                  className="lead-banner-img"
                />
              </div>

              {/* Qué incluye el material gratuito */}
              <div className="lead-benefits-box">
                <h3 className="lead-benefits-title">¿Qué recibirás inmediatamente en tu correo?</h3>
                <ul className="lead-benefits-list">
                  <li>
                    <CheckCircle2 size={20} className="check-icon-cyan" />
                    <div>
                      <strong>Manual Técnico Oficial en PDF:</strong> Sintaxis, comparativa español/inglés y trucos de atajos para teclado.
                    </div>
                  </li>
                  <li>
                    <CheckCircle2 size={20} className="check-icon-cyan" />
                    <div>
                      <strong>Plantilla de Prácticas `.xlsx`:</strong> Archivo descargable con los ejercicios paso a paso y soluciones explicadas.
                    </div>
                  </li>
                  <li>
                    <CheckCircle2 size={20} className="check-icon-cyan" />
                    <div>
                      <strong>Vídeo Masterclass en Alta Definición:</strong> Explicación pausada, con puntero claro y sin ruidos de clicks.
                    </div>
                  </li>
                  <li>
                    <CheckCircle2 size={20} className="check-icon-cyan" />
                    <div>
                      <strong>Resolución de Dudas Directa:</strong> Canal directo con el profesor Manuel Aragonés vía WhatsApp.
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* COLUMNA DERECHA: FORMULARIO DE CAPTACIÓN / DESCARGA */}
            <div className="lead-form-col">
              <div className="lead-form-card">
                
                {!submitted ? (
                  <>
                    <div className="lead-form-header">
                      <div className="lead-icon-circle">
                        <FileSpreadsheet size={28} />
                      </div>
                      <h2 className="lead-card-title">Recibe el Curso Gratuito</h2>
                      <p className="lead-card-subtitle">
                        Introduce tus datos y te enviaremos el manual y el cuaderno de ejercicios de inmediato.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="lead-form">
                      <div className="lead-input-group">
                        <label htmlFor="lead-name">Nombre (opcional)</label>
                        <div className="lead-input-wrapper">
                          <User size={18} className="input-icon" />
                          <input 
                            id="lead-name"
                            type="text" 
                            placeholder="Ej. Carlos Méndez"
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="lead-input-group">
                        <label htmlFor="lead-email">Correo Electrónico <span className="req">*</span></label>
                        <div className="lead-input-wrapper">
                          <Mail size={18} className="input-icon" />
                          <input 
                            id="lead-email"
                            type="email" 
                            required
                            placeholder="tu.correo@ejemplo.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="lead-consent-wrapper">
                        <label className="lead-checkbox-label">
                          <input 
                            type="checkbox" 
                            required
                            checked={consent}
                            onChange={(e) => setConsent(e.target.checked)}
                          />
                          <span>
                            Acepto la <button type="button" onClick={() => onOpenLegal('privacidad')} className="link-legal-inline">política de privacidad</button> y recibir la documentación técnica del curso.
                          </span>
                        </label>
                      </div>

                      <button 
                        type="submit" 
                        disabled={loading}
                        className="lead-btn-submit"
                      >
                        {loading ? (
                          <span>Preparando tu documentación...</span>
                        ) : (
                          <>
                            <Download size={20} />
                            <span>QUIERO EL CURSO Y EJERCICIOS GRATIS</span>
                            <ArrowRight size={18} />
                          </>
                        )}
                      </button>

                      <div className="lead-security-guarantee">
                        <Lock size={14} />
                        <span>Cero spam. Tus datos están 100% protegidos bajo RGPD.</span>
                      </div>
                    </form>
                  </>
                ) : (
                  /* PANTALLA DE ÉXITO TRAS PONER EL CORREO */
                  <div className="lead-success-box">
                    <div className="lead-success-icon-glow">
                      <Check size={36} />
                    </div>

                    <h2 className="lead-success-title">¡Registro Completado con Éxito!</h2>
                    <p className="lead-success-msg">
                      Hola <strong>{nombre || 'amigo'}</strong>, hemos registrado tu correo <strong>{email}</strong>. Ya tienes disponible tu material formativo.
                    </p>

                    <div className="lead-success-actions">
                      {/* Descarga Directa Inmediata */}
                      <a 
                        href="/templates/Guia_Didactica_Excel_365_DrByte.pdf" 
                        download="Guia_Didactica_Excel_365_DrByte.pdf"
                        className="lead-btn-download-direct"
                      >
                        <Download size={20} />
                        <span>DESCARGAR GUÍA EN PDF AHORA</span>
                      </a>

                      {/* Confirmar por WhatsApp con Manuel */}
                      <a 
                        href={`https://wa.me/34607353910?text=${whatsappMessage}`}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="lead-btn-whatsapp"
                      >
                        <MessageCircle size={20} />
                        <span>Pedir ejercicios también por WhatsApp</span>
                      </a>
                    </div>

                    <div className="lead-next-step-box">
                      <div className="lead-next-step-header">
                        <Award size={18} color="var(--drbyte-gold)" />
                        <h4>¿Quieres ir un paso más allá?</h4>
                      </div>
                      <p>
                        Pronto lanzaremos los niveles <strong>Intermedio y Avanzado</strong> de Excel 365 (con Dashboards reales y automatización).
                      </p>
                      <button 
                        type="button" 
                        onClick={onGoToMainWeb}
                        className="lead-btn-visit-web"
                      >
                        <span>Visitar la Web Oficial de DR. BYTE</span>
                        <ExternalLink size={15} />
                      </button>
                    </div>
                  </div>
                )}

              </div>
            </div>

          </div>

        </div>
      </main>

      {/* 3. FOOTER MINIMALISTA Y LEGAL */}
      <footer className="lead-footer">
        <div className="lead-footer-container">
          <p>© {new Date().getFullYear()} DR. BYTE • Manuel Aragonés informática</p>
          <div className="lead-footer-legal-links">
            <button type="button" onClick={() => onOpenLegal('avisoLegal')}>Aviso Legal</button>
            <span>•</span>
            <button type="button" onClick={() => onOpenLegal('privacidad')}>Privacidad</button>
            <span>•</span>
            <button type="button" onClick={() => onOpenLegal('cookies')}>Cookies</button>
            <span>•</span>
            <button type="button" onClick={onGoToMainWeb} style={{ color: 'var(--drbyte-cyan)', fontWeight: '600' }}>Web Principal</button>
          </div>
        </div>
      </footer>
    </div>
  );
}
