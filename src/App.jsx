import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, 
  Network, 
  Server, 
  GraduationCap, 
  Code2, 
  Cpu, 
  CheckCircle2, 
  ArrowRight, 
  Send, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar,
  Sparkles,
  Award,
  Layers,
  FileSpreadsheet,
  Wrench,
  Activity
} from 'lucide-react';
import './App.css';

function App() {
  // Splash Screen Intro Animation
  const [showSplash, setShowSplash] = useState(true);
  const [splashHiding, setSplashHiding] = useState(false);

  useEffect(() => {
    // Tras 2.2s de carga animada de Dr. Byte, iniciar transición de salida suave
    const timerFade = setTimeout(() => {
      setSplashHiding(true);
    }, 2400);

    const timerRemove = setTimeout(() => {
      setShowSplash(false);
    }, 3200);

    return () => {
      clearTimeout(timerFade);
      clearTimeout(timerRemove);
    };
  }, []);

  // Calculadora interactiva de presupuestos orientativos
  const [serviceType, setServiceType] = useState('seguridad');
  const [scope, setScope] = useState('empresa');
  const [extras, setExtras] = useState({
    urgencia: false,
    soporteMensual: false,
    formacionEquipo: false
  });

  // Estado del formulario de contacto
  const [formSent, setFormSent] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    servicio: 'Consultoría en Ciberseguridad & Redes',
    mensaje: ''
  });

  const calculateEstimate = () => {
    let base = 0;
    if (serviceType === 'seguridad') base = 750;
    if (serviceType === 'redes') base = 650;
    if (serviceType === 'formacion') base = 500;
    if (serviceType === 'desarrollo') base = 900;
    if (serviceType === 'sistemas') base = 600;

    let multiplier = 1;
    if (scope === 'profesional') multiplier = 1;
    if (scope === 'pyme') multiplier = 1.6;
    if (scope === 'empresa') multiplier = 2.4;

    let total = base * multiplier;
    if (extras.urgencia) total += 250;
    if (extras.soporteMensual) total += 350;
    if (extras.formacionEquipo) total += 300;

    return Math.round(total);
  };

  const handleExtraChange = (key) => {
    setExtras(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSent(true);
  };

  return (
    <div className="portfolio-app">
      {/* 0. DR. BYTE INTRO SPLASH SCREEN ANIMADO */}
      {showSplash && (
        <div className={`drbyte-splash ${splashHiding ? 'splash-hiding' : ''}`}>
          <div className="drbyte-splash-box">
            <div className="drbyte-splash-glow"></div>
            <img 
              src="/assets/dr_byte_logo.jpg" 
              alt="DR. BYTE" 
              className="drbyte-splash-logo" 
            />
            <h2 className="drbyte-splash-tagline">DR. BYTE</h2>
            <p className="drbyte-splash-sub">Diagnóstico, Redes & Soluciones Informáticas Especializadas</p>
            <div className="drbyte-splash-loader">
              <div className="drbyte-splash-loader-bar"></div>
            </div>
          </div>
        </div>
      )}

      {/* 1. NAVBAR */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="brand">
            <img 
              src="/assets/dr_byte_logo.jpg" 
              alt="DR. BYTE" 
              className="drbyte-navbar-logo"
            />
            <div className="brand-text">
              <h2>DR. BYTE</h2>
              <span>Soluciones IT & Ciberseguridad</span>
            </div>
          </div>

          <ul className="nav-links">
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#servicios">Servicios</a></li>
            <li><a href="#metodologia">Metodología</a></li>
            <li><a href="#presupuesto">Calculadora</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>

          <a href="#contacto" className="btn-cta">
            <span>Contactar</span>
            <ArrowRight size={16} />
          </a>
        </div>
      </nav>

      {/* 2. HERO SECTION */}
      <section id="inicio" className="hero-section">
        <div className="hero-content">
          <div className="drbyte-hero-badge">
            <img src="/assets/dr_byte_logo.jpg" alt="Dr. Byte" className="drbyte-mini-logo" />
            <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--accent-cyan)' }}>
              DR. BYTE | Tu Especialista Tecnológico
            </span>
          </div>
          <h1>
            Diagnóstico Clínico de Sistemas, <span className="highlight-text">Ciberseguridad Zero Trust</span> y Redes
          </h1>
          <p className="hero-description">
            Bienvenido a <strong>DR. BYTE</strong>, el servicio profesional liderado por <strong>Manuel Aragonés</strong> para diagnosticar, sanear y blindar la infraestructura tecnológica de empresas y particulares, con soporte técnico avanzado y formación técnica de primer nivel.
          </p>

          <div className="hero-actions">
            <a href="#contacto" className="btn-cta">
              <span>Solicitar Diagnóstico Técnico</span>
              <Calendar size={18} />
            </a>
            <a href="#servicios" className="btn-secondary">
              <span>Explorar Servicios</span>
              <ArrowRight size={18} />
            </a>
          </div>

          <div className="hero-badges">
            <div className="badge-item">
              <ShieldCheck className="badge-icon" size={24} />
              <div className="badge-text">
                <strong>Zero Trust</strong>
                <span>Blindaje de redes perimetral</span>
              </div>
            </div>
            <div className="badge-item">
              <Activity className="badge-icon" size={24} />
              <div className="badge-text">
                <strong>Diagnóstico Express</strong>
                <span>Resolución ágil de incidencias</span>
              </div>
            </div>
            <div className="badge-item">
              <Award className="badge-icon" size={24} />
              <div className="badge-text">
                <strong>Docencia IT</strong>
                <span>Formación técnica oficial</span>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="profile-card">
            <div className="drbyte-hero-img-container">
              <img 
                src="/assets/dr_byte_logo.jpg" 
                alt="DR. BYTE" 
                className="drbyte-hero-img-main"
              />
            </div>
            <div className="profile-status">
              <span className="status-dot"></span>
              <span>DR. BYTE Consulta Abierta</span>
            </div>
            <h3>DR. BYTE</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.2rem' }}>
              Dirección Técnica: <strong>Manuel Aragonés</strong>
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '0.6rem', flexWrap: 'wrap' }}>
              <span style={{ background: 'rgba(255,255,255,0.05)', padding: '0.3rem 0.75rem', borderRadius: '6px', fontSize: '0.78rem', color: 'var(--accent-cyan)' }}>Soporte & Diagnóstico</span>
              <span style={{ background: 'rgba(255,255,255,0.05)', padding: '0.3rem 0.75rem', borderRadius: '6px', fontSize: '0.78rem', color: 'var(--accent-cyan)' }}>Cortafuegos Fortinet</span>
              <span style={{ background: 'rgba(255,255,255,0.05)', padding: '0.3rem 0.75rem', borderRadius: '6px', fontSize: '0.78rem', color: 'var(--accent-cyan)' }}>VLANs & Routing</span>
              <span style={{ background: 'rgba(255,255,255,0.05)', padding: '0.3rem 0.75rem', borderRadius: '6px', fontSize: '0.78rem', color: 'var(--accent-cyan)' }}>Mantenimiento 360°</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SERVICIOS */}
      <section id="servicios">
        <div className="section-header">
          <span className="section-tag">Áreas de Especialización</span>
          <h2 className="section-title">Servicios Profesionales de Alto Valor</h2>
          <p className="section-subtitle">
            Soluciones adaptadas a los estándares de seguridad corporativos más exigentes y transferencia de conocimiento técnico real.
          </p>
        </div>

        <div className="services-grid">
          {/* Servicio 1 */}
          <div className="service-card">
            <div className="service-icon-box">
              <ShieldCheck size={28} />
            </div>
            <h3>Ciberseguridad & Firewalls NGFW</h3>
            <p>
              Auditoría, diseño e implementación de políticas de cortafuegos de última generación bajo filosofía Zero Trust y Default Deny.
            </p>
            <ul className="service-features">
              <li><CheckCircle2 size={16} /> Segmentación de Zonas (DMZ, Corp, Clientes)</li>
              <li><CheckCircle2 size={16} /> Reglas Stateful Inspection y Filtrado Bogon</li>
              <li><CheckCircle2 size={16} /> Implementación de VPNs IPsec y SSL seguras</li>
              <li><CheckCircle2 size={16} /> Fortinet FortiGate, Palo Alto, Cisco ASA</li>
            </ul>
          </div>

          {/* Servicio 2 */}
          <div className="service-card">
            <div className="service-icon-box">
              <Network size={28} />
            </div>
            <h3>Diseño & Optimización de Redes LAN/WAN</h3>
            <p>
              Planificación topológica y configuración avanzada de conmutación y enrutamiento corporativo para máxima redundancia y fiabilidad.
            </p>
            <ul className="service-features">
              <li><CheckCircle2 size={16} /> Diseño de direccionamiento IPv4/IPv6 y VLSM</li>
              <li><CheckCircle2 size={16} /> Troncales 802.1Q, VLANs y Spanning-Tree</li>
              <li><CheckCircle2 size={16} /> Enrutamiento estático y dinámico (OSPF/BGP)</li>
              <li><CheckCircle2 size={16} /> Simulación y validación previa en laboratorio</li>
            </ul>
          </div>

          {/* Servicio 3 */}
          <div className="service-card">
            <div className="service-icon-box">
              <GraduationCap size={28} />
            </div>
            <h3>Formación Técnica & Docencia Especializada</h3>
            <p>
              Capacitación in-company y programas formativos prácticos con laboratorios reales orientados a certificados de profesionalidad y empleo técnico.
            </p>
            <ul className="service-features">
              <li><CheckCircle2 size={16} /> Montaje y Mantenimiento de Sistemas (UF1465/UD1)</li>
              <li><CheckCircle2 size={16} /> Identidad Digital y Certificados Telemáticos</li>
              <li><CheckCircle2 size={16} /> Talleres prácticos (Crimpadora, Rack, Simuladores)</li>
              <li><CheckCircle2 size={16} /> Metodología práctica 100% interactiva</li>
            </ul>
          </div>

          {/* Servicio 4 */}
          <div className="service-card">
            <div className="service-icon-box">
              <Server size={28} />
            </div>
            <h3>Administración de Sistemas & Servidores</h3>
            <p>
              Despliegue, securización y mantenimiento de servidores Windows Server y entornos Linux empresariales con alta disponibilidad.
            </p>
            <ul className="service-features">
              <li><CheckCircle2 size={16} /> Servicios DHCP, DNS, Active Directory y GPOs</li>
              <li><CheckCircle2 size={16} /> Políticas de copias de seguridad 3-2-1 y Disaster Recovery</li>
              <li><CheckCircle2 size={16} /> Monitorización proactiva de recursos y eventos</li>
              <li><CheckCircle2 size={16} /> Migración a la nube y entornos híbridos</li>
            </ul>
          </div>

          {/* Servicio 5 */}
          <div className="service-card">
            <div className="service-icon-box">
              <FileSpreadsheet size={28} />
            </div>
            <h3>Dashboards & Automatización Excel/VBA</h3>
            <p>
              Creación de cuadros de mando corporativos interactivos, modelos financieros y macros automatizadas para optimizar la toma de decisiones.
            </p>
            <ul className="service-features">
              <li><CheckCircle2 size={16} /> Dashboards visuales ejecutivos en tiempo real</li>
              <li><CheckCircle2 size={16} /> Automatización de facturación y gestión comercial</li>
              <li><CheckCircle2 size={16} /> Integración con bases de datos y exportación PDF/HTML</li>
              <li><CheckCircle2 size={16} /> Reducción drástica de tiempos operativos manuales</li>
            </ul>
          </div>

          {/* Servicio 6 */}
          <div className="service-card">
            <div className="service-icon-box">
              <Code2 size={28} />
            </div>
            <h3>Desarrollo de Software & Web Corporativa</h3>
            <p>
              Desarrollo de aplicaciones modernas y portales web seguros orientados a resultados, con React, Vite y arquitecturas cloud escalables.
            </p>
            <ul className="service-features">
              <li><CheckCircle2 size={16} /> Aplicaciones web SPA y dashboards a medida</li>
              <li><CheckCircle2 size={16} /> Integración de autenticación y APIs REST</li>
              <li><CheckCircle2 size={16} /> Despliegue continuo en GitHub y Vercel</li>
              <li><CheckCircle2 size={16} /> Diseño responsive enfocado en conversión</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 4. METODOLOGÍA */}
      <section id="metodologia">
        <div className="section-header">
          <span className="section-tag">Cómo Trabajo</span>
          <h2 className="section-title">Metodología Basada en Rigor Técnico</h2>
          <p className="section-subtitle">
            Cada proyecto sigue un protocolo exhaustivo para garantizar cero tiempos de caída, cumplimiento normativo y excelencia operativa.
          </p>
        </div>

        <div className="methodology-grid">
          <div className="method-step">
            <div className="step-num">01</div>
            <h4>Auditoría & Diagnóstico</h4>
            <p>Análisis exhaustivo de la infraestructura actual, vectores de riesgo, inventario de activos y necesidades del negocio.</p>
          </div>

          <div className="method-step">
            <div className="step-num">02</div>
            <h4>Diseño de Solución</h4>
            <p>Modelado arquitectónico bajo el principio de mínimo privilegio, planos de red y definición clara de objetivos y entregables.</p>
          </div>

          <div className="method-step">
            <div className="step-num">03</div>
            <h4>Implantación Segura</h4>
            <p>Despliegue ordenado con ventanas de mantenimiento controladas, pruebas en laboratorio y validación de seguridad.</p>
          </div>

          <div className="method-step">
            <div className="step-num">04</div>
            <h4>Transferencia & Soporte</h4>
            <p>Documentación técnica rigurosa, formación al personal del cliente y soporte continuo post-implantación.</p>
          </div>
        </div>
      </section>

      {/* 5. CALCULADORA INTERACTIVA DE PRESUPUESTO */}
      <section id="presupuesto">
        <div className="section-header">
          <span className="section-tag">Transparencia</span>
          <h2 className="section-title">Estimador de Inversión Orientativo</h2>
          <p className="section-subtitle">
            Configura tus requisitos para obtener una estimación inmediata adaptada al alcance de tu empresa.
          </p>
        </div>

        <div className="calc-container">
          <div className="calc-options">
            <h3>Selecciona los parámetros de tu proyecto</h3>
            
            <div className="calc-group">
              <label>Tipo de Servicio Principal:</label>
              <select 
                className="calc-select" 
                value={serviceType} 
                onChange={(e) => setServiceType(e.target.value)}
              >
                <option value="seguridad">Auditoría & Ciberseguridad NGFW</option>
                <option value="redes">Diseño e Implantación de Redes LAN/WAN</option>
                <option value="formacion">Formación Técnica & Talleres Docentes</option>
                <option value="sistemas">Servidores & Infraestructura de Sistemas</option>
                <option value="desarrollo">Desarrollo Web & Cuadros de Mando Excel</option>
              </select>
            </div>

            <div className="calc-group">
              <label>Dimensión / Alcance:</label>
              <select 
                className="calc-select" 
                value={scope} 
                onChange={(e) => setScope(e.target.value)}
              >
                <option value="profesional">Profesional Independiente / Despacho (1-5 puestos)</option>
                <option value="pyme">PYME / Empresa Mediana (6-30 puestos)</option>
                <option value="empresa">Corporación / Red Multi-sede (+30 puestos)</option>
              </select>
            </div>

            <div className="calc-group">
              <label>Servicios Adicionales:</label>
              <div className="calc-checkboxes">
                <label className="checkbox-item">
                  <input 
                    type="checkbox" 
                    checked={extras.urgencia} 
                    onChange={() => handleExtraChange('urgencia')} 
                  />
                  <span>Implantación urgente / Prioridad alta (+250 €)</span>
                </label>
                <label className="checkbox-item">
                  <input 
                    type="checkbox" 
                    checked={extras.soporteMensual} 
                    onChange={() => handleExtraChange('soporteMensual')} 
                  />
                  <span>Mantenimiento & Guardias 3 meses (+350 €)</span>
                </label>
                <label className="checkbox-item">
                  <input 
                    type="checkbox" 
                    checked={extras.formacionEquipo} 
                    onChange={() => handleExtraChange('formacionEquipo')} 
                  />
                  <span>Jornada de Formación y Manual Técnico (+300 €)</span>
                </label>
              </div>
            </div>
          </div>

          <div className="calc-result-box">
            <span>Inversión Estimada</span>
            <div className="calc-price">{calculateEstimate()} €</div>
            <p className="calc-note">
              * Presupuesto aproximado sin IVA. Se entrega propuesta formal detallada tras la toma de requerimientos.
            </p>
            <a href="#contacto" className="btn-cta" style={{ width: '100%', justifyContent: 'center' }}>
              <span>Solicitar Propuesta Formal</span>
              <Send size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* 6. CONTACTO */}
      <section id="contacto">
        <div className="section-header">
          <span className="section-tag">Hablemos</span>
          <h2 className="section-title">Inicia tu Proyecto Tecnológico</h2>
          <p className="section-subtitle">
            Ponte en contacto para coordinar una reunión de evaluación sin compromiso o consultar disponibilidad docente.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <h3>Contacto Directo</h3>
            <p>
              Atención personalizada para empresas, centros formativos e instituciones que buscan un perfil técnico con experiencia contrastada.
            </p>

            <div className="direct-channels">
              <div className="channel-card">
                <Mail className="channel-icon" size={24} />
                <div className="channel-detail">
                  <strong>Correo Electrónico</strong>
                  <span>catalogoaplicaciones@gmail.com</span>
                </div>
              </div>

              <div className="channel-card">
                <Phone className="channel-icon" size={24} />
                <div className="channel-detail">
                  <strong>Canal Telefónico & WhatsApp</strong>
                  <span>+34 600 000 000 (Atención Profesional)</span>
                </div>
              </div>

              <div className="channel-card">
                <MapPin className="channel-icon" size={24} />
                <div className="channel-detail">
                  <strong>Ubicación & Cobertura</strong>
                  <span>España / Modalidad Presencial y Remoto</span>
                </div>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            {formSent ? (
              <div style={{
                background: 'rgba(16, 185, 129, 0.1)',
                border: '1px solid #10b981',
                padding: '2rem',
                borderRadius: '12px',
                textAlign: 'center'
              }}>
                <CheckCircle2 size={48} color="#10b981" style={{ marginBottom: '1rem' }} />
                <h4 style={{ color: '#ffffff', marginBottom: '0.5rem' }}>¡Mensaje Enviado con Éxito!</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                  Gracias por contactar, Manuel revisará los datos de tu consulta y se pondrá en contacto contigo a la mayor brevedad.
                </p>
                <button 
                  type="button" 
                  className="btn-secondary" 
                  style={{ marginTop: '1.5rem' }}
                  onClick={() => setFormSent(false)}
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <>
                <div className="form-group">
                  <label>Nombre Completo / Razón Social:</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="Ej. Juan Pérez - Innova Systems"
                    className="form-input"
                    value={formData.nombre}
                    onChange={(e) => setFormData({...formData, nombre: e.target.value})}
                  />
                </div>

                <div className="form-group">
                  <label>Email de Contacto:</label>
                  <input 
                    type="email" 
                    required 
                    placeholder="tuemail@empresa.com"
                    className="form-input"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>

                <div className="form-group">
                  <label>Servicio de Interés:</label>
                  <select 
                    className="form-input"
                    value={formData.servicio}
                    onChange={(e) => setFormData({...formData, servicio: e.target.value})}
                  >
                    <option>Consultoría en Ciberseguridad & Redes</option>
                    <option>Auditoría de Firewalls NGFW</option>
                    <option>Formación Técnica In-Company</option>
                    <option>Soporte de Servidores y Sistemas</option>
                    <option>Dashboards y Automatización Comercial</option>
                    <option>Desarrollo Web y Apps a Medida</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Mensaje o Descripción del Proyecto:</label>
                  <textarea 
                    rows={4}
                    required 
                    placeholder="Cuéntame brevemente el objetivo de tu proyecto o las necesidades de tu infraestructura..."
                    className="form-textarea"
                    value={formData.mensaje}
                    onChange={(e) => setFormData({...formData, mensaje: e.target.value})}
                  ></textarea>
                </div>

                <button type="submit" className="btn-cta" style={{ width: '100%', justifyContent: 'center' }}>
                  <span>Enviar Mensaje Profesional</span>
                  <Send size={18} />
                </button>
              </>
            )}
          </form>
        </div>
      </section>

      {/* 7. FOOTER */}
      <footer className="footer">
        <div className="footer-content">
          <p>© {new Date().getFullYear()} Manuel Aragonés. Todos los derechos reservados.</p>
          <p>Consultoría Tecnológica, Arquitectura de Redes & Formación de Vanguardia.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;

