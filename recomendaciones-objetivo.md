# Recomendaciones y objetivo — para el tío

> Documento para el tutor (adulto). La versión para Dylan, con palabras fáciles y casilleros para tildar, está en el libro: `libro/estudiar/recomendaciones.html`.

## 1. Dónde estamos (20/11/2026)

- **El juego está terminado.** La torre de ladrillos tiene 96 escalones, 5 gusanos, 4 hoyos con cuenta 3-2-1, empujón y paraguas, juguetes, bananas, armadura de 7 piezas, puntos y una tabla de puntajes.
- Son **8 scripts** de verdad (Gusanos, Partida, Reglas, Juguetes, Objetos, Paraguas, Flotar, Pantalla) más ShiftLock y los `AlHacerClic`. Para alguien de 11 años eso **ya es mucho**: alcanza para aprender casi todo lo básico de Luau.
- **Recomendación firme: no agregar más funciones al juego.** Cada cosa nueva que se suma la hace la IA, y Dylan no la entiende. Desde ahora el juego deja de ser algo para construir y pasa a ser **el material de estudio**.

## 2. El objetivo

Que Dylan **sepa programar**, no que sepa pedirle cosas a la IA. Pedirle algo a la IA es fácil; lo que vale la pena es que pueda:

1. **Leer** un script de su juego y explicar qué hace cada parte.
2. **Cambiar** algo y predecir qué va a pasar antes de apretar Play.
3. **Escribir solo** un script chico (de 10 a 30 líneas) con variables, `if`, funciones y un evento.
4. **Arreglar** sus propios errores leyendo la ventana Output.

Si al final del camino puede hacer esas 4 cosas, el objetivo está cumplido.

## 3. Hasta dónde sí y hasta dónde no

| ✅ Sí debería aprender (prioridad) | 🟡 Puede ver, sin profundizar | ❌ Por ahora no |
|---|---|---|
| Variables, números, textos, `true`/`false` | Tablas (listas) con `ipairs` | CFrame y matemática 3D (`Lerp`, `Dot`, `sin`) |
| `if / elseif / else` | `for` con números (`for i = 1, 10`) | Física y velocidades (`AssemblyLinearVelocity`) |
| **Funciones**: armar, usar, parámetros, `return` | ModuleScript y `require` | TweenService, RenderStepped, cámara |
| Eventos: `Touched`, `Activated`, `:Connect` | RemoteEvent (el "teléfono" del paraguas) | DataStore, Open Cloud, seguridad del servidor |
| Encontrar cosas: `workspace.X.Y`, `script.Parent`, `WaitForChild` | Atributos (`GetAttribute` / `SetAttribute`) | Optimización, programación orientada a objetos |
| Cambiar características desde código (`.Transparency = 1`) | `task.wait`, `task.delay` | |
| Leer errores en Output y usar `print` | | |

**En qué concentrarse: las funciones.** Son la base de todo lo demás. Si entiende bien "armar / usar / qué entra / qué sale", el resto se apoya ahí.

## 4. Cómo debería estudiar

- **Poquito y seguido:** 2 o 3 veces por semana, 30 a 45 minutos. Mejor eso que una tarde larga por mes.
- **Una página del libro por sesión.** Seguir el orden del índice: Cómo estudiar → Antes de empezar → Funciones 1–4 → los scripts.
- **El ciclo de cada sesión:** leer → buscarlo en Studio → cambiar algo chico → Play → explicártelo a vos con sus palabras.
- **Escribir, no copiar.** Que tipee el código letra por letra, aunque sea lento. Escribir es lo que hace que se le quede.
- **Primero predecir, después probar:** antes de apretar Play, preguntale "¿qué va a pasar?". Esa es la mejor forma de saber si entendió.
- **Los errores son parte del trabajo.** Cuando aparece algo en rojo, que lea qué script y qué línea dice antes de que lo ayudes.
- **Los niveles del libro** (`estudiar/recomendaciones.html`) son la hoja de ruta: 5 niveles con casilleros para tildar. Uno por vez.

### Orden sugerido de los scripts (de más fácil a más difícil)

1. `Reglas` (cortito: tres eventos `Touched` / `PlayerAdded`)
2. `Pantalla` (lee atributos y muestra textos)
3. `Objetos` (juguetes y bananas: eventos, `task.delay`)
4. `Partida` (funciones con parámetros, tablas, el `atrapar(jugador, cuantas)`)
5. `Juguetes` (ModuleScript, lanzar y batear)
6. `Gusanos` (el más largo: dejarlo para el final)
7. `Flotar` y `Paraguas` (RemoteEvent: solo para entender la idea)

## 5. Recomendaciones para vos (el tutor)

1. **Vos sos el freno de las ideas nuevas.** Cuando Dylan quiera agregar algo ("¡un dragón!"), anotalo en un papel de "ideas para el juego que viene" y volvé al estudio. El juego nuevo llega cuando termine el Nivel 5.
2. **Usá la IA como profesor, no como programador.** Pedile que *explique* una línea o que *invente un ejercicio*, no que haga el cambio. Si se usa la IA, que sea Dylan el que escribe en Studio.
3. **Pedile que te enseñe a vos.** "Explicame qué hace `sacarDeUnHoyo`" funciona mejor que cualquier examen.
4. **Retos chicos con su propio juego:** cambiar `CUENTA = 3` por 5, hacer que la banana tire 5 escalones, poner un `print` cuando el Forzudo golpea, hacer un bloque que se ponga transparente al tocarlo. Son cambios de 1 a 5 líneas, ideales para practicar.
5. **Antes de cada sesión, guardá una copia** (File → Save to Roblox), así puede romper cosas sin miedo. Si algo se rompe, en el historial de versiones del juego se vuelve atrás.
6. **Medí el avance por lo que explica, no por lo que construye.** Una semana en la que entendió bien una función vale más que una semana con tres cosas nuevas en el juego.
7. **Cuándo pasar a un juego nuevo:** cuando pueda escribir solo, sin mirar, un script de 20 líneas con una función con parámetros, un `if` y un `Touched`. Recién ahí conviene un juego nuevo, **chico** (por ejemplo un obby de 10 plataformas con 3 trampas), hecho por él de cero.

## 6. Qué tiene el libro para esto

- `estudiar/recomendaciones.html` — reglas para estudiar y los 5 niveles con casilleros.
- `antes/` — las partes de Roblox Studio (pestañas, la lista, las características, Toolbox, Output, el camino para armar).
- `codigo/colores-del-codigo.html` — qué quiere decir cada color del código.
- `codigo/funciones*.html` — 4 páginas de funciones con desafíos y respuestas escondidas.
- Cada página de script tiene "🎚️ Números que podés cambiar": el mejor punto de partida para practicar.
