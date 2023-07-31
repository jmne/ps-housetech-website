---
sidebar_position: 1
title: Poetry
---
# Installation und aufsetzen von Poetry

## Einleitung

Dieser Abschnitt beschreibt Schritt für Schritt, wie Poetry auf einem Ubuntu Server installiert und das Backend eingerichtet und installiert werden kann. Poetry ist ein leistungsstarkes Tool zur Verwaltung von Python-Projekten, das Dependency Management, Virtual Environments und Build-Management vereinfacht.

## Installation von Poetry

Bevor wir mit der Einrichtung des Python-Projekts beginnen können, müssen wir Poetry auf dem Ubuntu Server installieren. Hier sind die erforderlichen Schritte:

### Schritt 1: Überprüfen der Systemvoraussetzungen

Vor der Installation von Poetry stellen Sie sicher, dass der Ubuntu Server über Python 3.11.3 oder höher verfügt, da Poetry Python 2 und unser Projekt Python < 3.11.3 nicht unterstützt.

### Schritt 2: Installieren von Poetry

Um Poetry auf dem Ubuntu Server zu installieren, haben wir die folgenden Befehle verwendet:

```bash
curl -sSL https://install.python-poetry.org | python3 -
```

Alternativ, wenn `pip` bereits installiert ist, kann auch der folgende Befehl verwendet werden:

```bash
pip install poetry
```

Die erfolgreiche Installation von Poetry kann mit dem folgenden Befehl überprüft werden:

```bash
poetry --version
```

## Einrichten des Backends

Jetzt, da Poetry erfolgreich installiert ist, können wir das Backend einrichten. Hier sind die erforderlichen Schritte:

### Schritt 1: Erstellen des Projektverzeichnisses

Backend-Code von unserem GitLab-Repository klonen und in das Projektverzeichnis wechseln:

```bash
git clone https://zivgitlab.uni-muenster.de/ml-de/teaching/ps-housetech/ps-housetech-backend.git
cd ps-houstech-backend-main/
```

### Schritt 2: Projektinitialisierung mit Poetry

Mit dem folgenden Befehl können wir Poetry initialisieren und alle erforderlichen Dateien und Verzeichnisse für das Projekt erstellen/installieren:

```bash
poetry install
```

Alle erforderlichen Dateien und Verzeichnisse werden automatisch erstellt, da alle Projektmetadaten und Abhängigkeiten in der `pyproject.toml`-Datei festgelegt sind.

### Schritt 3: Abhängigkeiten und virtuelle Umgebung

Nach Abschluss der Projektinitialisierung erstellt Poetry automatisch eine virtuelle Python-Umgebung.

## Fazit

Poetry wurde erfolgreich auf dem Ubuntu Server installiert, und das Backend wurde initialisiert. Nun können wir ohne Probleme das Backend verwenden.

Weitere Informationen zu Poetry und dessen Funktionen finden sich in der [offiziellen Poetry-Dokumentation](https://python-poetry.org/docs/).
