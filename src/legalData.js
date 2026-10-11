// legalData.js - Contenido legal estructurado para DR. BYTE (RGPD, LOPDGDD y LSSI-CE)

export const legalSections = {
  avisoLegal: {
    id: 'aviso-legal',
    title: 'Aviso Legal',
    subtitle: 'Información general en cumplimiento de la Ley 34/2002 (LSSI-CE)',
    updated: 'Octubre 2026',
    sections: [
      {
        heading: '1. Datos Identificativos del Titular',
        content: `En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se informa a los usuarios de los datos identificativos del titular de este sitio web:

• **Denominación / Marca Comercial:** DR. BYTE
• **Titular / Responsable:** Manuel Aragonés
• **Ubicación y Ámbito:** Islas Canarias, España
• **Contacto Electrónico:** hola.drbyte@gmail.com
• **Teléfono de Atención / Soporte Técnico:** +34 607 35 39 10
• **Sitio Web Oficial:** https://dr-byte-servicios.vercel.app
• **Actividad Principal:** Consultoría y soporte informático avanzado, arquitectura de redes corporativas, auditorías de ciberseguridad, formación técnica especializada y desarrollo de herramientas ofimáticas profesionales.`
      },
      {
        heading: '2. Objeto y Condiciones Generales de Uso',
        content: `El acceso y navegación por el sitio web de DR. BYTE atribuye la condición de Usuario, implicando la aceptación plena y sin reservas de las presentes disposiciones legales.

El Usuario se compromete a hacer un uso diligente y lícito de los contenidos, servicios y herramientas ofrecidas, absteniéndose de realizar actividades ilícitas, contrarias a la buena fe o que infrinjan derechos de terceros, así como introducir malware o alterar los sistemas telemáticos.`
      },
      {
        heading: '3. Propiedad Intelectual e Industrial',
        content: `Todos los contenidos del portal (diseño gráfico, logotipos de DR. BYTE, código fuente, plantillas Excel con macros VBA, artículos formativos y materiales audiovisuales) son titularidad de Manuel Aragonés o disponen de las licencias de uso correspondientes, estando protegidos por la legislación española e internacional de propiedad intelectual e industrial.

Queda prohibida la reproducción, distribución, comunicación pública o transformación no autorizada de estos materiales sin el consentimiento expreso y por escrito del titular.`
      },
      {
        heading: '4. Exención de Responsabilidad',
        content: `DR. BYTE vela por la máxima exactitud y actualidad técnica de las herramientas y recomendaciones expuestas. No obstante, no asume responsabilidad directa por daños derivados del mal uso de las fórmulas, configuraciones de red no supervisadas o interrupciones ajenas en los servidores de telecomunicaciones.`
      }
    ]
  },

  privacidad: {
    id: 'privacidad',
    title: 'Política de Privacidad',
    subtitle: 'Protección de datos personales conforme al RGPD (UE 2016/679) y LOPDGDD (Ley Orgánica 3/2018)',
    updated: 'Octubre 2026',
    sections: [
      {
        heading: '1. Responsable del Tratamiento',
        content: `• **Responsable:** Manuel Aragonés (DR. BYTE)
• **Correo Electrónico de Contacto:** hola.drbyte@gmail.com
• **Teléfono de Soporte:** +34 607 35 39 10`
      },
      {
        heading: '2. Finalidad y Legitimación del Tratamiento',
        content: `Los datos personales recabados a través de nuestros formularios de contacto o solicitudes de plantillas (nombre, correo electrónico, teléfono y mensaje) se tratan con las siguientes finalidades:

1. **Gestión de Consultas y Soporte:** Atender solicitudes de presupuesto, auditorías informáticas o resolución de dudas técnicas sobre plantillas de Excel. *Base de legitimación: Consentimiento expreso del interesado (Art. 6.1.a RGPD).*
2. **Entrega de Materiales y Servicios:** Gestionar el envío telemático de herramientas o inscripciones formativas solicitadas. *Base de legitimación: Ejecución de relación precontractual o contractual (Art. 6.1.b RGPD).*
3. **Comunicaciones Informativas:** Si el usuario lo autoriza expresamente, remitir novedades tecnológicas y actualizaciones de herramientas.`
      },
      {
        heading: '3. Conservación de los Datos',
        content: `Los datos facilitados se conservarán durante el tiempo estrictamente necesario para atender la consulta solicitada y, posteriormente, durante los plazos legalmente exigibles para la atención de posibles responsabilidades civiles o mercantiles.`
      },
      {
        heading: '4. Cesión a Terceros y Transferencias Internacionales',
        content: `DR. BYTE no vende ni cede datos de carácter personal a terceras entidades, salvo obligación legal expresa. La infraestructura de alojamiento web está desplegada en Vercel Inc., cumpliendo las Cláusulas Contractuales Tipo (SCC) aprobadas por la Comisión Europea y garantizando elevados estándares de cifrado en tránsito (TLS/HTTPS).`
      },
      {
        heading: '5. Derechos del Usuario (ARCO-POL)',
        content: `Cualquier usuario puede ejercer de forma gratuita y en cualquier momento sus derechos de:
• **Acceso:** Conocer qué datos personales tratamos.
• **Rectificación:** Corregir datos inexactos o incompletos.
• **Supresión (Derecho al Olvido):** Solicitar la eliminación de sus datos.
• **Limitación y Oposición:** Limitar el tratamiento u oponerse a finalidades concretas.
• **Portabilidad:** Recibir sus datos en formato estructurado y legible por máquina.

Para ejercer estos derechos basta con remitir un correo electrónico a **hola.drbyte@gmail.com** con el asunto *"Protección de Datos"* adjuntando copia de documento acreditativo.`
      }
    ]
  },

  cookies: {
    id: 'cookies',
    title: 'Política de Cookies',
    subtitle: 'Transparencia técnica sobre el almacenamiento local y analítico conforme a la directiva ePrivacy y Guía AEPD',
    updated: 'Octubre 2026',
    sections: [
      {
        heading: '1. ¿Qué es una Cookie?',
        content: `Una cookie es un pequeño archivo de texto que los sitios web almacenan en el navegador del usuario al visitarlos. Sirven para recordar preferencias de navegación, garantizar la seguridad técnica y medir el rendimiento del sitio.`
      },
      {
        heading: '2. Tipos de Cookies Utilizadas en DR. BYTE',
        content: `En este sitio web aplicamos el principio de mínima intrusión y privacidad desde el diseño:

• **Cookies Técnicas y Esenciales (Obligatorias):** Imprescindibles para el funcionamiento correcto de la web, la navegación entre pestañas y recordar sus preferencias sobre el banner de cookies. No requieren consentimiento previo.
• **Cookies Analíticas / Rendimiento (Opcionales):** Permiten cuantificar el número de usuarios y realizar mediciones estadísticas anónimas sobre qué secciones y plantillas son más consultadas. Solo se activan si pulsa «Aceptar Todas» o las activa en la configuración.
• **Cookies de Terceros:** En caso de interactuar con contenidos externos enlazados (YouTube, Instagram o WhatsApp), dichas plataformas aplicarán sus propias políticas de privacidad y cookies.`
      },
      {
        heading: '3. Tabla de Cookies del Sitio',
        content: `| Nombre | Proveedor | Tipo | Finalidad | Duración |
|---|---|---|---|---|
| **drbyte_consent** | Local (DR. BYTE) | Técnica | Almacena la decisión del usuario sobre el consentimiento de cookies | 12 meses |
| **drbyte_theme** | Local (DR. BYTE) | Técnica | Mantiene las preferencias visuales de la interfaz | Persistente |
| **_va / _vau** | Vercel Analytics | Analítica | Métricas anónimas de rendimiento y visitas sin rastreo entre sitios | Sesión / 1 año |`
      },
      {
        heading: '4. ¿Cómo Revocar o Configurar el Consentimiento?',
        content: `Puede volver a abrir el panel de configuración de cookies en cualquier momento pulsando en el enlace **«Configurar Cookies»** situado en el pie de página.

Asimismo, puede configurar su navegador para bloquear o eliminar las cookies instaladas:
• Google Chrome: Configuración > Privacidad y seguridad > Cookies.
• Mozilla Firefox: Opciones > Privacidad y Seguridad.
• Microsoft Edge: Configuración > Permisos del sitio > Cookies.`
      }
    ]
  },

  terminos: {
    id: 'terminos',
    title: 'Términos y Condiciones de Contratación',
    subtitle: 'Condiciones de compra, descarga de plantillas digitales y contratación de servicios técnicos',
    updated: 'Octubre 2026',
    sections: [
      {
        heading: '1. Ámbito de Aplicación',
        content: `Las presentes condiciones regulan la adquisición de herramientas digitales (plantillas en formato .xlsx / .xlsm con macros VBA) y la contratación de horas de consultoría y soporte informático ofrecidos por DR. BYTE a través de este portal web.`
      },
      {
        heading: '2. Proceso de Compra y Entrega Inmediata',
        content: `Las plantillas de Excel de la tienda se suministran en formato descargable digital. Una vez formalizada la solicitud o pago acordado, el cliente recibe acceso directo e inmediato al archivo fuente listo para su ejecución y personalización.`
      },
      {
        heading: '3. Garantía Técnica y Soporte Directo',
        content: `Todas las plantillas profesionales de DR. BYTE incluyen soporte técnico directo por parte de Manuel Aragonés (+34 607 35 39 10 / hola.drbyte@gmail.com) para resolver incidencias de compatibilidad, dudas de configuración de macros o resolución de fórmulas corporativas.`
      },
      {
        heading: '4. Derecho de Desistimiento en Contenido Digital',
        content: `Conforme al Real Decreto Legislativo 1/2007 (artículo 103.m), al tratarse de contenido digital que no se presta en un soporte material y cuya ejecución se inicia inmediatamente tras la descarga, el derecho de desistimiento decae una vez que el archivo digital ha sido descargado por el usuario, sin perjuicio de nuestra plena garantía de asistencia técnica personalizada ante cualquier anomalía del archivo.`
      }
    ]
  }
};
