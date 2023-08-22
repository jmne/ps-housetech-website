---
sidebar_position: 3
---
# E-Ink - Technische Grundlagen

Der E-Ink kann die drei Farben schwarz, weiß und rot anzeigen. Da der ESP32 hardwaretechnisch in seinem Hauptspeicher eingeschränkt ist, wird ein Speichersparendes Verfahren angewandt. Dies basiert auf der Verwendung von zwei Hexadezimalwerten für 8 Pixel. Ein Hexadezimalwert besteht aus 8 Bits. Jeder Bit des Hexadezimalwertes repräsentiert ein Pixel. So kann man theoretisch zwei Farben anzeigen. Um nun auch noch eine dritte Farbe anzeigen zu können, wird ein weiterer Hexadezimalwert benötigt, der für jeden Pixel eine von zwei Farben vorgibt. Wenn man die beiden Hexadezimalwerte kombiniert, kann so ein Bild mit drei Farben entstehen. Dazu muss festgelegt sein, welcher Tupel von Bits welche Farbe erzeugt.

Das vorliegende Schaubild soll den Prozess der Bildgenerierung veranschaulichen. Die Tabelle gibt Aufschluss darüber, welcher Wert im ersten und zweiten Bit stehen muss, um eine bestimmte Farbe anzuzeigen. Dabei gibt Layer 1 die Schwarz/Weiß und Layer 2 die Rot/Weiß Repräsentation des Bildes an. So muss sowohl das erste als auch das zweite Bit eine 0 sein, wenn an dieser Stelle von dem Bild ein schwarzes Pixel sein soll. Wenn wir ein Bild haben, welches im oberen Teil weiß, im mittleren schwarz und im unteren rot ist, muss es folgendermaßen für den E-Ink transformiert werden. Zunächst müssen in der Layer 1 die weißen Flächen mit dem Bitwert 1 und die schwarzen mit dem Bitwert 0 befüllt sein. Würde man dieses Bild visualisieren, wäre es also quasi invertiert. Damit in der nächsten Layer die Farben erhalten bleiben und zusätzlich die rote Farbe hinzugefügt werden kann, müssen in der Layer 2 alle schwarzen und weißen Flächen den Bitwert 0 und die roten Flächen den Bitwert 1 haben. Durch Kombination der beiden Layer erhält man dann das gewünschte Bild.

![Logo](/img/EINK_visualisation.jpg)
