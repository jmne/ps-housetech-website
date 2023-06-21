---
slug: exchangelib
title: Update Blog Post - 2
authors: jingyi
tags: [Exchange Server, Blog, Exchange Calendar, exchangelib, python]
---
  Willkommen zu unserem neuesten GitLab-Blogbeitrag! Heute tauchen wir in die Welt von exchangelib ein, eine Python Library, die uns hilft, die Kommunikation mit Exchange Server zu bewältigen. In diesem Blogbeitrag werden wir Ihnen zeigen, wie Sie auf Exchange Server in einem Raum zuzugreifen und die Kalender Events zu erhalten können.

## exchangelib

Exchangelib ist eine Python-Library, die eine Schnittstelle für den Zugriff auf und die Arbeit mit EWS bietet. EWS ist sowohl ein Messaging-Protokoll als auch ein API zum Suchen und Verbinden mit EWS/Exchange Server Hosts und bietet eine Library von Funktionen für die Arbeit mit Host Applications und Benutzerdaten.

![enter image description here](https://cdn.activestate.com/wp-content/uploads/2021/07/Exchange-Server-pipeline.png)

_Exchange Server pipeline Quelle: [ActiveState](https://www.activestate.com/resources/quick-reads/how-to-install-and-use-exchangelib-python/)_

### Zugriff auf Exchange-Server in einem Raum und Secret File im GitLab
Als erstes müssen wir das exchangelib  Package installieren:
` pip install exchangelib `
Benutzernamen, Passwörter und E-Mail-Adressen sind wichtige private Informationen, die wir nicht direkt in den Code aufnehmen können, da sonst die Gefahr besteht, dass sie veröffentlicht werden. Daher erstellen wir eine Secret Datei `secrets.env` in Gitlab, um diese Informationen zu speichern, und rufen diese Datei dann in unserem Code auf:
`load_dotenv('../secrets.env')`
Anschließend können wir mit der folgenden Methode auf den Exchange Server zugreifen：
```
import  os
import pytz
from dotenv import load_dotenv
from exchangelib import Account
from exchangelib import Configuration
from exchangelib import Credentials
from exchangelib import DELEGATE

def __init__(self):

 """Get access to exchange server."""
 # connect to server
 
	 username = os.getenv('Raum_USERNAME')
	 password = os.getenv('Raum_PASSWORD')
	 email = os.getenv('Raum_Email_Adresse')
	 server = 'Server_Adresse'
	 credentials = Credentials(
	 username=username, password=password,
	 )
	 config = Configuration(
	 server=server, credentials=credentials,
	 )
	 self.a = Account(
	 primary_smtp_address=email, config=config, autodiscover=False,
	 access_type=DELEGATE,
 )
 self.utc = pytz.utc
``` 
Sobald wir auf den Exchange Server sind, können wir die Kalender Events für den Raum abrufen. Wir können so viele Variablen erfassen, wie wir wollen. Exchangelib Dokumentation stellt  Variablen zur Verfügung, siehe die exchangelib Dokumentation für Details:
[exchanglib Dokumentation ](https://ecederstrand.github.io/exchangelib/exchangelib/#exchangelib.CancelCalendarItem)

### Kalender Events zu erhalten
Das Abrufen von Kalender Events ist relativ einfach. Wir können den Zeitbereich des Kalenders auswählen (in unserem Projekt sind es 365 Tage, beginnend am 2023.01.01). Dann wählen wir die Kalenderelemente aus, die wir erhalten möchten：
```
def get_calendar_items(self):

 """
 Fetch and return calendar items from an Exchange Server.
 Returns:
 items (list): A list of dictionaries, each representing a calendar event.
 """
 
 start = datetime(2023, 1, 1, 0, 0, tzinfo=self.utc)
 end = datetime.now(tz=self.utc) + timedelta(days=365)
 calendar_items = self.a.calendar.view(start=start, end=end)
 items = []
 
 for item in calendar_items:
	 items.append({
		 'title': item.subject,
		 'start': item.start.isoformat(),
		 'end': item.end.isoformat(),
		 'duration': str(item.duration),
		 'location': str(item.location),
		 'organizer_name': item.organizer.name,
		 'organizer_email': item.organizer.email_address,
 })
 return items
 ```
## Fazit

Auf diese Weise können wir auf den Exchange Server eines Raums zugreifen und den Kalender über exchangelib Library abrufen.

_Vielen Dank, dass Sie unseren Blogbeitrag gelesen haben. Wir hoffen, dass wir Ihnen bei der Nutzung von exchangelib helfen konnten. Wenn Sie noch Fragen haben oder weitere Informationen benötigen, zögern Sie nicht, uns zu kontaktieren._

**Bis bald!**

**Euer Team von PS HouseTech**