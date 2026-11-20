# Curso de Roblox

## Quién soy

Tengo 10 años y hablo solo español. Explicame todo en español fácil, despacito, con frases cortas y pasos numerados. Si usás una palabra en inglés, decime qué quiere decir.

(A veces escribe mi tío, que es adulto y es mi tutor. Sus mensajes se notan porque son de adulto.)

## Mi juego

- Nombre: **"Primer juego"** (Roblox Studio, placeId 101769582187109, universeId 10770557745). Es **un solo juego**: todo lo que aprendo va en este juego.
- Me conecto con Roblox Studio por el MCP `Roblox_Studio`.
- No copiar juegos de otros (personajes, monstruos, dibujos). Hacemos juegos **del mismo tipo**, pero con cosas inventadas por mí.
- Lo que hay (Clases 1 y 2, 19/11/2026): **la Torre del Espacio con muchos gusanos, juguetes y armadura**. Es para varios jugadores a la vez: todo pasa en el servidor, igual para todos, **sin cuenta regresiva**.
  - Sin portal: el `SpawnLocation` (8x1x8) está arriba del `Inicio` de la torre. Aparecés directo en el parkour.
  - `Workspace.TorreEspacio` (centro 6000, 0, 6000): `Columna`, `AnilloLuz`, `Escalones.Escalon1..96` (8 vueltas de 12; espiral radio 18, gira 30°; 4 partes de 24: Fácil 6x1x7 sube 3.5, Medio 5x1x5 sube 4, Difícil 4x1x4/2x1x6 sube 4, Experto 3x1x3/1.6x1x6 sube 4.5; el primero en y=150), `Inicio`, `ZonasSeguras.ZonaSegura1..7` (escalones 10, 22, …, 82, radio 29; `Piso` + `Escudo` ForceField), `Hoyos.Hoyo1..4` (en la columna, atributo `Escalon` = 7, 31, 55, 79; con `Borde` y ParticleEmitter `Humo`), `Meta` (y=534.5, radio 14), `TablaPuntajes` (SurfaceGui Front/Back con `Lista`), `Caida` (agujero negro), `Decoracion`, `GusanosActivos` (los gusanos clonados) y `Objetos` (juguetes flotando y bananas, los pone el script).
  - `ServerStorage.Gusanos`: moldes `GusanoGrande` (vel 0.9, 14 bolitas), `GusanoLoco` (2.4, cara enojada), `GusanoForzudo` (Forma `salta`: de a 2 escalones, golpea solo al caer), `GusanoLargo` (0.8), `GusanoCortito` (0.9). Atributos `Velocidad`, `Forma` (`arrastra`/`salta`), `Separacion`. Cabeza con cara adentro + BillboardGui `Mareo`; `Cuerpo.Parte1..n`.
  - `ServerStorage.Juguetes`: Tools `PelotaFutbol`, `PelotaTenis`, `PelotaRugby` (marean 3 s, se gastan), `BateJuguete` (marea 5 s, hay que mirar al gusano, alcance 11), `LanzapelotasDorado` (premio de campeón). Cada una con Script `AlHacerClic` (RunContext Server) que usa el ModuleScript `Juguetes`.
  - `ServerScriptService`: `Gusanos` (Script: el grande nunca se va, vuelve abajo al llegar arriba; 1–2 extra de hoyos al azar, se elige el hoyo con menos gusanos cerca; cada extra sube 24 escalones y se esconde; mareado = atributo `MareadoHasta`), `Partida` (ModuleScript: armadura de 7 piezas, puntos = max(100, 5000 − 15·segundos) × (1 + 0.1·piezas), tabla, leaderstats Puntos/Vueltas/Armadura; tocado con armadura = pierde 1 pieza + 2 s invencible; sin armadura o caída = pierde todo; al llegar arriba = puntos + pieza al azar y vuelve al inicio a los 4 s; 7 piezas = campeón + Lanzapelotas Dorado; la tabla es solo de este servidor), `Reglas` (Script: Caida, Meta, jugadores), `Juguetes` (ModuleScript: lanzar/batear/aturdir), `Objetos` (Script: 1 pelota por vuelta, 3 bates, 12 bananas; banana = 3 escalones atrás; reaparecen a los 20 s; máximo 3 juguetes).
  - `StarterPlayer.StarterPlayerScripts.Pantalla`: tiempo, piezas, puntos y mensajes (lee atributos del jugador).
  - `StarterPlayer.StarterPlayerScripts.CieloEspacio`: se hace de noche cerca de la torre (solo para vos).
  - `StarterPlayer.StarterPlayerScripts.ShiftLock`: un Shift Lock propio, con la tecla Shift y un botón en la pantalla. El de Roblox está apagado (`EnableMouseLockOption = false`).
  - Los obbies viejos y `PortalesYObbies` ya los sacamos (19/11/2026). Queda `StarterPlayer.LocalScript` (viejo, no corre): no lo toques sin preguntarme. El `Baseplate` sigue en su lugar, lejos.

## Mi libro (¡muy importante!)

- El libro es la carpeta `libro/`. Se abre con `libro/index.html`. **No hay PDF ni `libro.html`**: el tío los sacó. Hay un solo libro.
- El libro habla **solo de mi juego** y de lo que yo aprendí. No pongas cosas de otros juegos.
- Cada vez que hagamos algo nuevo, agregá una **clase nueva** en `libro/clases/` con: fecha, qué hicimos (con links), dibujitos (SVG) y desafíos. Y las páginas que hagan falta en `construir/` y `codigo/`. Actualizá la fecha del final de `index.html` y `clases/lo-que-viene.html`.
- Partes: `antes/` (antes de empezar), `construir/` (cómo hacer cada cosa **a mano, sin IA**, con dónde tocar en Studio), `codigo/` (todo sobre scripts: dónde se guardan, cómo encuentran las cosas, movimientos, interacción), `clases/`.
- El orden de las páginas, el índice y los botones Anterior/Siguiente salen de `libro/nav.js` (lista `PARTES`). Página nueva = crear el `.html` con `data-pagina="carpeta/nombre.html"` + agregarla en `nav.js`.
- Que sea como un juego: dibujos SVG que se pueden tocar, y **cada cosa construida enlaza a su script** ("¿Cómo funciona por dentro?") y cada script enlaza a dónde se ve en el juego. Ej.: si hay un personaje con un arma, debajo va el link al script del arma (dónde se guarda, cómo se referencia).
- Usá siempre las mismas palabras del diccionario del libro (Part = bloque, Anchored = clavado, Properties = características, etc.). No les cambies el nombre.
- Emojis: no uses los muy nuevos (por ejemplo 🪧 o 🛼), porque en Windows 10 no se ven.

## Git (pedido del tío)

- Repo: `origin` = github.com/lefasom/estudios-de-roblox (es del tío; Dylan guarda ahí).
- **Solo cuando Dylan diga "listo, terminé"**: hacer un commit bien detallado con todo lo del día y hacer `git push`. Nada más.

## Cosas a tener en cuenta

- Si estoy probando el juego (Play), no se puede construir. Pedime que apriete **Stop**.
- Al terminar, recordame guardar: **File → Save to Roblox**.
