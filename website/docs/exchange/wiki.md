---
sidebar_position: 5
---

# Connect to the Exchange Server and Build a Calendar API Endpoint
This documentation provides detailed steps on how to connect to an Exchange server and build a calendar API endpoint based on the provided Python files in PS HouseTech Backend GitLab: `exchange.py`, `route.py` and `run.py`.

## Getting Started
To get started, we need to finish following steps:

- Python installed in your environment.
- Install necessary Python packages:
```shell
pip install python-dotenv
pip install pytz
pip install exchangelib
pip install flask
```
- A `.env` file in the parent directory of these files, containing necessary credentials for each room. In our Exchange Server Setting, one user's username and password can get access to more than one room resource. Here is an example of the entries in the file:
 ```shell
ROOMS=ROOM1,ROOM2,... # split by comma
USERNAME=username
PASSWORD=password
ROOM_EMAILS=room1_email@example.com,room2_email@example.com,room3_email@example.com,... # split by comma
```

## Setup and connecting
Then we can start to connect to the exchange server. First of all, build a class, for example  `class ExchangeCalendar`, inside the class, a few functions are defined.

First step is to initialize an instance of the class. The server to connect to is hard-coded:
```shell
def __init__(self):
    self.server = 'your_exchange_server_address'
    self.utc = pytz.utc 
    self.a = None
```
To establish a connection to the Exchange Server, we build the function `def update_credentials(self, username, password, email)`. In this function, Exchange Server can be connect to with using credentials:
```shell 
# create a credentials object    
credentials = Credential (cusername=username,password=password)
```
```shell
# create a configuration for connection
config = Configuration (server=self.server,credentials=credentials)
```
```shell
# create an account object
self.a = Account(primary_smtp_address=email, config=config, autodiscover=False,access_type=DELEGATE)
```
## Fetching Calendar Items
To fetch and return calendar items from an Exchange Server, we can define a function `def get_calendar_items(self)`. Then define time range and timezone in this function:
```shell
# define start time and time zone
datetime(2023, 1, 1, 0, 0, tzinfo=self.utc)
```

```shell
# define time range
datetime.now(tz=self.utc) + timedelta(days=365)
```
To retrieve calendar items that fall within the specified start and end time range, we use the `view` method:
```shell
calendar_items = self.a.calendar.view(start=start, end=end)
```
Then initialize an empty list for formatted items:
```shell
items = []
```
Iterating through calendar items:
```shell
for item in calendar_items:
    items.append({
        # for example:
        'title': item.subject,
        'location': str(item.location),
        # more items can be added          
    })
return items
```
Inside the loop, information from each calendar item is extracted and appended to the items list as a dictionary. The keys and values represent various attributes of the calendar item, we can pick up attributes according to what we need. The full attributes of CalenderItem in exchangelib library can be found in exchangelib documentation: https://ecederstrand.github.io/exchangelib/exchangelib/#exchangelib.CalendarItem

## Building a Function for Calendar API
To make API endpoint route code intuitive and simple, we can define a function that can be called directly in the API route. In this function, all calendar results are fetched from an Exchange Server and all rooms are looped.

First, retrieve environment variables and initialize a list:
```shell
# retrieve environment variables for ROOM_EMAILS and ROOMS in .env file
room_emails = os.getenv('ROOM_EMAILS', '').split(',')
rooms = os.getenv('ROOMS').split(',')

# initialize to store the results
results = []

# creat an instance of ExchangeCalendar
ex = ExchangeCalendar()
```
Loop all Exchange Server room resources:
```shell
# iterate through the room emails and room names
for room_email, room_name in zip(room_emails, rooms):

# fetch the username and password
    username = os.getenv('USERNAME')
    password = os.getenv('PASSWORD')
```
At last, check credentials and Email. If the username, password, and room email are provided (i.e., not None or an empty string), the code calls the `update_credentials` function to update the credentials and the room email. Then, return the results list which contains the room-related calendar items.
```shell
if username and password and room_email:
    ex.update_credentials(username, password, room_email)

    # results are appended to the results list as a dictionary
    results.append({
        'room': room_name,
        'items': ex.get_calendar_items(),
    })
return results
```

## Calendar API
In the `route.py` file, an API endpoint is defined for fetching calendar data. Following steps are to build an Flask API endpoint:

- Define the Route: 
The `@api.get('/calendar')` decorator defines the HTTP GET route /calendar.
- Caching
The `@cache.cached(300)` decorator indicates that the result of this endpoint should be cached for 300 seconds.
- Build a Function
Build a funtion named `def calendar()` to create an instance of ExchangeCalendar and calls its `get_calendar_results` method to fetch the calendar data. 
- Response 
Use `make_response` method to call the results and the HTTP status code 200 to create an HTTP response. This response is then returned to the client.

The full code of API endpoint could be:
```shell
@api.get('/calendar')  
@cache.cached(300)

def calendar():
    return make_response(ExchangeCalendar().get_calendar_results(), 200)
```

## How to run

- Ensure that the `.env` file is properly configured.
- Run the Flask application: `run.py`
- Access the `/api/calendar` endpoint from your preferred browser or API client to get the calendar items.