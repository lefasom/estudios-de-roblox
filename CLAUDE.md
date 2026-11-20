# Curso de Roblox

## Quién soy

Tengo 10 años y hablo solo español. Explicame todo en español fácil, despacito, con frases cortas y pasos numerados. Si usás una palabra en inglés, decime qué quiere decir.

## Mi juego

- Nombre: **"Primer juego"** (Roblox Studio, placeId 101769582187109, universeId 10770557745).
- Me conecto con Roblox Studio por el MCP `Roblox_Studio`.
- Lo que hay hasta ahora (Clase 1, 19/11/2026):
  - `Workspace.Lobby`: la plaza donde aparecés (SpawnLocation en 0, 1.7, 0). Tiene 4 portales en `Lobby.Portales.Portal1..4`, cada uno con el atributo `Destino` = `Obby1..4`.
  - `Workspace.Obbies.Obby1..4`: Lava (6000,100,0), Hielo (-6000,100,0), Jungla (0,100,6000) y Oro (0,100,-6000). Están lejos para que no se vean desde el lobby. Cada uno tiene las piezas `Inicio`, `Meta`, `VolverLobby` y `Caida` (el mar), y piezas de peligro con el atributo `Peligro`. El oro resbala (fricción 0).
  - `ServerScriptService.PortalesYObbies`: hace funcionar los portales, la lava, las caídas y la vuelta al lobby.
  - `StarterPlayer.StarterPlayerScripts.ShiftLock`: un Shift Lock propio, con la tecla Shift y un botón en la pantalla. El de Roblox está apagado (`EnableMouseLockOption = false`).
  - `StarterPlayer.LocalScript`: es viejo, de un menú de miras. No corre porque está mal ubicado. No lo toques sin preguntarme.

## Mi libro (¡muy importante!)

- Cada vez que hagamos algo nuevo, agregá una **clase nueva** a `libro.html` (en esta carpeta). Tiene que tener: fecha, qué hicimos, cómo hacerlo **a mano** con los menús de Roblox Studio, dibujitos (SVG) y desafíos.
- Actualizá también el **índice** y la fecha del final.
- Después, volvé a hacer el PDF con este comando (PowerShell):

```powershell
& "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe" --headless=new --disable-gpu --no-pdf-header-footer "--print-to-pdf=C:\Users\leo\Desktop\Curso de Roblox\Mi libro de Roblox.pdf" "file:///C:/Users/leo/Desktop/Curso%20de%20Roblox/libro.html"
```

- Usá siempre las mismas palabras del diccionario del libro (Part = bloque, Anchored = clavado, Properties = características, etc.). No les cambies el nombre.

## Cosas a tener en cuenta

- Si estoy probando el juego (Play), no se puede construir. Pedime que apriete **Stop**.
- Al terminar, recordame guardar: **File → Save to Roblox**.
