---
sidebar_position: 2
title: Pipeline
---
## GitLab CI/CD Pipeline

Die GitLab CI/CD Pipeline ist ein essenzieller Bestandteil unseres Entwicklungsprozesses, der eine automatisierte und konsistente Bereitstellung von Codeänderungen in unserer Anwendungslandschaft gewährleistet. Diese Dokumentation erklärt die Funktionsweise unserer Pipeline, die in der Datei `.gitlab-ci.yaml` definiert ist.

## Pipeline Überblick:

Unsere Pipeline besteht aus mehreren aufeinanderfolgenden Schritten, die sicherstellen, dass der Code reibungslos gebaut, getestet, analysiert und bei erfolgreicher Validierung bereitgestellt wird. Hier ist eine Übersicht über die Schritte:

1. ## Build:
   In diesem Schritt wird der Quellcode des Projekts kompiliert und alle erforderlichen Abhängigkeiten werden installiert. Dadurch wird sichergestellt, dass der Code erfolgreich in ausführbaren Code umgewandelt werden kann.

2. ## Tests:
   Nach dem Build werden umfangreiche Tests auf den Code angewendet, um sicherzustellen, dass er wie erwartet funktioniert. Dies umfasst Unit-Tests und andere Testarten, die die Funktionalität und Stabilität des Codes überprüfen.

3. ## Statische Code-Analyse:
   Hier wird eine statische Code-Analyse durchgeführt, um potenzielle Codequalitätsprobleme zu identifizieren. Diese Analyse hilft dabei, Best Practices zu fördern, potenzielle Bugs aufzudecken und die allgemeine Codequalität zu verbessern.

4. ## Testabdeckung:
   Die Testabdeckung wird gemessen, um zu ermitteln, wie viel Prozent des Codes durch Tests überprüft werden. Dies ermöglicht uns, sicherzustellen, dass ausreichende Testfälle existieren, um eine angemessene Codeabdeckung zu gewährleisten.

5. ## Deployment (nur für main und development):
   Wenn die vorherigen Schritte erfolgreich sind und der Code in den "main" oder "development" Branch gemerged wird, wird der Code auf unseren Servern bereitgestellt. Dieser Schritt umfasst das Hochladen des neuen Codes und das Aktualisieren der Anwendungslandschaft.

## Zugriff auf bereitgestellten Code:

Der auf dem Server bereitgestellte Code kann über die GitLab Environments zugegriffen werden. Environments sind Umgebungen, in denen der Code live geschaltet wird, und sie ermöglichen es, Änderungen in einer kontrollierten Umgebung zu überprüfen, bevor sie auf die Produktionsumgebung angewendet werden.

Insgesamt bietet unsere GitLab CI/CD Pipeline eine effiziente Möglichkeit, Codeänderungen zu überprüfen, sicherzustellen, dass sie den Qualitätsstandards entsprechen, und sie automatisch auf unseren Servern bereitzustellen. Dieser Prozess trägt dazu bei, die Konsistenz, Qualität und Verfügbarkeit unserer Anwendungslandschaft zu gewährleisten.
