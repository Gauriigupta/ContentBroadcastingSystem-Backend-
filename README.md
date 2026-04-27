# Content Broadcasting System (Backend)

A Node.js backend for educational institutions to broadcast subject-based materials (Maths, Science, etc.) to students with an approval workflow and time-based rotation system.

---

## 🛠️ Tech Stack

* **Backend:** Node.js (Express)
* **Database:** PostgreSQL / MySQL
* **Authentication:** JWT-based RBAC
* **Security:** bcrypt (password hashing)
* **File Handling:** Local storage (JPG, PNG, GIF)

---

## 📂 Project Structure

```
src/
├── config/          # Database config
├── controllers/     # Business logic
├── middlewares/     # Auth & upload handling
├── models/          # Database schemas
├── routes/          # API endpoints
├── services/        # Rotation logic
├── uploads/         # Media storage
├── utils/           # Server setup
├── .env
```

---

## 🚀 Setup & Installation

1. Install dependencies

```
npm install
```

2. Run server

```
npm start
```

---

## ⚙️ Environment Variables

```
PORT=5000
DB_HOST=localhost
DB_USER=your_username
DB_PASSWORD=your_password
DB_NAME=broadcasting_db
JWT_SECRET=your_secret_key
```

---

## 🔑 Key Workflows

### 1. Role-Based Access

* **Teacher:** Upload content, set subject, define duration
* **Principal:** Approve or reject content

### 2. Content Lifecycle

```
uploaded → pending → approved / rejected
```

### 3. Scheduling & Rotation

* Only **approved content** is broadcasted
* Content rotates based on defined duration
* Continuous loop system

---

## 🚦 API Endpoints

| Method | Endpoint                    | Access    | Description       |
| ------ | --------------------------- | --------- | ----------------- |
| POST   | /api/auth/login             | Public    | Login & get token |
| POST   | /api/content/upload         | Teacher   | Upload content    |
| PATCH  | /api/content/approve/:id    | Principal | Approve/Reject    |
| GET    | /api/public/live/:teacherId | Public    | Get live content  |

---

## 🛡️ Edge Cases

* No content → returns empty response
* Invalid subject → handled safely
* Unauthorized access → blocked

---

## 📌 Notes

* Can be extended with cron jobs for better scheduling
* Cloud storage (AWS S3) can be integrated
* Redis can be added for caching

  ## 📬 API Testing (Postman)

The APIs have been tested using Postman.

### 🔗 Postman Collection

You can import the Postman collection from the link below:

```
[(https://github.com/Gauriigupta/ContentBroadcastingSystem-Backend-/blob/main/collection.json)](https://github.com/Gauriigupta/ContentBroadcastingSystem-Backend-/blob/main/collection.json)
```

### 📥 How to Use

1. Open Postman
2. Click on **Import**
3. Upload the `postman_collection.json` file
4. Run the **Login API** first to generate the token
5. Use other APIs directly (token is auto-handled)

### ⚠️ Notes

* Update `base_url` if running on a different port/server
* Use valid credentials for login
* Token is automatically stored after login

