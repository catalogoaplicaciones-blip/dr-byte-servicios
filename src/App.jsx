import React, { useState } from 'react';
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
  // Buscador estilo Amazon
  const [searchQuery, setSearchQuery] = useState('');
  const [searchDepartment, setSearchDepartment] = useState('todas');

  // Calculadora interactiva de presupuestos
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

  // Formulario de contacto
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
      {/* 1. BARRA SUPERIOR SÓLIDA TIPO AMAZON */}
      <header className="navbar">
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

          {/* Barra de Búsqueda Sólida */}
          <form className="nav-search-bar" onSubmit={handleSearchSubmit}>
            <select 
              className="search-category-select"
              value={searchDepartment}
              onChange={(e) => setSearchDepartment(e.target.value)}
              aria-label="Seleccionar departamento"
            >
              <option value="todas">Todos los departamentos</option>
              <option value="ventas">Ventas & CRM</option>
              <option value="it">Ingeniería IT & Redes</option>
              <option value="finanzas">Finanzas & Fiscal</option>
            </select>
            <input 
              type="text" 
              className="search-input" 
              placeholder="Buscar plantillas Excel, cuadros de mando, servicios..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className="search-btn" aria-label="Buscar">
              <Search size={19} />
            </button>
          </form>

          {/* Acciones Rápidas */}
          <div className="nav-actions-right">
            <a href="#presupuesto" className="nav-item-link">
              <span className="nav-item-small">Calculadora</span>
              <span className="nav-item-bold">Presupuesto</span>
            </a>

            <a href="#contacto" className="nav-item-link">
              <span className="nav-item-small">Atención</span>
              <span className="nav-item-bold">Contacto</span>
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

        {/* Sub-barra de Navegación Rápida */}
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
              Servicios Técnicos
            </a>
            <a href="#metodologia">
              Metodología
            </a>
            <a href="#presupuesto">
              Calculadora
            </a>
            <a href="#contacto" style={{ color: 'var(--amazon-yellow)', fontWeight: 700 }}>
              Contacto Directo
            </a>
          </div>
        </div>
      </header>

      {/* 2. HERO BANNER SÓLIDO (DIRECTO, SIN EFECTOS NI TRANSPARENCIAS) */}
      <section id="inicio" className="hero-banner-wrapper">
        <div className="hero-banner-container">
          <div className="hero-banner-info">
            <div className="hero-banner-badge">
              <Zap size={14} />
              <span>DR. BYTE | Especialista Tecnológico</span>
            </div>
            <h1 className="hero-banner-title">
              Diagnóstico de Sistemas, <span className="highlight-amazon">Ciberseguridad Zero Trust</span> y Redes
            </h1>
            <p className="hero-banner-desc">
              Portal profesional de <strong>DR. BYTE</strong>, liderado por <strong>Manuel Aragonés</strong>. 
              Servicios técnicos para diagnosticar y blindar la infraestructura IT de empresas y profesionales, 
              además de cuadros de mando y plantillas ejecutivas en Excel listas para usar.
            </p>

            <div className="hero-quick-actions">
              <a href="#tienda" className="btn-amazon-primary">
                <FileSpreadsheet size={18} />
                <span>Ver Tienda de Plantillas</span>
              </a>
              <a href="#contacto" className="btn-amazon-secondary">
                <Calendar size={18} />
                <span>Solicitar Diagnóstico</span>
              </a>
            </div>

            <div style={{ display: 'flex', gap: '1.5rem', marginTop: '2rem', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.88rem', color: '#f1f5f9' }}>
                <ShieldCheck size={18} color="var(--drbyte-cyan)" />
                <span>Filosofía Zero Trust</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.88rem', color: '#f1f5f9' }}>
                <CheckCircle2 size={18} color="#10b981" />
                <span>Macros VBA Verificadas</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.88rem', color: '#f1f5f9' }}>
                <Award size={18} color="var(--amazon-yellow)" />
                <span>Docencia Oficial IT</span>
              </div>
            </div>
          </div>

          {/* Tarjeta Sólida Profesional */}
          <div className="doctor-hero-card">
            <div className="drbyte-verified-badge">
              <CheckCircle2 size={14} />
              <span>Especialista Verificado</span>
            </div>
            <img 
              src="/assets/dr_byte_logo.jpg" 
              alt="DR. BYTE" 
              className="drbyte-hero-img-main"
            />
            <h3>DR. BYTE</h3>
            <p>Dirección Técnica: <strong>Manuel Aragonés</strong></p>

            <div className="doctor-rating-row">
              <span className="stars-rating">★★★★★</span>
              <span style={{ fontWeight: 700, color: 'var(--text-primary)' }}>4.9</span>
              <span style={{ color: 'var(--text-secondary)' }}>(340 valoraciones)</span>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', justifyContent: 'center' }}>
              <span style={{ background: '#f3f4f6', padding: '0.3rem 0.65rem', borderRadius: '4px', fontSize: '0.78rem', fontWeight: 600 }}>Ciberseguridad NGFW</span>
              <span style={{ background: '#f3f4f6', padding: '0.3rem 0.65rem', borderRadius: '4px', fontSize: '0.78rem', fontWeight: 600 }}>Cisco & Fortinet</span>
              <span style={{ background: '#f3f4f6', padding: '0.3rem 0.65rem', borderRadius: '4px', fontSize: '0.78rem', fontWeight: 600 }}>Dashboards Excel</span>
              <span style={{ background: '#f3f4f6', padding: '0.3rem 0.65rem', borderRadius: '4px', fontSize: '0.78rem', fontWeight: 600 }}>Windows Server</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. TIENDA DE PLANTILLAS EXCEL & DASHBOARDS */}
      <section id="tienda">
        <div className="section-header">
          <span style={{ color: 'var(--amazon-orange)', fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase' }}>
            Catálogo Oficial
          </span>
          <h2>
            <FileSpreadsheet size={26} color="var(--drbyte-blue)" />
            Tienda de Plantillas Excel & Dashboards Ejecutivos
          </h2>
          <p>
            Herramientas ejecutivas listas para descargar con macros automatizadas en VBA, fórmulas y diseño profesional.
          </p>
        </div>

        {/* Filtros de Categoría */}
        <div className="store-filter-bar">
          <button 
            className={`store-filter-btn ${storeCategory === 'todas' ? 'active' : ''}`}
            onClick={() => setStoreCategory('todas')}
          >
            Todas ({excelTemplates.length})
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

        {/* Tarjetas de Producto */}
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
                  <span>Descarga de archivo (.xlsm)</span>
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
      </section>

      {/* MODAL DE COMPRA / DESCARGA INMEDIATA */}
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
                      Descarga de Plantilla
                    </span>
                    <h3 style={{ fontSize: '1.15rem', color: 'var(--text-primary)', marginTop: '0.2rem' }}>
                      {selectedTemplate.title}
                    </h3>
                  </div>
                </div>

                <div style={{ background: '#f9fafb', padding: '1rem', borderRadius: '4px', marginBottom: '1.5rem', border: '1px solid #e5e7eb' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.9rem' }}>
                    <span style={{ color: 'var(--text-secondary)' }}>Precio:</span>
                    <span style={{ color: 'var(--price-red)', fontWeight: 800, fontSize: '1.1rem' }}>
                      {selectedTemplate.price.toFixed(2)} €
                    </span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem' }}>
                    <span style={{ color: 'var(--text-secondary)' }}>Formato:</span>
                    <span style={{ color: 'var(--success-green)', fontWeight: 700 }}>Excel habilitado para macros (.xlsm)</span>
                  </div>
                </div>

                <form onSubmit={(e) => {
                  e.preventDefault();
                  setCheckoutStep('success');
                }}>
                  <div className="form-group" style={{ marginBottom: '1.2rem' }}>
                    <label>Introduce tu correo electrónico:</label>
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
                  Hemos registrado la descarga para <strong>{buyerEmail || 'tu correo'}</strong>. Puedes guardar el archivo Excel en tu equipo a continuación.
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

      {/* 4. SERVICIOS PROFESIONALES */}
      <section id="servicios">
        <div className="section-header">
          <span style={{ color: 'var(--amazon-orange)', fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase' }}>
            Áreas de Trabajo
          </span>
          <h2>
            <Wrench size={26} color="var(--drbyte-blue)" />
            Servicios Técnicos Profesionales
          </h2>
          <p>
            Soluciones de consultoría, arquitectura de redes seguras y soporte informático avanzado.
          </p>
        </div>

        <div className="services-grid">
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

          <div className="service-card">
            <div className="service-icon-box">
              <GraduationCap size={28} />
            </div>
            <h3>Formación Técnica & Docencia IT</h3>
            <p>
              Capacitación in-company y programas docentes prácticos con laboratorios reales orientados a certificados de profesionalidad.
            </p>
            <ul className="service-features">
              <li><CheckCircle2 size={16} /> Montaje y Mantenimiento de Sistemas (UF1465/UD1)</li>
              <li><CheckCircle2 size={16} /> Identidad Digital y Certificados Telemáticos</li>
              <li><CheckCircle2 size={16} /> Talleres de Cableado Estructurado y Racks</li>
              <li><CheckCircle2 size={16} /> Metodología práctica orientada al empleo</li>
            </ul>
          </div>

          <div className="service-card">
            <div className="service-icon-box">
              <Server size={28} />
            </div>
            <h3>Administración de Sistemas & Servidores</h3>
            <p>
              Despliegue, securización y mantenimiento de servidores Windows Server y entornos Linux empresariales.
            </p>
            <ul className="service-features">
              <li><CheckCircle2 size={16} /> Directorio Activo (AD DS), DNS y directivas GPO</li>
              <li><CheckCircle2 size={16} /> Políticas de copias de seguridad 3-2-1</li>
              <li><CheckCircle2 size={16} /> Monitorización de recursos y eventos</li>
              <li><CheckCircle2 size={16} /> Migración y continuidad de negocio</li>
            </ul>
          </div>

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
              <li><CheckCircle2 size={16} /> Automatización de facturación y CRM</li>
              <li><CheckCircle2 size={16} /> Integración y exportación de informes PDF/HTML</li>
              <li><CheckCircle2 size={16} /> Ahorro probado de tiempos manuales</li>
            </ul>
          </div>

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
              <li><CheckCircle2 size={16} /> Integración de pasarelas de pago y APIs</li>
              <li><CheckCircle2 size={16} /> Despliegue continuo en Vercel y GitHub</li>
              <li><CheckCircle2 size={16} /> Diseño responsive adaptado a móviles</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 5. METODOLOGÍA */}
      <section id="metodologia">
        <div className="section-header">
          <span style={{ color: 'var(--amazon-orange)', fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase' }}>
            Protocolo
          </span>
          <h2>
            <Layers size={26} color="var(--drbyte-blue)" />
            Metodología de Trabajo
          </h2>
          <p>
            Protocolo claro y ordenado para asegurar estabilidad y resultados en cada intervención.
          </p>
        </div>

        <div className="methodology-grid">
          <div className="method-step">
            <div className="step-num">01</div>
            <h4>Auditoría & Diagnóstico</h4>
            <p>Inspección de la infraestructura actual, vectores de riesgo y evaluación de necesidades del negocio.</p>
          </div>

          <div className="method-step">
            <div className="step-num">02</div>
            <h4>Diseño de Solución</h4>
            <p>Modelado arquitectónico bajo principios de seguridad, planos de red y definición clara de objetivos.</p>
          </div>

          <div className="method-step">
            <div className="step-num">03</div>
            <h4>Implantación Segura</h4>
            <p>Despliegue ordenado con ventanas de mantenimiento controladas y validación previa en laboratorio.</p>
          </div>

          <div className="method-step">
            <div className="step-num">04</div>
            <h4>Documentación & Soporte</h4>
            <p>Entrega de manuales técnicos, capacitación del personal y asistencia técnica continua.</p>
          </div>
        </div>
      </section>

      {/* 6. CALCULADORA DE PRESUPUESTO */}
      <section id="presupuesto">
        <div className="section-header">
          <span style={{ color: 'var(--amazon-orange)', fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase' }}>
            Tarifas
          </span>
          <h2>Estimador de Inversión Orientativo</h2>
          <p>
            Configura los parámetros de tu proyecto para obtener una estimación inmediata.
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
                <option value="profesional">Profesional Independiente (1-5 puestos)</option>
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
                  <span>Implantación urgente / Prioridad (+250 €)</span>
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
                  <span>Jornada de Formación y Manual (+300 €)</span>
                </label>
              </div>
            </div>
          </div>

          <div className="calc-result-box">
            <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 700, textTransform: 'uppercase' }}>
              Inversión Estimada
            </span>
            <div className="calc-price">{calculateEstimate()} €</div>
            <p className="calc-note">
              * Estimación sin IVA. Presupuesto detallado tras toma de requerimientos.
            </p>
            <a href="#contacto" className="btn-amazon-buy" style={{ textDecoration: 'none', padding: '0.85rem' }}>
              <span>Solicitar Presupuesto Formal</span>
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* 7. CONTACTO */}
      <section id="contacto">
        <div className="section-header">
          <span style={{ color: 'var(--amazon-orange)', fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase' }}>
            Contacto
          </span>
          <h2>Inicia tu Consulta con DR. BYTE</h2>
          <p>
            Ponte en contacto para solicitar una propuesta a medida o concertar una reunión técnica.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <h3>Atención Directa</h3>
            <p>
              Atención para empresas, despachos profesionales y centros formativos que buscan rigor técnico.
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
                  <strong>Teléfono & WhatsApp</strong>
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
                background: '#e6f4ea',
                border: '1px solid #10b981',
                padding: '2.5rem 2rem',
                borderRadius: '4px',
                textAlign: 'center'
              }}>
                <CheckCircle2 size={48} color="#10b981" style={{ marginBottom: '1rem' }} />
                <h4 style={{ color: 'var(--drbyte-navy)', marginBottom: '0.5rem', fontSize: '1.25rem' }}>
                  ¡Mensaje Enviado con Éxito!
                </h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem' }}>
                  Gracias por contactar. Manuel Aragonés responderá a tu consulta a la mayor brevedad.
                </p>
                <button 
                  type="button" 
                  className="btn-amazon-primary" 
                  style={{ marginTop: '1.5rem' }}
                  onClick={() => setFormSent(false)}
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <>
                <div className="form-group">
                  <label>Nombre Completo / Empresa:</label>
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
                    <option>Plantillas Excel & Dashboards VBA</option>
                    <option>Desarrollo Web y Apps a Medida</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Mensaje:</label>
                  <textarea 
                    rows={4}
                    required 
                    placeholder="Describe brevemente tus requerimientos o qué plantilla necesitas..."
                    className="form-textarea"
                    value={formData.mensaje}
                    onChange={(e) => setFormData({...formData, mensaje: e.target.value})}
                  ></textarea>
                </div>

                <button type="submit" className="btn-amazon-buy" style={{ padding: '0.85rem' }}>
                  <span>Enviar Mensaje</span>
                  <Send size={18} />
                </button>
              </>
            )}
          </form>
        </div>
      </section>

      {/* 8. FOOTER */}
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
              style={{ width: '40px', height: '40px', borderRadius: '4px', border: '1px solid var(--drbyte-cyan)' }} 
            />
            <div>
              <strong style={{ fontSize: '1.1rem', color: '#ffffff', display: 'block' }}>DR. BYTE.es</strong>
              <span style={{ fontSize: '0.78rem', color: '#93c5fd' }}>Diagnóstico & Consultoría Informática</span>
            </div>
          </div>

          <div>
            <p>© {new Date().getFullYear()} DR. BYTE - Manuel Aragonés. Todos los derechos reservados.</p>
            <p style={{ marginTop: '0.25rem', color: '#94a3b8', fontSize: '0.8rem' }}>
              Ciberseguridad Zero Trust | Redes LAN/WAN | Formación IT | Cuadros de Mando Excel VBA
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
