---
sidebar_position: 1
---

# Einleitung
Im Rahmen der Projektarbeit sollte ein Konzept zur Verwendung von digitalen Türschildern für die Räume des Instituts für Wirtschaftsinformatik erarbeitet werden. Dazu wurde als Hardwaregrundlage ein Mikrocontroller in Verbindung mit einem E-Ink Display verwendet. In dieser Dokumentation wird das hard- und softwareseitige Konzept näher erläutert.

----- Hier auch Raspberry Pi Doku rein? -----

## E-Ink
Für die Darstellung von Rauminformationen in digitaler Form benötigt es ein Display. In unserem Anwendungsfall sollte das Display gut lesbar und energiesparend sein. Zudem sollte es einen kleinen Formfaktor besitzen. Deshalb haben wir uns für einen E-Ink Display entschieden. Genau genommen handelt es sich um das [5.83inch e-Paper HAT (B)](https://www.waveshare.com/wiki/5.83inch_e-Paper_HAT_(B)_Manual) von Waveshare. 

## Mikrocontroller
Um Bilder auf dem E-Ink darzustellen wird ein System benötigt, welches diese Funktionalität steuert. Einerseits sollte es genügend Leistung haben, um das Bild anzuzeigen. Andererseits sollte es so energieeffizient sein, dass es mit einer Batterie betrieben werden kann. Denn die Türschilder befinden sich an Orten, an denen es keinen direkten Zugang zu Strom gibt. Zudem sollte das System zugunsten der skalierbarkeit möglichst kosteneffizient sein. Daher fiel die Entscheidung auf die Verwendung eines Mikrocontrollers. In unserem Fall haben wir uns für das [E-Paper ESP32 Driver Board](https://www.waveshare.com/wiki/E-Paper_ESP32_Driver_Board) von Waveshare entschieden. Dieses bietet eine gute Kompatibilität zu dem E-Ink Display von dem gleichnamigen Hersteller.

## Batterien

- Welche gibt es
- Für welche haben wir uns entschieden
- Warum haben wir uns für diese entschieden
- Kalkulation, wie kommen wir auf die geschätzte Akkulaufzeit



# Entwicklungsumgebung
Bei der Entwicklung der Software für den ESP32 haben wir die Arduino IDE verwendet. Wir haben in unserem Projekt nur mit der Windows-Version der IDE gearbeitet. Daher kann die Einrichtung für andere Plattformen von der Nachfolgenden abweichen.
## Initiale Einrichtung

### Arduino IDE Installieren
Zunächst muss man die [Arduino IDE](https://www.arduino.cc/en/software) herunterladen und installieren.

### Repository kopieren
Der Code für den ESP32 liegt im [PS Housetech - E-Ink Repository](https://zivgitlab.uni-muenster.de/ml-de/teaching/ps-housetech/ps-housetech-e-ink). Diese Dateien müssen in einen beliebigen Ordner kopiert werden. Grundsätzlich basiert das Repository auf dem [GitHub-Repository von Waveshare](https://github.com/waveshareteam/e-Paper).

![Logo](/img/IDE_folder_begin.png)

Danach navigiert man durch die Ordnerstruktur in den Pfad `..\Arduino\epd5in83b_V2` und öffnet die `epd5in83b_V2.ino` mit der Arduino IDE.

![Logo](/img/IDE_folder_end.png)

### Board Manager
Um den ESP32 mit der Arduino IDE verwenden zu können, muss der sogenannte Board Manager konfiguriert werden. Dieser ermöglicht die Installation von zusätzlichen Packages für den ESP32. Dazu muss man unter **File** -> **Preferences** -> **Additional boards manager URLs** die folgende URL einfügen:

`
https://dl.espressif.com/dl/package_esp32_index.json
`

1. File -> Preferences

![Logo](/img/IDE_config_preferences.png)

2. Additional boards manager URLs

![Logo](/img/IDE_URL.png)


----- Hier fehlt noch die Installation der Packages, aber ich habe Angst, dass meine IDE dann hoppst, deswegen später ------



Anschließend muss man das passende Board auswählen, um den Code für den ESP32 kompilieren zu können. 

![Logo](/img/IDE_initial_board_selection.png)

### Pins konfigurieren
Danach muss man die richtigen Pins für den ESP32 hinterlegen. Je nach ESP32 Hersteller und Modell, können diese stark variieren. Die folgenden Pin-Definitionen gelten also nur für unser verwendetes E-Paper ESP32 Driver Board. Die Konfiguration der Pins erfolgt an zwei verschiedenen Stellen. Einerseits werden Pins in der `epdif.h` Datei des `..\Arduino\epd5in83b_V2` Pfades gepflegt. Diese sollten bei Verwendung des Git-Lab-Repositorys bereits folgendermaßen eingetragen sein.

![Logo](/img/IDE_pins_1.png)

Andererseits werden die Pins in dem `C:\Users\%UserName%\AppData\Local\Arduino15\packages\esp32\hardware\esp32\1.0.6\variants\esp32` Pfad in der `pins_arduino.h` Datei gepflegt. Dort müssen die Pins MOSI auf 14 und SCK 13 gesetzt werden.

![Logo](/img/IDE_pins_2.png)

:::danger Update der Entwicklungsumgebung

Sobald die Entwicklungsumgebung geupdated wird, werden die Pins zurückgesetzt. Daher muss man nach einem Update die Pins erneut einpflegen.

:::

## Code auf ESP32 übertragen

Um den Code auf den ESP32 zu übertragen, muss zunächst der ESP32 per USB mit dem Computer verbunden werden. Danach kann man über folgende Schaltfläche das kompilieren und übertragen des Codes auf den ESP32 anstoßen. 
![Logo](/img/IDE_upload_code.png)

Man muss die Baudrate anpassen, um die Ausgaben des ESP32 in dem Serial Monitor lesen zu können

----- Serial Monitor vs. Output -----
----- Kommunikationsgeschwindigkeit passend einstellen -----

# E-Ink - Technische Grundlagen

- welcher Hex Wert erzeugt welche Bilder? Siehe Präsentation

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

# Verkabelung

- Es muss auf dem Board ja ein bestimmter Modus eingestellt sein, A oder B?
