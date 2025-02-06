# Number Classification API

## Overview
The **Number Classification API** is a simple RESTful API built using **Node.js** and **Express.js**. It classifies a given number by determining its mathematical properties, such as:
- Whether it is **prime**
- Whether it is **perfect**
- Whether it is an **Armstrong number**
- Whether it is **odd or even**
- The **sum of its digits**
- A **fun fact** retrieved from [Numbers API](http://numbersapi.com/)

The API is **publicly accessible** and deployed via **Vercel**.

## Live API URL
🚀 [Live API](https://stage-1-olive.vercel.app/api/classify-number?number=371)

## Features
- Accepts GET requests with a **number** parameter.
- Returns **JSON responses** in the specified format.
- Handles **CORS** (Cross-Origin Resource Sharing).
- Provides appropriate **HTTP status codes**.
- Hosted on a **publicly accessible** endpoint.
- Fast response time (< 500ms).

## API Specification
### Endpoint:
```http
GET /api/classify-number?number={integer}
```

### Example Request:
```sh
curl -X GET "https://stage-1-olive.vercel.app/api/classify-number?number=371" -H "Content-Type: application/json"
```

### Example Successful Response (200 OK):
```json
{
    "number": 371,
    "is_prime": false,
    "is_perfect": false,
    "properties": ["armstrong", "odd"],
    "digit_sum": 11,
    "fun_fact": "371 is an Armstrong number because 3^3 + 7^3 + 1^3 = 371"
}
```

### Example Error Response (400 Bad Request):
```json
{
    "number": "alphabet",
    "error": true
}
```

## Installation & Local Development
### Prerequisites:
- **Node.js** (v14+)
- **npm** (v6+)

### Clone Repository
```sh
git clone https://github.com/your-username/number-classification-api.git
cd number-classification-api
```

### Install Dependencies
```sh
npm install
```

### Run Locally
```sh
node index.js
```
API will be available at:
```http
http://localhost:3000/api/classify-number?number=371
```

## Deployment (Vercel)
### Deploying to Vercel:
1. Install Vercel CLI:
   ```sh
   npm install -g vercel
   ```
2. Login to Vercel:
   ```sh
   vercel login
   ```
3. Deploy:
   ```sh
   vercel --prod
   ```

## Code Structure
```
number-classification-api/
│── index.js  # Main server file
│── package.json  # Dependencies & scripts
│── vercel.json  # Deployment configuration
```

## Acceptance Criteria Checklist
✅ Accepts GET requests with a number parameter.  
✅ Returns JSON in the specified format.  
✅ Handles CORS.  
✅ Provides appropriate HTTP status codes.  
✅ Hosted on a publicly accessible endpoint.  
✅ Fast response time (< 500ms).  
✅ Code is public on GitHub.  
✅ Well-structured README.md.  

## License
MIT License © 2025 [Your Name]

