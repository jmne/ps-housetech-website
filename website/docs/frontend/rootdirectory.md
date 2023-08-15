---
sidebar_position: 2
---

# Root-Directory

- **`.eslintrc.json`:** Diese Datei enthält Konfigurationen für ESLint, ein Tool zur statischen Code-Analyse. Sie definiert Regeln für den Code-Stil, die Formatierung und die Fehlererkennung im JavaScript- oder TypeScript-Code.

- **`.dockerignore`:** Ähnlich wie `.gitignore` wird diese Datei verwendet, um Docker mitzuteilen, welche Dateien oder Verzeichnisse beim Erstellen von Docker-Images ignoriert werden sollen. Dies ist wichtig, um unerwünschte oder temporäre Dateien auszuschließen.

- **`.gitignore`:** Diese Datei wird verwendet, um Git mitzuteilen, welche Dateien oder Verzeichnisse nicht in das Git-Repository aufgenommen werden sollen. Sie enthält Pfade zu Dateien oder Ordnern, die nicht versioniert werden sollen, wie z.B. kompilierte Binärdateien, temporäre Dateien, sensible Daten und mehr.

- **`.prettierignore`:** Ähnlich wie `.gitignore` und `.dockerignore` wird diese Datei verwendet, um Prettier mitzuteilen, welche Dateien bei der automatischen Codeformatierung ignoriert werden sollen.

- **`.prettierrc`:** Diese Datei enthält Konfigurationen für Prettier, ein Tool zur automatischen Codeformatierung. Sie definiert, wie der Code im Projekt formatiert werden soll.

- **`CHANGELOG.md`:** Diese Datei enthält eine Liste von Änderungen, die in verschiedenen Versionen des Projekts vorgenommen wurden. Sie dient dazu, Entwicklern und Benutzern zu zeigen, welche neuen Funktionen, Fehlerkorrekturen und Aktualisierungen in jeder Version enthalten sind.

- **`CONTRIBUTING.md`:** Diese Datei enthält Anleitungen und Informationen für Personen, die zum Projekt beitragen möchten. Sie erklärt, wie man Bugs meldet, Funktionen vorschlägt oder Code-Beiträge einreicht.

- **`Dockerfile`:** Diese Datei enthält Anweisungen zur Erstellung eines Docker-Images. Sie beschreibt, wie das Image aufgebaut werden soll, welche Abhängigkeiten benötigt werden und wie die Umgebung konfiguriert werden soll.

- **`i18-test_config.tsx`:** Möglicherweise eine Konfigurationsdatei für Internationalisierung (i18n) oder Mehrsprachigkeitstests in der Anwendung.

- **`jest.config.js`:** Diese Datei enthält Konfigurationen für Jest, das Testframework für JavaScript- und TypeScript-Anwendungen. Sie definiert, wie Tests ausgeführt werden sollen, welche Dateien einbezogen werden sollen und vieles mehr.

- **`jest.setup.js`:** Diese Datei kann verwendet werden, um globale Einstellungen oder Setup-Funktionen für die Jest-Tests festzulegen.

- **`junit.xml`:** Ein XML-Berichtsformat, das oft von Test-Tools wie Jest oder anderen Testframeworks verwendet wird, um Testergebnisse zu speichern.

- **`LICENSE`:** Diese Datei enthält die Lizenzinformationen für das Projekt, die bestimmt, wie andere Benutzer den Code verwenden dürfen.

- **`next-env.d.ts`:** Eine Datei, die von Next.js automatisch erstellt wird, um TypeScript-Definitionen für bestimmte Umgebungen bereitzustellen.

- **`next-i18next.config.js`:** Eine Konfigurationsdatei für die Internationalisierungs-Bibliothek `next-i18next`, die mit Next.js verwendet wird.

- **`next.config.js`:** Diese Datei enthält Konfigurationen für Next.js, dem React-Framework für Serverseitiges Rendern und Routing. In unserem Projekt gibt es eine Besonderheits. Dort haben wir eine Funktion, die gewärhleistet dass svg's als Komponenten importiert (anpassbarer) und nicht als Datei importiert werden. Wenn es als Image importieren werden soll (da z.B. Styling nicht verändert werden soll) dann mit ?url bei den Imports. In Busplan.tsx wird der Unterschied deutlich

- **`package-lock.json`:** Eine Datei, die Informationen über die genauen Versionen von Abhängigkeiten im Projekt enthält. Sie wird von npm zur Verwaltung von Abhängigkeiten verwendet.

- **`package.json`:** Diese Datei enthält Metadaten über das Projekt, wie den Projektnamen, die Version, die Abhängigkeiten und Skripte für Befehle.

- **`README.md`:** Diese Datei enthält eine Dokumentation oder Anleitung für das Projekt. Sie wird oft auf GitHub oder in Repositorys als erste Anlaufstelle für Benutzer und Entwickler verwendet.

- **`tsconfig.json`:** Eine Konfigurationsdatei für TypeScript, die Einstellungen für den TypeScript-Compiler enthält.

- **`types.d.ts`:** Diese Datei enthält globale TypeScript-Typendefinitionen für die Anwendung. Sie wird oft verwendet, um Typen für externe Bibliotheken oder globale Variablen zu deklarieren.
