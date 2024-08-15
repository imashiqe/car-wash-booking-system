# Car Wash Booking System



## Live Demo

Check out the live version of the application: [car-wash-booking-system-gamma.vercel.app](https://car-wash-booking-system-gamma.vercel.app)

## Technology Stack

- **Node.js**: Backend runtime environment
- **TypeScript**: Type-safe JavaScript superset
- **MongoDB**: NoSQL database for storing user, service, and booking information
- **Express.js**: Web framework for Node.js
- **Zod**: Schema declaration and validation library

## Models

### 1. User Model
Manages user information such as name, contact details, and booking history.

### 2. Service Model
Defines various car wash services available for booking, including details like service type, duration, and price.

### 3. Booking Model
Handles the booking process, storing data such as user ID, service ID, booking date, and time slot.

### 4. Slot Model
Manages the availability of booking slots, including date and time management.

## API Endpoints

### 1. User Routes
Handles user-related operations such as registration, login, profile management, and retrieving booking history.

### 2. Booking Routes
Manages booking operations, including creating a new booking, updating, or canceling existing bookings.

### 3. Service Routes
Provides details about available car wash services and allows for the addition or modification of services.

### 4. Slot Routes
Handles the availability of slots for bookings, ensuring that users can only book available times.

## Installation and Setup

To run this project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/imashiqe/car-wash-booking-system.git
   ```
2. **Navigate to the project directory**:
   ```bash
   cd car-wash-booking-system
   ```
3. **Install dependencies**:
   ```bash
   npm install
   ```
4. **Set up environment variables**: 
   Create a `.env` file in the root directory and add your MongoDB connection string and other environment variables.
   ```env
   MONGODB_URI=your-mongodb-uri
   PORT=3000
   ```

5. **Run the development server**:
   ```bash
   npm run start:dev
   ```

6. **Access the application**:
   Open your browser and go to `http://localhost:3000`.

## Contributing

Contributions are welcome! If you'd like to contribute, please fork the repository and use a feature branch. Pull requests are warmly welcome.

- **GitHub Repository**: [Car Wash Booking System](https://github.com/imashiqe/car-wash-booking-system.git)

