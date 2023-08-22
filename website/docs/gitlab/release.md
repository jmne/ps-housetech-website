---
sidebar_position: 4
title: Release
---
## Erstellen eines neuen Releases

Ein neuer Release in unserem Projekt wird durch einen gut strukturierten Prozess ermöglicht. Dieser Prozess umfasst das Taggen des Codes aus der "main" Branch, das Starten einer speziellen Pipeline zur Erstellung des Releases und das Anfügen einer ZIP-Datei des Codes als Anhang zum Release. Darüber hinaus wird automatisch eine Zusammenfassung der letzten 20 geschlossenen Issues und Merge Requests in die Release-Beschreibung aufgenommen. Dies ermöglicht eine klare Übersicht über die Änderungen in diesem Release.

## Schritt-für-Schritt-Anleitung:

1. ## Taggen des Codes:
    - Navigiere zur GitLab-Oberfläche und wechsle zum Repository.
    - Stelle sicher, dass du auf der "main" Branch bist, von der aus der neue Release erstellt werden soll.
    - Erstelle einen neuen Tag, um den Zustand des Codes für dieses Release zu kennzeichnen. Dies kann über die Befehlszeile mit `git tag -a v1.0 -m "Version 1.0"` erfolgen, wobei "v1.0" die Versionsnummer ist.
    - Pushe den erstellten Tag mit `git push origin v1.0`.

   (Der oben beschrieben Ablauf kann auch über die GitLab Website erstellt werden.)

2. ## Starten der Release-Pipeline:
    - Wenn der Tag erstellt und gepusht wurde, wird automatisch die vordefinierte Pipeline für die Release-Erstellung gestartet.
    - Diese Pipeline ist in der `.gitlab/release.yaml` Datei definiert und enthält Schritte zur Erstellung des Releases, zur Erstellung der ZIP-Datei und zur Zusammenstellung der Änderungsübersicht.

3. ## Erstellung der ZIP-Datei:
    - Die Pipeline wird den markierten Tag verwenden, um den entsprechenden Codezustand zu identifizieren.
    - Der Code wird komprimiert und als ZIP-Datei gespeichert, um als Anhang im Release zur Verfügung zu stehen.

4. ## Zusammenfassung der Änderungen:
    - In die Beschreibung des Releases werden automatisch die Zusammenfassungen der letzten 20 geschlossenen Issues und Merge Requests eingefügt.
    - Diese Informationen bieten eine klare Übersicht über die hinzugefügten Funktionen, behobenen Fehler und anderen Änderungen im Release.

5. ## Abschluss des Release-Prozesses:
    - Sobald die Pipeline erfolgreich abgeschlossen ist, wird das Release erstellt und die ZIP-Datei als Anhang hinzugefügt.
    - Das Release kann über die GitLab-Oberfläche aufgerufen werden, um den Code herunterzuladen und die Änderungen im Detail zu überprüfen.

Durch das Folgen dieser Anleitung kannst du einen neuen Release erfolgreich erstellen, der den aktuellen Zustand des Codes markiert, eine klare Übersicht über die Änderungen bietet und den Code als ZIP-Datei zur Verfügung stellt. Dies fördert Transparenz, Klarheit und eine reibungslose Veröffentlichung neuer Versionen unserer Anwendung.
