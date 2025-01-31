# HNG12 Stage 0 - Public API

## Description
This is a simple public API developed for the HNG12 Stage 0 backend task. The API returns:
- My registered HNG12 Slack email
- The current datetime in ISO 8601 format (UTC)
- The GitHub repository URL of this project

## Setup & Installation

### **Prerequisites**
- Node.js installed (v16 or later)
- Git installed

### **Clone the repository**
```sh
git clone https://github.com/basii199/HNG-Tech.git
cd ./Backend/Stage-0
```

### **Install dependencies**
```sh
npm install
```

### **Run the server locally**
```sh
npm start
```
The server will start on `http://localhost:3000`

## API Documentation

### **Endpoint:**
```
GET /
```

### **Response Format (200 OK):**
```json
{
  "email": "ubokabasi135@gmail.com",
  "current_datetime": "2025-01-30T09:30:00Z",
  "github_url": "https://github.com/basi199/HNG-Tech/"
}
```

### **Example Usage:**
- **cURL Command:**
```sh
curl https://stage-0-4n6zzkmox-ubokabasi-odudu-udohs-projects.vercel.app/
```
- **Browser Access:**
  Open `https://stage-0-4n6zzkmox-ubokabasi-odudu-udohs-projects.vercel.app/` in a browser.

## Deployment
The API is deployed on Vercel and is publicly accessible at:
```
https://stage-0-4n6zzkmox-ubokabasi-odudu-udohs-projects.vercel.app/
```

## Related Resources
For more Node.js developers, visit:  
[Hire Node.js Developers](https://hng.tech/hire/nodejs-developers)

---
🚀 **Happy Coding!**

