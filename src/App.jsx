import React, { useState } from 'react';
import { 
  Bot, 
  Wrench, 
  DownloadCloud, 
  FileSpreadsheet, 
  CheckCircle2, 
  ArrowRight, 
  Send, 
  Mail, 
  Phone, 
  Search, 
  ShoppingCart, 
  Download, 
  Zap, 
  Home, 
  Store,
  Calendar,
  Sparkles,
  Cpu,
  MonitorCheck,
  Code
} from 'lucide-react';
import './App.css';

function App() {
  // Pestaña Activa: 'landing' (Landing sin scroll) | 'tienda' (Tienda de plantillas Excel)
  const [activeTab, setActiveTab] = useState('landing');

  // Modal rápido de contacto
  const [showContactModal, setShowContactModal] = useState(false);
  const [contactSubject, setContactSubject] = useState('Consulta General');
  const [formSent, setFormSent] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: ''
  });

  // Buscador estilo Amazon
  const [searchQuery, setSearchQuery] = useState('');
  const [searchDepartment, setSearchDepartment] = useState('todas');

  // Tienda Online de Plantillas Excel
  const [storeCategory, setStoreCategory] = useState('todas');
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [checkoutStep, setCheckoutStep] = useState('form'); // 'form' | 'success'
  const [buyerEmail, setBuyerEmail] = useState('');

  const excelTemplates = [
    {
      id: 'dash-ventas',
      title: 'Dashboard Ejecutivo de Ventas & Cartera de Clientes VBA Pro',
      category: 'ventas',
      categoryName: 'Gestión Comercial',
      desc: 'Plantilla automatizada con macros VBA para registro de ventas, cartera de clientes, segmentación interactiva y filtros por botones dinámicos.',
      price: 29.90,
      oldPrice: 49.00,
      discount: '-39%',
      rating: 4.9,
      reviewsCount: 142,
      isChoice: true,
      badge: 'VBA Automático',
      preview: '/assets/preview_dashboard_ventas.jpg',
      fileDownload: '/templates/Gestion_Clientes_Ventas_Totales.xlsm',
      specs: [
        'Formularios VBA con validación de datos en tiempo real',
        'Filtros por canal de cobro y categorías de clientes',
        'KPIs automáticos: Facturación, Base imponible e IVA',
        'Exportación y sincronización en tiempo real con macros',
        'Logotipo blindado de DR. BYTE con soporte directo (+34 607 35 39 10 / hola.drbyte@gmail.com)'
      ]
    },
    {
      id: 'dash-redes',
      title: 'Planificador de Direccionamiento IP, Subredes VLSM & Mapeo VLAN',
      category: 'it',
      categoryName: 'Ingeniería IT',
      desc: 'Herramienta de cálculo y asignación de subredes corporativas, mapeo de VLANs y documentación de conmutadores y enrutadores bajo estándares Cisco.',
      price: 19.50,
      oldPrice: 35.00,
      discount: '-44%',
      rating: 4.8,
      reviewsCount: 89,
      isChoice: false,
      badge: 'Fórmulas Pro',
      preview: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80',
      fileDownload: '#',
      specs: [
        'Cálculo automático de máscaras /24 a /30 y rangos útiles',
        'Mapeo de interfaces de entrada/salida y tablas de rutas',
        'Plantilla para inventario de puertos y gabinetes de red',
        'Formato listo para auditorías técnicas e informes periciales'
      ]
    },
    {
      id: 'dash-finanzas',
      title: 'Control de Tesorería, Facturación Trimestral & Previsión Fiscal',
      category: 'finanzas',
      categoryName: 'Finanzas & Fiscal',
      desc: 'Control exhaustivo de cobros y pagos, gastos deducibles, previsión del modelo 303 de IVA e IRPF trimestral para autónomos y PYMES.',
      price: 24.90,
      oldPrice: 39.00,
      discount: '-36%',
      rating: 4.9,
      reviewsCount: 115,
      isChoice: false,
      badge: 'Multi-cuenta',
      preview: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80',
      fileDownload: '#',
      specs: [
        'Cálculo automático de liquidaciones trimestrales',
        'Gráficos de flujo de caja (Cashflow) e indicadores de liquidez',
        'Alertas de vencimiento de facturas pendientes',
        'Plantilla homologada de presupuestos y facturación'
      ]
    },
    {
      id: 'dash-limpieza',
      title: 'Cuadrante de Turnos, Horas de Limpieza & Control de Operarios Pro',
      category: 'servicios',
      categoryName: 'Servicios & Cuadrantes',
      desc: 'Plantilla completa con macros VBA y logotipo blindado de DR. BYTE para planificar turnos mensuales (M/T/N), fichaje de horas efectivas y auditoría por centros.',
      price: 27.50,
      oldPrice: 45.00,
      discount: '-39%',
      rating: 5.0,
      reviewsCount: 68,
      isChoice: true,
      badge: 'VBA Turnos Pro',
      preview: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80',
      fileDownload: '/templates/Cuadrante_Horas_Limpieza_DrByte.xlsm',
      specs: [
        'Calendario mensual interactivo (días 1 al 31) con código de colores',
        'Formulario de registro automático de turnos y descansos',
        'Dashboard ejecutivo con horas efectivas en vivo y filtros',
        'Base de datos de operarios, categorías y centros asignados'
      ]
    }
  ];

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setActiveTab('tienda');
    if (searchDepartment !== 'todas') {
      setStoreCategory(searchDepartment);
    }
  };

  const handleOpenContact = (subject) => {
    setContactSubject(subject);
    setShowContactModal(true);
    setFormSent(false);
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setFormSent(true);
  };

  const filteredTemplates = excelTemplates.filter(t => {
    const matchesCategory = storeCategory === 'todas' || t.category === storeCategory;
    const matchesQuery = !searchQuery || 
      t.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.categoryName.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  return (
    <div className="portfolio-app" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* 1. NAVBAR SUPERIOR ESTILO AMAZON CON SELECTOR DE PESTAÑAS */}
      <header className="navbar">
        <div className="nav-main-bar">
          <div 
            className="brand" 
            title="DR. BYTE - Inicio"
            onClick={() => setActiveTab('landing')}
          >
            <img 
              src="/assets/dr_byte_logo.jpg" 
              alt="DR. BYTE Logo" 
              className="drbyte-navbar-logo"
            />
            <div className="brand-text">
              <h2>DR. BYTE<span className="dot-es">.es</span></h2>
              <span className="sub-brand">SERVICIOS & PLANTILLAS</span>
            </div>
          </div>

          {/* Buscador Rápido Sólido */}
          <form className="nav-search-bar" onSubmit={handleSearchSubmit}>
            <select 
              className="search-category-select"
              value={searchDepartment}
              onChange={(e) => setSearchDepartment(e.target.value)}
              aria-label="Seleccionar departamento"
            >
              <option value="todas">Todos los servicios</option>
              <option value="ventas">Ventas & CRM</option>
              <option value="it">Ingeniería IT & Redes</option>
              <option value="finanzas">Finanzas & Fiscal</option>
            </select>
            <input 
              type="text" 
              className="search-input" 
              placeholder="Buscar proyectos IA, mantenimiento, software o plantillas..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className="search-btn" aria-label="Buscar">
              <Search size={17} />
            </button>
          </form>

          {/* Acciones Rápidas */}
          <div className="nav-actions-right">
            <div 
              className="nav-item-link"
              onClick={() => handleOpenContact('Solicitud de Asistencia')}
            >
              <span className="nav-item-small">Atención Rápida</span>
              <span className="nav-item-bold">Contacto Directo</span>
            </div>

            <div 
              className="nav-cart-btn" 
              title="Abrir Tienda de Plantillas"
              onClick={() => setActiveTab('tienda')}
            >
              <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                <ShoppingCart size={22} />
                <span className="cart-count-badge">{excelTemplates.length}</span>
              </div>
              <span style={{ fontSize: '0.85rem' }}>Tienda Excel</span>
            </div>
          </div>
        </div>

        {/* Sub-barra: PESTAÑA LANDING vs PESTAÑA TIENDA */}
        <div className="nav-sub-bar">
          <div className="sub-bar-container">
            <button 
              className={`tab-button-main ${activeTab === 'landing' ? 'active' : ''}`}
              onClick={() => setActiveTab('landing')}
            >
              <Home size={17} />
              <span>Servicios Técnicos (Landing)</span>
            </button>

            <button 
              className={`tab-button-main ${activeTab === 'tienda' ? 'active' : ''}`}
              onClick={() => setActiveTab('tienda')}
            >
              <Store size={17} />
              <span>Tienda de Plantillas Excel</span>
              <span className="tab-badge-counter">{excelTemplates.length}</span>
            </button>

            <div className="sub-bar-tagline">
              ⚡ Manuel Aragonés | Diagnóstico, Inteligencia Artificial & Sistemas
            </div>
          </div>
        </div>
      </header>

      {/* ========================================================================= */}
      {/* VISTA 1: LANDING PAGE QUE CABE EN PANTALLA SIN NECESIDAD DE SCROLL */}
      {/* ========================================================================= */}
      {activeTab === 'landing' && (
        <main style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
          <div className="landing-viewport">
            {/* Banner Compacto de Cabecera */}
            <div className="landing-compact-hero">
              <div className="compact-hero-left">
                <img 
                  src="/assets/dr_byte_logo.jpg" 
                  alt="DR. BYTE" 
                  className="compact-hero-avatar"
                />
                <div className="compact-hero-text">
                  <h1>DR. BYTE | Soluciones Informáticas Especializadas</h1>
                  <p>
                    Dirección Técnica: <strong>Manuel Aragonés</strong> — Servicios de ingeniería, soporte y transformación digital para empresas y profesionales.
                  </p>
                  <div className="compact-hero-badges">
                    <span className="hero-pill">✓ Respuesta Rápida</span>
                    <span className="hero-pill">✓ Estándares Corporativos</span>
                    <span className="hero-pill">✓ Asistencia Presencial & Remota</span>
                  </div>
                </div>
              </div>

              <div className="compact-hero-actions">
                <button 
                  className="btn-cta-compact"
                  onClick={() => handleOpenContact('Solicitud de Diagnóstico Inmediato')}
                >
                  <Calendar size={16} />
                  <span>Pedir Diagnóstico</span>
                </button>
                <button 
                  className="btn-cta-secondary"
                  onClick={() => setActiveTab('tienda')}
                >
                  <Store size={16} />
                  <span>Ver Tienda Excel</span>
                </button>
              </div>
            </div>

            {/* LAS 4 COLUMNAS PRINCIPALES SOLICITADAS:
                1. Proyectos de IA
                2. Mantenimiento Informático
                3. Instalación de Programas
                4. Ofimática Avanzada
            */}
            <div className="pillars-grid-4">
              {/* Columna 1: Proyectos de IA */}
              <div className="pillar-card featured">
                <div className="pillar-header">
                  <div className="pillar-icon-box orange">
                    <Bot size={24} />
                  </div>
                  <div className="pillar-title-wrap">
                    <span className="pillar-tag">Vanguardia Tecnológica</span>
                    <h3>Proyectos de IA</h3>
                  </div>
                </div>
                <p className="pillar-desc">
                  Integración de Inteligencia Artificial aplicada y automatizaciones para disparar la productividad de tu negocio.
                </p>
                <ul className="pillar-list">
                  <li>
                    <CheckCircle2 size={15} />
                    <span>Automatización de flujos con modelos LLM y agentes</span>
                  </li>
                  <li>
                    <CheckCircle2 size={15} />
                    <span>Asistentes inteligentes para atención y soporte</span>
                  </li>
                  <li>
                    <CheckCircle2 size={15} />
                    <span>Procesamiento inteligente de documentos y datos</span>
                  </li>
                  <li>
                    <CheckCircle2 size={15} />
                    <span>Capacitación en herramientas de IA generativa</span>
                  </li>
                </ul>
                <button 
                  className="pillar-btn highlight"
                  onClick={() => handleOpenContact('Proyectos de IA')}
                >
                  <span>Consultar Proyecto IA</span>
                  <ArrowRight size={14} />
                </button>
              </div>

              {/* Columna 2: Mantenimiento Informático */}
              <div className="pillar-card">
                <div className="pillar-header">
                  <div className="pillar-icon-box">
                    <Wrench size={24} />
                  </div>
                  <div className="pillar-title-wrap">
                    <span className="pillar-tag">Soporte Continuo</span>
                    <h3>Mantenimiento IT</h3>
                  </div>
                </div>
                <p className="pillar-desc">
                  Diagnóstico preventivo, saneamiento de equipos, servidores y seguridad para evitar caídas y pérdida de información.
                </p>
                <ul className="pillar-list">
                  <li>
                    <CheckCircle2 size={15} />
                    <span>Limpieza, optimización y puesta a punto de hardware</span>
                  </li>
                  <li>
                    <CheckCircle2 size={15} />
                    <span>Auditoría de ciberseguridad y cortafuegos Zero Trust</span>
                  </li>
                  <li>
                    <CheckCircle2 size={15} />
                    <span>Copias de seguridad 3-2-1 y recuperación de desastres</span>
                  </li>
                  <li>
                    <CheckCircle2 size={15} />
                    <span>Planes de soporte técnico preventivo mensual</span>
                  </li>
                </ul>
                <button 
                  className="pillar-btn"
                  onClick={() => handleOpenContact('Mantenimiento Informático')}
                >
                  <span>Solicitar Mantenimiento</span>
                  <ArrowRight size={14} />
                </button>
              </div>

              {/* Columna 3: Instalación de Programas */}
              <div className="pillar-card">
                <div className="pillar-header">
                  <div className="pillar-icon-box">
                    <DownloadCloud size={24} />
                  </div>
                  <div className="pillar-title-wrap">
                    <span className="pillar-tag">Software & Despliegue</span>
                    <h3>Instalación Software</h3>
                  </div>
                </div>
                <p className="pillar-desc">
                  Instalación, licenciamiento y configuración segura de software corporativo y sistemas operativos a medida.
                </p>
                <ul className="pillar-list">
                  <li>
                    <CheckCircle2 size={15} />
                    <span>Sistemas Windows Server, Windows 11 y Linux</span>
                  </li>
                  <li>
                    <CheckCircle2 size={15} />
                    <span>Certificados digitales e identidad electrónica FNMT</span>
                  </li>
                  <li>
                    <CheckCircle2 size={15} />
                    <span>Programas de gestión, ERPs, diseño y utilidades</span>
                  </li>
                  <li>
                    <CheckCircle2 size={15} />
                    <span>Eliminación de malware y configuración perimetral</span>
                  </li>
                </ul>
                <button 
                  className="pillar-btn"
                  onClick={() => handleOpenContact('Instalación de Programas')}
                >
                  <span>Instalar Programas</span>
                  <ArrowRight size={14} />
                </button>
              </div>

              {/* Columna 4: Ofimática Avanzada */}
              <div className="pillar-card">
                <div className="pillar-header">
                  <div className="pillar-icon-box">
                    <FileSpreadsheet size={24} />
                  </div>
                  <div className="pillar-title-wrap">
                    <span className="pillar-tag">Excel & Dashboards</span>
                    <h3>Ofimática Avanzada</h3>
                  </div>
                </div>
                <p className="pillar-desc">
                  Cuadros de mando ejecutivos en Excel, programación de macros VBA y automatización de reportes comerciales.
                </p>
                <ul className="pillar-list">
                  <li>
                    <CheckCircle2 size={15} />
                    <span>Dashboards de ventas, finanzas y control horario</span>
                  </li>
                  <li>
                    <CheckCircle2 size={15} />
                    <span>Programación de macros VBA para tareas repetitivas</span>
                  </li>
                  <li>
                    <CheckCircle2 size={15} />
                    <span>Plantillas comerciales con sincronización en vivo</span>
                  </li>
                  <li>
                    <CheckCircle2 size={15} />
                    <span>Formación práctica personalizada para equipos</span>
                  </li>
                </ul>
                <button 
                  className="pillar-btn highlight"
                  onClick={() => setActiveTab('tienda')}
                >
                  <span>Ver Tienda de Plantillas</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>

            {/* Barra Inferior de Acción y Canales Directos */}
            <div className="landing-bottom-strip">
              <div className="bottom-strip-contacts">
                <div className="strip-item">
                  <Mail size={18} />
                  <span>Email: <a href="mailto:hola.drbyte@gmail.com" style={{ textDecoration: 'underline', color: 'inherit' }}><strong>hola.drbyte@gmail.com</strong></a></span>
                </div>
                <div className="strip-item">
                  <Phone size={18} />
                  <span>WhatsApp / Teléfono: <a href="tel:+34607353910" style={{ textDecoration: 'underline', color: 'inherit' }}><strong>+34 607 35 39 10</strong></a></span>
                </div>
                <div className="strip-item">
                  <Zap size={18} />
                  <span>Cobertura: <strong>Gran Canaria presencial y remota resto</strong></span>
                </div>
              </div>

              <div className="bottom-strip-cta">
                <button 
                  className="btn-cta-compact"
                  onClick={() => handleOpenContact('Consulta General')}
                >
                  <Send size={15} />
                  <span>Contactar Ahora</span>
                </button>
              </div>
            </div>
          </div>
        </main>
      )}

      {/* ========================================================================= */}
      {/* VISTA 2: PESTAÑA TIENDA DE PLANTILLAS EXCEL */}
      {/* ========================================================================= */}
      {activeTab === 'tienda' && (
        <main style={{ flex: 1 }}>
          <div className="store-view-container">
            <div className="store-view-header">
              <span style={{ color: 'var(--amazon-orange)', fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase' }}>
                Tienda Oficial DR. BYTE
              </span>
              <h1>
                <FileSpreadsheet size={30} color="var(--drbyte-blue)" />
                Catálogo de Plantillas Excel & Dashboards Ejecutivos
              </h1>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem' }}>
                Herramientas profesionales listas para descargar con macros automáticas VBA y fórmulas avanzadas para multiplicar la productividad de tu empresa.
              </p>
            </div>

            {/* Barra de Filtros */}
            <div className="store-filter-bar">
              <button 
                className={`store-filter-btn ${storeCategory === 'todas' ? 'active' : ''}`}
                onClick={() => setStoreCategory('todas')}
              >
                Todas las Plantillas ({excelTemplates.length})
              </button>
              <button 
                className={`store-filter-btn ${storeCategory === 'ventas' ? 'active' : ''}`}
                onClick={() => setStoreCategory('ventas')}
              >
                Gestión Comercial & Ventas
              </button>
              <button 
                className={`store-filter-btn ${storeCategory === 'it' ? 'active' : ''}`}
                onClick={() => setStoreCategory('it')}
              >
                Ingeniería IT & Redes
              </button>
              <button 
                className={`store-filter-btn ${storeCategory === 'finanzas' ? 'active' : ''}`}
                onClick={() => setStoreCategory('finanzas')}
              >
                Finanzas & Fiscal
              </button>
              <button 
                className={`store-filter-btn ${storeCategory === 'servicios' ? 'active' : ''}`}
                onClick={() => setStoreCategory('servicios')}
              >
                Servicios & Cuadrantes
              </button>
            </div>

            {/* Grid de Productos */}
            <div className="templates-grid">
              {filteredTemplates.map(t => (
                <div key={t.id} className="template-card">
                  {t.isChoice && (
                    <div className="amazon-choice-badge">
                      <span>Dr. Byte's</span> <span className="accent">Choice</span>
                    </div>
                  )}

                  <div className="template-preview-wrapper">
                    <img src={t.preview} alt={t.title} className="template-preview-img" />
                    <span className="template-badge-vba">
                      {t.badge}
                    </span>
                  </div>

                  <h3 
                    className="template-title"
                    onClick={() => {
                      setSelectedTemplate(t);
                      setCheckoutStep('form');
                    }}
                  >
                    {t.title}
                  </h3>

                  <div className="product-stars-row">
                    <span className="stars-rating">★★★★★</span>
                    <span className="star-count">{t.reviewsCount} opiniones</span>
                  </div>

                  <p className="template-desc">{t.desc}</p>

                  <ul className="template-specs">
                    {t.specs.map((spec, i) => (
                      <li key={i}>
                        <CheckCircle2 size={14} />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="amazon-price-block">
                    {t.discount && (
                      <span className="amazon-deal-badge">Oferta {t.discount}</span>
                    )}
                    <div className="price-row-amazon">
                      <span className="price-main">
                        <span className="price-symbol">€</span>
                        {Math.floor(t.price)}
                        <span style={{ fontSize: '0.95rem', verticalAlign: 'super' }}>
                          ,{((t.price % 1) * 100).toFixed(0).padStart(2, '0')}
                        </span>
                      </span>
                      <span className="price-old">{t.oldPrice.toFixed(2)} €</span>
                    </div>
                    <div className="prime-delivery-row">
                      <span className="prime-check">✓ Entrega inmediata:</span>
                      <span>Descarga directa (.xlsm)</span>
                    </div>
                  </div>

                  <button 
                    className="btn-amazon-buy"
                    onClick={() => {
                      setSelectedTemplate(t);
                      setCheckoutStep('form');
                    }}
                  >
                    <Download size={16} />
                    <span>Comprar / Descargar ya</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </main>
      )}

      {/* FOOTER COMPACTO */}
      <footer className="footer-compact">
        <div className="footer-compact-container">
          <div>© {new Date().getFullYear()} DR. BYTE - Dirección Técnica: Manuel Aragonés. Todos los derechos reservados.</div>
          <div style={{ color: '#94a3b8' }}>Proyectos de IA · Mantenimiento Informático · Instalación de Software · Ofimática Avanzada</div>
        </div>
      </footer>

      {/* MODAL DE CONTACTO RÁPIDO PARA CADA SERVICIO */}
      {showContactModal && (
        <div className="modal-overlay" onClick={() => setShowContactModal(false)}>
          <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setShowContactModal(false)}>✕</button>

            <div style={{ marginBottom: '1.25rem' }}>
              <span style={{ fontSize: '0.75rem', color: 'var(--amazon-orange)', fontWeight: 800, textTransform: 'uppercase' }}>
                Contacto Profesional
              </span>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--drbyte-navy)', marginTop: '0.2rem' }}>
                {contactSubject}
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
                Atención directa: <strong>+34 607 35 39 10</strong> · <strong>hola.drbyte@gmail.com</strong>
              </p>
            </div>

            {formSent ? (
              <div style={{ textAlign: 'center', padding: '1.5rem 0' }}>
                <CheckCircle2 size={44} color="#10b981" style={{ marginBottom: '0.75rem' }} />
                <h4 style={{ color: 'var(--drbyte-navy)', fontSize: '1.15rem' }}>¡Consulta Recibida!</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', marginTop: '0.4rem' }}>
                  Nos pondremos en contacto contigo a la mayor brevedad posible.
                </p>
                <button 
                  className="btn-cta-compact" 
                  style={{ marginTop: '1.25rem' }}
                  onClick={() => setShowContactModal(false)}
                >
                  Cerrar
                </button>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit}>
                <div className="form-group">
                  <label>Nombre Completo o Empresa:</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="Ej. Juan Pérez"
                    className="form-input"
                    value={formData.nombre}
                    onChange={(e) => setFormData({...formData, nombre: e.target.value})}
                  />
                </div>

                <div className="form-group">
                  <label>Correo Electrónico:</label>
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
                  <label>Teléfono (opcional para WhatsApp):</label>
                  <input 
                    type="tel" 
                    placeholder="+34 607 35 39 10"
                    className="form-input"
                    value={formData.telefono}
                    onChange={(e) => setFormData({...formData, telefono: e.target.value})}
                  />
                </div>

                <div className="form-group">
                  <label>Detalle de tu requerimiento:</label>
                  <textarea 
                    rows={3} 
                    required 
                    placeholder={`Cuéntame brevemente qué necesitas respecto a ${contactSubject}...`}
                    className="form-textarea"
                    value={formData.mensaje}
                    onChange={(e) => setFormData({...formData, mensaje: e.target.value})}
                  ></textarea>
                </div>

                <button type="submit" className="btn-amazon-buy" style={{ marginTop: '0.5rem', padding: '0.8rem' }}>
                  <span>Enviar Consulta Directa</span>
                  <Send size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* MODAL DE COMPRA / DESCARGA INMEDIATA DE PLANTILLA */}
      {selectedTemplate && (
        <div className="modal-overlay" onClick={() => setSelectedTemplate(null)}>
          <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setSelectedTemplate(null)}>✕</button>

            {checkoutStep === 'form' ? (
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.2rem' }}>
                  <div style={{ background: '#e6f4ea', padding: '0.65rem', borderRadius: '6px', color: '#137333' }}>
                    <FileSpreadsheet size={30} />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.75rem', color: 'var(--drbyte-blue)', fontWeight: 700, textTransform: 'uppercase' }}>
                      Descarga Inmediata de Plantilla
                    </span>
                    <h3 style={{ fontSize: '1.15rem', color: 'var(--text-primary)', marginTop: '0.2rem' }}>
                      {selectedTemplate.title}
                    </h3>
                  </div>
                </div>

                <div style={{ background: '#f9fafb', padding: '1rem', borderRadius: '4px', marginBottom: '1.25rem', border: '1px solid #e5e7eb' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.9rem' }}>
                    <span style={{ color: 'var(--text-secondary)' }}>Precio Oficial:</span>
                    <span style={{ color: 'var(--price-red)', fontWeight: 800, fontSize: '1.1rem' }}>
                      {selectedTemplate.price.toFixed(2)} €
                    </span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem' }}>
                    <span style={{ color: 'var(--text-secondary)' }}>Formato:</span>
                    <span style={{ color: 'var(--success-green)', fontWeight: 700 }}>Excel con macros (.xlsm)</span>
                  </div>
                </div>

                <form onSubmit={(e) => {
                  e.preventDefault();
                  setCheckoutStep('success');
                }}>
                  <div className="form-group" style={{ marginBottom: '1.2rem' }}>
                    <label>Introduce tu correo electrónico para remitirte la licencia y descarga:</label>
                    <input 
                      type="email" 
                      required 
                      placeholder="ejemplo@empresa.com"
                      className="form-input"
                      value={buyerEmail}
                      onChange={(e) => setBuyerEmail(e.target.value)}
                    />
                  </div>

                  <button type="submit" className="btn-amazon-buy" style={{ padding: '0.85rem' }}>
                    <span>Habilitar Descarga Directa</span>
                    <ArrowRight size={16} />
                  </button>
                </form>
              </div>
            ) : (
              <div style={{ textAlign: 'center', padding: '1rem 0' }}>
                <div style={{ display: 'inline-flex', background: '#e6f4ea', padding: '1rem', borderRadius: '50%', color: 'var(--success-green)', marginBottom: '1rem' }}>
                  <CheckCircle2 size={44} />
                </div>
                <h3 style={{ fontSize: '1.35rem', marginBottom: '0.5rem', color: 'var(--drbyte-navy)' }}>
                  ¡Descarga Habilitada!
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1.8rem', lineHeight: '1.6' }}>
                  Hemos registrado la descarga para <strong>{buyerEmail || 'tu correo'}</strong>. Puedes descargar el archivo Excel oficial a continuación.
                </p>

                <a 
                  href={selectedTemplate.fileDownload} 
                  download 
                  className="btn-amazon-buy"
                  style={{ textDecoration: 'none', padding: '0.85rem' }}
                  onClick={() => {
                    setTimeout(() => setSelectedTemplate(null), 1500);
                  }}
                >
                  <Download size={18} />
                  <span>Descargar Archivo Excel (.xlsm)</span>
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
