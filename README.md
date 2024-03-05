# Patient Follow Up
![pfupgithub](https://github.com/nalmarazgutierrez/PATIENT-FOLLOW-UP/assets/113330261/0054d223-16cd-4526-92e0-c62cf735db1a)

## Description
A follow-up App for therapists, to send homework easily to their patients.

## Why?
As a physiotherapist, I had to spend extra time creating customised exercise plans to make sure that my patients continued to make progress at home. I wasted my time looking for poorly understandable illustrations from old books and other images from the internet. So, why not recording our patient performing the exercise during the session? According to good clinical practice, exercises that have not been practiced during the session should not be prescribed. This way, we can create a fully customised worksheet and send it immediately to our patient's email address.

This App provides professionals with a quick, efficient, and visual solution for assigning and modifying home exercises, thereby enhancing patient autonomy. Furthermore, the integration of a database facilitates the recording and analysis of each patient's history, enabling more personalized care, effective sessions, and the prevention of potential relapses.

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

Features

## 🤝 Contributing

### Clone the repo

```bash
git clone [ttps://github.com/nalmarazgutierrez/PATIENT-FOLLOW-UP.git]
cd my-express-app
```

### Build the project

```bash
go build
```

### Run the project

```bash

```

### Run the tests

```bash
go test ./...
```

### Submit a pull request

If you'd like to contribute, please fork the repository and open a pull request to the `main` branch.
Copy icon



future features

## SETUP
## Setup

### Dependencies:::::

- Go to project directory (cd my-express-app). Run `npm install` in project directory. This will install server-related dependencies such as `express`.
- `cd client` and run `npm install`. This will install client dependencies (React).

### Database Prep

- Access the MySQL interface in your terminal by running `mysql -u root -p`
- Create a new database called what you want (xxxxx): `create database xxxxxx`
- Add a `.env` file to the project folder of this repository containing the MySQL authentication information for MySQL user. For example:

```bash
DB_HOST=localhost
DB_NAME=homework
DB_USER=root
DB_PASS=root
```

- Run `npm run migrate` in the project folder of this repository, in a new terminal window. This will create 3 tables called 'patients', 'programs' and 'exercises' in your database.

- Make sure you understand how each table is constructed. In your MySQL console, you can run `use xxxxxx;` and then `describe patients;` or `describe programs;` or `describe exercises;` to see the structure of the students table.

### Development

- Run `npm start` in project directory (my-express-app) to start the Express server on port 5000
- In another terminal, do `cd client` and run `npm start` to start the client in development mode with hot reloading in port 3000.