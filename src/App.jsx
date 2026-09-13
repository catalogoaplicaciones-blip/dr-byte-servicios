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
  Activity,
  Search,
  ShoppingCart,
  Star,
  ChevronDown,
  Menu,
  Download,
  Zap
} from 'lucide-react';
import './App.css';

function App() {
  // Splash Screen Intro Animation
  const [showSplash, setShowSplash] = useState(true);
  const [splashHiding, setSplashHiding] = useState(false);

  useEffect(() => {
    // Tras 2.4s de carga animada de Dr. Byte, iniciar transición de salida suave
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

  // Buscador estilo Amazon
  const [searchQuery, setSearchQuery] = useState('');
  const [searchDepartment, setSearchDepartment] = useState('todas');

  // Calculadora interactiva de presupuestos orientativos
  const [serviceType, setServiceType] = useState('seguridad');
  const [scope, setScope] = useState('empresa');
  const [extras, setExtras] = useState({
    urgencia: false,
    soporteMensual: false,
    formacionEquipo: false
  });

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
        'Exportación y sincronización en tiempo real con macros'
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
    }
  ];

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

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchDepartment !== 'todas') {
      setStoreCategory(searchDepartment);
    }
    const storeEl = document.getElementById('tienda');
    if (storeEl) storeEl.scrollIntoView({ behavior: 'smooth' });
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

      {/* 1. AMAZON-STYLE NAVBAR */}
      <header className="navbar">
        {/* Nivel Superior de Navegación */}
        <div className="nav-main-bar">
          <a href="#inicio" className="brand" title="DR. BYTE - Inicio">
            <img 
              src="/assets/dr_byte_logo.jpg" 
              alt="DR. BYTE Logo" 
              className="drbyte-navbar-logo"
            />
            <div className="brand-text">
              <h2>DR. BYTE<span className="dot-es">.es</span></h2>
              <span className="sub-brand">SERVICIOS & PLANTILLAS</span>
            </div>
          </a>

          {/* Barra Central de Búsqueda estilo Amazon */}
          <form className="nav-search-bar" onSubmit={handleSearchSubmit}>
            <select 
              className="search-category-select"
              value={searchDepartment}
              onChange={(e) => setSearchDepartment(e.target.value)}
              aria-label="Seleccionar departamento"
            >
              <option value="todas">Departamentos</option>
              <option value="ventas">Ventas & CRM</option>
              <option value="it">Ingeniería IT & Redes</option>
              <option value="finanzas">Finanzas & Fiscal</option>
            </select>
            <input 
              type="text" 
              className="search-input" 
              placeholder="Buscar plantillas Excel, cuadros de mando, diagnósticos IT..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className="search-btn" aria-label="Buscar">
              <Search size={19} />
            </button>
          </form>

          {/* Acciones del Navbar estilo Amazon */}
          <div className="nav-actions-right">
            <a href="#presupuesto" className="nav-item-link">
              <span className="nav-item-small">Calculadora</span>
              <span className="nav-item-bold">Presupuesto</span>
            </a>

            <a href="#contacto" className="nav-item-link">
              <span className="nav-item-small">Atención</span>
              <span className="nav-item-bold">Contacto Directo</span>
            </a>

            <a href="#tienda" className="nav-cart-btn" title="Ver Tienda de Plantillas">
              <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                <ShoppingCart size={26} />
                <span className="cart-count-badge">{filteredTemplates.length}</span>
              </div>
              <span style={{ marginLeft: '4px', fontSize: '0.9rem' }}>Cesta</span>
            </a>
          </div>
        </div>

        {/* Sub-barra de Departamentos y Accesos Rápidos */}
        <div className="nav-sub-bar">
          <div className="sub-bar-container">
            <a href="#tienda" onClick={() => setStoreCategory('todas')} style={{ fontWeight: 700 }}>
              <Menu size={16} />
              <span>Todas las Plantillas</span>
            </a>
            <a href="#tienda" onClick={() => setStoreCategory('ventas')}>
              Ventas & CRM
            </a>
            <a href="#tienda" onClick={() => setStoreCategory('it')}>
              Redes & IT
            </a>
            <a href="#tienda" onClick={() => setStoreCategory('finanzas')}>
              Finanzas & Pymes
            </a>
            <a href="#servicios">
              Servicios de Consultoría
            </a>
            <a href="#metodologia">
              Metodología Zero Trust
            </a>
            <a href="#presupuesto">
              Estimador de Inversión
            </a>
            <a href="#contacto" style={{ color: 'var(--amazon-yellow)', fontWeight: 600 }}>
              ⚡ Diagnóstico Express
            </a>
          </div>
        </div>
      </header>

      {/* 2. HERO BANNER AMAZON STYLE */}
      <section className="hero-banner-wrapper">
        <div className="hero-banner-container">
          <div className="hero-banner-info">
            <div className="hero-banner-badge">
              <Zap size={14} />
              <span>DR. BYTE | Tu Especialista Tecnológico</span>
            </div>
            <h1 className="hero-banner-title">
              Diagnóstico Clínico de Sistemas, <span className="highlight-amazon">Ciberseguridad Zero Trust</span> y Redes
            </h1>
            <p className="hero-banner-desc">
              Bienvenido al portal oficial de <strong>DR. BYTE</strong>, liderado por <strong>Manuel Aragonés</strong>. 
              Soluciones de ingeniería para diagnosticar, blindar y optimizar la infraestructura de tu empresa, además de 
              herramientas y plantillas ejecutivas en Excel listas para descargar.
            </p>

            <div className="hero-quick-actions">
              <a href="#tienda" className="btn-amazon-primary">
                <FileSpreadsheet size={18} />
                <span>Explorar Tienda de Plantillas</span>
              </a>
              <a href="#contacto" className="btn-amazon-secondary">
                <Calendar size={18} />
                <span>Solicitar Diagnóstico Técnico</span>
              </a>
            </div>

            <div style={{ display: 'flex', gap: '1.5rem', marginTop: '1.5rem', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: '#e2e8f0' }}>
                <ShieldCheck size={18} color="var(--drbyte-cyan)" />
                <span>Default Deny & Zero Trust</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: '#e2e8f0' }}>
                <CheckCircle2 size={18} color="#10b981" />
                <span>Macros VBA Auditadas</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: '#e2e8f0' }}>
                <Award size={18} color="var(--amazon-yellow)" />
                <span>Docencia Oficial IT</span>
              </div>
            </div>
          </div>

          {/* Tarjeta de Perfil Profesional a la Derecha */}
          <div className="doctor-hero-card">
            <div className="drbyte-verified-badge">
              <CheckCircle2 size={14} />
              <span>Especialista Verificado</span>
            </div>
            <img 
              src="/assets/dr_byte_logo.jpg" 
              alt="DR. BYTE Oficial" 
              className="drbyte-hero-img-main"
            />
            <h3>DR. BYTE</h3>
            <p>Dirección Técnica: <strong>Manuel Aragonés</strong></p>

            <div className="doctor-rating-row" style={{ marginBottom: '1rem' }}>
              <span className="stars-rating">★★★★★</span>
              <span style={{ fontWeight: 700, color: 'var(--text-primary)' }}>4.9</span>
              <span style={{ color: '#007185' }}>(340 valoraciones de clientes)</span>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', justifyContent: 'center' }}>
              <span style={{ background: '#f0f2f2', padding: '0.25rem 0.6rem', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 600 }}>Ciberseguridad NGFW</span>
              <span style={{ background: '#f0f2f2', padding: '0.25rem 0.6rem', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 600 }}>Cisco & Fortinet</span>
              <span style={{ background: '#f0f2f2', padding: '0.25rem 0.6rem', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 600 }}>Dashboards Excel</span>
              <span style={{ background: '#f0f2f2', padding: '0.25rem 0.6rem', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 600 }}>Windows Server</span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. TIENDA ONLINE DE PLANTILLAS EXCEL (ESTILO AMAZON PRODUCT CARDS) */}
      {/* ========================================================================= */}
      <section id="tienda">
        <div className="section-header">
          <span style={{ color: 'var(--amazon-orange)', fontWeight: 700, fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Catálogo Oficial de Plantillas
          </span>
          <h2>
            <FileSpreadsheet size={28} color="var(--drbyte-blue)" />
            Tienda de Plantillas Excel & Dashboards Ejecutivos
          </h2>
          <p>
            Herramientas ejecutivas de descarga instantánea con macros automatizadas en VBA, fórmulas avanzadas y diseño corporativo listo para producción.
          </p>
        </div>

        {/* Barra de Filtros de Departamentos */}
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
            Finanzas & Control
          </button>
        </div>

        {/* Grid de Productos estilo Amazon */}
        <div className="templates-grid">
          {filteredTemplates.map(t => (
            <div key={t.id} className="template-card">
              {/* Badge Dr. Byte's Choice */}
              {t.isChoice && (
                <div className="amazon-choice-badge">
                  <span>Dr. Byte's</span> <span className="accent">Choice</span>
                </div>
              )}

              {/* Imagen del Producto */}
              <div className="template-preview-wrapper">
                <img src={t.preview} alt={t.title} className="template-preview-img" />
                <span className="template-badge-vba">
                  {t.badge}
                </span>
              </div>

              {/* Título y Enlace de Producto */}
              <h3 
                className="template-title"
                onClick={() => {
                  setSelectedTemplate(t);
                  setCheckoutStep('form');
                }}
              >
                {t.title}
              </h3>

              {/* Fila de Valoración con Estrellas Amazon */}
              <div className="product-stars-row">
                <span className="stars-rating">★★★★★</span>
                <span className="star-count">{t.reviewsCount}</span>
              </div>

              {/* Descripción Breve */}
              <p className="template-desc">{t.desc}</p>

              {/* Especificaciones Clave */}
              <ul className="template-specs">
                {t.specs.map((spec, i) => (
                  <li key={i}>
                    <CheckCircle2 size={14} />
                    <span>{spec}</span>
                  </li>
                ))}
              </ul>

              {/* Bloque de Precios estilo Amazon */}
              <div className="amazon-price-block">
                {t.discount && (
                  <span className="amazon-deal-badge">Oferta Flash {t.discount}</span>
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
                  <span className="prime-check">✓ Instantáneo</span>
                  <span>Descarga directa (.xlsm)</span>
                </div>
              </div>

              {/* Botón de Compra Amarillo Amazon */}
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
      </section>

      {/* MODAL DE COMPRA / DESCARGA INMEDIATA */}
      {selectedTemplate && (
        <div className="modal-overlay" onClick={() => setSelectedTemplate(null)}>
          <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setSelectedTemplate(null)}>✕</button>

            {checkoutStep === 'form' ? (
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.2rem' }}>
                  <div style={{ background: '#e6f4ea', padding: '0.65rem', borderRadius: '8px', color: '#137333' }}>
                    <FileSpreadsheet size={30} />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.75rem', color: 'var(--drbyte-blue)', fontWeight: 700, textTransform: 'uppercase' }}>
                      Descarga Inmediata de Plantilla
                    </span>
                    <h3 style={{ fontSize: '1.2rem', color: 'var(--text-primary)', marginTop: '0.2rem' }}>
                      {selectedTemplate.title}
                    </h3>
                  </div>
                </div>

                <div style={{ background: '#f8fafc', padding: '1rem', borderRadius: '8px', marginBottom: '1.5rem', border: '1px solid var(--border-subtle)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.9rem' }}>
                    <span style={{ color: 'var(--text-secondary)' }}>Precio Oficial:</span>
                    <span style={{ color: 'var(--price-red)', fontWeight: 800, fontSize: '1.1rem' }}>
                      {selectedTemplate.price.toFixed(2)} €
                    </span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem' }}>
                    <span style={{ color: 'var(--text-secondary)' }}>Formato & Licencia:</span>
                    <span style={{ color: 'var(--success-green)', fontWeight: 700 }}>Libro habilitado para macros (.xlsm)</span>
                  </div>
                </div>

                <form onSubmit={(e) => {
                  e.preventDefault();
                  setCheckoutStep('success');
                }}>
                  <div className="form-group" style={{ marginBottom: '1.2rem' }}>
                    <label>Introduce tu Correo Electrónico (para remitirte la factura y soporte):</label>
                    <input 
                      type="email" 
                      required 
                      placeholder="ejemplo@empresa.com"
                      className="form-input"
                      value={buyerEmail}
                      onChange={(e) => setBuyerEmail(e.target.value)}
                    />
                  </div>

                  <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1rem' }}>
                    <button type="submit" className="btn-amazon-buy" style={{ flex: 1, padding: '0.85rem' }}>
                      <span>Habilitar y Descargar Archivo</span>
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </form>
              </div>
            ) : (
              <div style={{ textAlign: 'center', padding: '1rem 0' }}>
                <div style={{ display: 'inline-flex', background: '#e6f4ea', padding: '1rem', borderRadius: '50%', color: 'var(--success-green)', marginBottom: '1rem' }}>
                  <CheckCircle2 size={44} />
                </div>
                <h3 style={{ fontSize: '1.35rem', marginBottom: '0.5rem', color: 'var(--drbyte-navy)' }}>
                  ¡Licencia Habilitada Exitosamente!
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1.8rem', lineHeight: '1.6' }}>
                  Hemos registrado la descarga para <strong>{buyerEmail || 'tu correo'}</strong>. Ya puedes descargar la plantilla oficial con todas sus macros y tablas dinámicas activas.
                </p>

                <a 
                  href={selectedTemplate.fileDownload} 
                  download 
                  className="btn-amazon-buy"
                  style={{ width: '100%', textDecoration: 'none', padding: '0.85rem' }}
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

      {/* ========================================================================= */}
      {/* 4. SERVICIOS PROFESIONALES DE CONSULTORÍA */}
      {/* ========================================================================= */}
      <section id="servicios">
        <div className="section-header">
          <span style={{ color: 'var(--amazon-orange)', fontWeight: 700, fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Servicios Especializados
          </span>
          <h2>
            <Wrench size={26} color="var(--drbyte-blue)" />
            Servicios Técnicos Profesionales de Alto Valor
          </h2>
          <p>
            Auditoría, saneamiento de infraestructuras IT y transferencia técnica de conocimiento con arquitecturas corporativas reales.
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
              Auditoría, diseño e implementación de políticas de cortafuegos perimetrales bajo filosofía Zero Trust y Default Deny.
            </p>
            <ul className="service-features">
              <li><CheckCircle2 size={16} /> Segmentación de Zonas (DMZ, Corp, Invitados)</li>
              <li><CheckCircle2 size={16} /> Reglas Stateful Inspection y Filtrado Bogon</li>
              <li><CheckCircle2 size={16} /> Implementación de VPNs IPsec y SSL seguras</li>
              <li><CheckCircle2 size={16} /> Fortinet FortiGate, Palo Alto y Cisco</li>
            </ul>
          </div>

          {/* Servicio 2 */}
          <div className="service-card">
            <div className="service-icon-box">
              <Network size={28} />
            </div>
            <h3>Diseño & Optimización de Redes LAN/WAN</h3>
            <p>
              Planificación topológica y configuración avanzada de conmutación y enrutamiento corporativo para máxima disponibilidad.
            </p>
            <ul className="service-features">
              <li><CheckCircle2 size={16} /> Direccionamiento IPv4/IPv6 y esquemas VLSM</li>
              <li><CheckCircle2 size={16} /> Troncales 802.1Q, VLANs y Spanning-Tree</li>
              <li><CheckCircle2 size={16} /> Enrutamiento dinámico (OSPF / BGP)</li>
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
              Capacitación in-company y programas docentes prácticos con laboratorios reales orientados a certificados de profesionalidad IT.
            </p>
            <ul className="service-features">
              <li><CheckCircle2 size={16} /> Montaje y Mantenimiento de Sistemas (UF1465/UD1)</li>
              <li><CheckCircle2 size={16} /> Identidad Digital y Certificados Telemáticos</li>
              <li><CheckCircle2 size={16} /> Talleres de Cableado Estructurado y Racks</li>
              <li><CheckCircle2 size={16} /> Metodología práctica orientada al empleo real</li>
            </ul>
          </div>

          {/* Servicio 4 */}
          <div className="service-card">
            <div className="service-icon-box">
              <Server size={28} />
            </div>
            <h3>Administración de Sistemas & Servidores</h3>
            <p>
              Despliegue, securización y mantenimiento de servidores Windows Server y entornos Linux empresariales de misión crítica.
            </p>
            <ul className="service-features">
              <li><CheckCircle2 size={16} /> Directorio Activo (AD DS), DNS y directivas GPO</li>
              <li><CheckCircle2 size={16} /> Políticas de copias de seguridad 3-2-1</li>
              <li><CheckCircle2 size={16} /> Monitorización proactiva de eventos e incidencias</li>
              <li><CheckCircle2 size={16} /> Migración de cargas de trabajo a la nube</li>
            </ul>
          </div>

          {/* Servicio 5 */}
          <div className="service-card">
            <div className="service-icon-box">
              <FileSpreadsheet size={28} />
            </div>
            <h3>Dashboards & Automatización Excel/VBA</h3>
            <p>
              Creación de cuadros de mando corporativos interactivos, modelos financieros y macros que multiplican la agilidad operativa.
            </p>
            <ul className="service-features">
              <li><CheckCircle2 size={16} /> Cuadros de mando ejecutivos en tiempo real</li>
              <li><CheckCircle2 size={16} /> Automatización de facturación y CRM comercial</li>
              <li><CheckCircle2 size={16} /> Integración y exportación de informes PDF/HTML</li>
              <li><CheckCircle2 size={16} /> Ahorro probado de hasta 15 horas semanales</li>
            </ul>
          </div>

          {/* Servicio 6 */}
          <div className="service-card">
            <div className="service-icon-box">
              <Code2 size={28} />
            </div>
            <h3>Desarrollo de Software & Portales Web</h3>
            <p>
              Desarrollo de aplicaciones modernas y portales web de alto rendimiento con React, Vite y arquitecturas escalables.
            </p>
            <ul className="service-features">
              <li><CheckCircle2 size={16} /> Aplicaciones web SPA y portales corporativos</li>
              <li><CheckCircle2 size={16} /> Integración de pasarelas de pago y APIs REST</li>
              <li><CheckCircle2 size={16} /> Despliegue continuo en Vercel y GitHub</li>
              <li><CheckCircle2 size={16} /> Diseño responsive enfocado en la conversión</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. METODOLOGÍA */}
      {/* ========================================================================= */}
      <section id="metodologia">
        <div className="section-header">
          <span style={{ color: 'var(--amazon-orange)', fontWeight: 700, fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Protocolo de Trabajo
          </span>
          <h2>
            <Layers size={26} color="var(--drbyte-blue)" />
            Metodología Basada en Rigor Técnico
          </h2>
          <p>
            Cada actuación se ejecuta bajo un protocolo riguroso para asegurar máxima estabilidad, cero caídas y total transparencia.
          </p>
        </div>

        <div className="methodology-grid">
          <div className="method-step">
            <div className="step-num">01</div>
            <h4>Auditoría & Diagnóstico</h4>
            <p>Inspección exhaustiva de la infraestructura actual, análisis de vectores de riesgo y evaluación de necesidades operativas.</p>
          </div>

          <div className="method-step">
            <div className="step-num">02</div>
            <h4>Diseño de Solución</h4>
            <p>Modelado arquitectónico bajo principios Zero Trust y Default Deny, planos de red y plan de entregables con cronograma.</p>
          </div>

          <div className="method-step">
            <div className="step-num">03</div>
            <h4>Implantación Segura</h4>
            <p>Despliegue ordenado con ventanas de mantenimiento planificadas, pruebas previas en laboratorio y validación perimetral.</p>
          </div>

          <div className="method-step">
            <div className="step-num">04</div>
            <h4>Transferencia & Soporte</h4>
            <p>Entrega de documentación técnica completa, capacitación del equipo del cliente y asistencia post-implantación continua.</p>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. CALCULADORA INTERACTIVA DE PRESUPUESTOS */}
      {/* ========================================================================= */}
      <section id="presupuesto">
        <div className="section-header">
          <span style={{ color: 'var(--amazon-orange)', fontWeight: 700, fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Transparencia & Tarifas
          </span>
          <h2>Estimador de Inversión Orientativo</h2>
          <p>
            Configura los requerimientos de tu proyecto para obtener una estimación inmediata adaptada a la escala de tu infraestructura.
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
              <label>Dimensión / Alcance de la Red:</label>
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
                  <span>Implantación urgente / Prioridad 24-48h (+250 €)</span>
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
            <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 600, textTransform: 'uppercase' }}>
              Inversión Estimada
            </span>
            <div className="calc-price">{calculateEstimate()} €</div>
            <p className="calc-note">
              * Presupuesto aproximado sin IVA. Se entrega propuesta formal detallada tras la toma de requerimientos.
            </p>
            <a href="#contacto" className="btn-amazon-buy" style={{ width: '100%', textDecoration: 'none', padding: '0.85rem' }}>
              <span>Solicitar Propuesta Formal</span>
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. CONTACTO */}
      {/* ========================================================================= */}
      <section id="contacto">
        <div className="section-header">
          <span style={{ color: 'var(--amazon-orange)', fontWeight: 700, fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Atención al Cliente
          </span>
          <h2>Inicia tu Consulta con DR. BYTE</h2>
          <p>
            Ponte en contacto para concertar una sesión diagnóstica, solicitar presupuestos a medida o consultar disponibilidad docente.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <h3>Contacto Directo</h3>
            <p>
              Atención personalizada para empresas, centros formativos y particulares que buscan excelencia y solvencia técnica.
            </p>

            <div className="direct-channels">
              <div className="channel-card">
                <Mail className="channel-icon" size={24} />
                <div className="channel-detail">
                  <strong>Correo Electrónico Oficial</strong>
                  <span>catalogoaplicaciones@gmail.com</span>
                </div>
              </div>

              <div className="channel-card">
                <Phone className="channel-icon" size={24} />
                <div className="channel-detail">
                  <strong>Atención Telefónica & WhatsApp</strong>
                  <span>+34 600 000 000 (Línea Profesional)</span>
                </div>
              </div>

              <div className="channel-card">
                <MapPin className="channel-icon" size={24} />
                <div className="channel-detail">
                  <strong>Ubicación & Cobertura</strong>
                  <span>España / Asistencia Presencial & Soporte Remoto</span>
                </div>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            {formSent ? (
              <div style={{
                background: '#e6f4ea',
                border: '1px solid #10b981',
                padding: '2.5rem 2rem',
                borderRadius: '8px',
                textAlign: 'center'
              }}>
                <CheckCircle2 size={48} color="#10b981" style={{ marginBottom: '1rem' }} />
                <h4 style={{ color: 'var(--drbyte-navy)', marginBottom: '0.5rem', fontSize: '1.25rem' }}>
                  ¡Mensaje Recibido Correctamente!
                </h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem' }}>
                  Gracias por contactar con DR. BYTE. Manuel Aragonés revisará tu consulta técnica y te responderá a la mayor brevedad.
                </p>
                <button 
                  type="button" 
                  className="btn-amazon-primary" 
                  style={{ marginTop: '1.5rem' }}
                  onClick={() => setFormSent(false)}
                >
                  Enviar otra consulta
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
                  <label>Email de Contacto Corporativo:</label>
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
                    <option>Plantillas Excel & Dashboards VBA</option>
                    <option>Desarrollo Web y Apps a Medida</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Mensaje o Descripción de tu Requerimiento:</label>
                  <textarea 
                    rows={4}
                    required 
                    placeholder="Cuéntame brevemente las necesidades de tu infraestructura o qué plantilla necesitas adaptar..."
                    className="form-textarea"
                    value={formData.mensaje}
                    onChange={(e) => setFormData({...formData, mensaje: e.target.value})}
                  ></textarea>
                </div>

                <button type="submit" className="btn-amazon-buy" style={{ padding: '0.85rem' }}>
                  <span>Enviar Consulta Profesional</span>
                  <Send size={18} />
                </button>
              </>
            )}
          </form>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. FOOTER ESTILO AMAZON */}
      {/* ========================================================================= */}
      <footer className="footer">
        <div 
          className="footer-back-to-top" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          Volver arriba ▲
        </div>

        <div className="footer-content">
          <div className="footer-brand">
            <img 
              src="/assets/dr_byte_logo.jpg" 
              alt="DR. BYTE" 
              style={{ width: '40px', height: '40px', borderRadius: '6px', border: '1px solid var(--drbyte-cyan)' }} 
            />
            <div>
              <strong style={{ fontSize: '1.1rem', color: '#ffffff', display: 'block' }}>DR. BYTE.es</strong>
              <span style={{ fontSize: '0.78rem', color: 'var(--drbyte-cyan)' }}>Diagnóstico & Consultoría Informática</span>
            </div>
          </div>

          <div>
            <p>© {new Date().getFullYear()} DR. BYTE - Dirección Técnica: Manuel Aragonés. Todos los derechos reservados.</p>
            <p style={{ marginTop: '0.25rem', color: '#94a3b8', fontSize: '0.78rem' }}>
              Ciberseguridad Zero Trust | Redes LAN/WAN | Formación Técnica Oficial | Automatizaciones Excel VBA
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
