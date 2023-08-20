---
sidebar_position: 7
---

# components

# Komponenten-Ordner Struktur

In diesem Ordner werden wiederverwendbare React-Komponenten abgelegt. Bei uns sind das zum Beispiel der Busplan, Mensaplan, News usw. Dies fördert die Modulare Entwicklung und Wiederverwendbarkeit, was zu einer klaren Struktur und besseren Testbarkeit führt, da Komponenten u.U. auch alleine getestet werden können. Hier ist eine Übersicht über die verschiedenen Unterordner und die darin enthaltenen Komponenten:

## Calendar

Der "Calendar"-Ordner enthält Komponenten für das Display vor dem Raum 022. Hier finden sich:

- **Kalender Komponente:** Diese Komponente dient zur Anzeige unseres Kalender sauf dem Display.

- **Tagesschau Newsfeed:** Diese Komponente zeigt aktuelle Nachrichten von der Tagesschau auf dem Display an.

## Dashboard

Der "Dashboard"-Ordner enthält Komponenten, die auf dem Touchdisplay verwendet werden. Hier finden sich:

- **Busplan:** Die Komponente zur Anzeige des Busfahrplans, damit die Nutzer die Abfahrtszeiten der Busse am Leo-Campus verfolgen können.

- **Cafeteriaplan:** Diese Komponente zeigt die Speisepläne der Mensen an, damit die Nutzer die verfügbaren Mahlzeiten einsehen können.

- **Headline:** Eine Komponente zur Anzeige der Überschrift.

- **News:** Diese Komponente ermöglicht die Anzeige von aktuellen Nachrichten oder Ankündigungen welche in Drupal (also auf der Webseite des Instituts) gepflegt werden.

- **Wayfinder:** Eine Komponente, die den Benutzern hilft, den richtigen Raum (generell als auch einer bestimmten Person zugeordnet) am Leo-Campus zu finden.

- **Weather:** Diese Komponente zeigt aktuelle Wetterinformationen für Münster an.

- **index.tsx:** Eine Index-Datei, die die Exporte der verschiedenen Dashboard-Komponenten bündelt.

## UI

Der "UI"-Ordner enthält wiederverwendbare UI-Komponenten, die in verschiedenen Teilen unserer Anwendung eingesetzt werden. Hier finden sich:

- **Button:** Eine generische Button-Komponente.

- **Card:** Eine Komponente zur Erstellung von Karten mit Inhalten der einzelnen Komponenten. Hier werden Fehler der einzelnen Komponenten aufgefangen, sodass nur die einzelne Elemente bei Fehlern abstürzen und nicht das gesamte Display.

- **Info:** Diese Komponente dient zur Anzeige von informativen Inhalten zu den einzelnen Komponenten.

- **Keyboard:** Eine virtuelle Tastaturkomponente, die die Eingabe bei der Personensuche ermöglicht.

- **Overlay:** Eine Komponente zur Erstellung von Pop-Ups auf dem Bildschirm. Diese werden in ebenfalls Drupal gepflegt.

- **RotationItem:** Eine Komponente zur Darstellung von Elementen, die sich drehen oder animieren. Hier dient das Anklicken eines Busses als Beispiel.

- **Toast:** Eine benachrichtigungsähnliche Komponente, die kurzzeitig Informationen anzeigt. Kann zu besonderen Anlässen und Feiertagen genutzt werden.

## Flappy

Der "Flappy"-Ordner enthält ein Minispiel, das an ein bekanntes Handyspiel angelehnt ist. Hier finden sich Komponenten, die für das Spiel erforderlich sind.

Die klare Strukturierung unserer Komponenten in Unterordnern erleichtert die Organisation und Wiederverwendbarkeit unserer UI-Elemente und Funktionalitäten. Dies trägt dazu bei, eine konsistente Benutzererfahrung zu gewährleisten und den Entwicklungsprozess effizienter zu gestalten.
