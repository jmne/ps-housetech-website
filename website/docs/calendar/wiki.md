---
sidebar_position: 1
---

# Calendar

This documentation provides detailed steps on how to connect to Exchange server and build a calendar API endpoint to get calendar data of rooms from Exchange Server

## Getting Started
To get started, following steps need to be finished:

- Python installed in your environment.
- Installing necessary Python packages:
```shell
pip install pytz
pip install exchangelib
```
- A `.env` file in the parent directory of these files, containing necessary credentials for each room. In Exchange Server Setting of WI, one user's username and password can get access to more than one room resource. Here is an example of the entries in the file:
 ```shell
USERNAME='your_username'
PASSWORD='your_password'
```

## Setup and connecting

1. Defining the rooms and email addresses directly in the class. Due to the complexity of adding or changing enviroment variables in the server, defining the rooms and email addresses in the backend code would be easier for developers to add futhermore rooms and email addresses in the future:
```shell
 ROOMS = [
        {'name': 'xy', 'email': 'WI.XY@wi.uni-muenster.de'},
        ...
    ]
```
2. Initializing an instance of the class. The server to connect to is hard-coded:
```shell
def __init__(self):
    self.server = 'your_exchange_server_address'
    self.utc = pytz.utc 
    self.a = None
```
3. To establish a connection to the Exchange Server, building a function `def update_credentials(self, username, password, email)`. In this function, Exchange Server can be connected with using credentials:
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
## Fetching Calendar Events

1. To fetch and return calendar events from an Exchange Server by room, please define a function `def get_calendar_items(self, room_email)`. Then define time range and timezone in this function:
```shell
# define start time and time zone
datetime(%y,%m,%d,%h,%m, tzinfo=self.utc)
```
```shell
# define time range
# start time is defined as 01.01.2023 at 0:0 o'clock in the backend code
# it needs to be redefined after 31.12.2023. e.g. '2024,1,1,0,0'
datetime.now(tz=self.utc) + timedelta(days=365)
```
2. To retrieve calendar events that fall within the specified start and end time range, please load credentials and room emails:
```shell
username = os.getenv('YOUR_USERNAME')
password = os.getenv('YOUR_PASSWORD')

if username and password:
    self.update_credentials(username, password, room_email)

calendar_items = self.a.calendar.view(start=start, end=end)
```
3. Initializing an empty list for formatted items and iterating through calendar items:
```shell
items = []

for item in calendar_items:
    items.append({
        # for example:
        'title': item.subject,
        'location': str(item.location),
        # more items can be added          
    })
return items
```
Inside the loop, information from each calendar item is appended to the items list as a dictionary. The keys and values represent various attributes of the calendar item, developers can pick up attributes according to what they need. The full attributes of CalenderItem in exchangelib library can be found in exchangelib library documentation: https://ecederstrand.github.io/exchangelib/exchangelib/#exchangelib.CalendarItem

## Building a Function for Calendar API
To make API endpoint route code intuitive and simple, a function can be built so that it can be called directly in an dynamic API route. In this function, the calendar items are displayed according to room name, so it has a parameter 'room_name'.

1. Initializing a list and fetch Exchange Server room resources by room name:
```shell
# initialize to store the results
results = []

# iterate through the room emails and room names
for room in self.ROOMS:
    if room['name'] == room_name:
        room_email = room['email']

        username = os.getenv('YOUR_USERNAME')
        password = os.getenv('YOUR_PASSWORD')
```
2. Checking credentials and Email and returning the results list.
```shell
 if username and password and room_email:
    self.update_credentials(username, password, room_email)
    return self.get_calendar_items(room['email'])
```

## Calendar API
An API endpoint is defined in the API route file for fetching calendar data by room name dynamically. Following steps are to build an Flask API endpoint:

- Defining the Route: 
The `@api.get('/calendar/<room_name>')` decorator defines the HTTP GET route /calendar.
- Caching
The `@cache.cached(300)` decorator indicates that the result of this endpoint should be cached for 300 seconds.
- Build a Function
Building a funtion named `def calendar(room_name)` to create an instance of ExchangeCalendar and calls its `get_calendar_results(room_name)` function to fetch the calendar data. 
- Response 
Using `make_response` method to call the results and the HTTP status code 200 to create an HTTP response. This response is then returned to the client.

The full code of API endpoint is in the following:
```shell
@api.get('/calendar/<room_name>')  
@cache.cached(300)

def calendar(room_name):
    return make_response(ExchangeCalendar().get_calendar_results(room_name), 200)
```

## How to run

- Ensure that the `.env` file is properly configured.
- Run the Flask application.
- Access the `/api/calendar/<room_name>` endpoint from your preferred browser or API client to get the calendar data. Room names can be found in the backend code or in the openAPI.