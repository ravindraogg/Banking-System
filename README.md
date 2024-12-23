# Banking Management System

## Overview

The Banking Management System is a secure web application designed to manage user accounts, transactions, and various banking services. Built using **Java** and **Spring Boot** for the backend, and **React** for the frontend, this system applies Object-Oriented Programming (OOP) principles, data structures, and operating systems concepts such as multithreading and process scheduling.

- The **backend** has been containerized using Docker and deployed on **Azure App Service**.
- The **frontend** is deployed on **Netlify**. 
```
https://pluto-banking.netlify.app/
```

## Features

- **User Registration & Login**: Allows customers to create accounts, log in, and manage their information securely.
- **Account Management**: Admins can create and manage user accounts, including setting account status and type.
- **Transaction Management**: Users can transfer funds, view transaction history, and manage transactions.
- **Loan Processing**: Admins can approve or reject loan applications using scheduling and multithreading.
- **Security**: Implements secure access control for both users and admins.

## File Structure

```plaintext
backend/
 ├── src/
 │    ├── main/
 │    │    ├── java/
 │    │    │    └── com/
 │    │    │        └── banking/
 │    │    │            ├── Application.java          # Spring Boot main application
 │    │    │            ├── controller/
 │    │    │            │    ├── AdminController.java # Admin-related endpoints
 │    │    │            │    ├── CustomerController.java # Customer-related endpoints
 │    │    │            ├── model/
 │    │    │            │    ├── Account.java         # Account details
 │    │    │            │    ├── Customer.java        # Customer details
 │    │    │            │    ├── Loan.java            # Loan details
 │    │    │            │    ├── Transaction.java     # Transaction details
 │    │    │            ├── repository/
 │    │    │            │    ├── AccountRepository.java
 │    │    │            │    ├── LoanRepository.java
 │    │    │            │    ├── TransactionRepository.java
 │    │    │            ├── service/
 │    │    │            │    ├── AccountService.java
 │    │    │            │    ├── LoanService.java
 │    │    │            │    ├── TransactionService.java
 │    │    │            ├── util/
 │    │    │            │    └── Scheduler.java       # Loan processing and multithreading
 │    │    │            ├── config/
 │    │    │                 └── SecurityConfig.java  # Security settings
 │    └── resources/
 │         └── application.properties                 # MongoDB connection details
 └── Dockerfile
 └── netlify.yml
 └── pom.xml                                          # Maven dependencies for backend


frontend/
src/
├── admin/                   # Admin-specific features
│   ├── components/          # Reusable components for Admin
│   │   ├── AdminHeader.jsx
│   │   ├── AdminSidebar.jsx
│   │   └── AdminFooter.jsx
│   ├── pages/               # Admin pages
│   │   ├── AdminDashboard.jsx
│   │   ├── ViewCustomers.jsx
│   │   ├── ManageBranches.jsx
│   │   └── ManageManagers.jsx
│   └── admin.css            # Admin-specific styles
├── user/                    # User-specific features
│   ├── components/          # Reusable components for User
│   │   ├── UserHeader.jsx
│   │   ├── UserSidebar.jsx
│   │   └── UserFooter.jsx
│   ├── pages/               # User pages
│   │   ├── UserDashboard.jsx
│   │   ├── AccountDetails.jsx
│   │   ├── TransferFunds.jsx
│   │   ├── TransactionHistory.jsx
│   │   ├── LoanApplication.jsx
│   │   └── ProfileUpdate.jsx
│   └── user.css             # User-specific styles
├── App.jsx                  # Main app file
├── index.css                # Global styles
└── main.jsx                 # Entry point
```

## Setup Instructions

### Backend Setup

1. **Clone the repository**:
    ```
    git clone https://github.com/ravindraogg/Banking-Management-System.git
    ```

2. **Navigate to the backend directory**:
    ```
    cd backend/osdsa/osdsa
    ```

3. **Build and run the backend using Docker**:
    ```
    docker build -t banking-backend .
    docker run -p 8080:8080 banking-backend
    ```
   - The backend will be available at `http://localhost:8080`.

### Frontend Setup

1. **Navigate to the frontend directory**:
    ```
    cd frontend
    ```

2. **Install the dependencies**:
    ```
    npm install
    ```

3. **Run the frontend locally**:
    ```
    npm start
    ```
   - The frontend will be available at `http://localhost:3000`.

## Deployment

### Backend Deployment

- The backend is deployed on **Azure App Service**.
- The backend Docker container is deployed via **CI/CD** pipelines.

### Frontend Deployment

- The frontend is hosted on **Netlify**.
- The build is automatically deployed after each commit to the repository.

## Technologies Used

- **Backend**: Java, Spring Boot, Docker, Azure
- **Frontend**: React, Netlify
- **Database**: MongoDB
- **CI/CD**: Azure Pipelines, Docker

## How to Contribute

1. **Fork the repository**.
2. **Create a new branch** for your feature or bug fix.
3. **Make your changes** and commit them.
4. **Push your changes** to your fork.
5. **Open a pull request** to the `main` branch.

## License

This project is licensed under the MIT License.

## Contact

For any inquiries or issues, please contact [ravindraogg](https://github.com/ravindraogg).
