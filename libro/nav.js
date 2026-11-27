// El orden de las páginas del libro. Para agregar una página nueva:
// 1) creá el .html con <body data-pagina="carpeta/nombre.html">
// 2) agregala acá, en el lugar que va. El índice y los botones se arman solos.
const PARTES = [
  { emoji: "🎯", titulo: "Cómo estudiar (¡leé esto primero!)", paginas: [
    ["estudiar/recomendaciones.html", "Mis reglas para estudiar y mis niveles"],
  ]},
  { emoji: "🧰", titulo: "Antes de empezar", paginas: [
    ["antes/diccionario.html", "Las palabras de Roblox Studio (diccionario)"],
    ["antes/pantalla.html", "Las partes de la pantalla"],
    ["antes/pestanas.html", "Las pestañas de arriba (Home, Model, Test, View)"],
    ["antes/la-lista.html", "La lista (Explorer): la casa del juego"],
    ["antes/las-caracteristicas.html", "Las características (Properties)"],
    ["antes/toolbox.html", "La caja de cosas (Toolbox)"],
    ["antes/editor-y-output.html", "La hoja de scripts y la ventana Output"],
    ["antes/como-se-arma.html", "El camino para armar cualquier cosa"],
    ["antes/probar-y-guardar.html", "Probar y guardar el juego"],
  ]},
  { emoji: "🧱", titulo: "Construir a mano (sin IA)", paginas: [
    ["construir/nombre-del-juego.html", "Cambiarle el nombre al juego"],
    ["construir/bloque.html", "Hacer un bloque y moverlo"],
    ["construir/cartel.html", "Poner un cartel con letras"],
    ["construir/torre.html", "Armar la torre"],
    ["construir/zona-segura.html", "Las zonas seguras"],
    ["construir/ladrillos.html", "Ladrillos y cielo de día"],
    ["construir/gusano.html", "Los 5 gusanos"],
    ["construir/hoyos.html", "Los hoyos: luz y cuenta 3, 2, 1"],
    ["construir/juguetes.html", "Juguetes, bate y bananas"],
    ["construir/lobby.html", "El lobby: la isla donde aparecés"],
    ["construir/trampas.html", "Bloques trampa y el dado"],
  ]},
  { emoji: "💻", titulo: "Código (scripts)", paginas: [
    ["codigo/que-es-un-script.html", "¿Qué es un script?"],
    ["codigo/colores-del-codigo.html", "Los colores del código"],
    ["codigo/funciones.html", "Funciones 1: máquinas que hacen algo"],
    ["codigo/funciones-con-datos.html", "Funciones 2: le das cosas y te devuelve cosas"],
    ["codigo/funciones-y-eventos.html", "Funciones 3: funciones que esperan (eventos)"],
    ["codigo/funciones-en-mi-juego.html", "Funciones 4: las funciones de mi juego"],
    ["codigo/donde-y-como-se-encuentran.html", "Dónde se guarda y cómo encuentra las cosas"],
    ["codigo/script-gusano.html", "Script Gusanos: cómo se mueven y atacan"],
    ["codigo/partida.html", "Script Partida: armadura y puntos"],
    ["codigo/juguetes.html", "Script Juguetes: lanzar y batear"],
    ["codigo/objetos.html", "Script Objetos: juguetes flotando y bananas"],
    ["codigo/pantalla.html", "Script Pantalla: tiempo y mensajes"],
    ["codigo/paraguas.html", "Scripts Flotar y Paraguas: el empujón y el paraguas"],
    ["codigo/shift-lock.html", "Script del Shift Lock"],
    ["codigo/mejoras.html", "Niveles, globo, agujero negro, clima y tablas"],
    ["codigo/trampas.html", "Script Trampas: bloques trampa, dado y dificultad"],
    ["codigo/clima.html", "Scripts Clima, ClimaLocal y PoseParaguas"],
    ["codigo/logros-y-tienda.html", "Logros, misiones y tienda"],
  ]},
  { emoji: "🏫", titulo: "Mis clases", paginas: [
    ["clases/clase-1.html", "Clase 1 — La Torre del Espacio y el gusano de lava (19/11/2026)"],
    ["clases/clase-2.html", "Clase 2 — Muchos gusanos, juguetes y armadura (19/11/2026)"],
    ["clases/clase-3.html", "Clase 3 — Torre de ladrillos, hoyos que avisan y paraguas (20/11/2026)"],
    ["clases/clase-4.html", "Clase 4 — Lobby, niveles, clima y agujero negro (25/11/2026)"],
    ["clases/clase-5.html", "Clase 5 — Bloques trampa, el dado y la dificultad (26/11/2026)"],
    ["clases/clase-6.html", "Clase 6 — Clima que cambia solo y paraguas con equilibrio (26/11/2026)"],
    ["clases/clase-7.html", "Clase 7 — Misiones, logros y tienda (27/11/2026)"],
    ["clases/lo-que-viene.html", "¿Y ahora? ¡A aprender a programar!"],
  ]},
];


// Pinta de colores el código Luau de todos los <pre> (menos los que tienen class="arbol").
function pintarCodigo() {
  const CLAVE = new Set(["local","function","end","if","then","else","elseif","for","in","do","while","repeat","until","return","break","continue","not","and","or"]);
  const VALOR = new Set(["true","false","nil"]);
  const RAICES = new Set(["game","workspace","script","task","math","Vector3","CFrame","Color3","Instance","Enum","table","string","ipairs","pairs","require","print","wait","tick","os","UDim2","BrickColor","TweenInfo"]);
  const esc = t => t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
  const re = /(--[^\n]*)|("(?:[^"\\n]|\.)*"|'(?:[^'\\n]|\.)*')|(\b\d+(?:\.\d+)?\b)|([A-Za-z_][A-Za-z0-9_]*)|(\.\.\.|\.\.|==|~=|<=|>=|\+=|-=|[=+\-*\/<>#])/g;
  document.querySelectorAll("pre").forEach(pre => {
    if (pre.classList.contains("arbol")) return;
    const txt = pre.textContent;
    if (/[▾▸]/.test(txt)) { pre.classList.add("arbol"); return; }
    let out = "", last = 0, m;
    re.lastIndex = 0;
    while ((m = re.exec(txt))) {
      out += esc(txt.slice(last, m.index));
      const t = esc(m[0]);
      if (m[1]) out += `<span class="c">${t}</span>`;
      else if (m[2]) out += `<span class="s">${t}</span>`;
      else if (m[3]) out += `<span class="n">${t}</span>`;
      else if (m[4]) {
        const w = m[4], sig = txt.slice(re.lastIndex).match(/^\s*(\(|")/), ant = txt[m.index - 1];
        if (CLAVE.has(w)) out += `<span class="k">${t}</span>`;
        else if (VALOR.has(w)) out += `<span class="n">${t}</span>`;
        else if (sig) out += `<span class="f">${t}</span>`;           // algo( → una función
        else if (RAICES.has(w) && ant !== ".") out += `<span class="r">${t}</span>`;
        else if (ant === "." || ant === ":") out += `<span class="p">${t}</span>`;  // .Nombre → algo de adentro
        else out += t;
      }
      else out += `<span class="o">${t}</span>`;
      last = re.lastIndex;
    }
    pre.innerHTML = out + esc(txt.slice(last));
    pre.classList.add("luau");
  });
}
pintarCodigo();

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
