# Parking Management System

This is a backend system for managing a parking lot with multiple slots for different vehicle types (Bike, Car, Truck).

**The system handles:**

- Vehicle entry and exit
- Slot allocation
- Ticket generation
- Parking fee calculation


## Tech Stack
- Node.js
- Express.js 
- Mongoose
- Morgan (Proper logging)

## Features



## Concurrency Handling
- Implemented atomic slot allocation using `findOneAndUpdate` to prevent race conditions when multiple vehicles try to book the same slot simultaneously.
- Ensures that only one request can successfully reserve a slot, even when multiple users try at the same time.

### Vehicle Entry: 
- Creates or validates vehicle
- Assigns nearest available slot
- Generates parking ticket
  
### Slot Management
- Create parking slots
- View all slots
  
### Ticket System
- Unique ticket number (0001, 0002, ...)
- Tracks entry and exit time
- Prevents multiple active tickets per vehicle
  
### Vehicle Exit
- Calculates parking fee
- Rounds up partial hours
- Frees parking slot


### Headers 
```
Authorization: secret@123
Content-Type: application/json
```

 

## How to Run

1. Clone Repository
```
git clone https://github.com/your-username/parking-management-system-backend.git
cd parking-management-system
```

2. Install Dependencies
```
npm install
```

3. Setup Environment Variables

**Create .env file:**
```
PORT=
DB_URL= 
SECRET_KEY= 
```

4. Run Server
```
node index.js
```

5.Open in browser
   > http://localhost:3030/



## API Details

### Slots:

1. Create Slot
```
POST: http://localhost:3030/api/slots
```

Body -> raw -> json:
```
{
  "slotNumber": 1,
  "slotType": "car"
}
```

2. Get All Slots
```
GET: http://localhost:3030/api/slots
```

### Vehicle Entry:

1. Create Ticket
```
POST: http://localhost:3030/api/tickets/entry
```

Body -> raw -> json:
```
{
  "vehicleNumber": "JH01AB1234",
  "vehicleType": "car"
}
```

### Vehicle Exit:

1. Exit Vehicle

``` 
POST: http://localhost:3030/api/tickets/exit
```

Body -> raw -> json:
```
{
  "vehicleNumber": "JH01AB1234"
}
```

<br>
 

## Frontend Details


**A minimal frontend is included for testing:**
```md
- Open http://localhost:3030/ after starting the server
- we can Create Parking Slot, Vehicle Entry, Vehicle Exit, and All Parking Slots 
- The frontend updates the list of parking slots automatically after any operation.