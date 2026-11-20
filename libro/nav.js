// El orden de las páginas del libro. Para agregar una página nueva:
// 1) creá el .html con <body data-pagina="carpeta/nombre.html">
// 2) agregala acá, en el lugar que va. El índice y los botones se arman solos.
const PARTES = [
  { emoji: "🧰", titulo: "Antes de empezar", paginas: [
    ["antes/diccionario.html", "Las palabras de Roblox Studio (diccionario)"],
    ["antes/pantalla.html", "Las partes de la pantalla"],
    ["antes/probar-y-guardar.html", "Probar y guardar el juego"],
  ]},
  { emoji: "🧱", titulo: "Construir a mano (sin IA)", paginas: [
    ["construir/nombre-del-juego.html", "Cambiarle el nombre al juego"],
    ["construir/bloque.html", "Hacer un bloque y moverlo"],
    ["construir/cartel.html", "Poner un cartel con letras"],
    ["construir/torre.html", "Armar la Torre del Espacio"],
    ["construir/zona-segura.html", "Las zonas seguras"],
    ["construir/espacio.html", "Estrellas y planetas"],
    ["construir/gusano.html", "Los 5 gusanos"],
    ["construir/hoyos.html", "Los hoyos de los gusanos"],
    ["construir/juguetes.html", "Juguetes, bate y bananas"],
  ]},
  { emoji: "💻", titulo: "Código (scripts)", paginas: [
    ["codigo/que-es-un-script.html", "¿Qué es un script?"],
    ["codigo/donde-y-como-se-encuentran.html", "Dónde se guarda y cómo encuentra las cosas"],
    ["codigo/script-gusano.html", "Script Gusanos: cómo se mueven y atacan"],
    ["codigo/partida.html", "Script Partida: armadura y puntos"],
    ["codigo/juguetes.html", "Script Juguetes: lanzar y batear"],
    ["codigo/objetos.html", "Script Objetos: juguetes flotando y bananas"],
    ["codigo/pantalla.html", "Script Pantalla: tiempo y mensajes"],
    ["codigo/cielo-espacio.html", "Script de la noche: CieloEspacio"],
    ["codigo/shift-lock.html", "Script del Shift Lock"],
  ]},
  { emoji: "🏫", titulo: "Mis clases", paginas: [
    ["clases/clase-1.html", "Clase 1 — La Torre del Espacio y el gusano de lava (19/11/2026)"],
    ["clases/clase-2.html", "Clase 2 — Muchos gusanos, juguetes y armadura (19/11/2026)"],
    ["clases/lo-que-viene.html", "Lo que viene…"],
  ]},
];

(function () {
  const lista = [];
  PARTES.forEach(p => p.paginas.forEach(([url, titulo]) => lista.push({ url, titulo, parte: p })));

  const actual = document.body.dataset.pagina || "index.html";
  const raiz = "../".repeat(actual.split("/").length - 1);
  const i = lista.findIndex(x => x.url === actual);

  // Índice armado solo (solo en la portada)
  const indice = document.getElementById("indice");
  if (indice) {
    let n = 0;
    indice.innerHTML = PARTES.map(p =>
      `<div class="parte"><h3>${p.emoji} ${p.titulo}</h3><ol start="${n + 1}">` +
      p.paginas.map(([url, t]) => { n++; return `<li><a href="${url}">${t}</a></li>`; }).join("") +
      `</ol></div>`).join("");
  }

  if (i < 0) return; // la portada no lleva barra

  const yo = lista[i];
  const barra = document.createElement("nav");
  barra.className = "barra";
  barra.innerHTML = `<a href="${raiz}index.html">🏠 Índice</a>` +
    `<span class="donde">${yo.parte.emoji} ${yo.parte.titulo} › ${yo.titulo}</span>`;
  document.body.prepend(barra);

  const hoja = document.querySelector(".hoja");
  const pasos = document.createElement("div");
  pasos.className = "pasos";
  const ant = lista[i - 1], sig = lista[i + 1];
  pasos.innerHTML =
    (ant ? `<a href="${raiz}${ant.url}">⬅️ Anterior<small>${ant.titulo}</small></a>` : `<span></span>`) +
    (sig ? `<a class="sig" href="${raiz}${sig.url}">Siguiente ➡️<small>${sig.titulo}</small></a>` : `<span></span>`);
  hoja.append(pasos);

  const num = document.createElement("p");
  num.className = "num-pagina";
  num.textContent = `Página ${i + 1} de ${lista.length}`;
  hoja.append(num);
})();
