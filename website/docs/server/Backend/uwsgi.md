---
sidebar_position: 2
---
# uWSGI

uWSGI ist ein leistungsstarker Application Server, der es ermöglicht, Python-Anwendungen wie Flask effizient und skalierbar auszuführen.
Im Folgenden werden wir erklären, wie wir uWSGI installiert und konfiguriert haben.

## Schritt 1: Installation von uWSGI

Zuerst haben wir uWSGI auf unserem Linux Server installiert. Die Installation geht mithilfe des folgenden Befehls ganz einfach:

```bash
pip install uwsgi
```

## Schritt 2: Flask-Anwendung erstellen

Die Flask Anwendung wir in unserer run.py Datei erstellt. Diese Datei wird dann von uWSGI verwendet, um die Anwendung zu starten. Die run.py Datei enthält den folgenden Code, der dann von uWSGI verwendet wird, um die Anwendung zu starten:
```python
# app.py
...
app = create_app()
...
```

## Schritt 3: Konfiguration von uWSGI

Es ist möglich uWSGI mit einer Konfigurationsdatei zu konfigurieren. Wir haben uns jedoch für die Verwendung von Parametern entschieden, die direkt in der Kommandozeile angegeben werden. Dies hat den Vorteil, dass wir die Konfiguration direkt in der Kommandozeile angeben können, ohne eine zusätzliche Konfigurationsdatei zu erstellen. Die Konfiguration von uWSGI erfolgt mit dem folgenden Befehl:

```bash
uwsgi --http :8000 -w src.run:app --master --strict --enable-threads --vacuum --single-interpreter --need-app
```

In dieser Konfiguration:

- `http :8000` gibt an, dass uWSGI einen HTTP-Server auf Port 8000 starten soll.
- `-w src.run:app` gibt an, dass uWSGI die Flask-Anwendung aus der Datei `src/run.py` importieren soll.
- `--master` gibt an, dass uWSGI einen Master-Prozess starten soll, der die Anzahl der Worker-Prozesse verwaltet.
- `--strict` gibt an, dass uWSGI die Anwendung nicht startet, wenn Fehler auftreten.
- `--enable-threads` gibt an, dass uWSGI Threads verwenden soll, um die Anfragen zu verarbeiten.
- `--vacuum` gibt an, dass uWSGI die Dateien löschen soll, die von der Anwendung erstellt wurden, wenn die Anwendung beendet wird.
- `--single-interpreter` gibt an, dass uWSGI nur einen Interpreter verwenden soll, um die Anwendung auszuführen.
- `--need-app` gibt an, dass uWSGI die Anwendung nicht startet, wenn die Anwendung nicht gefunden wird.

## Schritt 4: uWSGI mit Service Manager starten
Um den uWSGI-Prozess zu starten, haben wir einen Service Manager verwendet. Wir haben uns für `systemd` entschieden, da es auf den meisten Linux-Distributionen vorinstalliert ist. Um uWSGI mit `systemd` zu starten, haben wir eine Service-Datei erstellt, die den folgenden Code enthält:

```bash
[Unit]
Description=uWSGI instance to serve Flask backend (dev)
After=network.target

[Service]
User=house-admin
Group=www-data
WorkingDirectory=/home/house-admin/ps-housetech-backend-main
ExecStart=/home/house-admin/ps-housetech-backend-main/.venv/bin/uwsgi --http :9000 -w src.run:app --master --strict --enable-threads --vacuum --single-interpreter --need-app
Restart=always
Environment='R022_USERNAME=..'
Environment='R022_EMAIL=..'
Environment='R022_PASSWORD=..'
Environment='HTTP_PROXY=..'
Environment='HTTPS_PROXY=..'
Environment='WEATHER_API_KEY=..'
Environment='INSTAGRAM_KEY=...'

[Install]
WantedBy=multi-user.target
```

In dieser Service-Datei:

- `Description` gibt eine Beschreibung des uWSGI-Prozesses an.
- `After` gibt an, dass der uWSGI-Prozess nach dem Start des Netzwerks gestartet werden soll.
- `User` gibt den Benutzer an, unter dem der uWSGI-Prozess ausgeführt werden soll.
- `Group` gibt die Gruppe an, unter der der uWSGI-Prozess ausgeführt werden soll.
- `WorkingDirectory` gibt das Verzeichnis an, in dem der uWSGI-Prozess ausgeführt werden soll.
- `ExecStart` gibt den Befehl an, mit dem der uWSGI-Prozess gestartet werden soll.
- `Restart` gibt an, dass der uWSGI-Prozess neu gestartet werden soll, wenn er abstürzt.
- `Environment` gibt die Umgebungsvariablen an, die der uWSGI-Prozess verwenden soll. Die Variablen-Werte wurden maskiert.
- `WantedBy` gibt an, dass der uWSGI-Prozess gestartet werden soll, wenn der Multi-User-Modus gestartet wird.


## Fazit
Mit diesen Einstellungen sollte der Server erfolgreich auf dem Port 8000 verfügbar sein.

In den folgenden Abschnitten werden wir erklären, wie wir uWSGI mit Nginx konfiguriert haben, um die Anfragen an den Server zu verteilen.

Weitere Informationen zu uWSGI und dessen Konfiguration finden sich in der [uWSGI-Dokumentation](https://uwsgi-docs.readthedocs.io/).
