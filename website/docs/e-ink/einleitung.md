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



## Entwicklungsumgebung
Bei der Entwicklung der Software für den ESP32 haben wir die Arduino IDE verwendet. Wir haben in unserem Projekt nur mit der Windows-Version der IDE gearbeitet. Daher kann die Einrichtung für andere Plattformen von der Nachfolgenden abweichen.
### Initiale Einrichtung
Zunächst muss man die [Arduino IDE](https://www.arduino.cc/en/software) herunterladen und installieren.

Der Code für den ESP32 liegt im [PS Housetech - E-Ink Repository](https://zivgitlab.uni-muenster.de/ml-de/teaching/ps-housetech/ps-housetech-e-ink). Diese Dateien müssen in einen beliebigen Ordner kopiert werden. Grundsätzlich basiert das Repository auf dem [GitHub-Repository von Waveshare](https://github.com/waveshareteam/e-Paper).

![Logo](/img/IDE_folder_begin.png)

Danach navigiert man durch die Ordnerstruktur in den Pfad `..\Arduino\epd5in83b_V2` und öffnet die `epd5in83b_V2.ino` mit der Arduino IDE.

![Logo](/img/IDE_folder_end.png)


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


----- Weitere Schritte der Einrichtung fehlen noch -----

### Code auf ESP32 übertragen

### Code


## Verkabelung

