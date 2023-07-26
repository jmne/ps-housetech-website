---
sidebar_position: 1
---
# Next.js Frontend

Diese Dokumentation beschreibt Schritt für Schritt, wie wir ein Next.js Frontend von GitLab auf einem Linux Server mit pm2 eingerichtet haben. Wir verwenden pm2, um das Next.js Frontend als Prozess auf unserem Server zu verwalten und es automatisch bei Systemstart zu starten.

## Voraussetzungen

Bevor wir mit der Einrichtung beginnen, müssen wir sicherstellen, dass der Linux Server über Node.js und npm verfügt. Dafür haben wir die folgenden Befehle verwendet:

```bash
sudo apt install nodejs
sudo apt install npm
```

## Schritt 1: Installation von pm2

Danach installieren wir pm2 global auf unserem Server:

```bash
npm install -g pm2
```

## Schritt 2: Projekt von GitLab klonen

Die GitLab-Repository des Next.js Frontends klonen:

```bash
git clone https://zivgitlab.uni-muenster.de/ml-de/teaching/ps-housetech/ps-housetech-frontend.git
```

## Schritt 3: Installieren der Projektabhängigkeiten

Zum Projektverzeichnis navigieren und installieren der erforderlichen Node.js-Abhängigkeiten:

```bash
cd ps-housetech-frontend-main/
npm install
```

## Schritt 4: Build des Next.js Frontends

Dann müssen wir das Next.js Frontend bauen:

```bash
npm run build
```

## Schritt 5: Konfiguration von pm2

Das Node.js Frontend mit pm2 verwalten. Dafür erstellen wir eine pm2-Instanz:

```bash
pm2 start npm --name frontend-main -- start --port 3000
```

Mit diesem Befehl erstellen wir eine pm2-Instanz mit dem Namen `frontend-main`, die den Befehl `npm start --port 3000` ausführt. Der Befehl `npm start --port 3000` startet das Next.js Frontend auf Port 3000.


## Schritt 6: Starten des Next.js Frontends mit pm2

Starten des Next.js Frontend mit pm2 mithilfe der zuvor erstellten Konfiguration:

```bash
pm2 start frontend-main
```

## Schritt 7: Speichern der pm2-Konfiguration

Damit die pm2-Konfiguration auch nach einem Serverneustart erhalten bleibt, speichern wir sie:

```bash
pm2 save
```

## Schritt 8: Einrichten von pm2 für den Systemstart

Aktivieren von pm2, um das Next.js Frontend automatisch beim Systemstart zu starten:

```bash
pm2 startup
```

Damit ist die Einrichtung von pm2 abgeschlossen.

## Fazit

pm2 übernimmt die Verwaltung des Next.js Frontends als Prozess und startet es automatisch bei Systemstart. Das Frontend ist jetzt über den entsprechenden Port erreichbar.

Mit pm2 können wir das Frontend effizient und zuverlässig in einer Produktionsumgebung betreiben.

Weitere Informationen zu pm2 finden sich in der [pm2-Dokumentation](https://pm2.keymetrics.io/).
