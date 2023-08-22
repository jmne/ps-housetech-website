---
sidebar_position: 11
---

# pages

Ist eine Konvention in Projekten, die Next.js verwenden. Hier werden die Hauptseiten der Anwendung erstellt. Wir haben zwar nur eine Benutzeroberfläche, dennoch haben wir mehrere Seiten, da bei Erweiterung einige Funktionalitäten weiterhin gelten sollen. 

## api-Ordner

Der "api"-Ordner enthält Endpunkte für API-Routen, die von unserer Next.js-Anwendung bereitgestellt werden. Innerhalb dieses Ordners befindet sich die Datei "health-check-next.js", die einen API-Endpunkt für die Überprüfung der Stabilität der Anwendung bereitstellt.

## calendar/[room]

Der "calendar"-Ordner enthält Unterordner, die für verschiedene Räume in unserem Kalender stehen. Jeder Unterordner enthält Dateien, die Routen für den Kalender des jeweiligen Raumes definieren. Dies ermöglicht es, individuelle Kalenderansichten für verschiedene Räume bereitzustellen.

## index.tsx

Die Datei "index.tsx" definiert eine wichtige Route für unser Touchdisplay. Diese Route stellt die Hauptansicht für das Touchdisplay dar und enthält die Komponenten, die auf dem Display angezeigt werden. Hier wird die Benutzeroberfläche und die Interaktion des Touchdisplays gestaltet.

## _app.tsx

Die Datei "_app.tsx" ist eine grundlegende Datei in Next.js, die die "App"-Komponente definiert. Diese Datei wird um die "index.tsx"-Datei platziert und ermöglicht die Implementierung von globalen Funktionen oder Komponenten, die auf allen Seiten der Anwendung verfügbar sein sollen. Zum Beispiel können hier Komponenten wie der "ToastProvider" implementiert werden.

## _document.tsx

Die Datei "_document.tsx" ist eine weitere grundlegende Datei in Next.js, die die Basis-Dokumentenstruktur für alle Seiten der Anwendung definiert. Sie wird verwendet, um die HTML-Dokumentenstruktur zu gestalten.
