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
- Authentication

All APIs are protected using a simple token-based authentication.

Pass token in headers:

Authorization: secret@123
📁 Project Structure
src/
 ├── config/
 ├── controllers/
 ├── middleware/
 ├── models/
 ├── routes/
 ├── utils/
server.js