---
slug: gitlab-ci-cd
title: Automatisiertes Testen von Python Flask Backend und Node Next.js Frontend mit GitLab CI/CD
authors: jan
tags: [Frontend, Backend, Blog, GitLab, CI/CD]
---

Herzlich willkommen zu unserem ersten Blogbeitrag! Heute möchte ich mit euch darüber sprechen, wie wir mithilfe von GitLab CI/CD unsere Python Flask Backend- und Node Next.js Frontend-Code automatisch testen können. In unserem Projektseminar haben wir uns dafür entschieden, Tools wie Poetry, Pre-commit, Pytest, Husky und ESLint zu verwenden, um die Qualität und Zuverlässigkeit unseres Codes sicherzustellen.

## GitLab CI/CD für automatisiertes Testen

GitLab CI/CD bietet uns die Möglichkeit, automatisierte Tests in unsere Continuous Integration- und Continuous Deployment-Pipelines einzubinden. Wir haben unsere CI/CD-Pipeline so konfiguriert, dass sie bei jeder Code-Änderung in unserem Repository automatisch gestartet wird. Dadurch können wir sicherstellen, dass unser Code stets auf Herz und Nieren geprüft wird, bevor er in die Produktion geht.

<center><img src="./workflow.png" ></center>
<center>Beispielhafter CI/CD Workflow <cite>(Quelle: gitlab.com)</cite></center>

### Backend-Tests mit Poetry, Pre-commit und Pytest

Für unser Python Flask Backend verwenden wir Poetry als Dependency-Management-Tool. Mit Poetry könnt ihr eure Abhängigkeiten in einem einheitlichen Format verwalten und die Installation und Aktualisierung eurer Bibliotheken vereinfachen.

Zusätzlich haben wir Pre-commit eingerichtet, um sicherzustellen, dass unser Code bestimmte Qualitätsstandards erfüllt, bevor er committet wird. Pre-commit führt automatisch verschiedene statische Code-Analysen und Formatierungsprüfungen durch.

Für unsere eigentlichen Tests verwenden wir Pytest, ein mächtiges und flexibles Testframework für Python. Wir haben unsere Testsuite so konfiguriert, dass sie automatisch von GitLab CI/CD ausgeführt wird, um sicherzustellen, dass unsere Backend-Funktionalität korrekt und stabil ist.

### Frontend-Tests mit Husky und ESLint

Für unser Node Next.js Frontend nutzen wir Husky und ESLint. Husky ermöglicht uns, Git Hooks zu verwenden, um automatisierte Tests und Codeformatierungsprüfungen vor dem Commit auszuführen. Auf diese Weise stellen wir sicher, dass unser Frontend-Code den vereinbarten Standards entspricht und keine offensichtlichen Fehler enthält.

ESLint ist ein mächtiges Tool zur statischen Codeanalyse für JavaScript und TypeScript. Wir haben unsere ESLint-Konfiguration entsprechend angepasst, um sicherzustellen, dass unser Frontend-Code den besten Praktiken und Style-Guidelines entspricht. Diese statische Codeanalyse wird ebenfalls automatisch von unserer GitLab CI/CD-Pipeline durchgeführt.

## Fazit

Die Integration von automatisierten Tests in unsere GitLab CI/CD-Pipeline hat uns dabei geholfen, die Qualität und Zuverlässigkeit unseres Codes sicherzustellen. Dank der Verwendung von Tools wie Poetry, Pre-commit, Pytest, Husky und ESLint können wir sicherstellen, dass unser Backend- und Frontend-Code den höchsten Standards entspricht.

Automatisiertes Testen ist ein wichtiger Bestandteil des Softwareentwicklungsprozesses und ermöglicht es uns, Fehler frühzeitig zu erkennen und die Stabilität unserer Anwendung zu gewährleisten. Wir sind zuversichtlich, dass wir dank dieser Teststrategie in unserem Projekt erfolgreich sein werden!

_Vielen Dank, dass ihr unseren Blogbeitrag gelesen habt. Wir hoffen, dass ihr einige wertvolle Einblicke in die Integration von automatisierten Tests gewonnen habt. Wenn ihr Fragen habt oder weitere Informationen benötigt, zögert nicht, uns zu kontaktieren._

**Bis bald!**

**Euer Team von PS HouseTech**
