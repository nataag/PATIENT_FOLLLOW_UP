# Patient Follow Up
![pfupgithub](https://github.com/nalmarazgutierrez/PATIENT-FOLLOW-UP/assets/113330261/0054d223-16cd-4526-92e0-c62cf735db1a)


## Description
My full-stack application streamlines exercise sheet management for physiotherapists, providing a visual and autonomous experience for patients. It also offers a comprehensive database system for professionals to maintain detailed patient histories, enhancing the effectiveness of sessions and preventing future setbacks.

## Why?
To address limitations in traditional exercise sheet management within physiotherapy practices, this application provides professionals with a quick, efficient, and visual solution for assigning and monitoring home exercises, thereby enhancing patient autonomy. Furthermore, the integration of a database facilitates the recording and analysis of each patient's history, enabling more personalized care, effective sessions, and the prevention of potential setbacks. Ultimately, the application aims to optimize the treatment process and improve outcomes for both patients and healthcare professionals.

## 🚀 Quick Start
#### DEPENDENCIES
Go to project directory (cd my-express-app). 
Run npm install in project directory. This will install server-related dependencies such as express.

cd client and run npm install. This will install client dependencies (React).

#### DATABADE PREP
Access the MySQL interface in your terminal by running mysql -u root -p
Create a new database called what you want (xxxxx): create database xxxxxx
Add a .env file to the project folder of this repository containing the MySQL authentication information for MySQL user. 

For example:
DB_HOST=localhost
DB_NAME=homework
DB_USER=root
DB_PASS=root

Run npm run migrate in the project folder of this repository, in a new terminal window. This will create 3 tables called 'patients', 'programs' and 'exercises' in your database.

Make sure you understand how each table is constructed. In your MySQL console, you can run use xxxxxx; and then describe patients; or describe programs; or describe exercises; to see the structure of the students table.

#### DEVELOPMENT
Run npm start in project directory (my-express-app) to start the Express server on port 5000
In another terminal, do cd client and run npm start to start the client in development mode with hot reloading in port 3000.

## Usage

## Contributing

## SETUP
