---
sidebar_position: 2
---

# Komponenten

Der Aufbau der integrierten Komponente "Wayfinder" ist in zwei Teile unterteilt. Die Darstellung und eigenständige Navigation der Karte sind hierbei im Ordner "Map" zu finden, während sich die Suchleiste aus "PersonResult" und "SearchBar" zusammensetzt.

## Karte

In diesem Ordner ist die Darstellung und eigenständige Navigation der Karte implementiert. Es folgt eine Beschreibung der genutzten Komponenten und Zuständigkeiten.

### CampusMap

In dieser Komponente werden die Bestandteile der Karte zusammengesetzt und das Highlighting der Räume implementiert. Die jeweiligen Karten für den Campus, Leo-3 und Leo-11, der angezeigte Titel und die Buttons zur Navigation sind in eigenen Komponenten implementiert. Da das Highlighting der Räume über den Daten Speicher [MapContext](../context.md) getriggert wird, kann es hier einmal zentral für alle Komponenten gehandhabt werden. Hierzu wird zunächst das Highlighting für den vorher markierten Raum entfernt und für den neuen Raum hinzugefügt. Auch wird hier der [`IdleHandler`](../utils.md) erstellt, der die Daten im [MapContext](../context.md) zurücksetzt.

### Components

#### Title

In der Title-Komponente findet sich die Implementierung der Info Kachel. Zum Anzeigen der korrekten Daten wird auf den [MapContext](../context.md) zurückgegriffen. Wird die Auswahl auf der Karte geändert, wird auf [`getPersonForRoom`](../utils) zurückgegriffen um die relevanten Personen, Organisationen und Hörsäle für die Auswahl herauszufinden und diese Darzustellen. `getRoomDisplayName` wird genutzt, um den Gebäude-/Raum-Namen in ein korrektes Format zur Anzeige zu konvertieren. `setFloorName` wird genutzt, um (falls notwendig) den Namen der Etage (nur für Leo 3 relevant) zu aktualisieren.

#### MapLeo3, MapLeo11, MapLeonardoCampus

Diese Komponenten sind jeweils gleich vom Aufbau her und teilen sich ihre Funktionsweise. Hier sind die tatsächlichen Karten implementiert, die in der Navigation dargestellt sind. Die jeweiligen React-Komponenten welche die jeweiligen SVG-Dateien mit den Raumplänen enthalten werden hier importiert. Hierbei hat jede SVG-Komponente einen `onClick` listener der auf die `buildingClickHandler` Funktion zurückgreift. Diese handhabt die Änderungen am [MapContext](../context.md) sobald ein Nutzer auf die Karte tippt. Um auf Änderungen im [MapContext](../context.md) zu reagieren, werden `useEffect` hooks genutzt. Sobald eine Änderung auftritt, wird geprüft welche Darstellungsänderungen für den jeweiligen Karten-Teil notwendig sind und zunächst im `animations` gespeichert, um diese sequenziell auszuführen. Für die Ausführung der Animationen wird auf eine Instanz von [`AnimtionQueue`](../utils.md) zurückgegriffen. Hierdurch wird sichergestellt, dass mehrfaches Tippen auf der Karte nicht dazu führt, dass Animationen sich gegenseitig beeinflussen.

#### Controls

Die Komponente stellt ein visuelles Bedienelement in Form von Schaltflächen zur Verfügung, die es dem Benutzer ermöglichen, schnell und einfach zwischen den verschiedenen Gebäuden zu wechseln oder bestimmte Gebäude hervorzuheben.

Die Controls Komponente nutzt React-Hooks wie `useCallback` und `useMemo` zur Optimierung der Performance. Die Komponente greift auf den `mapContext` und `selectedPersonContext` zurück, um den aktuellen Stand der ausgewählten Karte und der ausgewählten Person zu aktualisieren.
