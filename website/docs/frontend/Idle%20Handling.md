# IdleHandling

Dieser Teil beschäftigt sich mit dem implementierten System zum automatischen Zurücksetzen der Komponenten, sobald für eine bestimmte Zeit keine Interaktion erfolgt. Dieser Zeitraum kann in der Datei [constants](./utils.md) festgelegt werden. Die Dateien sind unter `utils/IdleHandling` zu finden. Die implementierte Funktionalität orientiert sich am Observer-Pattern: Benötigt eine Komponente die Reset-Funktionalität, erstellt sie lokal eine `IdleHandler` Instanz und übergibt sie an den globalen `IdleHandlerManager`, welcher bei Bedarf die `IdleHandler` dazu aufruft ihre Komponenten zurückzusetzen. Ein globaler `IdleHandlerManager` wird zur Nutzung im [TimeoutContext](./context.md) gespeichert.

## IdleHandlerManager

Hier werden allgemeine Funktionalitäten für das Handhaben der `IdleHandler` implementiert. Mithilfe von `addResetListener` kann sich ein `IdleHandler` bei dem Manager registrieren und bei Bedarf aufgerufen werden. Sollte die Reset-Funktionalität nicht mehr benötigt werden (zB wenn die Komponente aus dem DOM entfernt wird) kann sie mithilfe von `removeResetListener` entfernt werden.

## IdleHandler

Diese Klasse ermöglicht die simple Einbindung von Reset-Funktionalitäten für Komponenten. Bei Erstellung wird dem `IdleHandler` ein Ursprung und eine reset-Funktion übergeben. Der Ursprung wird genutzt um die Referenz zuverlässig entfernen zu können, währen die reset-Funktion aufgerufen wird, sobald der `IdleHandlerManager` über einen festgelegten Zeitraum keine Interaktion feststellen kann.
