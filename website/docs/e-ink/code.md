---
sidebar_position: 4
---

# Code

## Logik - `epd5in83b_V2.ino`
In dieser Datei befindet sich die Logik vom ESP32. Grundsätzlich erwacht der ESP32 gegen 6 Uhr morgens alle 24 Stunden aus dem sogenannten Deep Sleep. Danach ruft der er das Bild in Form eines Hex-Arrays von dem Server ab. Sobald er das Bild heruntergeladen hat, zeigt er es auf dem E-Ink Display an und geht wieder für 24 Stunden in den Deep Sleep. Da der Bildschirm Gefahr läuft nach längerem Anzeigen von einem Bild ohne Veränderung einzubrennen, haben wir den Zeitraum von 24 Stunden gewählt.

### Deep Sleep

- Schlafenszeit, Errors abfangen

### Abruf des Bildes vom Server

- mit Wifi verbinden
- mit Server verbinden
- Buffering des Bildes
- Bild in 4 Teile speichern

### Anzeige des Bildes

:::tip Fehlersuche mit dem Serial Monitor

Grundsätzlich stellt sich das Debugging mit der Arduino IDE als schwierig dar. Häufig stürzt der ESP32 einfach ab, ohne brauchbare Fehlercodes zu liefern. Deshalb empfiehlt es sich bei der Fehlersuche den Serial Monitor zu verwenden. Dazu können mithilfe der Konsolenausgabe `Serial.println("Text");` bestimmte Werte ausgegeben oder Problemstellen ausfindig gemacht werden.

:::

----- ggf. Bild von der Konsolenausgabe machen? -----

----- Fehlerquellen -----

## Low-Level Commands - `epd5in83b_V2.cpp` & `epd5in83b_V2.h`

Diese Datei enthält die nötigen Low-Level Commands, um bei gegebenem Hex-Array ein Bild auf dem E-Ink anzuzeigen. Die zugehörige Header Datei `epd5in83b_V2.h` dient zur Deklarierung der Funktionen und Variablen aus der Datei `epd5in83b_V2.cpp`. Über die Header Datei werden innerhalb der `epd5in83b_V2.ino` die nötigen Funktionen aufgerufen.

:::tip Funktion hinzufügen

Wenn man zu der Datei `epd5in83b_V2.cpp` eine Funktion hinzufügt, muss diese in der Header Datei `epd5in83b_V2.h` deklariert werden.

:::

### `GeneratePictureUpperAndLowerHalf()` 

In diesem Teil wird das Hex-Array in den Programmspeicher geschrieben. Dabei wird erst der Schwarz/Weiß und danach der Rot/Weiß Layer generiert. Dabei signalisiert `SendCommand(0x10)` das der Input als Schwarz/Weiß und `SendCommand(0x13)` als Rot/Weiß interpretiert werden soll. Jede Layer ist aufgrund von Speicherplatzgründen des ESP32 in einen oberen und unteren Teil aufgeteilt.  Input dieser Funktion sind die oberen und untere Hälfte der beiden Layers. 

### `WaitUntilIdle()`

In diesem Schritt wird das in den Programmspeicher geschriebene Hex-Array an den E-Ink weitergeleitet und sukzessive je Layer kombiniert und angezeigt. Dabei kann man bei der Generierung auf dem E-Ink erst den Schwarz/Weiß und dann kurz danach die Kombination mit dem Rot/Weiß Layer erkennen.

### `DisplayPicture()`

Diese Funktion kombiniert `GeneratePictureUpperAndLowerHalf()`  mit `WaitUntilIdle()`, um das Bild anzuzeigen. Dabei wird vor dem Aufruf von `WaitUntilIdle()` noch `SendCommand(0x12)` ausgeführt, um die beiden Farb-Layers zusammenzufügen. Input dieser Funktion sind die obere und untere Hälften der beiden Layers. 

### `Clear()`

Mithilfe dieser Funktion wird der Bildschirm des E-Ink's bereinigt. Dies wird unter anderem benötigt, um das Einbrennen eines Bildes zu verhindern. 


----- Kann Sleep, DisplayPictureDemo, DisplayFrame Raus aus ...V2.cpp? -----

## E-Paper Display / Pins - `epdif.cpp` & `epdif.h`
In der `epdif.cpp` Datei werden grundsätzliche Konfigurationen für das E-Paper Display vorgenommen. Auch hier ist `epdif.h` die Header Datei von `epdif.cpp` und deklariert Funktionen und Variablen. Daher können bestimmte Pins, über die `epdif.h` gepflegt werden. Die [Konfiugartion von allen Pins](#pins-konfigurieren) wird im obigen Kapitel erläutert.
