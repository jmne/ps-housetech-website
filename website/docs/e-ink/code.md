---
sidebar_position: 4
---

# Code
## Logik - epd5in83b_V2.ino
In dieser Datei befindet sich die Logik vom ESP32. Grundsätzlich erwacht der ESP32 gegen 6 Uhr morgens alle 24 Stunden aus dem sogenannten Deep Sleep. Danach ruft der er das Bild in Form eines Hex-Arrays von dem Server ab. Sobald er das Bild heruntergeladen hat, zeigt er es auf dem E-Ink Display an und geht wieder für 24 Stunden in den Deep Sleep. Da der Bildschirm Gefahr läuft, nach längerem Anzeigen von einem Bild ohne Veränderung einzubrennen, haben wir den Zeitraum von 24 Stunden gewählt.

### Abruf des Bildes vom Server
Zunächst muss festgelegt werden, für welchen Raum das E-Ink-Display zuständig sein soll. Dazu legt man die Raumnummer über folgende Variable fest `String room = "320";`. Somit kann der ESP32 den Endpoint vom Server abrufen, der sich aus `https://ps-housetech.uni-muenster.de:444/api/eink/" + room` zusammensetzt. Hierzu muss der ESP32 sich zunächst mit dem WLAN verbinden. Dies geschieht in der `setup()` Methode. Benötigt der ESP32 mehr als 10 Versuche, um sich mit dem WLAN zu verbinden, wird er neu gestartet.

Während des Deep Sleeps kann es zu einem gewissen Time Shift kommen, da die interne Uhr des ESP's im Deep Sleep ungenau ist. Daher gleicht der ESP32 nach dem Erwachen aus dem Deep Sleep ab, ob seine Aufwachzeit sich zwischen 0 und 6 Uhr befindet. Ist das der Fall, ist er zu früh aufgewacht. Da der Refresh nur alle 24 Stunden geschehen soll, wird die Differenz in Stunden bis 6 Uhr inklusive eines einstündigen Puffers als weiterer Deep Sleep angesetzt. Ist der ESP32 zu spät aufgewacht, wird das Bild refreshed und die Differenz bis zum nächsten Refresh berechnet. Das Handling der Schlafenszeit übernimmt die Methode `calcDifferenceTime()`.

In der `loop()` Methode verbindet sich der ESP32 bei bestehender WLAN-Verbindung mit dem Server. Bricht die Verbindung zum Server oder WLAN ab, startet der ESP neu und der ganze Prozess startet von vorne. Muss der Server das Bild zunächst erst für den Endpoint generieren oder ist offline, so gibt der Server einen bestimmten Fehlercode zurück. Um ein Einbrennen des Bildes zu verhindern, führt der ESP32 die `Clear()` Funktion aus und geht für 30 Sekunden in den Deep Sleep. Musste der Server nur das Bild für den Endpoint generieren, wird im zweiten Anlauf das Bild abgerufen.

Während der Verbindung mit dem Server wird das Bild in Form eines Hex-Array's abgerufen. Dabei handelt es sich um einen langen String, der Hex-Werte zur Darstellung des Bildes enthält. Da der String sehr lang ist, müssen die Daten in Form eines Buffers von dem ESP32 abgerufen werden. Der String wird auf dem ESP32 in einem Char Array zwischengespeichert. Das Char-Array kann nur eine gewisse Größe annehmen, weshalb der String in vier gleich große Teile unterteilt wird. Dabei handelt es sich um die obere und untere Hälfte jeweils für Layer 1 und 2. Aus jedem Char-Array werden dann die Hex-Werte gezogen und in einem 8-Bit Integer-Array gespeichert. Dieses Array kann das E-Ink-Display darstellen.

:::danger Buffer modularisieren

Zwar sieht die Umsetzung des Buffers nicht nach gutem Programmierstil aus, da redundanter Code verwendet wird, jedoch war eine Auslagerung der for-Schleife in eine Funktion nicht möglich. Der ESP32 stürzt bei einem solchen Vorhaben einfach ab.

:::

### Anzeige des Bildes
Zur Anzeige des Bildes wird zunächst das E-Paper-Display initialisiert. Danach wird ein `Clear()` durchgeführt, um den E-Ink zu bereinigen. Anschließend wird die `DisplayPicture()` Funktion mit dem oberen und unteren Teil des Bildes je Layer als Parameter aufgerufen.

## Low-Level Commands - epd5in83b_V2.cpp & epd5in83b_V2.h

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

## E-Paper Display / Pins - epdif.cpp & epdif.h
In der `epdif.cpp` Datei werden grundsätzliche Konfigurationen für das E-Paper Display vorgenommen. Auch hier ist `epdif.h` die Header Datei von `epdif.cpp` und deklariert Funktionen und Variablen. Daher können bestimmte Pins, über die `epdif.h` gepflegt werden. Die [Konfiugartion von allen Pins](entwicklungsumgebung.md#pins-konfigurieren) wird im obigen Kapitel erläutert.

## Fehlerquellen
Bei der Entwicklung für den ESP32 ist häufig guter Programmierstil in Form von Modularisierung nicht möglich. Es ist nicht selten eine Gradwanderung zwischen funktionierendem System und Absturz des ESP32. Zudem stürzt er nicht unbedingt direkt an der Fehlerquelle ab, sondern häufig schon deutlich früher. Daher kann es sinnvoll sein, sich Gedanken über die restriktiven Faktoren eines Mikrocontrollers zu machen. So fällt der Arbeitsspeicher, Prozessor und Sekundärspeicher deutlich kleiner und leistungsärmer aus als der eines konventionellen Computers. Es gibt hardwareseitige Debugging Tools, die jedoch den Rahmen dieser Projektarbeit gesprengt hätten. Hiermit kann die Software-Entwicklung deutlich dynamischer sein.  

:::tip Fehlersuche mit dem Serial Monitor

Grundsätzlich stellt sich das Debugging mit der Arduino IDE als schwierig dar. Häufig stürzt der ESP32 einfach ab, ohne brauchbare Fehlercodes zu liefern. Deshalb empfiehlt es sich bei der Fehlersuche den Serial Monitor zu verwenden. Dazu können in der Konsolenausgabe mithilfe der Funktion `Serial.println("Text");` bestimmte Werte ausgegeben oder Problemstellen ausfindig gemacht werden.

:::
