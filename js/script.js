const members = [
  'CBOP. SANCHEZ SANMARTIN ALEXANDER VICENTE',
  'CBOP. GAON YEPEZ JAIME EDUARDO',
  'CBOP. PORTILLA ANDRADE JUAN FERNANDO',
  'CBOP. VERA CORREA BYRON JOSE',
  'CBOP. MOREIRA JARAMILLO LUIS ALBERTO',
  'CBOP. CASTILLO PARDO FRANKLIN SALVADOR'
];

const slideTitles = [
  'Portada', 'El desafío forense móvil', 'Generalidades de iOS', 'Arquitectura y Kernel XNU',
  'User Space / Kernel Space', 'Gestión del almacenamiento', 'El reto de los datos eliminados',
  'Apple File System — APFS', 'Elementos forenses de APFS', 'Autenticación y control de acceso',
  'Sandboxing', 'Secure Enclave y Data Protection', 'Conclusiones', 'Preguntas integradoras'
];

const esc = (value) => String(value).replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' }[char]));
const memberList = members.map((member, index) => `<li><span>${String(index + 1).padStart(2, '0')}</span>${esc(member)}</li>`).join('');
const label = (text) => `<span class="eyebrow">${text}</span>`;
const visualCaptions = [
  'Dispositivo iOS bajo análisis', 'Teléfono como fuente de evidencia', 'Evolución de las protecciones',
  'Capas de la plataforma', 'Ruta de una llamada al sistema', 'Memoria NAND y bloques',
  'Preservación del dispositivo', 'Volúmenes de APFS', 'Historial Copy-on-Write',
  'Nodos de autenticación', 'Contenedores aislados', 'Chip de seguridad',
  'Cadena de interpretación', 'Preguntas para el grupo'
];
const visualArt = [
  '<rect x="48" y="18" width="84" height="144" rx="16"/><rect x="58" y="43" width="64" height="83" rx="4"/><circle cx="90" cy="136" r="5"/><path d="M69 78h42M69 91h27"/>',
  '<circle cx="90" cy="90" r="62"/><path d="M73 76h34v39H73zM78 70h24M82 121h16"/><circle cx="90" cy="91" r="12"/><path d="m96 100 17 17"/>',
  '<path d="M28 120h124M38 120V96h104v24M52 96V72h76v24M67 72V48h46v24"/><circle cx="90" cy="35" r="10"/><path d="m86 35 4 4 8-10"/>',
  '<path d="M90 26 148 54v48l-58 28-58-28V54z"/><path d="m32 54 58 28 58-28M90 82v48"/><path d="M63 69h54M70 102h40"/>',
  '<rect x="42" y="28" width="96" height="34" rx="6"/><rect x="42" y="73" width="96" height="34" rx="6"/><rect x="42" y="118" width="96" height="20" rx="6"/><path d="M90 62v11M90 107v11M72 45h36M72 90h36"/>',
  '<rect x="47" y="45" width="86" height="90" rx="8"/><path d="M61 61h58M61 78h58M61 95h58M61 112h35M38 61h-8v62h8M133 61h9v62h-9"/><circle cx="90" cy="24" r="8"/>',
  '<path d="m90 20 48 18v40c0 34-22 54-48 64-26-10-48-30-48-64V38z"/><path d="m67 81 15 15 31-35"/><circle cx="90" cy="64" r="8"/>',
  '<ellipse cx="90" cy="90" rx="68" ry="46"/><path d="M28 90h124M90 44v92"/><ellipse cx="90" cy="90" rx="29" ry="46"/><path d="M43 63h94M43 117h94"/>',
  '<rect x="35" y="42" width="37" height="37"/><rect x="108" y="42" width="37" height="37"/><rect x="35" y="105" width="37" height="37"/><rect x="108" y="105" width="37" height="37"/><path d="M72 60h36M53 79v26M127 79v26M72 123h36"/>',
  '<circle cx="90" cy="90" r="33"/><circle cx="90" cy="90" r="13"/><path d="M90 23v22M90 135v22M23 90h22M135 90h22M43 43l16 16M121 121l16 16M137 43l-16 16M59 121l-16 16"/>',
  '<rect x="34" y="40" width="112" height="100" rx="8"/><path d="M54 63h72M54 83h72M54 103h43M54 123h61"/><path d="m114 93 11 11 20-25"/>',
  '<path d="M90 22 143 43v43c0 34-24 59-53 70-29-11-53-36-53-70V43z"/><rect x="64" y="64" width="52" height="42" rx="5"/><path d="M76 64v-9a14 14 0 0 1 28 0v9M77 84h26"/>',
  '<path d="M38 44h104v92H38z"/><path d="M51 59h78M51 77h78M51 95h78M51 113h49"/><circle cx="126" cy="116" r="13"/><path d="m120 116 4 4 8-10"/>',
  '<path d="M42 57h35l13 13h48v63H42z"/><path d="M53 84h74M53 103h52"/><circle cx="112" cy="117" r="12"/><path d="m107 117 4 4 8-10"/>'
];
function topicVisual(number) {
  return `<button class="topic-visual" type="button" data-visual="${number}" aria-label="Ampliar ilustración: ${esc(visualCaptions[number - 1])}"><svg viewBox="0 0 180 180" role="img" aria-hidden="true"><g>${visualArt[number - 1]}</g></svg><span>${esc(visualCaptions[number - 1])}</span><b>+</b></button>`;
}
const slide = (number, content, className = '') => `<section class="slide ${className}" data-slide="${number}" aria-label="Diapositiva ${number}: ${esc(slideTitles[number - 1])}">${content}${topicVisual(number)}</section>`;

const slides = [
  slide(1, `<div class="slide-inner"><div class="hero-copy">${label('Instituto Superior Tecnológico Policía Nacional')}<h1>Análisis interno de <span class="hero-title-accent">iOS</span> aplicado a la investigación forense digital</h1><p class="lede">Una lectura técnica sobre arquitectura, almacenamiento, cifrado y las decisiones que preservan el valor de la evidencia móvil.</p><div class="hero-actions"><button class="primary-button" data-go="2">Iniciar presentación&nbsp; →</button><button class="secondary-button" data-open-members>Ver integrantes</button></div><div class="hero-meta"><div><strong>Grupo 03</strong>Informática básica / tercer parcial</div><div><strong>Docente</strong>Ing. René Quisaguano, Mgtr.</div></div></div><div class="hero-orbit" aria-hidden="true"><div class="phone"><div class="chip-dots"><i></i><i></i><i></i><i></i></div></div><span class="hero-signal">● SIGNAL / FORENSIC LAB</span></div></div>`, 'hero-slide'),
  slide(2, `<div class="slide-inner"><div class="section-heading">${label('01 / Contexto')}<div><h2>El desafío de la informática forense móvil</h2><p class="lede">El teléfono ya no es solo un dispositivo: es una cronología personal, social y operativa protegida por diseño.</p></div></div><div class="card-grid"><article class="info-card expandable"><span class="card-number">01</span><h3>Evidencia digital</h3><p>Mensajes, ubicaciones, fotografías y registros pueden aportar contexto a una investigación.</p><div class="card-detail">La evidencia debe interpretarse con su contexto, integridad y trazabilidad.</div><span class="card-more">+ explorar</span></article><article class="info-card expandable"><span class="card-number">02</span><h3>Ecosistema iOS</h3><p>Un entorno cerrado, con seguridad integrada en hardware y controles de acceso por capas.</p><div class="card-detail">Modelo, versión de iOS y estado de bloqueo condicionan cualquier adquisición.</div><span class="card-more">+ explorar</span></article><article class="info-card expandable"><span class="card-number">03</span><h3>Objetivo</h3><p>Conectar cada componente interno con una fase razonable de preservación y análisis.</p><div class="card-detail">La metodología debe ser proporcional, documentada y compatible con el dispositivo.</div><span class="card-more">+ explorar</span></article></div><div class="note-strip">ENFOQUE FORENSE / La adquisición no es universal: depende del modelo, la versión de iOS, el estado del dispositivo y la herramienta disponible.</div></div>`),
  slide(3, `<div class="slide-inner"><div class="section-heading">${label('02 / Evolución')}<div><h2>Generalidades de iOS</h2><p class="lede">De una interfaz multitáctil a un ecosistema de privacidad y seguridad avanzada.</p></div></div><div class="timeline" id="timeline"><button class="timeline-item selected" data-timeline="2007"><i class="timeline-dot"></i><span class="timeline-year">2007</span><span class="timeline-label">iPhone OS</span></button><button class="timeline-item" data-timeline="2010"><i class="timeline-dot"></i><span class="timeline-year">2010</span><span class="timeline-label">Consolidación de iOS</span></button><button class="timeline-item" data-timeline="2013"><i class="timeline-dot"></i><span class="timeline-year">2013</span><span class="timeline-label">Touch ID</span></button><button class="timeline-item" data-timeline="2017"><i class="timeline-dot"></i><span class="timeline-year">2017</span><span class="timeline-label">Face ID</span></button><button class="timeline-item" data-timeline="2019"><i class="timeline-dot"></i><span class="timeline-year">2019</span><span class="timeline-label">APFS y seguridad</span></button><button class="timeline-item" data-timeline="Hoy"><i class="timeline-dot"></i><span class="timeline-year">Actualidad</span><span class="timeline-label">Privacidad avanzada</span></button></div><div class="timeline-detail" id="timelineDetail">2007 / El iPhone OS original establece la base de una plataforma móvil centrada en aplicaciones y datos personales.</div></div>`),
  slide(4, `<div class="slide-inner"><div class="section-heading">${label('03 / Arquitectura')}<div><h2>Capas de iOS y Kernel XNU</h2><p class="lede">La arquitectura separa responsabilidades; esa separación explica tanto la estabilidad como los límites de una investigación.</p></div></div><div class="diagram-layout"><div class="layer-stack" id="layerStack"><button class="layer" data-layer="kernel"><strong>Kernel XNU</strong><small>Mach + componentes derivados de FreeBSD</small></button><button class="layer" data-layer="media"><strong>Media</strong><small>Audio, vídeo, gráficos y animación</small></button><button class="layer" data-layer="core"><strong>Core Services</strong><small>Datos, redes, ubicación y persistencia</small></button><button class="layer" data-layer="cocoa"><strong>Cocoa Touch</strong><small>Interacción, gestos y ciclo de vida de apps</small></button></div><div><div class="layer-detail" id="layerDetail"><strong class="cyan">Cocoa Touch</strong><br>Gestiona la interacción visible y el ciclo de vida de las aplicaciones. Forense: permite ubicar dónde se manifiesta una acción, no implica acceso directo a su almacenamiento privado.</div><div class="diagram-note">CLAVE / Ninguna capa debe analizarse aislada: el valor forense surge al relacionar comportamiento, artefactos y contexto.</div></div></div></div>`),
  slide(5, `<div class="slide-inner"><div class="section-heading">${label('04 / Privilegios')}<div><h2>User Space vs Kernel Space</h2><p class="lede">El flujo de una llamada al sistema muestra cómo iOS mantiene una frontera entre aplicaciones, servicios y hardware.</p></div></div><div class="diagram-layout"><div class="flow" id="systemFlow"><div class="flow-node">APLICACIÓN</div><div class="flow-arrow">↓</div><div class="flow-node">USER SPACE</div><div class="flow-arrow">↓</div><div class="flow-node system">SYSTEM CALLS</div><div class="flow-arrow">↓</div><div class="flow-node">KERNEL XNU</div><div class="flow-arrow">↓</div><div class="flow-node">HARDWARE</div></div><div><h3 class="cyan">Impacto forense</h3><p class="slide-quiet">El aislamiento limita la ejecución de código no autorizado y dificulta técnicas de adquisición directa sin privilegios adecuados.</p><div class="metric-list"><div class="metric"><span class="metric-index">01</span><div><strong>Aislamiento</strong><span>Reduce el alcance de una aplicación comprometida.</span></div></div><div class="metric"><span class="metric-index">02</span><div><strong>POSIX + Mach</strong><span>Servicios y mensajería conectan procesos bajo controles del sistema.</span></div></div><div class="metric"><span class="metric-index">03</span><div><strong>Restricción</strong><span>La ruta técnica de análisis depende del estado del dispositivo.</span></div></div></div></div></div></div>`),
  slide(6, `<div class="slide-inner"><div class="section-heading">${label('05 / Almacenamiento')}<div><h2>Gestión del almacenamiento Flash</h2><p class="lede">NAND, controladores y procesos internos determinan cómo persisten y se reemplazan los bloques.</p></div></div><div class="storage-grid"><div class="nand-visual"><div class="nand-chip">NAND<br><span class="mono">FLASH</span></div><span class="nand-route one">DATA_01 ───→</span><span class="nand-route two">← BLOCK_07</span><span class="nand-route three">I/O BUFFER ─→</span></div><div class="metric-list"><div class="metric"><span class="metric-index">01</span><div><strong>Hardware</strong><span>Memorias NAND compactas integradas en placa con controladores lógicos.</span></div></div><div class="metric"><span class="metric-index">02</span><div><strong>Optimización</strong><span>Buffers y operaciones internas gestionan entrada y salida de datos.</span></div></div><div class="metric"><span class="metric-index">03</span><div><strong>Destrucción pasiva</strong><span>Garbage Collection y mecanismos relacionados con TRIM pueden reducir la recuperabilidad de datos eliminados.</span></div></div></div></div><div class="note-strip">REPRESENTACIÓN EDUCATIVA / La limpieza digital ilustra un proceso automático; no es un procedimiento de destrucción de evidencia.</div></div>`),
  slide(7, `<div class="slide-inner"><div class="section-heading">${label('06 / Preservación')}<div><h2>El reto forense de los datos eliminados</h2><p class="lede">Cada minuto puede cambiar la ventana de recuperación. La primera acción debe proteger el estado del dispositivo.</p></div></div><div class="diagram-layout"><div class="flow"><div class="flow-node">DATOS ELIMINADOS</div><div class="flow-arrow">↓</div><div class="flow-node">PROCESOS INTERNOS</div><div class="flow-arrow">↓</div><div class="flow-node system">REUTILIZACIÓN / LIMPIEZA</div><div class="flow-arrow">↓</div><div class="flow-node">MENOR RECUPERABILIDAD</div></div><div><div class="nand-visual"><div class="nand-chip">DEVICE<br><span class="mono">ISOLATED</span></div><span class="nand-route one">SHIELD / ON</span><span class="nand-route two">FARADAY BAG</span></div><div class="note-strip"><strong>PROTOCOLO</strong><br>La preservación debe realizarse siguiendo procedimientos forenses e institucionales. Evitar acciones que alteren innecesariamente el estado.</div></div></div></div>`),
  slide(8, `<div class="slide-inner"><div class="section-heading">${label('07 / Sistema de archivos')}<div><h2>Apple File System — APFS</h2><p class="lede">APFS se incorporó como sistema nativo en iOS 10.3 y reemplazó progresivamente a HFS+.</p></div></div><div class="diagram-layout"><div class="split-disk" id="splitDisk"><button class="disk-part selected" data-disk="system"><strong>PARTICIÓN<br>DEL SISTEMA</strong><span>Solo lectura<br>estructura esencial</span></button><button class="disk-part" data-disk="user"><strong>PARTICIÓN DE<br>DATOS DEL USUARIO</strong><span>Lectura / escritura<br>datos y aplicaciones</span></button></div><div><div id="diskDetail" class="layer-detail"><strong class="cyan">Partición del sistema</strong><br>Contiene componentes operativos protegidos. Su lectura y modificación dependen del modelo de seguridad y del estado del dispositivo.</div><div class="metric-list"><div class="metric"><span class="metric-index">01</span><div><strong>Almacenamiento moderno</strong><span>Optimizado para flash y operaciones eficientes.</span></div></div><div class="metric"><span class="metric-index">02</span><div><strong>Cifrado integrado</strong><span>Convive con mecanismos de protección de datos.</span></div></div></div></div></div></div>`),
  slide(9, `<div class="slide-inner"><div class="section-heading">${label('08 / Metadatos')}<div><h2>APFS y sus elementos de interés forense</h2><p class="lede">Copy-on-Write actualiza referencias sin sobrescribir inmediatamente el bloque original.</p></div></div><div class="copyflow"><div class="copy-step"><strong>ARCHIVO ORIGINAL</strong><span>Referencia A</span></div><div class="copy-step"><strong>MODIFICACIÓN</strong><span>Nuevo contenido</span></div><div class="copy-step"><strong>NUEVA UBICACIÓN</strong><span>Bloque disponible</span></div><div class="copy-step"><strong>REFERENCIA ACTUALIZADA</strong><span>Metadatos apuntan a B</span></div></div><div class="diagram-layout"><div><button class="primary-button" id="copyExampleButton" type="button">Ver ejemplo interactivo&nbsp; ↗</button><div class="note-strip" id="copyExample">Metadatos, inodos, snapshots y estructuras del sistema de archivos pueden aportar contexto, dependiendo del estado y método de adquisición.</div></div><div class="metric-list"><div class="metric"><span class="metric-index">01</span><div><strong>Copy-on-Write</strong><span>Las modificaciones se escriben en una ubicación nueva antes de actualizar la referencia.</span></div></div><div class="metric"><span class="metric-index">02</span><div><strong>Lectura contextual</strong><span>Un artefacto aislado no equivale automáticamente a una historia completa.</span></div></div></div></div></div>`),
  slide(10, `<div class="slide-inner"><div class="section-heading">${label('09 / Identidad')}<div><h2>Autenticación y control de acceso</h2><p class="lede">La identidad del usuario y la autorización de recursos convergen en un modelo de protección por capas.</p></div></div><div class="auth-layout"><div class="auth-ring"><div class="auth-core">NODO DE<br>AUTENTICACIÓN</div><span class="auth-token">FACE ID</span><span class="auth-token">TOUCH ID</span><span class="auth-token">CÓDIGO</span><span class="auth-token">PERMISOS</span></div><div><div class="metric-list"><div class="metric"><span class="metric-index">01</span><div><strong>Autenticación</strong><span>Verifica quién intenta acceder mediante factores disponibles en el dispositivo.</span></div></div><div class="metric"><span class="metric-index">02</span><div><strong>Autorización</strong><span>ACL y permisos POSIX determinan qué recurso puede utilizar un proceso.</span></div></div><div class="metric"><span class="metric-index">03</span><div><strong>Lectura forense</strong><span>Un método de adquisición debe respetar la separación entre identidad, claves y datos.</span></div></div></div></div></div></div>`),
  slide(11, `<div class="slide-inner"><div class="section-heading">${label('10 / Aislamiento')}<div><h2>Sandboxing: aislamiento de aplicaciones</h2><p class="lede">Cada aplicación trabaja dentro de su propio contenedor y no puede explorar libremente el espacio privado de otra.</p></div></div><div class="sandbox-grid"><div class="sandbox-app"><span>◈</span><strong>WhatsApp</strong><small>CONTENEDOR A</small></div><div class="sandbox-app"><span>▧</span><strong>Fotos</strong><small>CONTENEDOR B</small></div><div class="sandbox-app"><span>□</span><strong>Notas</strong><small>CONTENEDOR C</small></div><div class="sandbox-app"><span>✉</span><strong>Correo</strong><small>CONTENEDOR D</small></div></div><div class="blocked-path"><span>APP A</span><b>⊘ BLOQUEADO ⊘</b><span>ESCUDO</span><b>⊘ BLOQUEADO ⊘</b><span>APP B</span></div><div class="note-strip">El aislamiento fortalece la seguridad, pero también dificulta la adquisición directa sin privilegios adecuados o fuentes compatibles con el estado del dispositivo.</div></div>`),
  slide(12, `<div class="slide-inner"><div class="section-heading">${label('11 / Criptografía')}<div><h2>Secure Enclave y Data Protection</h2><p class="lede">Seguridad basada en hardware para proteger operaciones sensibles, claves y clases de datos.</p></div></div><div class="enclave-layout"><div class="enclave-chip"><div class="enclave-core">SECURE<br>ENCLAVE</div><span class="chip-label">SECURE BOOT</span><span class="chip-label">HARDWARE UID</span><span class="chip-label">DATA PROTECTION</span><span class="chip-label">BIOMETRÍA</span></div><div><div class="metric-list"><div class="metric"><span class="metric-index">01</span><div><strong>Secure Enclave</strong><span>Aísla operaciones sensibles de seguridad y criptografía.</span></div></div><div class="metric"><span class="metric-index">02</span><div><strong>Data Protection</strong><span>Usa clases criptográficas y claves protegidas por hardware y credenciales.</span></div></div><div class="metric"><span class="metric-index">03</span><div><strong>Ruta del dato</strong><span>ARCHIVO → CIFRADO → CLAVE PROTEGIDA → DATOS PROTEGIDOS</span></div></div></div></div></div></div>`),
  slide(13, `<div class="slide-inner"><div class="section-heading">${label('12 / Síntesis')}<div><h2>Conclusiones de la investigación</h2><p class="lede">La forense móvil exige leer la seguridad como parte de la evidencia, no como un obstáculo separado.</p></div></div><div class="conclusions"><article class="conclusion-card"><h3>01 / BARRERA ARQUITECTÓNICA</h3><strong>El entorno cerrado cambia las técnicas tradicionales.</strong><p>La adquisición está condicionada por privilegios, estado de bloqueo y compatibilidad de herramientas.</p></article><article class="conclusion-card"><h3>02 / METADATOS Y APFS</h3><strong>La estructura puede aportar contexto.</strong><p>APFS y sus metadatos pueden ser relevantes, según el método de adquisición y el estado del sistema.</p></article><article class="conclusion-card"><h3>03 / EVOLUCIÓN METODOLÓGICA</h3><strong>La seguridad obliga a especializarse.</strong><p>Hardware, cifrado y privacidad exigen metodologías documentadas y fuentes compatibles.</p></article></div><div class="final-path"><span>iOS</span><span>SEGURIDAD</span><span>CIFRADO</span><span>FORENSE</span><span>EVIDENCIA</span></div></div>`),
  slide(14, `<div class="slide-inner"><div class="section-heading">${label('13 / Conversación')}<div><h2>Preguntas integradoras</h2><p class="lede">Participación de todo el grupo <span class="gold">/ 5 minutos</span></p></div></div><div class="question-grid"><article class="question-card"><span class="question-index">PREGUNTA 01</span><h3>¿Cuál es el impacto forense de obtener una copia física de un iPhone bloqueado?</h3><button class="answer-button">Ver respuesta&nbsp; +</button><p class="answer">Una copia física no necesariamente permite interpretar directamente los datos: el cifrado, las claves protegidas por hardware y el estado del dispositivo siguen siendo determinantes.</p></article><article class="question-card"><span class="question-index">PREGUNTA 02</span><h3>¿Por qué Copy-on-Write de APFS puede ser relevante?</h3><button class="answer-button">Ver respuesta&nbsp; +</button><p class="answer">Porque las modificaciones usan nuevas ubicaciones y actualizan metadatos, lo que puede aportar información histórica dependiendo de la adquisición.</p></article></div><div class="note-strip">CIERRE / Investigar no es forzar el acceso: es preservar, documentar, interpretar y comunicar los límites de la evidencia.</div></div>`)
];

const container = document.querySelector('#slidesContainer');
const menu = document.querySelector('#slideMenu');
container.innerHTML = slides.join('');
menu.innerHTML = slideTitles.map((title, index) => `<button class="slide-menu-item" type="button" data-go="${index + 1}"><span>${String(index + 1).padStart(2, '0')}</span>${esc(title)}</button>`).join('');

let current = 1;
const total = slides.length;
const currentSlide = document.querySelector('#currentSlide');
const progressBar = document.querySelector('#progressBar');
const drawer = document.querySelector('#navigationDrawer');
const overlay = document.querySelector('#drawerOverlay');
const toastElement = document.querySelector('#toast');
let toastTimer;

function showToast(message) {
  toastElement.textContent = message;
  toastElement.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toastElement.classList.remove('show'), 3400);
}

function goToSlide(number) {
  const next = Math.max(1, Math.min(total, Number(number)));
  document.querySelector('.slide.active')?.classList.remove('active');
  document.querySelector(`[data-slide="${next}"]`).classList.add('active');
  document.querySelectorAll('.slide-menu-item').forEach((item) => item.classList.toggle('active', Number(item.dataset.go) === next));
  current = next;
  currentSlide.textContent = String(current).padStart(2, '0');
  progressBar.style.width = `${(current / total) * 100}%`;
  history.replaceState(null, '', `#slide-${current}`);
  if (window.innerWidth < 901) window.scrollTo({ top: 0, behavior: 'smooth' });
}

function openDrawer() { drawer.classList.add('open'); drawer.setAttribute('aria-hidden', 'false'); overlay.classList.add('visible'); }
function closeDrawer() { drawer.classList.remove('open'); drawer.setAttribute('aria-hidden', 'true'); overlay.classList.remove('visible'); }
function toggleAnswer(button) { const card = button.closest('.question-card'); card.classList.toggle('open'); button.textContent = card.classList.contains('open') ? 'Ocultar respuesta  −' : 'Ver respuesta  +'; }

function setupInteractions() {
  document.querySelectorAll('[data-go]').forEach((button) => button.addEventListener('click', () => { goToSlide(button.dataset.go); closeDrawer(); }));
  document.querySelectorAll('.expandable').forEach((card) => card.addEventListener('click', () => card.classList.toggle('expanded')));
  document.querySelectorAll('.topic-visual').forEach((visual) => visual.addEventListener('click', (event) => {
    event.stopPropagation();
    const enlarged = visual.classList.toggle('enlarged');
    visual.setAttribute('aria-expanded', String(enlarged));
    visual.querySelector('b').textContent = enlarged ? '×' : '+';
    if (enlarged) showToast(`${visualCaptions[Number(visual.dataset.visual) - 1]} / haz clic para cerrar`);
  }));
  document.querySelectorAll('.timeline-item').forEach((item) => item.addEventListener('click', () => {
    document.querySelectorAll('.timeline-item').forEach((node) => node.classList.remove('selected'));
    item.classList.add('selected');
    const details = { 2007: '2007 / El iPhone OS original establece la base de una plataforma móvil centrada en aplicaciones y datos personales.', 2010: '2010 / El nombre iOS consolida una familia de servicios y herramientas para un ecosistema móvil.', 2013: '2013 / Touch ID incorpora biometría como factor de autenticación ligado al hardware.', 2017: '2017 / Face ID amplía la autenticación biométrica con un sistema de profundidad.', 2019: '2019 / APFS y la seguridad de plataforma forman parte del análisis de almacenamiento moderno.', Hoy: 'Actualidad / La privacidad y la seguridad se integran en hardware, sistema operativo y servicios.' };
    document.querySelector('#timelineDetail').textContent = details[item.dataset.timeline];
  }));
  document.querySelectorAll('.layer').forEach((item) => item.addEventListener('click', () => {
    document.querySelectorAll('.layer').forEach((node) => node.classList.remove('selected')); item.classList.add('selected');
    const details = { kernel: '<strong class="cyan">Kernel XNU</strong><br>Gestiona memoria, procesos, dispositivos y seguridad de bajo nivel. Forense: define fronteras de privilegio y fuentes técnicas.', media: '<strong class="cyan">Media</strong><br>Coordina servicios multimedia. Forense: sus artefactos pueden conectar actividad, archivos y tiempo.', core: '<strong class="cyan">Core Services</strong><br>Proporciona persistencia, redes, ubicación y datos del sistema. Forense: concentra contexto de alto valor.', cocoa: '<strong class="cyan">Cocoa Touch</strong><br>Gestiona la interacción visible y el ciclo de vida de apps. Forense: ubica dónde se manifiesta una acción.' };
    document.querySelector('#layerDetail').innerHTML = details[item.dataset.layer];
  }));
  document.querySelectorAll('.disk-part').forEach((item) => item.addEventListener('click', () => {
    document.querySelectorAll('.disk-part').forEach((node) => node.classList.remove('selected')); item.classList.add('selected');
    document.querySelector('#diskDetail').innerHTML = item.dataset.disk === 'system' ? '<strong class="cyan">Partición del sistema</strong><br>Contiene componentes operativos protegidos. Su lectura y modificación dependen del modelo de seguridad y del estado del dispositivo.' : '<strong class="cyan">Partición de datos del usuario</strong><br>Concentra datos y aplicaciones. Su análisis exige considerar cifrado, permisos, estado de bloqueo y método de adquisición.';
  }));
  document.querySelectorAll('.answer-button').forEach((button) => button.addEventListener('click', () => toggleAnswer(button)));
  document.querySelector('#copyExampleButton').addEventListener('click', () => {
    const example = document.querySelector('#copyExample');
    example.innerHTML = example.dataset.active ? 'Archivo B / La referencia actualizada apunta al bloque nuevo. La interpretación depende de qué estructuras y metadatos estén disponibles.' : 'Ejemplo / Una edición genera una nueva ubicación; la referencia cambia y el bloque previo puede conservar contexto, si aún es accesible.';
    example.dataset.active = example.dataset.active ? '' : 'true';
  });
}

document.querySelector('#previousButton').addEventListener('click', () => goToSlide(current - 1));
document.querySelector('#nextButton').addEventListener('click', () => goToSlide(current + 1));
document.querySelector('#menuButton').addEventListener('click', openDrawer);
document.querySelector('#closeMenuButton').addEventListener('click', closeDrawer);
overlay.addEventListener('click', closeDrawer);
document.querySelector('#referencesButton').addEventListener('click', () => { document.querySelector('#referencesModal').hidden = false; });
document.querySelector('#closeReferencesButton').addEventListener('click', () => { document.querySelector('#referencesModal').hidden = true; });
document.querySelector('#pdfButton').addEventListener('click', () => { showToast('Abriendo diálogo de impresión. Selecciona “Guardar como PDF”.'); window.print(); });
document.querySelector('#presentationModeButton').addEventListener('click', () => {
  document.body.classList.toggle('presentation-mode');
  if (document.body.classList.contains('presentation-mode') && document.documentElement.requestFullscreen) document.documentElement.requestFullscreen().catch(() => {});
  if (!document.body.classList.contains('presentation-mode') && document.fullscreenElement) document.exitFullscreen().catch(() => {});
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') { closeDrawer(); document.querySelector('#referencesModal').hidden = true; document.querySelector('.topic-visual.enlarged')?.click(); }
  if (event.key === 'ArrowRight' || event.key === 'PageDown' || event.key === ' ') { event.preventDefault(); goToSlide(current + 1); }
  if (event.key === 'ArrowLeft' || event.key === 'PageUp') { event.preventDefault(); goToSlide(current - 1); }
  if (event.key === 'Home') goToSlide(1);
  if (event.key === 'End') goToSlide(total);
});

document.querySelector('#pptxButton').addEventListener('click', () => {
  if (!window.PptxGenJS) { showToast('El exportador necesita conexión para cargar PptxGenJS.'); return; }
  const pptx = new PptxGenJS();
  pptx.layout = 'LAYOUT_WIDE';
  pptx.author = 'Grupo 3 — ISUPOL';
  pptx.subject = 'Análisis forense en iOS';
  pptx.title = 'Análisis Forense iOS — Grupo 3';
  pptx.company = 'Instituto Superior Tecnológico Policía Nacional';
  const navy = '07111F'; const cyan = '60D7E5'; const gold = 'D7AE62'; const white = 'F3F7F8'; const muted = 'A9BEC9';
  const pptxData = [
    ['ANÁLISIS INTERNO DEL SISTEMA OPERATIVO iOS', 'Aplicado a la investigación forense digital\n\nGrupo 3 — Informática Básica, tercer parcial\nISUPOL'],
    ['EL DESAFÍO DE LA INFORMÁTICA FORENSE MÓVIL', 'Evidencia digital\nLos dispositivos móviles concentran contexto personal y operativo.\n\nEcosistema iOS\nEntorno cerrado con seguridad integrada en hardware.\n\nObjetivo\nRelacionar componentes internos con preservación y análisis.'],
    ['GENERALIDADES DE iOS', '2007 — iPhone OS\n2010 — Consolidación de iOS\n2013 — Touch ID\n2017 — Face ID\n2019 — Evolución de APFS y seguridad\nActualidad — Privacidad avanzada'],
    ['ARQUITECTURA DE iOS Y KERNEL XNU', 'Cocoa Touch\nCore Services\nMedia\nKernel XNU: Mach + componentes derivados de FreeBSD'],
    ['USER SPACE VS KERNEL SPACE', 'Aplicación → User Space → System Calls → Kernel XNU → Hardware\n\nImpacto forense: el aislamiento limita técnicas de adquisición directa sin privilegios adecuados.'],
    ['GESTIÓN DEL ALMACENAMIENTO FLASH', 'NAND, controladores lógicos, buffers y operaciones de entrada/salida.\n\nGarbage Collection y mecanismos relacionados con TRIM pueden reducir la recuperabilidad de datos eliminados.'],
    ['EL RETO FORENSE DE LOS DATOS ELIMINADOS', 'Datos eliminados → Procesos internos → Reutilización / limpieza → Menor recuperabilidad\n\nEstrategia conceptual: preservación inmediata siguiendo protocolos institucionales.'],
    ['APPLE FILE SYSTEM — APFS', 'Introducido como sistema nativo en iOS 10.3.\nReemplazó progresivamente a HFS+.\nOptimizado para almacenamiento moderno e integrado con cifrado.'],
    ['APFS Y ELEMENTOS DE INTERÉS FORENSE', 'Copy-on-Write: archivo original → modificación → nueva ubicación → referencia actualizada.\n\nMetadatos, inodos y snapshots pueden aportar contexto según adquisición.'],
    ['AUTENTICACIÓN Y CONTROL DE ACCESO', 'Face ID · Touch ID · Código alfanumérico\nPermisos · ACL · POSIX\n\nLa seguridad combina autenticación del usuario con autorización de recursos.'],
    ['SANDBOXING', 'WhatsApp · Fotos · Notas · Correo\nCada aplicación trabaja dentro de un contenedor.\n\nEl aislamiento fortalece la seguridad y limita la adquisición directa sin privilegios.'],
    ['SECURE ENCLAVE Y DATA PROTECTION', 'Secure Enclave · Secure Boot · Biometría · Llaves criptográficas · Hardware UID\n\nArchivo → Cifrado → Clave protegida → Datos protegidos.'],
    ['CONCLUSIONES DE LA INVESTIGACIÓN', 'Barrera arquitectónica — El entorno cerrado dificulta técnicas tradicionales.\n\nMetadatos y APFS — Pueden aportar contexto según método y estado.\n\nEvolución metodológica — Hardware y cifrado exigen especialización.'],
    ['PREGUNTAS INTEGRADORAS', '¿Qué impacto tiene una copia física de un iPhone bloqueado?\n\n¿Por qué Copy-on-Write puede ser relevante para el análisis forense?\n\nParticipación de todo el grupo — 5 minutos.']
  ];
  pptxData.forEach(([title, body], index) => {
    const page = pptx.addSlide(); page.background = { color: navy };
    page.addText('ISUPOL  /  GRUPO 03', { x: .55, y: .28, w: 3, h: .2, color: gold, fontFace: 'Arial', fontSize: 9, bold: true, charSpacing: 1.5 });
    page.addText(String(index + 1).padStart(2, '0'), { x: 12.35, y: .28, w: .45, h: .2, color: cyan, fontFace: 'Arial', fontSize: 9, align: 'right' });
    page.addShape(pptx.ShapeType.line, { x: .55, y: .72, w: 12.25, h: 0, line: { color: '27465F', width: 1 } });
    page.addText(title, { x: .7, y: 1.25, w: 11.8, h: .65, color: white, fontFace: 'Arial', fontSize: index === 0 ? 29 : 24, bold: true, margin: 0, breakLine: false, fit: 'shrink' });
    page.addText(body, { x: .75, y: 2.35, w: 10.9, h: 3.8, color: muted, fontFace: 'Arial', fontSize: 17, breakLine: false, valign: 'top', margin: .05, fit: 'shrink', paraSpaceAfterPt: 10 });
    page.addShape(pptx.ShapeType.line, { x: .75, y: 6.85, w: 2.1, h: 0, line: { color: cyan, width: 2 } });
    page.addText('ANÁLISIS FORENSE EN iOS  /  INFORMÁTICA BÁSICA', { x: .75, y: 7.02, w: 6.5, h: .2, color: '7894A4', fontFace: 'Arial', fontSize: 8, charSpacing: 1 });
  });
  pptx.writeFile({ fileName: 'Analisis_Forense_iOS_Grupo_3.pptx' }).then(() => showToast('PPTX generado: Analisis_Forense_iOS_Grupo_3.pptx')).catch(() => showToast('No fue posible generar el archivo PPTX.'));
});

setupInteractions();
const hashSlide = Number(location.hash.replace('#slide-', ''));
goToSlide(Number.isInteger(hashSlide) && hashSlide > 0 ? hashSlide : 1);
