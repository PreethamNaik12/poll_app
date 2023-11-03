# Poll App Server Setup Guide

This guide provides detailed instructions for setting up the server-side (Node.js, Express, PostgreSQL) application of the Poll App project on your local machine.

## Prerequisites

Before you begin, make sure you have the following software installed on your system:

- **Node.js:** Download and install Node.js from [nodejs.org](https://nodejs.org/).
- **PostgreSQL:** Install PostgreSQL on your system. You can download it from [postgresql.org](https://www.postgresql.org/download/).
- **Git:** If you haven't installed Git, you can download it from [git-scm.com](https://git-scm.com/downloads).

## 📁 Server Folder Structure

The `server` folder contains all the server-side code for the Node.js, Express, and PostgreSQL application. Here's the structure of the `server` folder:

```
server
│
├── database.sql     # db structure
├── db.js            # db configs
├── index.js         # Entry point of the server application
└── ...              # Other files
```

## Setup Instructions

### 1. Clone the Repository

First, clone the Poll App repository to your local machine and navigate to the `server` folder using Git:

```bash
git clone [repository-url]
cd poll-app/server
```

Replace `[repository-url]` with the actual URL of your Git repository.

### 2. Set Up the Database

1. Create a new PostgreSQL database for the Poll App.
2. Update the database connection configuration in the `server/config/db.js` file with your database credentials.

### 3. Install Dependencies

Install the server-side dependencies using npm (Node Package Manager). In the `server` folder, run:

```bash
npm install
```

### 4. Start the Server

Start the server to run the server-side application. In the `server` folder, run:

```bash
npm start
```

The server will run on `http://localhost:5000`.

### 5. Access the Poll App API Endpoints

You can access the Poll App API endpoints using tools like ThunderClient, Postman, or any API testing tool. The base URL for the API endpoints is `http://localhost:5000`.

Certainly! Here's the detailed documentation for the API endpoints in Markdown format:


# API Endpoints Documentation

The Poll App API provides several endpoints to interact with the poll data stored in the database. Below are the detailed descriptions for each endpoint:

### 1. Create a Poll

#### `POST /polls`

Create a new poll.

**Request Body:**

- **name** (string): The name of the poll.
- **voteChoice** (boolean): The choice selected in the poll (true for yes, false for no).
- **submissionDate** (date): The date when the poll was submitted.

**Response:**

- **200 OK**: Returns the created poll object in the response body.

### 2. Get All Polls

#### `GET /polls`

Retrieve all polls from the database.

**Response:**

- **200 OK**: Returns an array of poll objects in the response body.

### 3. Get Poll Choices by Date

#### `GET /pollChoice`

Retrieve poll choices grouped by submission date.

**Response:**

- **200 OK**: Returns an array of objects containing submission_date, no_of_yes, and no_of_no in the response body.

### 4. Get a Poll by ID

#### `GET /polls/:id`

Retrieve a specific poll by its ID.

**Parameters:**

- **id** (integer): The ID of the poll to retrieve.

**Response:**

- **200 OK**: Returns the poll object in the response body.
- **404 Not Found**: If the poll with the specified ID is not found.

### 5. Update a Poll

#### `PUT /polls/:id`

Update an existing poll by its ID.

**Parameters:**

- **id** (integer): The ID of the poll to update.

**Request Body:**

- **name** (string): The updated name of the poll.
- **voteChoice** (boolean): The updated choice selected in the poll (true for yes, false for no).
- **submissionDate** (date): The updated date when the poll was submitted.

**Response:**

- **200 OK**: Returns a success message in the response body.
- **404 Not Found**: If the poll with the specified ID is not found.

### 6. Delete a Poll

#### `DELETE /polls/:id`

Delete a poll by its ID.

**Parameters:**

- **id** (integer): The ID of the poll to delete.

**Response:**

- **200 OK**: Returns a success message in the response body.
- **404 Not Found**: If the poll with the specified ID is not found.


These endpoints allow you to perform CRUD (Create, Read, Update, Delete) operations on the polls in the Poll App database. Ensure to include appropriate request data and handle responses accordingly while interacting with these endpoints.


### Congratulations! You have successfully set up the server-side of the Poll App project on your local machine🤗.
Happy coding! 🚀