---
sidebar_position: 5
---

# __mocks__

Ein mocks-Directory (Doppelunterstrich "mocks" Doppelunterstrich) ist ein spezieller Ordner, der dazu dient, Mock-Implementierungen von Modulen oder Abhängigkeiten zu speichern. Mocks werden verwendet, um während des Testens reale Implementierungen von Modulen zu ersetzen und vorhersehbare Verhaltensweisen für Testzwecke zu simulieren.

## mock_css.js

Die Datei "mock_css.js" enthält ein Mock-Modul für CSS-Dateien. Dieses Modul wird verwendet, um CSS-Abhängigkeiten zu mocken, wenn sie in unseren Tests oder in der Entwicklungsumgebung nicht benötigt werden. Dies hilft, unerwünschte Nebeneffekte in den Tests zu vermeiden und die Ausführungsgeschwindigkeit der Tests zu erhöhen.

## mock_svgComponent.tsx

Die Datei "mock_svgComponent.tsx" enthält ein Mock-Modul für SVG-Komponenten. In dieser Datei wird eine Mock-Version einer SVG-Komponente erstellt, die bei unserem Projekt ein Bus-Symbol repräsentiert. Dieses Mock-Bus-Icon wird angezeigt, wenn Benutzer im Frontend auf die angezeigten abfahrenden Busse klicken. Indem wir eine Mock-Komponente erstellen, können wir das tatsächliche SVG-Bus-Icon ersetzen und das Verhalten simulieren, ohne auf echte Ressourcen zugreifen zu müssen.

## mock_svgURL.js

Die Datei "mock_svgURL.js" enthält ein Mock-Modul für SVG-URLs. Dieses Modul wird verwendet, um SVG-URLs zu mocken, die in unserer Anwendung referenziert werden. Dies ist besonders nützlich, wenn wir in unseren Tests oder in der Entwicklung auf externe SVG-Ressourcen zugreifen müssen, ohne tatsächlich Netzwerkanfragen durchzuführen.

## mock_swiper.tsx

Die Datei "mock_swiper.tsx" enthält ein Mock-Modul für das Swipen von Inhalten. Diese Datei ist dafür verantwortlich, das Swipen von Elementen wie Mensatagen zu simulieren. Das Mocken dieses Verhaltens ermöglicht es uns, das Swiping in unserer Anwendung zu testen, ohne auf reale Swipe-Interaktionen angewiesen zu sein.

Die "__mocks__"-Ordner Struktur erleichtert die Entwicklung und das Testen unserer Anwendung erheblich, indem sie uns die Möglichkeit gibt, realistische Szenarien und Verhaltensweisen zu simulieren, ohne tatsächlich auf externe Ressourcen oder komplexe Abhängigkeiten zugreifen zu müssen. Dies trägt dazu bei, effiziente Tests durchzuführen und gleichzeitig die Zuverlässigkeit unserer Anwendung sicherzustellen.
