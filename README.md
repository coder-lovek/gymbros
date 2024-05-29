Gymbros
Overview
Gymbros is a gym website where fitness enthusiasts can sign up, log in, and access various features related to fitness and workout routines. It utilizes JWT token for authentication and MongoDB as the backend database. The frontend is built using ReactJS and the backend is developed using Node.js.

Features
User Authentication: Users can sign up and log in securely using JWT token authentication.
Dashboard: Upon logging in, users are directed to their dashboard where they can access personalized workout plans, track progress, and view upcoming classes.
Workout Plans: Users can browse through a variety of workout plans tailored to different fitness goals and levels.
Class Schedule: Users can view the schedule of classes offered by the gym and sign up for upcoming sessions.
Profile Management: Users can manage their profile information, including personal details and fitness goals.
Technologies Used
ReactJS
Node.js
MongoDB
JWT Authentication
Installation
Clone the repository:
bash
Copy code
git clone https://github.com/coder-lovek/gymbros.git
Navigate to the project directory:
bash
Copy code
cd gymbros
Install dependencies for the frontend:
bash
Copy code
cd frontend
npm install
Install dependencies for the backend:
bash
Copy code
cd ../backend
npm install
Configuration
Create a .env file in the backend directory and configure the following variables:
makefile
Copy code
PORT=3001
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
Update the proxy field in the frontend/package.json to point to the backend server:
json
Copy code
"proxy": "http://localhost:3001"
Usage
Start the backend server:
bash
Copy code
cd backend
npm start
Start the frontend development server:
bash
Copy code
cd frontend
npm start
Open your browser and navigate to http://localhost:3000 to access the Gymbros website.
Contributing
Contributions are welcome! Please follow these steps:

Fork the repository.
Create a new branch for your feature: git checkout -b feature-name.
Commit your changes: git commit -m 'Add new feature'.
Push to the branch: git push origin feature-name.
Submit a pull request.
License
This project is licensed under the MIT License - see the LICENSE file for details.

Authors
Coder Lovek 
 
