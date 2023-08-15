---
sidebar_position: 2
---
# Entwicklungsumgebung
Bei der Entwicklung der Software für den ESP32 haben wir die Arduino IDE verwendet. Wir haben in unserem Projekt nur mit der Windows-Version der IDE gearbeitet. Daher kann die Einrichtung für andere Plattformen von der Nachfolgenden abweichen.

## Schritt 1: Arduino IDE Installieren
Zunächst muss man die [Arduino IDE](https://www.arduino.cc/en/software) herunterladen und installieren.

## Schritt 2: Repository kopieren und Entwicklungsumgebung öffnen
Der Code für den ESP32 liegt im [PS Housetech - E-Ink Repository](https://zivgitlab.uni-muenster.de/ml-de/teaching/ps-housetech/ps-housetech-e-ink). Diese Dateien müssen in einen beliebigen Ordner kopiert werden. Grundsätzlich basiert das Repository auf dem [GitHub-Repository von Waveshare](https://github.com/waveshareteam/e-Paper).

![Logo](/img/IDE_folder_begin.png)

Danach navigiert man durch die Ordnerstruktur in den Pfad `..\Arduino\epd5in83b_V2` und öffnet die `epd5in83b_V2.ino` mit der Arduino IDE.

![Logo](/img/IDE_folder_end.png)

## Schritt 3: Board Manager
Um den ESP32 mit der Arduino IDE verwenden zu können, muss der sogenannte Board Manager konfiguriert werden. Dieser ermöglicht die Installation von zusätzlichen Packages für den ESP32. Dazu muss man unter **File** -> **Preferences** -> **Additional boards manager URLs** die folgende URL einfügen:

`
https://dl.espressif.com/dl/package_esp32_index.json
`

1. File -> Preferences

![Logo](/img/IDE_config_preferences.png)

2. Additional boards manager URLs

![Logo](/img/IDE_URL.png)


----- Hier fehlt noch die Installation der Packages, aber ich habe Angst, dass meine IDE dann hoppst, deswegen später ------

:::danger Update der Boards

Unten rechts wird beim Öffnen der Arduino IDE häufig auf ausstehende Updates der Boards hingewiesen. Da der vorliegende Code nur mit der genannten Version der Library funktioniert, sollte davon abgesehen werden, die Library zu aktualisieren.

![Logo](/img/IDE_update.png)

:::

## Schritt 4: Board auswählen
Anschließend muss man das passende Board auswählen, um den Code für den ESP32 kompilieren zu können. 

![Logo](/img/IDE_initial_board_selection.png

Tritt folgende Fehlermeldung auf, müssen die nachfolgenden Schritte gemacht werden.

![Logo](/img/IDE_error_no_port.png)

![Logo](/img/IDE_error_no_port2.png)

![Logo](/img/IDE_error_no_port3.png)

## Schritt 5: Pins konfigurieren
Danach muss man die richtigen Pins für den ESP32 hinterlegen. Je nach ESP32 Hersteller und Modell, können diese stark variieren. Die folgenden Pin-Definitionen gelten also nur für unser verwendetes E-Paper ESP32 Driver Board. Die Konfiguration der Pins erfolgt an zwei verschiedenen Stellen. Einerseits werden Pins in der `epdif.h` Datei des `..\Arduino\epd5in83b_V2` Pfades gepflegt. Diese sollten bei Verwendung des Git-Lab-Repositorys bereits folgendermaßen eingetragen sein.

![Logo](/img/IDE_pins_1.png)

Andererseits werden die Pins in dem `C:\Users\%UserName%\AppData\Local\Arduino15\packages\esp32\hardware\esp32\1.0.6\variants\esp32` Pfad in der `pins_arduino.h` Datei gepflegt. Dort müssen die Pins MOSI auf 14 und SCK 13 gesetzt werden.

![Logo](/img/IDE_pins_2.png)

:::danger Update der Entwicklungsumgebung

Sobald die Entwicklungsumgebung geupdated wird, werden die Pins zurückgesetzt. Daher muss man nach einem Update die Pins erneut einpflegen.

:::

## Schritt 6: Code auf ESP32 übertragen

Um den Code auf den ESP32 zu übertragen, muss zunächst der ESP32 per USB mit dem Computer verbunden werden. Danach kann man über folgende Schaltfläche das kompilieren und übertragen des Codes auf den ESP32 anstoßen. 
![Logo](/img/IDE_upload_code.png)

Man muss die Baudrate anpassen, um die Ausgaben des ESP32 in dem Serial Monitor lesen zu können

![Logo](/img/IDE_baud.png)

----- Kommunikationsgeschwindigkeit passend einstellen -----