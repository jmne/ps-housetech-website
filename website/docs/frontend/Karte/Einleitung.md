---
sidebar_position: 1
---

# Karte - Navigation

Das vorliegende Kapitel dokumentiert den strukturellen Aufbau der Campus-Navigation und die implementierten Funktionen zum ausführen der Animationen. Es folgt zunächst ein Überblick über die verschiedenen Kapitel.

## Datenspeicher

Zur besseren modularisierung der Funktionen ist die Navigations-Komponente auf verschiedene Komponenten aufgeteilt. Hierbei ist ein gemeinsamer Datenspeicher essenziell, damit die Komponenten stets die gleichen Daten anzeigen und synchronisiert auf Interaktionen vom Nutzer reagieren können. Hierzu wird auf die React-Contexts [MapContext](../context.md) und [MapElements](../context.md) genutzt welche separat dokumentiert sind. Dieses Konstrukt folgt bekannten React best-practices und ermöglicht 'Pure Components'.

## Komponenten

In diesem Kapitel werden folgende Themen behandelt:

- Erstellung der React-Komponenten aus den SVG-Dateien
- Struktureller Aufbau der Karten-Komponenten inklusive Buttons zur eigenständigen Navigation der Karte
- Struktureller Aufbau der Suchleiste

## Animationen

In diesem Kapitel werden die spezifischen Animations-Funktionen behandelt, die für die Karte von den Komponenten genutzt werden. Hierfür wird auch auf die [allgemeinen Animations-Funktionen](../utils.md) zurückgegriffen.
