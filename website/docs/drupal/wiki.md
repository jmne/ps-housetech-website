---
sidebar_position: 4
---

# Drupal API

Die Beschreibung des Connector-Moduls aus Drupal. Die Funktion bestizt 6 API-Endpunkte.

- function iws_information_displays_persons_get()
  - gibt JSON-Objekt mit Liste von Personen zurück
  - für jede Person wird ein Array erstellt, das verschiedene Informationen enthält, wie Vorname, Nachname, akademischer Titel, Anrede, Zusatztitel, ID der zugehörigen Organisationsabteilung, Namen der zugehörigen Organisationsabteilung in Deutsch und Englisch, Telefonnummer, Faxnummer, E-Mail-Adresse, Zimmer und Adresse
  

* function iws_information_displays_orga_units_get()
	* gibt ein JSON-Objekt mit Liste von WWU-Organisationseinheiten zurück
	* für jede Person wird ein Array erstellt, mit Informationen über ID, Name in Deutsch und Englisch und der Beschreibung in Deutsch und Englisch

- function iws_information_displays_entities_get()
  - gibt ein JSON-Objekt mit Liste von Drupal-Nodes zurück
  - zur Erinnerung: Jede Art von Inhalt in Drupal ist ein Node (Blogartikel, Kommentare etc.)
  - für jeden Node wird ein Array erstellt, mit Informationen über ID, Titel und Body
	
- function iws_information_displays_overlays_get()
  - gibt ein JSON-Objekt mit Liste von Drupal-Overlays zurück
  - Overlays sind Elemente, die auf einer Webseite eingeblendet werden, um z. B. Benutzeraktionen zu bestätigen oder um zusätzliche Informationen anzuzeigen. (vgl. "Pop-Ups")
  - für jeden Overlay wird ein Array erstellt, mit Informationen über ID, Titel, Beschreibung, Bild, Anfangs- und Enddatum
 
- function iws_information_displays_easteregg_get()
  - gibt ein JSON-Objekt mit den Easteregg-Bildern zurück
  - für jedes Easteregg wird ein Array erstellt, mit Informationen über Bild, Anfangs- und Enddatum und der Wahrscheinlichkeit, mit der das Easteregg angezeigt werden soll
	
- function iws_information_displays_events_get()
  - gibt ein JSON-Objekt mit den 5 neuesten Events zurück
  - für jede Veranstaltung wird ein Array erstellt, mit Informationen über ID, Titel, Untertitel, Veranstaltungsort, Beschreibung, Bild, Erstellungsdatum sowie Anfangs- und Enddatum