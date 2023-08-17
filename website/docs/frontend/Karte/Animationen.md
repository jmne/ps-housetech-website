# Animationen

## AnimationQueue

Hier ist eine Queue implementiert, die für Animations-Arrays aus den in `transitions` implementierten Funktionen genutzt werden kann. Animationen werden hierbei sequenziell ausgeführt.

## mapTransformations

Dieser Abschnitt enthält eine Reihe von Funktionen, die dazu dienen, Gebäudekarten und -grundrisse zu animieren und hervorzuheben.

### minimize / maximize - building / campus

Hier wird die Animation gehandhabt, um ein Gebäude/den Campus sichtbar, oder unsichtbar zu machen.

### setRoomHighlight

Mit dieser Funktion kann ein Raum anhand von dem Gebäude, der Raumnummer und dem übergeordneten Karten-Element aktiviert und deaktiviert werden.

### highlightFloor

Mit dieser Funktion kann innerhalb eines Array von mehreren SVG Elementen ein bestimmter Flurplan in den Fokus gerückt werden. Dies wird für Leo 3 genutzt.

### collapseFloorsOfBuilding

Hiermit wird die Animation des "zusammenklappens" von Leo 3 gehandhabt, bevor der Gebäudeplan ausgeblendet wird.

### buildingClickHandler

Diese Funktion wird genutzt, um beim rendern der Karten den Click listener zu setzen, welcher bei Interaktion mit der Karte die Daten im Daten-Context setzt und somit die Animationen triggert.

## mapValidations

Hier sind Hilfsfunktionen implementiert, welche für die Korrektur und Verifizierung von Daten für die Karte genutzt werden. Diese Funktionen sind nicht direkt für Animationen verantwortlich, sondern für statische Daten, wie die Personen in Räumen, die korrekten Anzeigenamen für Gebäude und die Verifizierung der von Personen im Cris angegebenen Daten. Die Daten aus dem Cris sollen so wie sie hinterlegt angezeigt werden, müssen allerdings für die Animationen verifiziert werden.

## personCardsTransformations

Hier wird die Interaktion mit den Suchergebnissen gehandhabt. Es bestehen Funktionen zum "einklappen"/"ausklappen" von Personen Karten, und dem Handhaben der Daten im `MapContext`. Diesen Funktionen wird jeweils ein `Employee` Objekt übergeben, welches ein `RefObject` enthält, damit von jeder Komponente aus der Zustand der Personen-Karte geseteuert werden kann.

## transitions

Hier werden Hilfsfunktionen bereitgestellt, die sequenzielle Animationen ermöglichen. Hierzu wird bei Ausführung einer Animation ein Promise zurückgegeben, welches durch einen `transitionEnd`-listener aufgelöst wird. Somit kann durch `await` auf das Ende einer Animation gewartet werden.
