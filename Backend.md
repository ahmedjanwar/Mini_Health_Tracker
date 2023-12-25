# Mini Health Tracker - Spring Boot Backend

## Overview

Mini Health Tracker is a simple application that allows users to track health data entries, such as activity calories and heart rate. This README provides an overview of the Spring Boot backend.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Setup](#setup)
- [Usage](#usage)
- [Endpoints](#endpoints)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Add Health Data**: Users can add new health data entries with activity calories and heart rate.
- **View Health Data**: The application provides a chart and table to visualize and display health data entries.

## Prerequisites

Make sure you have the following installed:

- [Java Development Kit (JDK)](https://www.oracle.com/java/technologies/javase-downloads.html)
- [Maven](https://maven.apache.org/download.cgi)
- [MySQL](https://dev.mysql.com/downloads/)

## Setup

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/mini-health-backend.git
    ```

2. Navigate to the project folder:

    ```bash
    cd mini-health-backend
    ```

3. Update the `application.properties` file with your MySQL credentials.

4. Build the project:

    ```bash
    mvn clean install
    ```

5. Run the application:

    ```bash
    java -jar target/mini-health-backend.jar
    ```

## Usage

The Spring Boot backend is now running on `http://localhost:8080`. You can use it in conjunction with the frontend to add and view health data.

## Endpoints

- **GET /api/healthdata/all**: Get all health data entries.
- **POST /api/healthdata/submit**: Add a new health data entry.

## Testing

To run tests, use the following command:
```
mvn test
```

#test results
##Data Controller
<img width="1357" alt="Screenshot 2023-12-25 at 14 39 06" src="https://github.com/ahmedjanwar/Mini_Health_Tracker/assets/57673382/c2f36b04-84ee-4d7d-bb45-3b6809d101fb">

##User controller
<img width="1353" alt="Screenshot 2023-12-25 at 14 41 09" src="https://github.com/ahmedjanwar/Mini_Health_Tracker/assets/57673382/79b2e827-ae2a-4d61-bbbd-1e23cefe5277">





