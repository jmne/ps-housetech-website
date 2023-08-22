---
sidebar_position: 5
title: Struktur / Arbeitsablauf
---
## GitLab Struktur und Arbeitsablauf

Unsere GitLab-Struktur ist so gestaltet, dass ein effizienter Entwicklungsprozess gewährleistet wird, der klare Schritte für Codeänderungen, Codeüberprüfung und -integration bietet. Diese Dokumentation gibt einen detaillierten Überblick über unsere Struktur und den Arbeitsablauf.

## Branches:

1. ## main:
    - Die "main" Branch enthält den aktuellen Produktionsstand unseres Codes. Änderungen, die hierhin gemerged werden, werden in die Live-Umgebung übernommen.

2. ## development:
    - Die "development" Branch repräsentiert unsere Staging-Umgebung, in der neue Funktionen und Änderungen getestet werden, bevor sie in die Produktion übernommen werden.

## Arbeitsablauf für Codeänderungen:

1. ## Erstellen eines Issues:
    - Bevor eine Codeänderung vorgenommen wird, erstellt der Entwickler ein Issue, in dem die geplante Änderung, der Grund und die Anforderungen beschrieben werden. Dieses Issue dient als Grundlage für die Änderungen und erleichtert die Verfolgung des Fortschritts.

2. ## Erstellen einer neuen Branch:
    - Der Entwickler erstellt eine neue Branch aus der "development" Branch heraus. Dies ermöglicht es, die Änderungen getrennt vom Hauptcode zu entwickeln.

3. ## Änderungen vornehmen:
    - Auf der neuen Branch werden die notwendigen Änderungen durchgeführt, um das Issue zu lösen. Der Entwickler kann sich auf diese Weise auf eine spezifische Aufgabe konzentrieren, ohne den Hauptcode zu beeinträchtigen.

4. ## Erstellen einer Merge Request:
    - Nachdem die Änderungen abgeschlossen sind und der Code auf der neuen Branch gepusht wurde, wird eine Merge Request (MR) erstellt.
    - Der MR verlinkt auf das entsprechende Issue und beschreibt die vorgenommenen Änderungen. Er dient als Grundlage für die Codeüberprüfung.

5. ## Codeüberprüfung und Tests:
    - Ein anderer Entwickler überprüft den Code im MR. Dabei wird darauf geachtet, dass die Änderungen den Anforderungen entsprechen, sauber und gut dokumentiert sind.
    - Die GitLab CI/CD Pipeline wird automatisch gestartet und führt Tests, statische Codeanalyse und andere Schritte durch, um sicherzustellen, dass der Code qualitativ hochwertig ist.

6. ## Merging in die "development" Branch:
    - Nach erfolgreicher Codeüberprüfung und bestandenen Tests wird der MR in die "development" Branch gemerged.
    - In dieser Umgebung werden die Änderungen getestet, um sicherzustellen, dass sie gut funktionieren und keine Probleme verursachen.

7. ## Merging in die "main" Branch (für Produktion):
    - Wenn die Änderungen in der "development" Branch erfolgreich getestet wurden, können sie in die "main" Branch gemerged werden, um sie in die Produktionsumgebung zu übernehmen.
    - Ein weiterer MR wird erstellt, um die Änderungen in die "main" Branch zu integrieren.
    - Dieser MR unterliegt erneut einer Codeüberprüfung und den automatischen Tests in der Pipeline, bevor er akzeptiert wird.

Durch diesen gut strukturierten Arbeitsablauf stellen wir sicher, dass Änderungen systematisch überprüft, getestet und integriert werden, bevor sie in die Produktionsumgebung gelangen. Dies fördert die Codequalität, Stabilität und Kontrolle über unseren Entwicklungsprozess.
