
# 📦 User Service – Park and Charge Platform

This repository contains the **User Service** from a larger microservice-based platform called **Park and Charge**, a smart city mobility system for electric vehicle (EV) users and private charging station owners.

> 🚗 The full platform enables EV users to search and book charging stations, while owners manage availability, pricing, and see usage statistics.

### 📌 My Role

In the original group project, I was responsible for designing and implementing the **User Service**, which handles:

- User registration and login
- Role-based access (`DRIVER`, `OWNER`)
- Secure password hashing and JWT-based authentication
- RESTful API integration

This repo presents the **User Service** as a standalone full-stack app with:
- 🖥️ Spring Boot backend (user-service)
- 🌐 Vue 3 + Vite frontend (user-frontend)

---

## 🔧 Technologies Used

### Backend (`user-service`)
- Java 21, Spring Boot 3
- Spring Security + JWT
- JPA + H2 Database
- Jakarta Bean Validation

### Frontend (`user-frontend`)
- Vue 3, Vite, Axios
- Bootstrap 5 for styling

---

## ✅ Features

- Register new users with role selection
- Login with JWT token generation
- Store token and user info in localStorage
- Role-based messages (e.g., Welcome Driver!)
- Frontend ↔ Backend integration with REST API

---

## 📁 Project Structure

```
root/
├── user-service/       # Spring Boot backend
├── user-frontend/      # Vue frontend
```

---

## 🚀 How to Run

### 1. Start Backend
```bash
cd user-service
./mvnw spring-boot:run
```
Runs at: `http://localhost:8082`

### 2. Start Frontend
```bash
cd user-frontend
npm install
npm run dev
```
Runs at: `http://localhost:5173`

---

## 📬 API Endpoints

| Method | Endpoint                     | Description         |
|--------|------------------------------|---------------------|
| POST   | `/users/register`            | Register new user   |
| POST   | `/users/login`               | Login and get token |
| GET    | `/users/GetUserInfo?email=`  | Get user by email   |

---

## 🧑‍💻 Author

Developed by **Vida Bahrami**  
Master’s Student in Digital Transformation, FH Dortmund

This standalone service is extracted from the **Park and Charge Platform** as a resume-ready project.
