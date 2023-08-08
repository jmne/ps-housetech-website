---
sidebar_position: 1
---

# PS House-Tech Backend 
Die vorliegende Dokumentation beschreibt das Backend für die Informationsdisplays, E-Ink Displays und den Exchange-Kalender, welche unter Verwendung des Flask-Webframeworks entwickelt wurde. Das Backend spielt in der Applikation eine große Rolle und übernimmt die komplette Konsolidierung und Bereitstellung der meisten  Informationen auf entwickelten Applikationen.

## Warum Flask?
Als Mikro-Webframework ermöglicht Flask eine schnelle und effiziente Entwicklung, ohne unnötige Komplexität hinzuzufügen. Seine Leichtigkeit und Flexibilität erlauben eine nahtlose Integration mit verschiedenen Datenquellen. Darüber hinaus unterstützt Flask eine modulare Architektur, die das System einfach skalierbar und wartbar macht, zwei wesentliche Aspekte für eine nachhaltige und zuverlässige Lösung im universitären Umfeld. Außerdem erlaubte uns diese Auswahl umfangreiche Tests zu formulieren um qualitative Software gewährleisten zu können.In den folgenden Abschnitten wird detailliert auf die Architektur, die Funktionalitäten und die Implementierung dieses Backend-Systems eingegangen. 

## Die Struktur des Backend 
Bei der Struktur der Flask Application verfolgten wir einen möglichst modularen Ansatz, der die Weiterentwicklung und Wartung für nachfolgende Mitwirkende vereinfachen soll. Um die Modularität der Applikation zu gewährleisten, setzten wir auf das verbreitete "Flask Application Factory" Entwurfsmuster, indem wir bei Start des Backends eine Instanz der Flask app erzeugen und jegliche Zusatzfunktionen (z.B Cache oder Blueprints) direkt mit initialisieren. Mehr zum "Flask Application Factory" kann [hier](https://flask.palletsprojects.com/en/2.3.x/patterns/appfactories/) nachgelesen werden.

Das Backend ist aufgeteilt in einen "src" und einen "test" Ordner. Grundsätzlich verfügt jeder Order über eine '\_\__init\_\__.py', welche den Ordner in ein Python-Package formatiert. Dies vereinfachert das importieren von Code aus verschiedenen Ordnern, bei dem ausschließlich auf absolute imports gesetzt wurde. Mehr zu absoluten Imports und Python Packages kann [hier](https://docs.python.org/3/tutorial/modules.html) nachgelesen werden.


Die vollständige Projektstruktur des Backends kann folgendermaßen visualisiert werden:


### Testing im Backend
 Neben einer Konfiguerationsdatei "conftest.py" befindet sich im "test" Ordner für jedes externe Modul, bzw. jeden implementierten API-Endpunkt eine Testdatei, die die gewünschte Funktionalität prüft. Diese Tests werden sowohl bei jedem commit automatisch lokal ausgeführt und zusätzlich bei jedem neuen Deployment des Backend auf dem Server laufen gelassen. Ohne das Bestehen aller Tests kann und sollte also weder gepusht, noch neu deployed werden.