# Curso de Roblox

## Quién soy

Tengo 11 años y hablo solo español. Explicame todo en español fácil, despacito, con frases cortas y pasos numerados. Si usás una palabra en inglés, decime qué quiere decir.

(A veces escribe mi tío, que es adulto y es mi tutor. Sus mensajes se notan porque son de adulto.)

## Mi juego

- Nombre: **"Primer juego"** (Roblox Studio, placeId 101769582187109, universeId 10770557745). Es **un solo juego**: todo lo que aprendo va en este juego.
- Me conecto con Roblox Studio por el MCP `Roblox_Studio`.
- No copiar juegos de otros (personajes, monstruos, dibujos). Hacemos juegos **del mismo tipo**, pero con cosas inventadas por mí.
- **El juego está TERMINADO (pedido del tío, 20/11/2026): no agregar cosas nuevas.** (Excepción: el 25/11/2026 el tío pidió la Clase 4: lobby, niveles, clima, globo, banana-portal (después cambiada a agujero negro), tablas.) Ahora Dylan aprende a programarlo (ver `recomendaciones-objetivo.md`). Solo arreglos o cambios de números/diseño si el tío lo pide.
- Lo que hay (Clases 1, 2 y 3): **la torre de ladrillos, de día, con muchos gusanos, juguetes, armadura y paraguas**. Es para varios jugadores a la vez: todo pasa en el servidor, igual para todos, **sin cuenta regresiva de partida**. (En la Clase 3, 20/11/2026, dejó de ser "del espacio"; el grupo se sigue llamando `TorreEspacio` porque los scripts lo buscan así.)
  - Aparecés en el `Lobby` (ver Clase 4) y cruzás el puente al `Inicio` de la torre.
  - `Workspace.TorreEspacio` (centro 6000, 0, 6000): `Columna` (Brick), `AnilloLuz` (Brick gris), `Escalones.Escalon1..96` (Brick; color por vuelta: amarillo, gris, arena, gris oscuro, y se repite) (8 vueltas de 12; espiral radio 18, gira 30°; 4 partes de 24: Fácil 6x1x7 sube 3.5, Medio 5x1x5 sube 4, Difícil 4x1x4/2x1x6 sube 4, Experto 3x1x3/1.6x1x6 sube 4.5; el primero en y=150), `Inicio`, `ZonasSeguras.ZonaSegura1..7` (escalones 10, 22, …, 82, radio 29; `Piso` + `Escudo` ForceField), `Hoyos.Hoyo1..4` (en la columna, atributo `Escalon` = 7, 31, 55, 79; con `Borde` Neon amarillo + PointLight `Luz`, ParticleEmitter `Humo` y BillboardGui `Contador` con TextLabel `Numero`), `Meta` (y=534.5, radio 14), `TablaPuntajes` (SurfaceGui Front/Back con `Lista`), `Caida` (ahora un lago celeste; caerse = perder), `GusanosActivos` (los gusanos clonados) y `Objetos` (juguetes flotando y bananas, los pone el script).
  - `ServerStorage.Gusanos`: moldes `GusanoGrande` (vel 0.9, 14 bolitas), `GusanoLoco` (2.4, cara enojada), `GusanoForzudo` (Forma `salta`: de a 2 escalones, golpea solo al caer y saca 2 piezas), `GusanoLargo` (0.8), `GusanoCortito` (0.9). Atributos `Velocidad`, `Forma` (`arrastra`/`salta`), `Separacion`. Cabeza con cara adentro + BillboardGui `Mareo`; `Cuerpo.Parte1..n`.
  - `ServerStorage.Juguetes`: Tools `PelotaFutbol`, `PelotaTenis`, `PelotaRugby` (marean 3 s, se gastan), `BateJuguete` (marea 5 s, hay que mirar al gusano, alcance 11), `LanzapelotasDorado` (premio de campeón). Cada una con Script `AlHacerClic` (RunContext Server) que usa el ModuleScript `Juguetes`.
  - `ServerScriptService`: `Gusanos` (Script: el grande nunca se va, vuelve abajo al llegar arriba; 1–2 extra de hoyos al azar, se elige el hoyo con menos gusanos cerca; cada extra sube 24 escalones y se esconde; mareado = atributo `MareadoHasta`; antes de salir el hoyo cuenta 3-2-1 (`CUENTA`): amarillo, y en el 1 rojo; queda rojo hasta que el gusano sale entero (`g.saliendo`) y vuelve a amarillo; un gusano que todavía está saliendo **empuja** (RemoteEvent `Empujon`, `FUERZA_EMPUJON` = 45, para afuera de la torre) en vez de atrapar; el Forzudo llama `Partida.atrapar(jugador, 2)`), `Partida` (ModuleScript: armadura de 7 piezas, puntos = max(100, 5000 − 15·segundos) × (1 + 0.1·piezas), tabla, leaderstats Puntos/Vueltas/Armadura; tocado con armadura = pierde 1 pieza (el Forzudo 2; si no te alcanzan las piezas, perdés) + 2 s invencible; sin armadura o caída = pierde todo; al llegar arriba = puntos + pieza al azar y vuelve al inicio a los 4 s; 7 piezas = campeón + Lanzapelotas Dorado; la tabla es solo de este servidor), `Reglas` (Script: Caida, Meta, jugadores), `Juguetes` (ModuleScript: lanzar/batear/aturdir), `Objetos` (Script: 1 pelota por vuelta, 3 bates, 12 bananas; banana = 3 escalones atrás; reaparecen a los 20 s; máximo 3 juguetes).
  - `StarterPlayer.StarterPlayerScripts.Pantalla`: tiempo, piezas, puntos y mensajes (lee atributos del jugador).
  - `ServerScriptService.Paraguas` (Script): dibuja el paraguas ☂️ (3 bloques pegados a la cabeza, color al azar) cuando llega `ReplicatedStorage.Eventos.Paraguas`.
  - `StarterPlayer.StarterPlayerScripts.Flotar` (LocalScript): atiende el `Empujon`; en el aire, **doble clic / doble toque** abre o cierra el paraguas (bajada máx. 7, te movés a 20 con W A S D); se cierra al aterrizar; cartel de ayuda cuando caés.
  - `ReplicatedStorage.Eventos`: RemoteEvents `Empujon` y `Paraguas`.
  - Lighting: de día (ClockTime 14), Sky común. Las estrellas y el cielo de noche están guardados en `ServerStorage.DecoracionEspacioVieja` y `ServerStorage.CieloEspacioViejo`. El LocalScript `CieloEspacio` se borró.
  - `StarterPlayer.StarterPlayerScripts.ShiftLock`: un Shift Lock propio, con la tecla Shift y un botón en la pantalla. El de Roblox está apagado (`EnableMouseLockOption = false`).
  - **Clase 4 (25/11/2026)**: `Workspace.Lobby` (isla al lado del Inicio: puente, arco, fuente, faroles, `TiendaMejoras` con ProximityPrompt `Abrir`, `TablaMundo` con SurfaceGui `Pantalla.Lista` top 100). El `SpawnLocation` está en el lobby; el reloj arranca al tocar `Inicio` (`Partida.salirDelLobby`); al perder/ganar volvés al Inicio. Niveles 0–10 `Bate`/`Golpe`/`Salto`/`Globo` (3 comidas = 1 nivel, o comprar con 💰 `Ahorro` = 300×(nivel+1), RemoteEvent `Eventos.Mejorar`). Bate siempre en la mochila (mareo 1.5+0.35·nivel). Comida en la torre (`Objetos`): Zanahoria→Salto, Caramelo→Golpe, Uvas→Globo, Batecito→Bate; `Globo` (Tool, máx 3) se planta donde estás y hace lentos a gusanos (`LentoHasta`, ×0.35) y otros jugadores (no al dueño). Agujero negro 🕳️ (antes banana-portal; modelo `AgujeroNegro`): círculo negro con borde violeta, tamaño al azar 40–70% del ancho del escalón (`AGUJERO_MIN`/`AGUJERO_MAX`, nunca más de la mitad del piso), en un lugar al azar del escalón; 12 en la torre; te manda 3 atrás y te ancla 0.6 s; al comerte se borra y a los 3 s (`CAMBIA_DE_LUGAR`) aparece en otro escalón al azar (nunca el mismo). Pelotas y Lanzapelotas en `ServerStorage.JuguetesViejos`; campeón = +1000 💰. Guardado: DataStore `JugadoresTorre1` + OrderedDataStore `MejoresDelMundo1`. LocalScript `Menus`: menús 📊 Niveles y 🌦️ Clima (local: hora, lluvia, nieve, viento, temperatura). Flotar apaga `Animate` con el paraguas abierto.
  - Los obbies viejos y `PortalesYObbies` ya los sacamos (19/11/2026). Queda `StarterPlayer.LocalScript` (viejo, no corre): no lo toques sin preguntarme. El `Baseplate` sigue en su lugar, lejos.

## Mi libro (¡muy importante!)

- El libro es la carpeta `libro/`. Se abre con `libro/index.html`. **No hay PDF ni `libro.html`**: el tío los sacó. Hay un solo libro.
- El libro habla **solo de mi juego** y de lo que yo aprendí. No pongas cosas de otros juegos.
- Cada vez que hagamos algo nuevo, agregá una **clase nueva** en `libro/clases/` con: fecha, qué hicimos (con links), dibujitos (SVG) y desafíos. Y las páginas que hagan falta en `construir/` y `codigo/`. Actualizá la fecha del final de `index.html` y `clases/lo-que-viene.html`.
- Partes: `estudiar/` (recomendaciones y niveles para Dylan: va primero), `antes/` (antes de empezar), `construir/` (cómo hacer cada cosa **a mano, sin IA**, con dónde tocar en Studio), `codigo/` (todo sobre scripts: dónde se guardan, cómo encuentran las cosas, movimientos, interacción), `clases/`.
- El orden de las páginas, el índice y los botones Anterior/Siguiente salen de `libro/nav.js` (lista `PARTES`). Página nueva = crear el `.html` con `data-pagina="carpeta/nombre.html"` + agregarla en `nav.js`.
- Que sea como un juego: dibujos SVG que se pueden tocar, y **cada cosa construida enlaza a su script** ("¿Cómo funciona por dentro?") y cada script enlaza a dónde se ve en el juego. Ej.: si hay un personaje con un arma, debajo va el link al script del arma (dónde se guarda, cómo se referencia).
- **Partes de Roblox Studio** (pedido del tío, 20/11/2026): en `antes/` hay una página por sección (`pestanas`, `la-lista`, `las-caracteristicas`, `toolbox`, `editor-y-output`, `como-se-arma`). Cada página de `construir/` y `codigo/` empieza con una cajita `<div class="necesitas">🧭 Antes de esto tenés que conocer: …</div>` que enlaza a esas secciones. Para lo nuevo, hacer lo mismo y usar dibujos de secuencia con flechitas.
- **Código con colores**: `nav.js` pinta solo todos los `<pre>` (no hace falta poner `<span>`). Un `<pre class="arbol">` (o con ▾/▸) no se pinta: sirve para mostrar la lista. Leyenda en `codigo/colores-del-codigo.html`.
- **Funciones** (pedido del tío): es lo más importante del código. Hay 4 páginas (`codigo/funciones*.html`). Cuando aparezca una función nueva en el juego, agregala a la tabla de `funciones-en-mi-juego.html` (qué entra, qué hace, qué sale).
- El libro es para chicos de **10–11 años**: frases cortas, pasos numerados, dibujos que se tocan.
- Usá siempre las mismas palabras del diccionario del libro (Part = bloque, Anchored = clavado, Properties = características, etc.). No les cambies el nombre.
- Emojis: no uses los muy nuevos (por ejemplo 🪧 o 🛼), porque en Windows 10 no se ven.

## Git (pedido del tío)

- Repo: `origin` = github.com/lefasom/estudios-de-roblox (es del tío; Dylan guarda ahí).
- **Solo cuando Dylan diga "listo, terminé"**: hacer un commit bien detallado con todo lo del día y hacer `git push`. Nada más.

## Cosas a tener en cuenta

- Si estoy probando el juego (Play), no se puede construir. Pedime que apriete **Stop**.
- Al terminar, recordame guardar: **File → Save to Roblox**.
