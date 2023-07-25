---
sidebar_position: 1
---

# CI/CD

Unsere Repositories sind auf GitLab verfügbar. Wir verwenden GitLab CI/CD, um unsere Anwendungen automatisch zu bauen und zu testen. Wenn ein Entwickler einen neuen Code in das Repository hochlädt, wird die Anwendung automatisch gebaut und getestet. Wenn die Tests erfolgreich sind, wird die Anwendung automatisch auf unseren Servern bereitgestellt.

Wenn alle vorher beschriebenen Setup Schritte aus Front/Backend abgeschlossen sind, sollte die CI/CD Pipeline automatisch funktionieren. Ein SSH-Key muss in GitLab hinterlegt werden, damit die Anwendung auf den Server deployed werden kann.

Zusätzlich sollten die Namen und Pfade der Repositories in der `.gitlab-ci.yml` Datei angepasst werden (falls nötig).
