---
sidebar_position: 14
---

# utils

In diesem Ordner können Hilfsfunktionen, Konstanten oder Dienstprogramme abgelegt werden, die in verschiedenen Teilen der Anwendung verwendet werden können, wie beispielsweise API-Requests oder Datenverarbeitung wie es beim Cafeteriaplan der Fall ist. Dort wandeln wir z.B. das Datumsformat um. Hier ist eine Übersicht über die verschiedenen Dateien und Ordner in diesem Ordner:

## basicFetcher.tsx

Die Datei "basicFetcher.tsx" enthält eine Hilfsfunktion namens `basicFetcher`, die verwendet wird, um einfache Anfragen an APIs oder Server zu senden und die empfangenen Daten zurückzugeben. Diese Funktion ermöglicht eine schnellere und konsistente Art und Weise, Daten abzurufen und zu verarbeiten.

## cafeteriaHelper.tsx

Die Datei "cafeteriaHelper.tsx" enthält Hilfsfunktionen, die im Zusammenhang mit dem Mensaplan unserer Anwendung verwendet werden. Diese Funktionen dienen dazu, Daten aus dem Mensaplan zu extrahieren, zu transformieren und anzuzeigen.

## constants.tsx

Die Datei "constants.tsx" enthält Konstanten und Konfigurationen, die in der gesamten Anwendung verwendet werden können. Hier können Werte für unsere Fuzzy Personensuche, Timeout für das Zurücksetzen der Anwendung bei Inaktivität, Farbwerte und andere global verwendbare Daten zentralisiert werden, um Konsistenz und Wartbarkeit zu gewährleisten.

## dateHelpers.tsx

Die Datei "dateHelpers.tsx" enthält eine Hilfsfunktion, die im Umgang mit Datum und Uhrzeit in unserer Anwendung nützlich sind.

## IdleHandling-Ordner

Der "IdleHandling"-Ordner enthält ein Modul für die Behandlung von Inaktivitätszuständen in unserer Anwendung. Hier können Funktionen und Logik zum Erkennen und Handhaben von Leerlaufzeiten zentralisiert werden, um beispielsweise den Bildschirm oder bestimmte Funktionen zu deaktivieren, wenn der Benutzer inaktiv ist.

## wayfinderAnimation-Ordner

Der "wayfinderAnimation"-Ordner enthält ein Modul für die Animationen im Zusammenhang mit dem Wegfinder (Wayfinder) unserer Anwendung. Hier können Funktionen und Komponenten zur Erstellung von Animationen für die Wegfindung zentralisiert werden, um eine reibungslose und ansprechende Benutzererfahrung zu schaffen.

Die Verwendung des "utils"-Ordners ermöglicht es uns, wiederverwendbare Funktionen und Module zu organisieren und zentral zu verwalten. Dies fördert die Modulare Entwicklung, verbessert die Wartbarkeit und erleichtert die Arbeit mit gemeinsam genutzten Funktionen in verschiedenen Teilen der Anwendung.
