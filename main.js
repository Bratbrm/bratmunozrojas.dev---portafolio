const root = document.documentElement;
const correo = 'bratbrm@gmail.com';
const quieto = matchMedia('(prefers-reduced-motion: reduce)').matches;

// ---------- Idioma ----------
// El HTML está en español; este diccionario da la versión en inglés de cada texto exacto.
const EN = {
  'Cargando portafolio': 'Loading portfolio',
  "Hola, soy": "Hi, I'm",
  "Ponte en contacto": "Get in touch",
  "Contáctame": "Contact me",
  "Ver detalles": "View details",
  "Ver más proyectos": "View more projects",
  "o escríbeme a": "or write to me at",
  "En línea": "Online",
  "Pregúntame lo que quieras…": "Ask me anything…",
  "Circuito de atención por servicios, con ficha médica y diagnósticos": "Service-based patient flow with medical records and diagnoses",
  "Firma de especialistas, lector de huella y cámara": "Specialist sign-off, fingerprint reader and camera",
  "Portal donde cada empresa descarga la historia clínica laboral": "Portal where each company downloads its workers' occupational health records",
  "Acceso para que los pacientes vean sus resultados": "Patient access to view their results",
  "Funciona en web, Windows y Android": "Runs on web, Windows and Android",
  "Registro de pacientes e historias clínicas": "Patient registry and medical records",
  "Auditoría de quién vio o cambió cada dato": "Audit trail of who viewed or changed each record",
  "Respaldo y restauración desde el propio sistema": "Backup and restore from within the system",
  "Microservicios detrás de un API gateway": "Microservices behind an API gateway",
  "Se instala con un solo comando en Docker": "Installs with a single Docker command",
  'Saltar al contenido': 'Skip to content',
  'Principal': 'Main', 'Menú móvil': 'Mobile menu', 'Abrir menú': 'Open menu',
  'Inicio': 'Home', 'Sobre mí': 'About me', 'Experiencia': 'Experience', 'Proyectos': 'Projects', 'Contacto': 'Contact',
  'Hola, soy Brat': "Hi, I'm Brat",
  'Desarrollador Fullstack': 'Fullstack Developer',
  'Me gusta construir software que la gente use de verdad. Desarrollo sistemas web, de escritorio y móviles, desde la interfaz hasta el servidor, y los dejo listos para producción.':
    'I like building software people actually use. I develop web, desktop and mobile systems, from the interface to the server, and ship them ready for production.',
  'Ver proyectos': 'View projects', 'Contactar': 'Contact me', 'Conecta': 'Connect', 'Correo': 'Email',
  '2 sistemas en producción y entrega': '2 systems in production and delivery',
  'TypeScript y Java': 'TypeScript and Java',
  'Conóceme': 'Get to know me', 'Quién soy': 'Who I am', 'Mi enfoque': 'My approach',
  'Soy desarrollador de software en Ica, Perú. Soy técnico en desarrollo de software por SENATI y estoy terminando Ingeniería de Software en la UTP. Trabajo en web, escritorio y móvil, del frontend a la infraestructura.':
    "I'm a software developer based in Ica, Peru. I hold a technical degree in software development from SENATI and I'm finishing a Software Engineering degree at UTP. I work across web, desktop and mobile, from frontend to infrastructure.",
  'Primero entiendo el problema; luego elijo la solución más simple que funcione. Código claro, pruebas y sistemas fáciles de mantener.':
    'First I understand the problem; then I choose the simplest solution that works. Clean code, tests and systems that are easy to maintain.',
  'Datos personales': 'Personal details', 'Nombre': 'Name', 'Ubicación': 'Location', 'Formación': 'Education',
  'Ica, Perú': 'Ica, Peru',
  'Ingeniería de Software · UTP (egreso 2027)': 'Software Engineering · UTP (graduating 2027)',
  'Técnico en Desarrollo de Software · SENATI (2018–2021)': 'Software Development Technician · SENATI (2018–2021)',
  'Trayectoria': 'Career path',
  'Feb 2026 – Actualidad · Jornada completa': 'Feb 2026 – Present · Full-time',
  'Ago 2021 – Ene 2026 · Híbrido': 'Aug 2021 – Jan 2026 · Hybrid',
  '+5 años de experiencia': '5+ years of experience',
  'Desarrollo de aplicaciones web y móviles (Android e iOS) y de servicios con Spring Boot y .NET Core, con mensajería en Kafka y RabbitMQ, caché en Redis, pruebas con JUnit y Mockito, y despliegue continuo con Jenkins y OpenShift.':
    'Development of web and mobile apps (Android and iOS) and services with Spring Boot and .NET Core, with messaging on Kafka and RabbitMQ, Redis caching, testing with JUnit and Mockito, and continuous delivery with Jenkins and OpenShift.',
  'Diseño y desarrollo de interfaces de usuario y aplicaciones web con AngularJS y TypeScript, y de servicios con Quarkus, ASP.NET MVC, PHP y Go. Implementé mejoras y actualicé el código según las necesidades de cada proyecto.':
    "Designed and built user interfaces and web applications with AngularJS and TypeScript, and services with Quarkus, ASP.NET MVC, PHP and Go. Implemented improvements and updated code to fit each project's needs.",
  'Policlínico de salud ocupacional': 'Occupational health clinic',
  'Construí la plataforma que une la atención, la firma de especialistas y la entrega de resultados. Funciona en web, Windows y Android, con lector de huella, firma digitalizada y un portal para empresas y pacientes.':
    'I built the platform that connects patient care, specialist sign-off and results delivery. It runs on web, Windows and Android, with a fingerprint reader, digital signatures and a portal for companies and patients.',
  'Consultorio médico particular': 'Private medical practice',
  'Desarrollé un sistema de historias clínicas con microservicios, auditoría de accesos y respaldos desde el propio sistema, que se instala con un solo comando.':
    'I developed a medical records system with microservices, access auditing and built-in backups, installed with a single command.',
  'Habilidades y herramientas': 'Skills & tools', 'Mi stack': 'My tech stack',
  'Interfaces claras, rápidas y responsivas.': 'Clear, fast and responsive interfaces.',
  'APIs y microservicios seguros y mantenibles.': 'Secure, maintainable APIs and microservices.',
  'Datos y mensajería': 'Data & messaging', 'Bases relacionales, caché, colas y archivos.': 'Relational databases, caching, queues and files.',
  'Móvil y escritorio': 'Mobile & desktop', 'La misma app en el teléfono y en la PC.': 'The same app on your phone and your PC.',
  'DevOps y nube': 'DevOps & cloud', 'Del código a producción, sin pasos a mano.': 'From code to production, with no manual steps.',
  'Pruebas y herramientas': 'Testing & tools', 'Calidad medida y trabajo en equipo.': 'Measured quality and teamwork.',
  'Portafolio': 'Portfolio', 'Proyectos destacados': 'Selected works',
  'Atenciones': 'Appointments', 'Servicios': 'Services', 'Firma y huella': 'Signature & fingerprint', 'Portal de empresas': 'Company portal',
  'Resultados': 'Results', 'Reportes': 'Reports', 'Pacientes': 'Patients', 'Historias': 'Records', 'Usuarios y roles': 'Users & roles',
  'Auditoría': 'Audit', 'Respaldos': 'Backups', 'Licencia': 'License',
  'Plataforma de salud ocupacional': 'Occupational health platform',
  'Atención por servicios, ficha médica, diagnósticos y firma de especialistas. Las empresas descargan la historia clínica laboral y ven exámenes por vencer.':
    "Service-based patient flow, medical records, diagnoses and specialist sign-off. Companies download each worker's occupational health record and see upcoming exam expirations.",
  'Sistema de historias clínicas': 'Medical records system',
  'Pacientes, historias clínicas y auditoría de cada acceso para un consultorio. Respaldo y restauración desde el propio sistema.':
    'Patients, medical records and auditing of every access for a private practice. Backup and restore from within the system.',
  'Hablemos': "Let's talk", 'Trabajemos juntos': "Let's work together",
  '¿Tienes un proyecto, una vacante o necesitas asesoramiento? Escríbeme y te respondo lo antes posible.':
    "Have a project, a job opening or need advice? Write to me and I'll get back to you as soon as possible.",
  'Envíame un correo directamente': 'Send me an email directly', 'Mensaje': 'Message',
  'Tu nombre': 'Your name', 'tucorreo@ejemplo.com': 'you@example.com', 'Cuéntame sobre tu proyecto': 'Tell me about your project',
  'Enviar mensaje': 'Send message', 'Se abrirá tu aplicación de correo con el mensaje listo.': 'Your email app will open with the message ready.',
  '© Brat Muñoz Rojas · Ica, Perú': '© Brat Muñoz Rojas · Ica, Peru',
  'Asistente': 'Assistant', 'Asistente de Brat': "Brat's assistant", 'Respuestas rápidas': 'Quick answers',
  'Cerrar asistente': 'Close assistant', 'Abrir asistente': 'Open assistant',
  'Escribe tu pregunta': 'Type your question', 'Escribe tu pregunta…': 'Type your question…', 'Enviar pregunta': 'Send question',
};
const TEXTO = {
  es: {
    titulo: 'Brat Muñoz Rojas · Desarrollador Fullstack',
    roles: ['Desarrollador Fullstack', 'Desarrollador de Software', 'Web · Escritorio · Móvil'],
    temaOscuro: 'Cambiar a modo oscuro', temaClaro: 'Cambiar a modo claro',
    asunto: 'Contacto desde el portafolio', responderA: 'Responder a',
    saludo: '¡Hola! Soy el asistente de Brat. ¿Qué te gustaría saber sobre su experiencia o sus proyectos?',
    noSe: 'Puedo contarte sobre Brat, sus proyectos, su stack o cómo contactarlo. Elige una pregunta de abajo.',
    chat: [
      { p: '¿Quién es Brat?', claves: ['quien', 'quién', 'brat', 'eres', 'sobre'], r: 'Brat Muñoz Rojas es desarrollador fullstack en Ica, Perú, con más de 5 años de experiencia. Es técnico en desarrollo de software por SENATI y termina Ingeniería de Software en la UTP en 2027. Construye sistemas web, de escritorio y móviles, del frontend al servidor.' },
      { p: '¿Qué proyectos ha hecho?', claves: ['proyecto', 'trabajo', 'experiencia', 'hecho'], r: 'Trabaja en Caja Ica desde febrero de 2026; antes estuvo 4 años y medio en Holosalud. Como freelance hizo una plataforma de salud ocupacional (React, Node.js, PostgreSQL, Electron) y un sistema de historias clínicas (Angular, Spring Boot, Docker). Míralos en Experiencia y Proyectos.' },
      { p: '¿Con qué tecnologías trabaja?', claves: ['tecnolog', 'stack', 'lenguaje', 'framework', 'sabe'], r: 'Frontend con React, Angular y Vue; backend con Java (Spring Boot, Quarkus), .NET, Node.js y PHP; PostgreSQL, MySQL, Redis, Kafka y RabbitMQ; Docker, OpenShift y Jenkins para desplegar; pruebas con JUnit y SonarQube.' },
      { p: '¿Cómo lo contacto?', claves: ['contact', 'correo', 'email', 'linkedin', 'contratar', 'precio', 'cotiz'], r: `Escríbele a ${correo} o por LinkedIn (in/bmrds). También puedes usar el formulario de Contacto.` },
    ],
  },
  en: {
    titulo: 'Brat Muñoz Rojas · Fullstack Developer',
    roles: ['Fullstack Developer', 'Software Developer', 'Web · Desktop · Mobile'],
    temaOscuro: 'Switch to dark mode', temaClaro: 'Switch to light mode',
    asunto: 'Contact from your portfolio', responderA: 'Reply to',
    saludo: "Hi! I'm Brat's assistant. What would you like to know about his experience or projects?",
    noSe: 'I can tell you about Brat, his projects, his tech stack or how to reach him. Pick a question below.',
    chat: [
      { p: 'Who is Brat?', claves: ['who', 'brat', 'about'], r: 'Brat Muñoz Rojas is a fullstack developer based in Ica, Peru, with 5+ years of experience. He holds a software development technical degree from SENATI and finishes his Software Engineering degree at UTP in 2027. He builds web, desktop and mobile systems, from frontend to server.' },
      { p: 'What projects has he built?', claves: ['project', 'work', 'experience', 'built'], r: 'He has worked at Caja Ica since February 2026, after 4.5 years at Holosalud. As a freelancer he built an occupational health platform (React, Node.js, PostgreSQL, Electron) and a medical records system (Angular, Spring Boot, Docker). See Experience and Projects.' },
      { p: 'What technologies does he use?', claves: ['tech', 'stack', 'language', 'framework', 'skill'], r: 'Frontend with React, Angular and Vue; backend with Java (Spring Boot, Quarkus), .NET, Node.js and PHP; PostgreSQL, MySQL, Redis, Kafka and RabbitMQ; Docker, OpenShift and Jenkins for deployment; testing with JUnit and SonarQube.' },
      { p: 'How can I contact him?', claves: ['contact', 'email', 'mail', 'linkedin', 'hire', 'price', 'quote'], r: `Email ${correo} or reach out on LinkedIn (in/bmrds). You can also use the Contact form.` },
    ],
  },
};
let idioma = (() => { try { const g = localStorage.getItem('idioma'); if (g) return g; } catch {} return navigator.language?.toLowerCase().startsWith('es') ? 'es' : 'en'; })();
const t = () => TEXTO[idioma];

const nodosTexto = [];
const caminante = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
for (let n; (n = caminante.nextNode());) if (EN[n.nodeValue.trim()]) nodosTexto.push({ n, es: n.nodeValue });
const atributos = [];
for (const el of document.querySelectorAll('[placeholder], [aria-label], [alt]')) {
  for (const a of ['placeholder', 'aria-label', 'alt']) {
    const v = el.getAttribute(a);
    if (v && EN[v]) atributos.push({ el, a, es: v });
  }
}
const idiomaBtn = document.getElementById('idioma');
function aplicarIdioma() {
  const en = idioma === 'en';
  root.lang = idioma;
  document.title = t().titulo;
  for (const { n, es } of nodosTexto) n.nodeValue = en ? es.replace(es.trim(), EN[es.trim()]) : es;
  for (const { el, a, es } of atributos) el.setAttribute(a, en ? EN[es] : es);
  idiomaBtn.textContent = en ? 'ES' : 'EN';
  idiomaBtn.lang = en ? 'es' : 'en';
  idiomaBtn.setAttribute('aria-label', en ? 'Cambiar a español' : 'Switch to English');
  pintarTema();
  reiniciarRoles();
  armarChat();
}
idiomaBtn.addEventListener('click', () => {
  idioma = idioma === 'es' ? 'en' : 'es';
  try { localStorage.setItem('idioma', idioma); } catch {}
  aplicarIdioma();
});

// ---------- Tema ----------
// El guardado gana; si no hay, el del sistema.
const temaBtn = document.getElementById('tema');
const oscuroSistema = matchMedia('(prefers-color-scheme: dark)');
const esOscuro = () => root.dataset.theme ? root.dataset.theme === 'dark' : oscuroSistema.matches;
function pintarTema() {
  const oscuro = esOscuro();
  root.toggleAttribute('data-dark', oscuro);
  temaBtn.setAttribute('aria-label', oscuro ? t().temaClaro : t().temaOscuro);
}
temaBtn.addEventListener('click', () => {
  root.dataset.theme = esOscuro() ? 'light' : 'dark';
  try { localStorage.setItem('tema', root.dataset.theme); } catch {}
  pintarTema();
});
oscuroSistema.addEventListener('change', pintarTema);

// ---------- Pantalla de carga ----------
// Se va al cargar la página (mínimo lo que dura la barra).
const inicio = performance.now();
let escribiendo = false;
addEventListener('load', () => {
  const espera = quieto ? 0 : Math.max(0, 1400 - (performance.now() - inicio));
  setTimeout(() => {
    root.classList.add('saliendo', 'listo');
    setTimeout(() => root.classList.remove('cargando', 'saliendo'), 650);
    if (!quieto) { escribiendo = true; setTimeout(escribir, 2400); }
  }, espera);
});

// Menú móvil: se cierra al elegir una sección.
const menu = document.querySelector('.menu');
menu.addEventListener('click', (e) => { if (e.target.closest('a')) menu.open = false; });

// Sección activa en la navegación.
const enlaces = [...document.querySelectorAll('.links a')];
const observador = new IntersectionObserver((entradas) => {
  for (const e of entradas) {
    if (!e.isIntersecting) continue;
    for (const a of enlaces) a.setAttribute('aria-current', String(a.hash === `#${e.target.id}`));
  }
}, { rootMargin: '-45% 0px -50% 0px' });
document.querySelectorAll('main > section[id]').forEach((s) => observador.observe(s));

// ---------- Entrada animada de Sobre mí ----------
if (!quieto) {
  root.classList.add('revelar');
  const marcar = (el, i) => { if (!el.hasAttribute('data-reveal')) el.setAttribute('data-reveal', ''); el.style.setProperty('--i', i); };
  document.querySelectorAll('main > section:not(.hero) > .wrap').forEach((w) => {
    const k = w.querySelector(':scope > .kicker'); const t = w.querySelector(':scope > h2');
    if (k && !k.hasAttribute('data-reveal')) marcar(k, 0);
    if (t && !t.hasAttribute('data-reveal')) marcar(t, 1);
  });
  document.querySelectorAll('.group').forEach((g) => { marcar(g.querySelector('h3'), 0); marcar(g.querySelector('p'), 1); g.querySelectorAll('li').forEach((li, i) => marcar(li, i + 1)); });
  document.querySelectorAll('.work').forEach((w, i) => marcar(w, i + 2));
  marcar(document.querySelector('.more-wrap'), 2);
  marcar(document.querySelector('.form'), 2);
  const revelador = new IntersectionObserver((entradas) => {
    for (const e of entradas) if (e.isIntersecting) { e.target.classList.add('visible'); revelador.unobserve(e.target); }
  }, { threshold: 0.2 });
  document.querySelectorAll('[data-reveal], .timeline > li').forEach((el) => revelador.observe(el));

  // La línea de la experiencia se llena con el scroll.
  const linea = document.querySelector('.timeline');
  let pendiente = false;
  const avanzar = () => {
    pendiente = false;
    const caja = linea.getBoundingClientRect();
    const avance = Math.min(1, Math.max(0, (innerHeight * 0.6 - caja.top) / caja.height));
    linea.style.setProperty('--avance', avance.toFixed(3));
  };
  addEventListener('scroll', () => { if (!pendiente) { pendiente = true; requestAnimationFrame(avanzar); } }, { passive: true });
  avanzar();
}

// ---------- Texto que se escribe y se borra ----------
const typed = document.querySelector('.typed');
let r = 0, i = 0, borrando = true;
function reiniciarRoles() {
  r = 0; i = t().roles[0].length; borrando = true;
  typed.textContent = t().roles[0];
}
function escribir() {
  const texto = t().roles[r];
  i = Math.min(i, texto.length) + (borrando ? -1 : 1);
  typed.textContent = texto.slice(0, Math.max(i, 0));
  let espera = borrando ? 35 : 75;
  if (!borrando && i >= texto.length) { borrando = true; espera = 2400; }
  else if (borrando && i <= 0) { borrando = false; i = 0; r = (r + 1) % t().roles.length; espera = 350; }
  setTimeout(escribir, espera);
}

// ---------- Formulario ----------
// Sin servidor: arma el correo y lo abre en la app del visitante.
// shortcut: depende de que el visitante tenga app de correo; si llegan muchos mensajes, usar un servicio de formularios.
document.getElementById('form').addEventListener('submit', (e) => {
  e.preventDefault();
  const d = new FormData(e.target);
  const asunto = `${t().asunto}: ${d.get('nombre').trim()}`;
  const cuerpo = `${d.get('mensaje').trim()}\n\n${t().responderA}: ${d.get('email').trim()}`;
  location.href = `mailto:${correo}?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(cuerpo)}`;
});

// ---------- Asistente de respuestas rápidas ----------
// Sin IA: respuestas escritas a mano.
const chat = document.getElementById('chat');
const abrir = document.getElementById('chat-abrir');
const log = document.getElementById('chat-log');
const quick = document.getElementById('chat-quick');
const entrada = document.getElementById('chat-input');

function decir(texto, quien) {
  const p = document.createElement('p');
  p.className = `msg ${quien}`;
  p.textContent = texto;
  const hora = document.createElement('time');
  hora.textContent = new Date().toLocaleTimeString(idioma === 'en' ? 'en-US' : 'es-PE', { hour: '2-digit', minute: '2-digit' });
  p.append(hora);
  log.append(p);
  log.scrollTop = log.scrollHeight;
}
function responder(pregunta) {
  decir(pregunta, 'yo');
  const q = pregunta.toLowerCase();
  const hallada = t().chat.find((x) => x.claves.some((c) => q.includes(c)));
  const puntos = document.createElement('p');
  puntos.className = 'msg bot escribiendo';
  puntos.setAttribute('aria-hidden', 'true');
  puntos.innerHTML = '<i></i><i></i><i></i>';
  log.append(puntos);
  log.scrollTop = log.scrollHeight;
  setTimeout(() => { puntos.remove(); decir(hallada ? hallada.r : t().noSe, 'bot'); }, quieto ? 0 : 900);
}
function armarChat() {
  log.replaceChildren();
  quick.replaceChildren(...t().chat.map((x) => {
    const b = document.createElement('button');
    b.type = 'button';
    b.textContent = x.p;
    b.addEventListener('click', () => responder(x.p));
    return b;
  }));
  if (!chat.hidden) decir(t().saludo, 'bot');
}
const fondo = document.getElementById('chat-fondo');
fondo.addEventListener('click', () => alternarChat(false));
function alternarChat(abierto) {
  if (abierto) {
    chat.hidden = fondo.hidden = false;
    requestAnimationFrame(() => requestAnimationFrame(() => { chat.classList.add('abierto'); fondo.classList.add('abierto'); }));
  } else {
    chat.classList.remove('abierto'); fondo.classList.remove('abierto');
    setTimeout(() => { if (!chat.classList.contains('abierto')) chat.hidden = fondo.hidden = true; }, quieto ? 0 : 260);
  }
  abrir.setAttribute('aria-expanded', String(abierto));
  if (abierto && !log.childElementCount) decir(t().saludo, 'bot');
  if (abierto) entrada.focus(); else abrir.focus();
}
abrir.addEventListener('click', () => alternarChat(!chat.classList.contains('abierto')));
document.getElementById('chat-cerrar').addEventListener('click', () => alternarChat(false));
document.getElementById('chat-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const q = entrada.value.trim();
  if (q) { responder(q); entrada.value = ''; }
});
addEventListener('keydown', (e) => { if (e.key === 'Escape' && chat.classList.contains('abierto')) alternarChat(false); });

aplicarIdioma();
