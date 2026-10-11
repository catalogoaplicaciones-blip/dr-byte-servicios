import React, { useState } from 'react';
import { 
  Home, 
  FileSpreadsheet, 
  Newspaper, 
  UserCheck, 
  ShieldCheck, 
  Cpu, 
  Sparkles, 
  ArrowRight, 
  Download, 
  Phone, 
  Mail, 
  Search, 
  CheckCircle2, 
  Check,
  X, 
  ExternalLink, 
  Calendar, 
  Layers, 
  Award, 
  Activity, 
  Terminal,
  Wrench,
  GraduationCap,
  HardDrive,
  Laptop,
  Network,
  Lock
} from 'lucide-react';
import CookieBanner from './CookieBanner';
import LegalModal from './LegalModal';
import LandingCursoGratis from './LandingCursoGratis';
import './App.css';

function App() {
  // Detección automática de la ruta /curso-gratis o #curso-gratis
  const isDirectLeadUrl = () => {
    if (typeof window === 'undefined') return false;
    const path = window.location.pathname.toLowerCase();
    const hash = window.location.hash.toLowerCase();
    const search = window.location.search.toLowerCase();
    return path.includes('curso-gratis') || hash.includes('curso-gratis') || search.includes('curso-gratis');
  };

  // 'inicio' | 'tienda' | 'noticias' | 'quien-es' | 'curso-gratis'
  const [activeTab, setActiveTab] = useState(() => isDirectLeadUrl() ? 'curso-gratis' : 'inicio');

  // Sincronizar navegación del navegador (atrás/adelante)
  React.useEffect(() => {
    const handlePopState = () => {
      setActiveTab(isDirectLeadUrl() ? 'curso-gratis' : 'inicio');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Modales
  const [showContactModal, setShowContactModal] = useState(false);
  const [contactSubject, setContactSubject] = useState('Consulta Técnica General');
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [formSent, setFormSent] = useState(false);
  const [activeLegalDoc, setActiveLegalDoc] = useState(null); // 'avisoLegal' | 'privacidad' | 'cookies' | 'terminos' | null

  // Filtros Tienda
  const [storeCategory, setStoreCategory] = useState('todas');
  const [searchQuery, setSearchQuery] = useState('');

  // Formulario Contacto
  const [contactForm, setContactForm] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: ''
  });

  // Datos del Catálogo de Plantillas Excel
  const templates = [
    {
      id: 'dash-ventas',
      title: 'Dashboard Ejecutivo de Ventas & Cartera de Clientes VBA Pro',
      category: 'ventas',
      categoryName: 'Gestión Comercial',
      desc: 'Plantilla automatizada con macros VBA para registro de ventas, cartera de clientes, segmentación interactiva, cálculo dinámico SUMIF y botones toggle de filtro instantáneo.',
      price: 29.90,
      oldPrice: 49.00,
      discount: '-39%',
      badge: 'VBA Automatizado',
      preview: '/assets/preview_dashboard_ventas.jpg',
      fileDownload: '/templates/Gestion_Clientes_Ventas_Totales.xlsm',
      specs: [
        'Formularios VBA de clientes y ventas con validación en vivo',
        'Filtros toggle interactivos: Categorías y Canales de Pago',
        'Botón «MOSTRAR TODOS» y restablecimiento sin fallos',
        'KPIs inmediatos: Facturación, Base Imponible, IVA y Ticket Medio',
        'Logotipo blindado de DR. BYTE con soporte directo (+34 607 35 39 10)'
      ]
    },
    {
      id: 'dash-limpieza',
      title: 'Cuadrante de Turnos, Horas de Limpieza & Control de Operarios Pro',
      category: 'servicios',
      categoryName: 'Servicios & Cuadrantes',
      desc: 'Plantilla completa con macros VBA y logotipo de DR. BYTE para planificar turnos mensuales (M/T/N), cómputo de horas efectivas y auditoría de personal por centros de trabajo.',
      price: 27.50,
      oldPrice: 45.00,
      discount: '-39%',
      badge: 'VBA Turnos Pro',
      preview: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80',
      fileDownload: '/templates/Cuadrante_Horas_Limpieza_DrByte.xlsm',
      specs: [
        'Calendario mensual interactivo (días 1 al 31) con código cromático',
        'Formulario de registro automático de turnos, guardias y bajas',
        'Dashboard ejecutivo con horas efectivas en vivo y filtros',
        'Base de datos estructurada de operarios y centros asignados'
      ]
    },
    {
      id: 'dash-redes',
      title: 'Planificador de Direccionamiento IP, Subredes VLSM & Mapeo VLAN',
      category: 'it',
      categoryName: 'Ingeniería IT & Redes',
      desc: 'Herramienta corporativa para cálculo y asignación de subredes con máscaras variables (/24 a /30), mapeo de VLANs y documentación de conmutadores y enrutadores bajo estándares Cisco.',
      price: 19.50,
      oldPrice: 35.00,
      discount: '-44%',
      badge: 'Fórmulas Corporativas',
      preview: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80',
      fileDownload: '#',
      specs: [
        'Cálculo automático de máscaras de red y rangos útiles sin solapamientos',
        'Mapeo de interfaces de entrada/salida y tablas de enrutamiento',
        'Inventario de puertos de switches Cisco y gabinetes rack',
        'Diseño homologado para auditorías de telecomunicaciones'
      ]
    },
    {
      id: 'dash-finanzas',
      title: 'Control de Tesorería, Facturación Trimestral & Previsión Fiscal',
      category: 'finanzas',
      categoryName: 'Finanzas & Fiscal',
      desc: 'Control exhaustivo de cobros y pagos, gastos deducibles, previsión del modelo 303 de IVA e IRPF trimestral para autónomos y pequeñas empresas.',
      price: 24.90,
      oldPrice: 39.00,
      discount: '-36%',
      badge: 'Tesorería Blindada',
      preview: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80',
      fileDownload: '#',
      specs: [
        'Cálculo automático de liquidaciones trimestrales de IVA e IRPF',
        'Gráficos de flujo de caja (Cashflow) e indicadores de liquidez',
        'Alertas de vencimiento de facturas pendientes de cobro/pago',
        'Plantilla lista para conciliación bancaria y exportación'
      ]
    }
  ];

  // Artículos de Noticias & Actualidad Técnica
  const articles = [
    {
      id: 'art-zero-trust',
      title: 'Arquitecturas de Firewall Corporativo: Principio Zero Trust y Default Deny en Palo Alto y Fortinet',
      category: 'Ciberseguridad',
      date: '12 Marzo 2026',
      readTime: '6 min lectura',
      summary: 'Por qué los perímetros modernos deben abandonar las redes de confianza implícitas y aplicar inspección con estado (Stateful Inspection), filtrado Bogon y estricto control de zonas de seguridad.',
      fullText: 'En las redes empresariales de alta exigencia ya no existe el concepto de "red interna de confianza". Los estándares de Palo Alto Networks y Fortinet exigen que cualquier tráfico entrante o saliente sea verificado según el principio de mínimo privilegio. La política base debe ser siempre Default Deny, complementada con filtrado de direcciones no enrutables (Bogon Filtering) y segmentación por zonas de seguridad aisladas (DMZ, Producción, Gestión IT). En DR. BYTE aplicamos este rigor técnico en todas nuestras auditorías e implementaciones perimetrales.'
    },
    {
      id: 'art-ia-pymes',
      title: 'Inteligencia Artificial Práctica: De los Modelos LLM a la Automatización Real de Procesos',
      category: 'Inteligencia Artificial',
      date: '08 Marzo 2026',
      readTime: '5 min lectura',
      summary: 'Estrategias para integrar modelos de lenguaje en flujos de trabajo diarios de empresas y despachos profesionales, ahorrando horas en conciliación, análisis de datos y extracción documental.',
      fullText: 'El valor de la inteligencia artificial para una empresa no reside en generar texto generalista, sino en la automatización determinista de tareas complejas: procesar facturas heterogéneas, clasificar incidencias de soporte en tiempo real o enriquecer bases de datos comerciales. Diseñar asistentes y agentes acoplados a bases de datos seguras permite multiplicar la productividad técnica sin comprometer la confidencialidad de la información corporativa.'
    },
    {
      id: 'art-vba-powerautomate',
      title: 'Excel VBA vs. Power Automate en Producción: Cuándo Elegir Soluciones Offline de Alta Velocidad',
      category: 'Automatización & Excel',
      date: '01 Marzo 2026',
      readTime: '4 min lectura',
      summary: 'Comparativa objetiva de rendimiento y costes entre macros VBA locales que operan en milisegundos y flujos cloud dependientes de licencias de Microsoft 365.',
      fullText: 'Aunque Power Automate y Power BI son excelentes para arquitecturas en la nube, las macros VBA bien optimizadas continúan siendo insuperables en inmediatez, coste cero de suscripción y autonomía offline. Un cuadro de mando desarrollado en VBA no depende de servidores externos, se ejecuta instantáneamente al abrir el archivo y ofrece control total sobre la interfaz de usuario y los formularios de entrada de datos.'
    },
    {
      id: 'art-vlsm-cisco',
      title: 'Diseño de Subredes VLSM y Conmutación VLAN: Estándares para Infraestructuras Escalables',
      category: 'Redes & Infraestructura',
      date: '22 Febrero 2026',
      readTime: '5 min lectura',
      summary: 'Metodología para optimizar el direccionamiento IPv4 en topologías con routers y conmutadores Cisco, garantizando enlaces punto a punto eficientes y aislamiento de tráfico.',
      fullText: 'El desperdicio de direcciones IP y las tormentas de broadcast son fallos comunes en redes mal estructuradas. El uso de VLSM (Variable Length Subnet Masking) permite dimensionar los rangos exactos para sedes remotas, telefonía VoIP y servidores, asignando enlaces /30 para transporte entre routers y /24 o /25 para usuarios. Documentar esta arquitectura con precisión es indispensable para auditorías técnicas e informes de ingeniería.'
    }
  ];

  const handleOpenContact = (subject = 'Consulta Técnica') => {
    setContactSubject(subject);
    setShowContactModal(true);
    setFormSent(false);
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setFormSent(true);
  };

  const filteredTemplates = templates.filter(t => {
    const matchesCat = storeCategory === 'todas' || t.category === storeCategory;
    const matchesQ = !searchQuery || 
      t.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      t.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.categoryName.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesQ;
  });

  // SI LA PESTAÑA O RUTA ES 'curso-gratis', RENDERIZAR LA LANDING DE CAPTACIÓN EN AISLAMIENTO TOTAL
  if (activeTab === 'curso-gratis') {
    return (
      <>
        <LandingCursoGratis 
          onOpenLegal={(docKey) => setActiveLegalDoc(docKey)}
          onGoToMainWeb={() => {
            window.history.pushState({}, '', '/');
            setActiveTab('inicio');
          }}
        />
        <CookieBanner onOpenLegal={(docKey) => setActiveLegalDoc(docKey)} />
        <LegalModal 
          activeLegalDoc={activeLegalDoc} 
          onClose={() => setActiveLegalDoc(null)} 
          onSelectDoc={(docKey) => setActiveLegalDoc(docKey)}
        />
      </>
    );
  }

  return (
    <div className="portfolio-app">
      {/* ========================================================================= */}
      {/* 1. HEADER FLOTANTE TECNOLÓGICO CON 4 PESTAÑAS */}
      {/* ========================================================================= */}
      <header className="drbyte-header">
        <div className="header-container">
          {/* Logo & Marca Oficial */}
          <div 
            className="brand-wrapper" 
            onClick={() => setActiveTab('inicio')}
            title="DR. BYTE - Inicio"
          >
            <div className="brand-logo-glow">
              <img src="/assets/dr_byte_logo.jpg" alt="DR. BYTE Logo" />
            </div>
            <div className="brand-titles">
              <h1>DR. BYTE<span className="dot-tech">.es</span></h1>
              <span className="brand-sub">Servicio Técnico • <span className="brand-sub-gold">Canarias</span></span>
            </div>
          </div>

          {/* Selector de Pestañas en 1 Sola Línea */}
          <nav className="nav-tabs-group" aria-label="Navegación principal">
            <button 
              className={`tab-btn ${activeTab === 'inicio' ? 'active' : ''}`}
              onClick={() => setActiveTab('inicio')}
            >
              <Home size={15} />
              <span>Inicio</span>
            </button>

            <button 
              className={`tab-btn ${activeTab === 'servicios' ? 'active' : ''}`}
              onClick={() => setActiveTab('servicios')}
            >
              <Wrench size={15} />
              <span>Servicios</span>
            </button>

            <button 
              className={`tab-btn ${activeTab === 'tienda' ? 'active' : ''}`}
              onClick={() => setActiveTab('tienda')}
            >
              <FileSpreadsheet size={15} />
              <span>Tienda</span>
              <span className="tab-counter-badge">{templates.length}</span>
            </button>

            <button 
              className={`tab-btn ${activeTab === 'academia' ? 'active' : ''}`}
              onClick={() => setActiveTab('academia')}
            >
              <GraduationCap size={15} />
              <span>Academia</span>
            </button>

            <button 
              className={`tab-btn ${activeTab === 'noticias' ? 'active' : ''}`}
              onClick={() => setActiveTab('noticias')}
            >
              <Newspaper size={15} />
              <span>Noticias</span>
            </button>

            <button 
              className={`tab-btn ${activeTab === 'quien-es' ? 'active' : ''}`}
              onClick={() => setActiveTab('quien-es')}
            >
              <UserCheck size={15} />
              <span>Dr. Byte</span>
            </button>
          </nav>

          {/* Acción Rápida de Contacto y Teléfono Directo */}
          <div className="header-actions">
            <button 
              className="btn-contact-quick"
              onClick={() => handleOpenContact('Solicitud de Asistencia Inmediata')}
              title="Llamar o solicitar asistencia técnica directa"
            >
              <Phone size={14} />
              <span className="btn-contact-text">+34 607 35 39 10</span>
            </button>
          </div>
        </div>
      </header>

      {/* ========================================================================= */}
      {/* 2. CONTENIDO PRINCIPAL SEGÚN PESTAÑA ACTIVA */}
      {/* ========================================================================= */}
      <main style={{ flex: 1 }}>

        {/* ----------------------------------------------------------------------- */}
        {/* PESTAÑA 1: INICIO (SERVICIO TÉCNICO, REDES & CIBERSEGURIDAD EN CANARIAS) */}
        {/* ----------------------------------------------------------------------- */}
        {activeTab === 'inicio' && (
          <div className="home-service-layout">
            
            {/* HERO PRINCIPAL: 2 COLUMNAS ESTILO LANDING PAGE (ALTA CONVERSIÓN) */}
            <section className="home-hero-section">
              <div className="lead-container">
                <div className="home-hero-grid">
                  
                  {/* COLUMNA IZQUIERDA: PROPUESTA DE VALOR Y SOLUCIONES TÉCNICAS */}
                  <div className="home-hero-info">
                    <div className="lead-tagline">
                      <Wrench size={16} />
                      <span>SERVICIO TÉCNICO INFORMÁTICO & CIBERSEGURIDAD EN CANARIAS</span>
                    </div>

                    <h1 className="lead-main-title">
                      Servicio Técnico <span className="highlight-cyan">Informático</span>, <br />
                      Redes & <span className="highlight-gold">Ciberseguridad Corporativa</span>
                    </h1>

                    <p className="lead-lead-paragraph">
                      Soporte profesional, diagnóstico exhaustivo y mantenimiento preventivo para empresas, profesionales y particulares. Trato directo con Manuel Aragonés, máxima confidencialidad y sin intermediarios.
                    </p>

                    {/* Caja de Compromisos y Capacidades Técnicas (Estilo Landing) */}
                    <div className="lead-benefits-box">
                      <h3 className="lead-benefits-title">¿Qué soluciones técnicas te ofrecemos?</h3>
                      <ul className="lead-benefits-list">
                        <li>
                          <CheckCircle2 size={20} className="check-icon-cyan" />
                          <div>
                            <strong>Reparación & Puesta a Punto de Equipos:</strong> Diagnóstico de hardware, ampliación con discos NVMe, limpieza de virus/malware y optimización de rendimiento en talleres o a domicilio.
                          </div>
                        </li>
                        <li>
                          <CheckCircle2 size={20} className="check-icon-cyan" />
                          <div>
                            <strong>Redes Corporativas & Seguridad Zero Trust:</strong> Despliegue de cableado estructurado, Wi-Fi 6 profesional y cortafuegos Fortinet / Palo Alto bajo filosofía <em>Default Deny</em>.
                          </div>
                        </li>
                        <li>
                          <CheckCircle2 size={20} className="check-icon-cyan" />
                          <div>
                            <strong>Recuperación de Datos & Backups Blindados:</strong> Rescate de archivos en soportes dañados e implementación de copias de seguridad automáticas 3-2-1 inmutables.
                          </div>
                        </li>
                        <li>
                          <CheckCircle2 size={20} className="check-icon-cyan" />
                          <div>
                            <strong>Desarrollo de Cuadros de Mando en Excel/VBA:</strong> Automatización de turnos, facturación y almacenes con respuesta instantánea y sin cuotas mensuales.
                          </div>
                        </li>
                      </ul>
                    </div>

                    <div className="home-hero-buttons">
                      <button 
                        className="btn-primary-glow"
                        onClick={() => handleOpenContact('Solicitud de Asistencia Técnica')}
                      >
                        <Wrench size={18} />
                        <span>SOLICITAR ASISTENCIA TÉCNICA</span>
                        <ArrowRight size={18} />
                      </button>

                      <a 
                        href="tel:+34607353910"
                        className="btn-secondary-glass"
                      >
                        <Phone size={18} />
                        <span>+34 607 35 39 10</span>
                      </a>
                    </div>
                  </div>

                  {/* COLUMNA DERECHA: TARJETA DE ASISTENCIA RÁPIDA (ESTILO LEAD FORM CARD) */}
                  <div className="home-hero-card-col">
                    <div className="lead-form-card" style={{ borderColor: 'var(--drbyte-cyan)' }}>
                      <div className="lead-form-header">
                        <div className="lead-icon-circle">
                          <ShieldCheck size={30} />
                        </div>
                        <h2 className="lead-card-title">¿Tienes una Avería o Proyecto IT?</h2>
                        <p className="lead-card-subtitle">
                          Solución rápida, honesta y con garantía técnica en Gran Canaria (presencial) y todas las Islas (remoto).
                        </p>
                      </div>

                      <div className="service-quick-contact-box">
                        <div className="service-contact-row">
                          <Phone size={20} className="contact-row-icon" />
                          <div>
                            <strong>Atención Telefónica Directa:</strong>
                            <a href="tel:+34607353910" className="contact-row-val">+34 607 35 39 10</a>
                          </div>
                        </div>

                        <div className="service-contact-row">
                          <Mail size={20} className="contact-row-icon" />
                          <div>
                            <strong>Correo Electrónico Oficial:</strong>
                            <a href="mailto:hola.drbyte@gmail.com" className="contact-row-val">hola.drbyte@gmail.com</a>
                          </div>
                        </div>

                        <div className="service-contact-row">
                          <Award size={20} className="contact-row-icon" />
                          <div>
                            <strong>Ubicación & Cobertura:</strong>
                            <span>Las Palmas de Gran Canaria • Asistencia en todo el archipiélago</span>
                          </div>
                        </div>
                      </div>

                      <button 
                        type="button" 
                        onClick={() => handleOpenContact('Petición de Diagnóstico / Presupuesto')}
                        className="lead-btn-submit"
                        style={{ marginTop: '1.5rem' }}
                      >
                        <Wrench size={18} />
                        <span>PEDIR DIAGNÓSTICO O PRESUPUESTO</span>
                        <ArrowRight size={18} />
                      </button>

                      <div className="lead-security-guarantee">
                        <Lock size={14} />
                        <span>Trato técnico directo. Cero intermediarios y confidencialidad bajo RGPD.</span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </section>

            {/* 2. BARRA DE MÉTRICAS & CONFIANZA */}
            <section className="home-metrics-section">
              <div className="lead-container">
                <div className="home-metrics-grid">
                  <div className="home-metric-card">
                    <span className="metric-number">100%</span>
                    <span className="metric-label">Trato Técnico Personal</span>
                    <span className="metric-detail">Hablas directamente con el especialista</span>
                  </div>
                  <div className="home-metric-card">
                    <span className="metric-number">Zero Trust</span>
                    <span className="metric-label">Ciberseguridad Corporativa</span>
                    <span className="metric-detail">Estándares Cisco, Fortinet y Palo Alto</span>
                  </div>
                  <div className="home-metric-card">
                    <span className="metric-number">+15 Años</span>
                    <span className="metric-label">Experiencia en Sistemas</span>
                    <span className="metric-detail">Ingeniería, redes y entornos productivos</span>
                  </div>
                  <div className="home-metric-card">
                    <span className="metric-number">Canarias</span>
                    <span className="metric-label">Cobertura Local y Remota</span>
                    <span className="metric-detail">Respuesta ágil ante averías e incidencias</span>
                  </div>
                </div>
              </div>
            </section>

            {/* 3. CATÁLOGO DE 4 SERVICIOS TÉCNICOS DETALLADOS (ESTILO LANDING CARDS) */}
            <section className="home-services-detailed-section">
              <div className="lead-container">
                <div className="section-header-centered">
                  <div className="lead-tagline">
                    <ShieldCheck size={16} />
                    <span>ÁREAS DE ESPECIALIZACIÓN TÉCNICA</span>
                  </div>
                  <h2 className="lead-main-title" style={{ fontSize: '2.2rem', textAlign: 'center' }}>
                    Soluciones IT para <span className="highlight-cyan">Empresas</span> y <span className="highlight-gold">Profesionales</span>
                  </h2>
                  <p className="section-subtitle" style={{ textAlign: 'center', margin: '0 auto 2.5rem' }}>
                    Desde el diagnóstico de un equipo averiado hasta la implantación de perímetros blindados en redes de empresa.
                  </p>
                </div>

                <div className="services-grid-cards">
                  <div className="service-detail-card">
                    <div className="lead-icon-circle">
                      <Laptop size={26} />
                    </div>
                    <h3>Mantenimiento & Reparación de Equipos</h3>
                    <p>
                      Diagnóstico de averías en placas base, sustitución de componentes, cambio de discos mecánicos a memorias NVMe de alta velocidad, limpieza interna, cambio de pasta térmica y optimización del sistema.
                    </p>
                    <ul className="service-bullet-list">
                      <li><Check size={16} className="check-cyan" /> Eliminación de virus, malware y troyanos</li>
                      <li><Check size={16} className="check-cyan" /> Reinstalación limpia de Windows y drivers oficiales</li>
                      <li><Check size={16} className="check-cyan" /> Recuperación de documentos y copias de seguridad</li>
                    </ul>
                  </div>

                  <div className="service-detail-card">
                    <div className="lead-icon-circle">
                      <Network size={26} />
                    </div>
                    <h3>Redes Corporativas & Conectividad</h3>
                    <p>
                      Despliegue y saneamiento de redes locales para empresas, despachos y almacenes. Conmutación gestionada, segmentación de tráfico y soluciones inalámbricas estables para decenas de dispositivos concurrentes.
                    </p>
                    <ul className="service-bullet-list">
                      <li><Check size={16} className="check-cyan" /> Planificación de subredes con VLSM y VLANs</li>
                      <li><Check size={16} className="check-cyan" /> Configuración de routers y switches Cisco</li>
                      <li><Check size={16} className="check-cyan" /> Wi-Fi 6 profesional de alta cobertura sin microcortes</li>
                    </ul>
                  </div>

                  <div className="service-detail-card">
                    <div className="lead-icon-circle">
                      <ShieldCheck size={26} />
                    </div>
                    <h3>Ciberseguridad Perimetral & VPNs</h3>
                    <p>
                      Protección perimetral de infraestructuras empresariales bajo la filosofía <em>Default Deny</em> (menor privilegio). Configuración experta de cortafuegos Fortinet y Palo Alto Networks con inspección de estado.
                    </p>
                    <ul className="service-bullet-list">
                      <li><Check size={16} className="check-cyan" /> VPNs seguras IPsec y SSL para teletrabajo cifrado</li>
                      <li><Check size={16} className="check-cyan" /> Filtrado de tráfico dañino y bloqueo de ataques</li>
                      <li><Check size={16} className="check-cyan" /> Políticas de zonas seguras y copias blindadas 3-2-1</li>
                    </ul>
                  </div>

                  <div className="service-detail-card">
                    <div className="lead-icon-circle">
                      <Cpu size={26} />
                    </div>
                    <h3>Automatización & Macros VBA a Medida</h3>
                    <p>
                      Desarrollo de software y cuadros de mando interactivos sobre Excel. Controla turnos de personal, inventarios, clientes y finanzas con formularios rápidos, sin cuotas mensuales y con plena autonomía offline.
                    </p>
                    <ul className="service-bullet-list">
                      <li><Check size={16} className="check-cyan" /> Dashboards interactivos con KPIs en tiempo real</li>
                      <li><Check size={16} className="check-cyan" /> Formularios protegidos con validación automática</li>
                      <li><Check size={16} className="check-cyan" /> Cero suscripciones: la herramienta es tuya para siempre</li>
                    </ul>
                  </div>
                </div>

                {/* Banner Destacado de Plantilla de Gestión */}
                <div className="spotlight-banner">
                  <div className="spotlight-text">
                    <h4>Solución Destacada de Gestión</h4>
                    <h3>Dashboard Ejecutivo de Ventas & Clientes VBA Pro</h3>
                    <p>
                      Una demostración práctica de ingeniería de software aplicada a la productividad: formularios rápidos, KPIs comerciales automáticos y segmentación de clientes sin depender de suscripciones recurrentes.
                    </p>
                    <div className="spotlight-badges">
                      <span className="badge-tag">✓ Macros VBA Optimizadas</span>
                      <span className="badge-tag">✓ Sin Cuotas Mensuales</span>
                      <span className="badge-tag">✓ Soporte Técnico Directo</span>
                    </div>
                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                      <button 
                        className="btn-primary-glow"
                        onClick={() => setSelectedTemplate(templates[0])}
                      >
                        <Download size={18} />
                        <span>Descargar / Adquirir</span>
                      </button>
                      <button 
                        className="btn-secondary-glass"
                        onClick={() => setActiveTab('tienda')}
                      >
                        <span>Ver Catálogo Completo</span>
                        <ArrowRight size={18} />
                      </button>
                    </div>
                  </div>
                  <div className="spotlight-preview">
                    <img 
                      src="/assets/preview_dashboard_ventas.jpg" 
                      alt="Preview Dashboard Ventas VBA DR. BYTE" 
                    />
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* ----------------------------------------------------------------------- */}
        {/* PESTAÑA: SERVICIOS IT DETALLADOS */}
        {/* ----------------------------------------------------------------------- */}
        {activeTab === 'servicios' && (
          <div className="section-wrapper">
            <div className="lead-container">
              <div className="section-header-centered">
                <div className="lead-tagline">
                  <Wrench size={16} />
                  <span>CATÁLOGO COMPLETO DE SERVICIOS</span>
                </div>
                <h2 className="lead-main-title" style={{ fontSize: '2.4rem', textAlign: 'center' }}>
                  Servicios Técnicos & <span className="highlight-cyan">Soporte Informático</span>
                </h2>
                <p className="section-subtitle" style={{ textAlign: 'center', margin: '0 auto 2.5rem' }}>
                  Soluciones directas, transparentes y respaldadas por más de 15 años de experiencia técnica en sistemas, redes y ciberseguridad.
                </p>
              </div>

              <div className="services-grid-cards">
                <div className="service-detail-card">
                  <div className="lead-icon-circle"><Laptop size={26} /></div>
                  <h3>Reparación y Mantenimiento de Hardware</h3>
                  <p>Mantenimiento preventivo y correctivo para ordenadores portátiles, torres de sobremesa y estaciones de trabajo. Diagnóstico de componentes dañados, sustitución de fuentes, limpieza interna y pasta térmica.</p>
                  <button className="btn-secondary-glass" style={{ width: '100%', marginTop: '1rem', justifyContent: 'center' }} onClick={() => handleOpenContact('Consulta: Reparación de Hardware')}>Solicitar Reparación</button>
                </div>

                <div className="service-detail-card">
                  <div className="lead-icon-circle"><Network size={26} /></div>
                  <h3>Instalación y Auditoría de Redes</h3>
                  <p>Cableado estructurado de categoría Cat6/Cat6A, armarios rack, conmutadores gestionados Cisco, routers empresariales y cobertura Wi-Fi profesional de alta densidad.</p>
                  <button className="btn-secondary-glass" style={{ width: '100%', marginTop: '1rem', justifyContent: 'center' }} onClick={() => handleOpenContact('Consulta: Auditoría de Red')}>Pedir Auditoría de Red</button>
                </div>

                <div className="service-detail-card">
                  <div className="lead-icon-circle"><ShieldCheck size={26} /></div>
                  <h3>Ciberseguridad y Firewalls Perimetrales</h3>
                  <p>Implantación de políticas Zero Trust (Default Deny) en cortafuegos Fortinet y Palo Alto. Protección contra intrusiones, filtrado de tráfico malicioso y VPNs corporativas para teletrabajo seguro.</p>
                  <button className="btn-secondary-glass" style={{ width: '100%', marginTop: '1rem', justifyContent: 'center' }} onClick={() => handleOpenContact('Consulta: Ciberseguridad')}>Proteger mi Empresa</button>
                </div>

                <div className="service-detail-card">
                  <div className="lead-icon-circle"><Cpu size={26} /></div>
                  <h3>Automatización y Software de Gestión</h3>
                  <p>Creación de herramientas a medida en Microsoft Excel mediante macros VBA deterministas y algoritmos sin dependencias de la nube ni cuotas mensuales recurrentes.</p>
                  <button className="btn-secondary-glass" style={{ width: '100%', marginTop: '1rem', justifyContent: 'center' }} onClick={() => handleOpenContact('Consulta: Automatización')}>Solicitar Desarrollo</button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ----------------------------------------------------------------------- */}
        {/* PESTAÑA: ACADEMIA & FORMACIÓN TÉCNICA (SEPARADA DE LA PORTADA) */}
        {/* ----------------------------------------------------------------------- */}
        {activeTab === 'academia' && (
          <div className="section-wrapper">
            <div className="lead-container">
              <div className="section-header-centered">
                <div className="lead-tagline">
                  <GraduationCap size={16} />
                  <span>ACADEMIA DR. BYTE • FORMACIÓN TÉCNICA</span>
                </div>
                <h2 className="lead-main-title" style={{ fontSize: '2.4rem', textAlign: 'center' }}>
                  Capacitación Práctica en <span className="highlight-cyan">Excel</span> & <span className="highlight-gold">Redes Corporativas</span>
                </h2>
                <p className="section-subtitle" style={{ textAlign: 'center', margin: '0 auto 2.5rem' }}>
                  Metodología directa basada en ejercicios y problemas reales del mercado laboral, sin teoría superflua ni simplificaciones.
                </p>
              </div>

              <div className="services-grid-cards">
                {/* CURSO GRATUITO LEAD MAGNET */}
                <div className="service-detail-card" style={{ borderColor: 'var(--drbyte-cyan)', boxShadow: '0 8px 30px rgba(14, 165, 233, 0.12)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                    <div className="lead-icon-circle"><FileSpreadsheet size={26} /></div>
                    <span className="lead-badge-free">100% GRATUITO</span>
                  </div>
                  <h3>Curso Completo de Excel Clásico</h3>
                  <p>
                    Aprende desde cero los fundamentos indispensables: referencias relativas y absolutas, fórmulas esenciales, formato condicional y gestión de datos.
                  </p>
                  <ul className="service-bullet-list">
                    <li><Check size={16} className="check-cyan" /> <strong>Manual Oficial en PDF (8 MB):</strong> Teoría y capturas paso a paso.</li>
                    <li><Check size={16} className="check-cyan" /> <strong>Hoja de Prácticas (.xlsx):</strong> Ejercicios guiados para tu ordenador.</li>
                    <li><Check size={16} className="check-cyan" /> Descarga libre e inmediata sin cuotas.</li>
                  </ul>
                  <button 
                    className="lead-btn-submit"
                    style={{ marginTop: '1.5rem', width: '100%', justifyContent: 'center' }}
                    onClick={() => {
                      window.history.pushState({}, '', '/curso-gratis');
                      setActiveTab('curso-gratis');
                    }}
                  >
                    <Download size={18} />
                    <span>ACCEDER AL CURSO GRATIS</span>
                    <ArrowRight size={18} />
                  </button>
                </div>

                {/* PRÓXIMOS NIVELES EXCEL 365 */}
                <div className="service-detail-card">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                    <div className="lead-icon-circle"><Cpu size={26} /></div>
                    <span style={{ background: '#f1f5f9', color: '#475569', fontSize: '0.75rem', fontWeight: '800', padding: '0.3rem 0.75rem', borderRadius: '9999px', border: '1px solid #cbd5e1' }}>PRÓXIMAMENTE</span>
                  </div>
                  <h3>Excel 365: Intermedio & Avanzado Pro</h3>
                  <p>
                    El salto al nivel corporativo: matrices dinámicas con funciones nativas de Microsoft 365 (FILTRAR, UNICOS, BUSCARX, ORDENAR) y cuadros de mando de alto impacto.
                  </p>
                  <ul className="service-bullet-list">
                    <li><Check size={16} className="check-cyan" /> Dashboards interactivos ejecutivos con segmentadores</li>
                    <li><Check size={16} className="check-cyan" /> Automatización y lógica determinista avanzada</li>
                    <li><Check size={16} className="check-cyan" /> Cuaderno de ejercicios reales y evaluación práctica</li>
                  </ul>
                  <button 
                    className="btn-secondary-glass"
                    style={{ marginTop: '1.5rem', width: '100%', justifyContent: 'center' }}
                    onClick={() => handleOpenContact('Interés en Cursos Excel 365 Intermedio/Avanzado')}
                  >
                    <span>Solicitar Información / Reserva</span>
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ----------------------------------------------------------------------- */}
        {/* PESTAÑA 2: TIENDA EXCEL */}
        {/* ----------------------------------------------------------------------- */}
        {activeTab === 'tienda' && (
          <section className="section-wrapper" style={{ paddingTop: '3.5rem' }}>
            <div className="section-header-centered">
              <h2 className="section-title">Tienda de Plantillas Excel Automatizadas</h2>
              <p className="section-subtitle">
                Plantillas profesionales con macros VBA y fórmulas avanzadas para gestión real sin suscripciones.
              </p>
            </div>

            {/* Barra de Filtros y Búsqueda */}
            <div className="store-controls-bar">
              <div className="store-category-filters">
                <button 
                  className={`filter-pill-btn ${storeCategory === 'todas' ? 'active' : ''}`}
                  onClick={() => setStoreCategory('todas')}
                >
                  Todas las Plantillas
                </button>
                <button 
                  className={`filter-pill-btn ${storeCategory === 'ventas' ? 'active' : ''}`}
                  onClick={() => setStoreCategory('ventas')}
                >
                  Ventas & CRM
                </button>
                <button 
                  className={`filter-pill-btn ${storeCategory === 'servicios' ? 'active' : ''}`}
                  onClick={() => setStoreCategory('servicios')}
                >
                  Servicios & Turnos
                </button>
                <button 
                  className={`filter-pill-btn ${storeCategory === 'it' ? 'active' : ''}`}
                  onClick={() => setStoreCategory('it')}
                >
                  Redes IT & VLSM
                </button>
                <button 
                  className={`filter-pill-btn ${storeCategory === 'finanzas' ? 'active' : ''}`}
                  onClick={() => setStoreCategory('finanzas')}
                >
                  Finanzas & Fiscal
                </button>
              </div>

              <div className="store-search-box">
                <Search size={18} color="var(--drbyte-cyan)" />
                <input 
                  type="text" 
                  placeholder="Buscar por título, función o área..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                {searchQuery && (
                  <button onClick={() => setSearchQuery('')} style={{ color: 'var(--text-muted)' }}>
                    <X size={16} />
                  </button>
                )}
              </div>
            </div>

            {/* Grid de Plantillas */}
            <div className="templates-grid">
              {filteredTemplates.map((t) => (
                <div key={t.id} className="template-card">
                  <div className="template-thumb">
                    <img src={t.preview} alt={t.title} />
                    <span className="badge-tech-overlay">{t.badge}</span>
                  </div>

                  <div className="template-body">
                    <h3 className="template-title">{t.title}</h3>
                    <p className="template-desc">{t.desc}</p>

                    <div className="specs-list-check">
                      {t.specs.slice(0, 3).map((spec, i) => (
                        <div key={i} className="spec-check-item">
                          <CheckCircle2 size={16} />
                          <span>{spec}</span>
                        </div>
                      ))}
                    </div>

                    <div className="template-pricing">
                      <span className="price-current">{t.price.toFixed(2)} €</span>
                      <span className="price-old">{t.oldPrice.toFixed(2)} €</span>
                      <span className="price-discount-tag">{t.discount}</span>
                    </div>

                    <div className="template-actions">
                      {t.fileDownload !== '#' ? (
                        <a 
                          href={t.fileDownload} 
                          download
                          className="btn-card-download"
                          title="Descargar archivo .xlsm"
                        >
                          <Download size={16} />
                          <span>Descargar XLSM</span>
                        </a>
                      ) : (
                        <button 
                          className="btn-card-download"
                          onClick={() => handleOpenContact(`Consulta sobre ${t.title}`)}
                        >
                          <Mail size={16} />
                          <span>Pedir Muestra</span>
                        </button>
                      )}

                      <button 
                        className="btn-card-buy"
                        onClick={() => setSelectedTemplate(t)}
                      >
                        <span>Ver Detalles</span>
                        <ArrowRight size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ----------------------------------------------------------------------- */}
        {/* PESTAÑA 3: NOTICIAS & ACTUALIDAD TÉCNICA */}
        {/* ----------------------------------------------------------------------- */}
        {activeTab === 'noticias' && (
          <section className="section-wrapper" style={{ paddingTop: '3.5rem' }}>
            <div className="section-header-centered">
              <span className="section-tag">Actualidad Tecnológica</span>
              <h2 className="section-title">Noticias, Guías & Arquitectura IT</h2>
              <p className="section-subtitle">
                Artículos técnicos elaborados bajo estándares corporativos reales: ciberseguridad perimetral, automatización con modelos de lenguaje y buenas prácticas en sistemas.
              </p>
            </div>

            <div className="news-grid">
              {articles.map((art) => (
                <article key={art.id} className="news-card">
                  <div className="news-meta">
                    <span className="news-cat-pill">{art.category}</span>
                    <span className="news-date">{art.date}</span>
                  </div>

                  <h3 className="news-title">{art.title}</h3>
                  <p className="news-summary">{art.summary}</p>

                  <div 
                    className="news-footer-link"
                    onClick={() => setSelectedArticle(art)}
                  >
                    <span>Leer análisis completo</span>
                    <ArrowRight size={16} />
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* ----------------------------------------------------------------------- */}
        {/* PESTAÑA 4: QUIÉN ES DR. BYTE */}
        {/* ----------------------------------------------------------------------- */}
        {activeTab === 'quien-es' && (
          <section className="section-wrapper" style={{ paddingTop: '3.5rem' }}>
            <div className="section-header-centered">
              <span className="section-tag">Dirección Técnica & Formación</span>
              <h2 className="section-title">Quién es DR. BYTE</h2>
              <p className="section-subtitle">
                Trayectoria profesional, filosofía de trabajo y compromiso con la excelencia técnica en ingeniería de redes y soluciones digitales.
              </p>
            </div>

            <div className="about-profile-wrapper">
              {/* Tarjeta de Perfil Sticky */}
              <div className="profile-card-sticky">
                <div className="profile-avatar-box">
                  <img src="/assets/docente.jpg" alt="Manuel Aragonés - DR. BYTE" />
                </div>

                <h3 className="profile-name">Manuel Aragonés</h3>
                <span className="profile-title">Ingeniero Técnico & Consultor IT Senior</span>

                <div className="profile-quick-contact">
                  <a href="tel:+34607353910" className="contact-row-item">
                    <Phone size={17} color="var(--drbyte-cyan)" />
                    <span>+34 607 35 39 10</span>
                  </a>
                  <a href="mailto:hola.drbyte@gmail.com" className="contact-row-item">
                    <Mail size={17} color="var(--drbyte-cyan)" />
                    <span>hola.drbyte@gmail.com</span>
                  </a>
                  <div className="contact-row-item">
                    <Terminal size={17} color="var(--drbyte-cyan)" />
                    <span>Canarias (Presencial) & Soporte Remoto</span>
                  </div>
                </div>

                <button 
                  className="btn-primary-glow"
                  style={{ width: '100%', marginTop: '1.25rem', justifyContent: 'center' }}
                  onClick={() => handleOpenContact('Contacto con Manuel Aragonés')}
                >
                  <Mail size={16} />
                  <span>Contactar con Manuel</span>
                </button>
              </div>

              {/* Bloques de Biografía y Manifiesto */}
              <div className="about-bio-content">
                <div className="bio-block">
                  <h3>
                    <Award size={22} color="var(--drbyte-cyan)" />
                    <span>Manifiesto Técnico & Filosofía de Trabajo</span>
                  </h3>
                  <p>
                    En el ámbito de las infraestructuras informáticas y la ciberseguridad, <strong>no admito atajos provisionales ni escenarios de juguete</strong>. 
                    Toda solución de red que implemento se rige por principios corporativos rigurosos: políticas <em>Default Deny</em> en cortafuegos perimetrales, 
                    diseño de direccionamiento estructurado y auditoría constante de privilegios.
                  </p>
                  <p>
                    Bajo la marca <strong>DR. BYTE</strong> aúno dos vertientes fundamentales: la <strong>consultoría de ingeniería técnica directa</strong> para empresas 
                    que requieren blindar sus sistemas, y el <strong>desarrollo de herramientas de alta precisión</strong> (como nuestras plantillas Excel automatizadas con VBA), 
                    pensadas para resolver cuellos de botella operativos sin dependencias de costes recurrentes.
                  </p>
                </div>

                <div className="bio-block">
                  <h3>
                    <Cpu size={22} color="var(--drbyte-cyan)" />
                    <span>Áreas de Competencia Profesional</span>
                  </h3>

                  <div className="creds-grid">
                    <div className="cred-card-item">
                      <h4>Ciberseguridad Perimetral</h4>
                      <p>Configuración e inspección de cortafuegos de nueva generación (Palo Alto, Fortinet, Cisco ASA), túneles IPsec y arquitecturas Zero Trust.</p>
                    </div>

                    <div className="cred-card-item">
                      <h4>Conmutación & Enrutamiento</h4>
                      <p>Diseño de topologías con VLANs, protocolos de conmutación L2/L3, segmentación VLSM y conmutadores Cisco Catalyst y Nexus.</p>
                    </div>

                    <div className="cred-card-item">
                      <h4>Automatización & Inteligencia Artificial</h4>
                      <p>Creación de cuadros de mando en Excel VBA con programación orientada a eventos e integración de agentes de IA para análisis documental.</p>
                    </div>

                    <div className="cred-card-item">
                      <h4>Formación & Capacitación Técnica</h4>
                      <p>Docencia técnica especializada para técnicos de soporte, administradores de sistemas y preparación de certificaciones oficiales.</p>
                    </div>
                  </div>
                </div>

                <div className="bio-block">
                  <h3>
                    <ShieldCheck size={22} color="var(--drbyte-cyan)" />
                    <span>Soporte Garantizado y Atención Personalizada</span>
                  </h3>
                  <p>
                    Cada cliente que adquiere una plantilla o contrata un servicio técnico cuenta con <strong>soporte directo de primera mano</strong>. 
                    Sin intermediarios, sin respuestas automáticas vacías. Puedes comunicarte directamente por teléfono o correo electrónico para cualquier consulta o adaptación personalizada de software.
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}

      </main>

      {/* ========================================================================= */}
      {/* 3. MODAL DE CONTACTO RÁPIDO */}
      {/* ========================================================================= */}
      {showContactModal && (
        <div className="modal-overlay" onClick={() => setShowContactModal(false)}>
          <div className="modal-content-box" onClick={(e) => e.stopPropagation()}>
            <button className="btn-modal-close" onClick={() => setShowContactModal(false)}>
              <X size={22} />
            </button>

            {!formSent ? (
              <div>
                <h3 style={{ fontSize: '1.6rem', color: '#ffffff', marginBottom: '0.5rem' }}>
                  Contacto Directo con DR. BYTE
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', marginBottom: '1.5rem' }}>
                  Atención directa con Manuel Aragonés. Responderemos a tu solicitud a la mayor brevedad.
                </p>

                <form onSubmit={handleContactSubmit}>
                  <div className="form-group-field">
                    <label>Asunto o Motivo de Contacto</label>
                    <input 
                      type="text" 
                      value={contactSubject}
                      onChange={(e) => setContactSubject(e.target.value)}
                      required
                    />
                  </div>

                  <div className="form-group-field">
                    <label>Tu Nombre o Empresa</label>
                    <input 
                      type="text" 
                      placeholder="Ej. Juan Pérez / Empresa S.L."
                      value={contactForm.nombre}
                      onChange={(e) => setContactForm({ ...contactForm, nombre: e.target.value })}
                      required
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div className="form-group-field">
                      <label>Correo Electrónico</label>
                      <input 
                        type="email" 
                        placeholder="tu@email.com"
                        value={contactForm.email}
                        onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                        required
                      />
                    </div>

                    <div className="form-group-field">
                      <label>Teléfono (opcional)</label>
                      <input 
                        type="tel" 
                        placeholder="+34 600 000 000"
                        value={contactForm.telefono}
                        onChange={(e) => setContactForm({ ...contactForm, telefono: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="form-group-field">
                    <label>Mensaje o Descripción de la Necesidad</label>
                    <textarea 
                      rows={4}
                      placeholder="Cuéntanos brevemente qué necesitas resolver..."
                      value={contactForm.mensaje}
                      onChange={(e) => setContactForm({ ...contactForm, mensaje: e.target.value })}
                      required
                    />
                  </div>

                  <button 
                    type="submit" 
                    className="btn-primary-glow"
                    style={{ width: '100%', justifyContent: 'center', marginTop: '0.5rem' }}
                  >
                    <span>Enviar Solicitud</span>
                    <ArrowRight size={18} />
                  </button>
                </form>
              </div>
            ) : (
              <div style={{ textAlign: 'center', padding: '1rem 0' }}>
                <CheckCircle2 size={54} color="var(--drbyte-emerald)" style={{ margin: '0 auto 1rem' }} />
                <h3 style={{ fontSize: '1.6rem', color: '#ffffff', marginBottom: '0.5rem' }}>
                  ¡Mensaje Enviado con Éxito!
                </h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                  Hemos recibido tu consulta sobre <strong>{contactSubject}</strong>. Manuel Aragonés se pondrá en contacto contigo enseguida.
                </p>
                <p style={{ color: 'var(--drbyte-cyan)', fontWeight: '600', marginBottom: '1.5rem' }}>
                  Si requieres asistencia urgente, puedes llamar directamente al <br />
                  <a href="tel:+34607353910" style={{ textDecoration: 'underline' }}>+34 607 35 39 10</a>
                </p>
                <button 
                  className="btn-secondary-glass"
                  style={{ margin: '0 auto' }}
                  onClick={() => setShowContactModal(false)}
                >
                  <span>Cerrar</span>
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 4. MODAL DETALLES / FICHA DE PLANTILLA */}
      {/* ========================================================================= */}
      {selectedTemplate && (
        <div className="modal-overlay" onClick={() => setSelectedTemplate(null)}>
          <div className="modal-content-box" style={{ maxWidth: '640px' }} onClick={(e) => e.stopPropagation()}>
            <button className="btn-modal-close" onClick={() => setSelectedTemplate(null)}>
              <X size={22} />
            </button>

            <span className="badge-tech-overlay" style={{ position: 'static', display: 'inline-block', marginBottom: '0.85rem' }}>
              {selectedTemplate.badge}
            </span>

            <h3 style={{ fontSize: '1.5rem', color: '#ffffff', marginBottom: '0.75rem', lineHeight: 1.25 }}>
              {selectedTemplate.title}
            </h3>

            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '1.25rem' }}>
              {selectedTemplate.desc}
            </p>

            <div style={{ background: '#090d16', padding: '1rem', borderRadius: '10px', marginBottom: '1.5rem', border: '1px solid var(--border-card)' }}>
              <h4 style={{ color: 'var(--drbyte-cyan)', fontSize: '0.88rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.65rem' }}>
                Especificaciones Técnicas Incluidas
              </h4>
              <div className="specs-list-check">
                {selectedTemplate.specs.map((s, idx) => (
                  <div key={idx} className="spec-check-item">
                    <CheckCircle2 size={16} />
                    <span>{s}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
              <div>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Precio único sin cuotas:</span>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.65rem' }}>
                  <span style={{ fontSize: '2rem', fontWeight: '800', color: '#ffffff', fontFamily: 'var(--font-heading)' }}>
                    {selectedTemplate.price.toFixed(2)} €
                  </span>
                  <span style={{ textDecoration: 'line-through', color: 'var(--text-muted)' }}>
                    {selectedTemplate.oldPrice.toFixed(2)} €
                  </span>
                </div>
              </div>

              {selectedTemplate.fileDownload !== '#' && (
                <a 
                  href={selectedTemplate.fileDownload} 
                  download
                  className="btn-primary-glow"
                >
                  <Download size={18} />
                  <span>Descargar Archivo</span>
                </a>
              )}
            </div>

            <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              <span>✓ Soporte técnico: +34 607 35 39 10</span>
              <button 
                onClick={() => {
                  setSelectedTemplate(null);
                  handleOpenContact(`Pregunta técnica sobre ${selectedTemplate.title}`);
                }}
                style={{ color: 'var(--drbyte-cyan)', fontWeight: '600' }}
              >
                Hacer consulta previa
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 5. MODAL LECTURA ARTÍCULO NOTICIAS */}
      {/* ========================================================================= */}
      {selectedArticle && (
        <div className="modal-overlay" onClick={() => setSelectedArticle(null)}>
          <div className="modal-content-box" style={{ maxWidth: '680px' }} onClick={(e) => e.stopPropagation()}>
            <button className="btn-modal-close" onClick={() => setSelectedArticle(null)}>
              <X size={22} />
            </button>

            <div className="news-meta" style={{ marginBottom: '0.75rem' }}>
              <span className="news-cat-pill">{selectedArticle.category}</span>
              <span className="news-date">{selectedArticle.date} • {selectedArticle.readTime}</span>
            </div>

            <h3 style={{ fontSize: '1.5rem', color: '#ffffff', marginBottom: '1.25rem', lineHeight: 1.3 }}>
              {selectedArticle.title}
            </h3>

            <div style={{ color: 'var(--text-secondary)', fontSize: '1.02rem', lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <p style={{ fontWeight: '500', color: '#ffffff' }}>
                {selectedArticle.summary}
              </p>
              <p>
                {selectedArticle.fullText}
              </p>
            </div>

            <div style={{ marginTop: '2rem', borderTop: '1px solid var(--border-subtle)', paddingTop: '1.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                Autor: Manuel Aragonés | DR. BYTE
              </span>
              <button 
                className="btn-secondary-glass"
                onClick={() => setSelectedArticle(null)}
              >
                <span>Volver a Noticias</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 6. FOOTER CORPORATIVO TECH CON ENLACES LEGALES */}
      {/* ========================================================================= */}
      <footer className="tech-footer">
        <div className="footer-container">
          <div className="footer-brand">
            <img src="/assets/dr_byte_logo.jpg" alt="DR. BYTE Logo" />
            <div>
              <span style={{ color: '#ffffff', fontWeight: '800', fontSize: '1.1rem' }}>DR. BYTE</span>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                Soluciones Informáticas, Ciberseguridad & Formación Técnica
              </p>
            </div>
          </div>

          <div className="footer-links">
            <button onClick={() => setActiveTab('inicio')}>Inicio</button>
            <button onClick={() => setActiveTab('tienda')}>Tienda Excel</button>
            <button onClick={() => setActiveTab('noticias')}>Noticias</button>
            <button onClick={() => setActiveTab('quien-es')}>Quién es Dr. Byte</button>
            <button onClick={() => handleOpenContact('Contacto')}>Contacto</button>
          </div>

          <div className="footer-legal-links">
            <button onClick={() => setActiveLegalDoc('avisoLegal')}>Aviso Legal</button>
            <span className="footer-legal-dot">•</span>
            <button onClick={() => setActiveLegalDoc('privacidad')}>Privacidad</button>
            <span className="footer-legal-dot">•</span>
            <button onClick={() => setActiveLegalDoc('cookies')}>Cookies</button>
            <span className="footer-legal-dot">•</span>
            <button onClick={() => setActiveLegalDoc('terminos')}>Términos</button>
            <span className="footer-legal-dot">•</span>
            <button 
              onClick={() => {
                localStorage.removeItem('drbyte_cookie_consent');
                window.location.reload();
              }}
              style={{ color: 'var(--drbyte-cyan)' }}
              title="Abrir panel de preferencias de cookies"
            >
              Configurar Cookies
            </button>
          </div>

          <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textAlign: 'right', width: '100%', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '1.25rem', marginTop: '0.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
            <span>© {new Date().getFullYear()} DR. BYTE (Manuel Aragonés). Todos los derechos reservados.</span>
            <span style={{ color: 'var(--drbyte-cyan)' }}>Soporte Directo: +34 607 35 39 10 | hola.drbyte@gmail.com</span>
          </div>
        </div>
      </footer>

      {/* ========================================================================= */}
      {/* 7. BANNER DE COOKIES (RGPD / AEPD) */}
      {/* ========================================================================= */}
      <CookieBanner onOpenLegal={(docKey) => setActiveLegalDoc(docKey)} />

      {/* ========================================================================= */}
      {/* 8. MODAL DE DOCUMENTACIÓN LEGAL */}
      {/* ========================================================================= */}
      <LegalModal 
        activeLegalDoc={activeLegalDoc} 
        onClose={() => setActiveLegalDoc(null)} 
        onSelectDoc={(docKey) => setActiveLegalDoc(docKey)}
      />
    </div>
  );
}

export default App;
