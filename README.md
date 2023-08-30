# Organick Online Store

Welcome to the README file for Organick Online Store. This document provides an overview of the technical stack and architecture of this online store.

## Table of Contents

- [Overview](#overview)
- [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)

## Overview

Online store is developed using the following technologies:

**Frontend**:
* React: I use React to build the user interface, and create dynamic and interactive views for our customers.
* Redux: Redux helps manage state across the application, ensuring a smooth user experience.
* Styled Components: I utilize styled-components for styling, allowing modular and maintainable UI design.

**Backend**:
* Node.js: Our backend is powered by Node.js, providing a runtime environment for server-side operations.
* Express: Express is used to set up routes, handle requests, and manage backend functionality.
* SQL: I use SQL databases to store product information, leveraging the relational model for data organization.
* MySQL: MySQL is my choice of database management system.

## Getting Started

To run the Organick online store locally, follow these steps:

### Prerequisites

- Node.js: [Download and install Node.js](https://nodejs.org/)
- MySQL Server: [Download and install MySQL](https://dev.mysql.com/downloads/)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/tkach-v/OrganickStore.git

2. Import the initial database structure and values using the db.sql script in the server folder. You should run the db.sql script.

3. In the server directory, create a .env file with the following contents:
    ```bash
    DB_NAME=organick_store
    DB_HOST=your_mysql_host (127.0.0.1 default)
    DB_PORT=your_mysql_port (3306 default)
    DB_USER=your_mysql_username
    DB_PASSWORD=your_mysql_password
   ```
    Replace the placeholders (your_mysql_host, your_mysql_port, your_mysql_username, your_mysql_password) with your actual MySQL server information.

4. Install dependencies and start the server:
    ```bash
    cd server
    npm install
    npm start

5. Install dependencies and start the client:
    ```bash
    cd client
    npm install
    npm start