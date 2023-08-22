---
sidebar_position: 8
---

# context

Der Context-Ordner kann verwendet werden, um Contexts zu organisieren. Ein Context in Next.Js ermöglicht das Weitergeben von Daten an Komponenten, ohne die Daten durch alle Ebenen der Komponenten-Hierarchie explizit weitergeben zu müssen. Ein Context-Ordner könnte beispielsweise Context-Provider und zugehörige Dateien enthalten. Der Zusammenhang zwischen Context und Provider ist ein grundlegendes Konzept in React, das zur effizienten Verwaltung und Weitergabe von Zuständen und Daten innerhalb einer Komponentenstruktur verwendet wird. Hier ist eine Übersicht über die verschiedenen Context-Dateien in diesem Ordner:

## MapContext.tsx

Die Datei "MapContext.tsx" enthält den Kontext für die Kartenansicht in unserer Anwendung. Dieser Kontext speichert Daten und Zustände, die für die Darstellung und Interaktion mit der Karte benötigt werden. Hierzu könnten Informationen über den aktuellen Kartenausschnitt oder Positionen von Markierungen gehören, da die Transformationen je nach Ansicht der Karte anders aussehen. So ist der Wechsel von Leo3 zum Leo18 anders aufgebaut als der Wechsel vom 1. Stockwerk eines Gebäudes ins 2. Stockwerk.

## MapElements.tsx

In der Datei "MapElements.tsx" wird der Kontext für die Elemente auf der Karte verwaltet. Dieser Kontext kann Informationen über die verschiedenen Elemente auf der Karte enthalten, z. B. Gebäude, Räume oder Wege. Dies erleichtert die Kommunikation zwischen den verschiedenen Kartenkomponenten.

## PersonContext.tsx

Der "PersonContext.tsx" verwaltet den Kontext im Zusammenhang mit Personen der Suchfunktion und ordnet Personen den richtigen Räumen zu.

## SearchInputContext.tsx

Die Datei "SearchInputContext.tsx" enthält den Kontext für die Sucheingabe in der Anwendung. Hier werden Zustände und Funktionen gespeichert, die mit der Suchfunktion in Verbindung stehen, wie z. B. der eingegebene Name oder Suchergebnisse.

## TimeoutContext.tsx

Der "TimeoutContext.tsx" verwaltet Zeitüberschreitungen oder Zeitabhängigkeiten in der Anwendung. Dieser Kontext kann verwendet werden, um beispielsweise beim Mensaplan zurück auf den aktuellen Tag zu wechseln, wenn bestimmte Zeitintervalle ohne Interaktion mit dem Display abgelaufen sind.

## ToastContext.tsx

Die Datei "ToastContext.tsx" enthält den Kontext für Toast-Benachrichtigungen in unserer Anwendung. Hier werden Zustände und Funktionen gespeichert, um temporäre Benachrichtigungen anzuzeigen, z. B. besondere Anlässe wie Feiertage.

Die Verwendung von Contexts in unserem Projekt ermöglicht eine effiziente Verwaltung von Zuständen und Daten, indem sie eine zentrale Stelle für den Austausch von Informationen zwischen verschiedenen Komponenten bieten. Dies trägt zur Verbesserung der Skalierbarkeit und Wartbarkeit unserer Anwendung bei, indem Zustände und Daten strukturiert und modularisiert werden.
