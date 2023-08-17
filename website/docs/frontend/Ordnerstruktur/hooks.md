---
sidebar_position: 8
---

# hooks

Im Hooks-Ordner können benutzerdefinierte React Hooks organisiert werden. Hooks sind Funktionen, die es ermöglichen, State und andere React-Funktionalitäten in funktionalen Komponenten zu verwenden.
Dies fördert wiederum die Modularität, sodass die Logik besser strukturiert werden kann. Außerdem wird hier das Fetchen aus unserem Backend gemanaged. Bei useWeather ist beispielsweise die dafür nötige URL "https://ps-housetech.uni-muenster.de:444/api/weather"; Wir nutzen die SWR-Library zum Fetchen aufgrund der Vorteile wie der Stale-While-Revalidate-Strategie (zwischengespeicherte (stale) Version der Daten wird sofort zurückgegeben, während gleichzeitig eine Aktualisierung (revalidate) im Hintergrund ausgelöst wird) oder dem automatischen Caching. Hier ist eine Übersicht über die verschiedenen Hook-Dateien in diesem Ordner:

## useBusplan.tsx

Die Datei "useBusplan.tsx" enthält den benutzerdefinierten Hook "useBusplan", der Logik im Zusammenhang mit dem Busfahrplan in unserer Anwendung abstrahiert. Dieser Hook kann Funktionen und Zustände bereitstellen, die es den Komponenten ermöglichen, auf Busfahrplan-Daten zuzugreifen und diese zu nutzen, um beispielsweise sowas wie die Verspätung anzuzeigen.

## useCafeteriaplan.tsx

In der Datei "useCafeteriaplan.tsx" befindet sich der benutzerdefinierte Hook "useCafeteriaplan". Dieser Hook kann Funktionen und Zustände bereitstellen, um auf Mensaplan-Daten zuzugreifen und sie zu verwalten. So werden die von der API empfangenen Daten so manipuliert, dass auch Tage angezeigt werden an denen die Mensen (aufgrund von Feiertagen, Ferien etc.) geschlossen sind. Dann wird angezeigt, dass die Mensa geschlossen ist. Anderseits würden diese Tage übersprungen werden. 

## useEmployees.tsx

Der "useEmployees.tsx"-Hook bietet Funktionalität und Zustände für die Verwaltung von Mitarbeiterdaten oder Informationen in unserer Anwendung. Dieser Hook ermöglicht den Komponenten den Zugriff auf Informationen von MItarbeitern des Instituts und erleichtert deren Verarbeitung im Wayfinder.

## useEvents.tsx

In der Datei "useEvents.tsx" wird der benutzerdefinierte Hook "useEvents" definiert, der Logik für die Verwaltung von Veranstaltungsdaten bereitstellt. Dieser Hook kann Funktionen und Zustände anbieten, um Events zu laden, anzuzeigen und zu aktualisieren.

## useInstagram.tsx

Der "useInstagram.tsx"-Hook bietet eine Schnittstelle zur Integration von Instagram-Inhalten in unserer Anwendung. Dieser Hook kann Funktionen und Zustände zur Verfügung stellen, um Instagram-Posts oder Bilder abzurufen und darzustellen.

## useWeather.tsx

Die Datei "useWeather.tsx" enthält den benutzerdefinierten Hook "useWeather". Dieser Hook kann Funktionen und Zustände anbieten, um aktuelle Wetterinformationen abzurufen und anzuzeigen.

Die Verwendung von benutzerdefinierten Hooks ermöglicht es uns, Logik und Zustände zu modularisieren und wiederverwendbar zu gestalten. Indem wir spezifische Funktionalitäten in Hooks auslagern, können wir die Wartbarkeit und Lesbarkeit unserer Komponenten verbessern.
