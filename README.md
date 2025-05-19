# 🚀 User Management System

<div align="center">
  
![User Management System Dashboard](https://raw.githubusercontent.com/AndrewGiganto/User-Management-System-Angular-master/main/Screenshot.png)

A full-stack application for managing user accounts with advanced features and security.

Database Connection URLs:
(Andrew Mathew Giganto)
```
psql PGPASSWORD=sUxsItmJrZPtBPcYNmSdiFRqTooYZiox psql -h gondola.proxy.rlwy.net -U postgres -p 59248 -d railway
```

(Joseph Earl Estimo)
```
psql PGPASSWORD=AyGqmIqmPYvQXtcsarEAfoVMxoBHckRd psql -h hopper.proxy.rlwy.net -U postgres -p 53347 -d railway
```

(Nicole Abelgas)
```
psql PGPASSWORD=NktcSqwiNdElvHpviEUwGuIdUquCqHWK psql -h tramway.proxy.rlwy.net -U postgres -p 26229 -d railway
```

Website URLs:
(Andrew Mathew Giganto)
https://user-management-system-angular-master.vercel.app
Admin: drewgigants@gmail.com   asd123

(Joseph Earl Estimo)
https://user-management-system-angular-master-estimo.vercel.app
Admin: earlestimo@gmail.com   admin123

(Nicole Abelgas)
https://user-management-system-angular-master-abelgas.vercel.app
Admin: coleabelgas32@gmail.com    admin123


[![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)](https://angular.io/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/)
[![Railway](https://img.shields.io/badge/Railway-0B0D0E?style=for-the-badge&logo=railway&logoColor=white)](https://railway.app)
[![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com)

</div>

## 📋 Table of Contents
- [Live Demos](#-live-demos)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Configuration](#-configuration)
- [Database Access](#-database-access)
- [API Documentation](#-api-documentation)
- [Deployment](#-deployment)
- [First Login](#-first-login)
- [Contributing](#-contributing)
- [Team](#-team)

## 🌐 Live Demos
- **Frontend**: [https://user-management-system-angular-master.vercel.app](https://user-management-system-angular-master.vercel.app)
- **Backend API**: [https://user-management-system-angular-master-production.up.railway.app](https://user-management-system-angular-master-production.up.railway.app)

## ✨ Features

### 🔐 Authentication & Authorization
- User Registration with Email Verification
- JWT Authentication with Refresh Tokens
- Role-Based Access Control (Admin/User)
- Password Reset via Email
- Account Status Management (Active/Inactive)
- First-time admin account auto-creation (no verification needed)

### 📱 User Interface
- Modern and Responsive Design
- User-friendly Dashboard
- Account Management Interface
- Profile Settings
- Admin Control Panel

### 🛡️ Security
- Password Encryption with bcryptjs
- Token-based Authentication
- Secure Email Verification via SMTP
- Session Management
- Input Validation with Joi

## 🛠️ Tech Stack

### Frontend
- **Framework**: Angular 17
- **UI Library**: Bootstrap 5
- **Icons**: Font Awesome 6
- **HTTP Client**: Angular HttpClient
- **Forms**: Reactive Forms
- **Routing**: Angular Router
- **Hosting**: Vercel

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: PostgreSQL
- **ORM**: Sequelize
- **Authentication**: JWT
- **Email**: Nodemailer (Gmail SMTP)
- **Validation**: Joi
- **Documentation**: Swagger UI
- **Hosting**: Railway

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- PostgreSQL
- npm or yarn
- Angular CLI
- Git

### Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/AndrewGiganto/User-Management-System-Angular-master.git
   cd User-Management-System-Angular-master
   ```

2. **Backend Setup**
   ```bash
   cd backend
   npm install
   ```

3. **Frontend Setup**
   ```bash
   cd frontend
   npm install
   ```

## ⚙️ Configuration

### Email Configuration
1. Go to your Google Account settings
2. Enable 2-Step Verification
3. Generate an App Password:
   - Go to Security → App Passwords
   - Select 'Mail' and your device
   - Copy the generated password
4. Update the `SMTP_PASS` in your `.env` file

### 🗄️ Database Access

First, open a shell or bash terminal. You can connect to the remote PostgreSQL database using the following command:

> ⚠️ **Note:** Make sure PostgreSQL is installed and added to your system path.

```bash
psql PGPASSWORD=sUxsItmJrZPtBPcYNmSdiFRqTooYZiox psql -h gondola.proxy.rlwy.net -U postgres -p 59248 -d railway
```

**Password:** `sUxsItmJrZPtBPcYNmSdiFRqTooYZiox`

---

### 🔍 Common PostgreSQL Commands

After connecting, try these useful commands:

#### 📋 List Tables
```sql
\dt
```
**Available tables:**
- `accounts`  
- `refreshTokens`  
- `departments`  
- `employees`  
- `requests`  
- `workflows`  

---

### 💬 Basic SQL Queries

#### View all users:
```sql
SELECT id, email, firstName, lastName, role FROM accounts;
```

#### Add a new department:
```sql
INSERT INTO departments (name, description, created)
VALUES ('Engineering', 'Core development team', NOW());
```

#### Update employee department:
```sql
UPDATE employees SET departmentId = 1 WHERE id = 1;
```

#### Delete a request by ID:
```sql
DELETE FROM requests WHERE id = 5;
```

#### Get all active employees:
```sql
SELECT * FROM employees WHERE status = 'active';
```

## 📚 API Documentation

### Accounts

| Method | Endpoint                  | Description                      | Authentication |
|--------|---------------------------|----------------------------------|----------------|
| POST   | /accounts/register        | Register new user                | None           |
| POST   | /accounts/verify-email    | Verify email with token          | None           |
| POST   | /accounts/authenticate    | Authenticate user and get JWT    | None           |
| POST   | /accounts/refresh-token   | Refresh JWT token                | None           |
| POST   | /accounts/revoke-token    | Revoke refresh token             | Authenticated  |
| GET    | /accounts                 | Get all accounts                 | Admin          |
| GET    | /accounts/:id             | Get account by ID                | Authenticated  |
| PUT    | /accounts/:id             | Update account                   | Authenticated  |

**Example Request (POST /accounts/register):**
```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john.doe@example.com",
  "password": "Password123!"
}
```

### Employees

| Method | Endpoint                  | Description                      | Authentication |
|--------|---------------------------|----------------------------------|----------------|
| POST   | /employees                | Create new employee              | Admin          |
| GET    | /employees                | Get all employees               | Authenticated  |
| GET    | /employees/:id            | Get employee by ID              | Authenticated  |
| PUT    | /employees/:id            | Update employee                 | Admin          |
| DELETE | /employees/:id            | Delete employee                 | Admin          |
| POST   | /employees/:id/transfer   | Transfer employee department    | Admin          |

**Example Request (POST /employees):**
```json
{
  "employeeId": "EMP001",
  "userId": 1,
  "position": "Developer",
  "hireDate": "2025-01-01",
  "departmentId": 1
}
```

### Departments

| Method | Endpoint                  | Description                      | Authentication |
|--------|---------------------------|----------------------------------|----------------|
| POST   | /departments              | Create new department            | Admin          |
| GET    | /departments              | Get all departments             | Authenticated  |
| GET    | /departments/:id          | Get department by ID            | Authenticated  |
| PUT    | /departments/:id          | Update department               | Admin          |
| DELETE | /departments/:id          | Delete department               | Admin          |

**Example Request (POST /departments):**
```json
{
  "name": "Engineering",
  "description": "Software development team"
}
```

### Workflows

| Method | Endpoint                  | Description                      | Authentication |
|--------|---------------------------|----------------------------------|----------------|
| POST   | /workflows                | Create new workflow              | Admin          |
| GET    | /workflows/employee/:id   | Get workflows for employee       | Authenticated  |
| PUT    | /workflows/:id/status     | Update workflow status           | Admin          |
| POST   | /workflows/onboarding     | Initiate employee onboarding     | Admin          |

**Example Request (POST /workflows):**
```json
{
  "employeeId": 1,
  "type": "Onboarding",
  "details": { "task": "Setup workstation" }
}
```

### Requests

| Method | Endpoint                  | Description                      | Authentication |
|--------|---------------------------|----------------------------------|----------------|
| POST   | /requests                 | Create new request               | Authenticated  |
| GET    | /requests                 | Get all requests                | Admin          |
| GET    | /requests/:id             | Get request by ID               | Authenticated  |
| GET    | /requests/employee/:id    | Get requests for employee       | Authenticated  |
| PUT    | /requests/:id             | Update request                  | Admin          |
| DELETE | /requests/:id             | Delete request                  | Admin          |

**Example Request (POST /requests):**
```json
{
  "employeeId": 1,
  "type": "Equipment",
  "items": [
    { "name": "Laptop", "quantity": 1 },
    { "name": "Monitor", "quantity": 2 }
  ]
}
```

## 🌐 Live Demos
- **Frontend**: [https://user-management-system-angular-master.vercel.app](https://user-management-system-angular-master.vercel.app)
- **Backend API**: [https://user-management-system-angular-master-production.up.railway.app](https://user-management-system-angular-master-production.up.railway.app)
- **API Docs**: [https://user-management-system-angular-master-production.up.railway.app/api-docs](https://user-management-system-angular-master-production.up.railway.app/api-docs)

## 🌐 Deployment

### Backend Deployment (Railway)
1. Connect your GitHub repository to Railway
2. Select the backend directory
3. Configure environment variables from `.env`
4. Deploy

### Frontend Deployment (Vercel)
1. Connect your GitHub repository to Vercel
2. Select the frontend directory
3. Configure build settings:
   - Build Command: `npm run build`
   - Output Directory: `dist/frontend`
4. Deploy

## 🔑 First Login
- The system automatically creates an admin account on first launch
- Subsequent accounts require email verification
- Email notifications are sent via Gmail SMTP (sender: huntersungjinwoo321@gmail.com)
- Admin account: email: drewgigants@gmail.com, password: asd123

## 🤝 Contributing
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 👥 Team
- Andrew Mathew Giganto
- Nicole Ablegas
- Joseph Earl Estimo

---

<div align="center">
  © 2025 User Management System | MIT License
</div>
