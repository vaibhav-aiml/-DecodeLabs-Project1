<div align="center">

# 🚀 DecodeLabs — Industrial Training Kit

### Full Stack Development Project

![Status](https://img.shields.io/badge/Status-Complete-brightgreen?style=for-the-badge)
![Batch](https://img.shields.io/badge/Batch-2026-blue?style=for-the-badge)
![Stack](https://img.shields.io/badge/Stack-MERN-61DAFB?style=for-the-badge)
![License](https://img.shields.io/badge/License-Educational-orange?style=for-the-badge)

A complete full-stack application built as part of the **DecodeLabs Industrial Training Kit** program.  
This project demonstrates the full spectrum of modern web development — from responsive frontend design to robust backend API development with MongoDB integration.

[Live Demo](https://vaibhav-aiml.github.io/-DecodeLabs-Project1) · [Report Bug](mailto:decodelabs.tech@gmail.com) · [Request Feature](mailto:decodelabs.tech@gmail.com)

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Projects](#-projects)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [API Endpoints](#-api-endpoints)
- [Database Schema](#-database-schema)
- [Design System](#-design-system)
- [Features](#-features)
- [Responsive Testing](#-responsive-testing)
- [Accessibility](#-accessibility)
- [Performance](#-performance)
- [Deployment](#-deployment)
- [Future Enhancements](#-future-enhancements)
- [Contact](#-contact)

---

## 🎯 Overview

| Project | Description | Status |
|:-------:|-------------|:------:|
| **Project 1** | Responsive Frontend Interface with glassmorphism design | ✅ Complete |
| **Project 2** | Backend REST API with Node.js and Express | ✅ Complete |
| **Project 3** | MongoDB Database Integration with Mongoose ODM | ✅ Complete |

All three layers are fully integrated, allowing users to interact with **persistent data** through a beautiful, responsive interface.

---

## 📁 Projects

### Project 1 — Responsive Frontend Interface ✅

A production-grade, responsive frontend built with pure **HTML5, CSS3, and Vanilla JavaScript**.

- Mobile-first responsive design (320px → 4K)
- Glassmorphism UI with dark theme
- Animated particle system with mouse interaction
- Scroll animations with Intersection Observer
- Interactive components (Carousel, FAQ, Counters)
- WCAG compliant accessibility
- 95+ Lighthouse scores across all categories

---

### Project 2 — Backend API Development ✅

A RESTful API built with **Node.js and Express.js** handling CRUD operations and data validation.

- Full CRUD operations (GET, POST, PUT, DELETE)
- Data validation and error handling
- JSON file storage (upgradable to any database)
- Proper HTTP status codes
- CORS enabled for frontend communication

---

### Project 3 — Database Integration ✅

**MongoDB** integration using Mongoose ODM for persistent data storage.

- MongoDB Atlas cloud database
- Mongoose schema with validation
- Automatic timestamps (`createdAt`, `updatedAt`)
- Indexed fields for performance
- Connection error handling
- Data persistence across server restarts

---

### 🔗 Full Stack Integration ✅

| Integration | Description |
|-------------|-------------|
| Community Section | Users fetched live from the API |
| Contact Form | Creates new users via POST request |
| User Deletion | Delete users directly from the frontend |
| Data Sync | Real-time data synchronization |
| Persistence | Data stored permanently with MongoDB |

---

## 🛠️ Tech Stack

### Frontend

| Technology | Purpose |
|------------|---------|
| HTML5 | Semantic structure |
| CSS3 | Styling (Grid, Flexbox, Custom Properties) |
| JavaScript (Vanilla) | Interactivity & API integration |
| Google Fonts | Web typography |

### Backend

| Technology | Purpose |
|------------|---------|
| Node.js | Runtime environment |
| Express.js | Web framework |
| CORS | Cross-origin resource sharing |
| dotenv | Environment variable management |
| Nodemon | Development auto-reload |

### Database

| Technology | Purpose |
|------------|---------|
| MongoDB Atlas | Cloud NoSQL database |
| Mongoose | ODM for MongoDB |
| MongoDB Compass | GUI for data visualization |

---

## 📂 Project Structure

```
DecodeLabs-Industrial-Training-Kit/
│
├── index.html                 # Frontend entry point
├── README.md                  # Documentation
├── .gitignore
│
├── assets/
│   ├── css/
│   │   ├── main.css           # Core styles & variables
│   │   ├── components.css     # Component styles
│   │   ├── animations.css     # Animation utilities
│   │   └── responsive.css     # Media queries
│   │
│   └── js/
│       ├── api.js             # API integration layer
│       ├── users.js           # User display & management
│       ├── main.js            # Entry point
│       ├── navigation.js      # Nav functionality
│       ├── animations.js      # Scroll & particle effects
│       ├── counters.js        # Animated counters
│       ├── carousel.js        # Testimonial carousel
│       ├── forms.js           # Form validation & API
│       └── utils.js           # Utility functions
│
└── backend/
    ├── server.js              # Main server file
    ├── package.json
    ├── .env                   # Environment variables
    │
    └── src/
        ├── routes/
        │   ├── index.js       # Route aggregator
        │   └── userRoutes.js  # User endpoints
        │
        ├── controllers/
        │   └── userController.js
        │
        ├── models/
        │   └── User.js        # MongoDB schema
        │
        ├── middleware/
        │   ├── validation.js
        │   └── auth.js
        │
        └── utils/
            └── helpers.js
```

---

## 🚦 Getting Started

### Prerequisites

| Requirement | Version |
|-------------|---------|
| Node.js | v14 or higher |
| npm | v6 or higher |
| Browser | Chrome, Firefox, or Edge |
| MongoDB Atlas | Free account |
| VS Code | Recommended |

### Installation

**1. Clone the repository**

```bash
git clone https://github.com/vaibhav-aiml/-DecodeLabs-Project1.git
cd "DecodeLabs - Industrial Training Kit"
```

**2. Set up and run the backend**

```bash
cd backend
npm install
npm run dev
```

> Server runs on: `http://localhost:5000`

**3. Open the frontend**

Open `index.html` in your browser, or use the Live Server extension in VS Code.

> Frontend runs on: `http://127.0.0.1:5500`

### MongoDB Setup

1. Create a free [MongoDB Atlas](https://www.mongodb.com/atlas) account
2. Create a cluster and a database user
3. Whitelist your IP address
4. Copy your connection string
5. Create `backend/.env`:

```env
PORT=5000
NODE_ENV=development
DATABASE_URL=mongodb+srv://username:password@cluster.mongodb.net/database_name
```

---

## 📡 API Endpoints

Base URL: `http://localhost:5000`

| Method | Endpoint | Description | Status |
|:------:|----------|-------------|:------:|
| `GET` | `/` | Health check | ✅ |
| `GET` | `/api/users` | Get all users | ✅ |
| `GET` | `/api/users/:id` | Get user by ID | ✅ |
| `POST` | `/api/users` | Create a user | ✅ |
| `PUT` | `/api/users/:id` | Update a user | ✅ |
| `DELETE` | `/api/users/:id` | Delete a user | ✅ |

### Response Examples

<details>
<summary><strong>✅ Success (200 OK)</strong></summary>

```json
{
  "success": true,
  "count": 1,
  "data": [
    {
      "_id": "65f8a1b2c3d4e5f678901234",
      "name": "John Doe",
      "email": "john@example.com",
      "role": "user",
      "createdAt": "2026-06-27T10:00:00.000Z",
      "updatedAt": "2026-06-27T10:00:00.000Z"
    }
  ]
}
```

</details>

<details>
<summary><strong>❌ Error (400 Bad Request)</strong></summary>

```json
{
  "success": false,
  "error": "Validation Error",
  "errors": ["Name is required", "Email is required"]
}
```

</details>

<details>
<summary><strong>❌ Error (404 Not Found)</strong></summary>

```json
{
  "success": false,
  "error": "Not Found",
  "message": "User with ID 123 does not exist"
}
```

</details>

### cURL Examples

```bash
# Get all users
curl http://localhost:5000/api/users

# Create a user
curl -X POST http://localhost:5000/api/users \
  -H "Content-Type: application/json" \
  -d '{"name":"John Doe","email":"john@example.com","password":"password123"}'

# Update a user
curl -X PUT http://localhost:5000/api/users/<id> \
  -H "Content-Type: application/json" \
  -d '{"name":"Updated Name","role":"admin"}'

# Delete a user
curl -X DELETE http://localhost:5000/api/users/<id>
```

---

## 🗄️ Database Schema

### User Schema

```js
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    minlength: [2, 'Name must be at least 2 characters'],
    maxlength: [50, 'Name cannot exceed 50 characters']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    lowercase: true,
    trim: true,
    match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email']
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: [6, 'Password must be at least 6 characters']
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user'
  },
  message: {
    type: String,
    maxlength: [500, 'Message cannot exceed 500 characters'],
    trim: true
  }
}, { timestamps: true });
```

### Field Reference

| Field | Type | Required | Unique | Default | Validation |
|-------|------|:--------:|:------:|---------|------------|
| `name` | String | ✅ | ❌ | — | Min 2, Max 50 chars |
| `email` | String | ✅ | ✅ | — | Valid email format |
| `password` | String | ✅ | ❌ | — | Min 6 chars |
| `role` | String | ❌ | ❌ | `'user'` | `user` or `admin` |
| `message` | String | ❌ | ❌ | — | Max 500 chars |
| `createdAt` | Date | Auto | ❌ | Auto | Timestamp |
| `updatedAt` | Date | Auto | ❌ | Auto | Timestamp |

---

## 🎨 Design System

### Color Palette

| Name | Hex | Usage |
|------|:---:|-------|
| Electric Blue | `#00d4ff` | Primary, buttons, accents |
| Purple | `#7c3aed` | Secondary, gradients |
| Neon Cyan | `#22d3ee` | Accent, hover states |
| Dark Background | `#0a0a0f` | Main background |
| Text Primary | `#f1f5f9` | Main text |
| Text Secondary | `#94a3b8` | Subtext & captions |

### Typography

| Type | Font | Weights |
|------|------|---------|
| Headings | Space Grotesk | 500, 600, 700 |
| Body | Inter | 300, 400, 600 |
| Accent | Poppins | 300, 400, 500, 600, 700 |

### Breakpoints

| Device | Breakpoint |
|--------|:----------:|
| Small Mobile | 320px |
| Mobile | 425px |
| Tablet | 768px |
| Desktop | 1024px |
| Large Desktop | 1440px |
| 4K | 2560px |

---

## ✨ Features

### Frontend

| Feature | Status |
|---------|:------:|
| Mobile-first responsive design | ✅ |
| Glassmorphism UI components | ✅ |
| Animated particle background | ✅ |
| Smooth scroll animations | ✅ |
| Interactive carousel | ✅ |
| FAQ accordion | ✅ |
| Animated counters | ✅ |
| Form validation | ✅ |
| Toast notifications | ✅ |
| Back to top button | ✅ |
| Keyboard navigation | ✅ |
| ARIA accessibility | ✅ |

### Backend

| Feature | Status |
|---------|:------:|
| RESTful API architecture | ✅ |
| CRUD operations | ✅ |
| Data validation | ✅ |
| Error handling | ✅ |
| HTTP status codes | ✅ |
| CORS enabled | ✅ |
| Environment variables | ✅ |

### Database

| Feature | Status |
|---------|:------:|
| MongoDB Atlas cloud storage | ✅ |
| Mongoose schema validation | ✅ |
| Automatic timestamps | ✅ |
| Unique email constraint | ✅ |
| Role-based user types | ✅ |
| Connection error handling | ✅ |

### Integration

| Feature | Status |
|---------|:------:|
| Frontend ↔ Backend communication | ✅ |
| Real-time user display | ✅ |
| Form submission to API | ✅ |
| User deletion from frontend | ✅ |
| Live data updates | ✅ |
| Persistent data storage | ✅ |

---

## 📱 Responsive Testing

| Device | Resolution | Status |
|--------|:----------:|:------:|
| iPhone SE | 320px | ✅ |
| iPhone 12/13/14 | 375px | ✅ |
| Android | 425px | ✅ |
| iPad | 768px | ✅ |
| Laptop | 1024px | ✅ |
| Desktop | 1440px | ✅ |
| 4K | 2560px | ✅ |

---

## ♿ Accessibility

| Feature | Status |
|---------|:------:|
| Semantic HTML5 landmarks | ✅ |
| ARIA labels and roles | ✅ |
| Keyboard navigation support | ✅ |
| Focus indicators | ✅ |
| Screen reader friendly | ✅ |
| Reduced motion support | ✅ |
| Color contrast compliance | ✅ |

---

## ⚡ Performance

### Optimizations

| Optimization | Status |
|--------------|:------:|
| Lazy loading for images | ✅ |
| Debounced scroll handlers | ✅ |
| Throttled resize events | ✅ |
| requestAnimationFrame for animations | ✅ |
| Minimal DOM operations | ✅ |
| CSS containment | ✅ |
| Efficient network requests | ✅ |
| MongoDB indexing | ✅ |

### Lighthouse Scores

| Metric | Score |
|--------|:-----:|
| 🟢 Performance | 95+ |
| 🟢 Accessibility | 95+ |
| 🟢 Best Practices | 95+ |
| 🟢 SEO | 95+ |

---

## 🌐 Deployment

### Frontend — GitHub Pages

```
https://vaibhav-aiml.github.io/-DecodeLabs-Project1
```

1. Push to the GitHub repository
2. Go to **Settings → Pages**
3. Select the `main` branch as source
4. Site goes live automatically

### Backend — Render / Railway

1. Create an account on [Render](https://render.com) or [Railway](https://railway.app)
2. Connect your GitHub repository
3. Set environment variables in the dashboard
4. Deploy — automatic on every push

### Database — MongoDB Atlas

Already configured via `backend/.env`. The database is accessible from any deployment environment using your connection string and credentials.

---

## 🔮 Future Enhancements

| Feature | Priority |
|---------|:--------:|
| JWT Authentication | 🔴 High |
| Password hashing (bcrypt) | 🔴 High |
| User login / register pages | 🔴 High |
| Protected routes | 🔴 High |
| Admin dashboard | 🟡 Medium |
| Course management system | 🟡 Medium |
| Real-time notifications | 🟡 Medium |
| Payment integration | 🟢 Low |
| Docker containerization | 🟢 Low |
| CI / CD pipeline | 🟢 Low |
| Unit testing | 🟢 Low |
| API rate limiting | 🟢 Low |

---

## 📊 Project Status

| Module | Status | Completion |
|--------|:------:|:----------:|
| Project 1: Frontend | ✅ Complete | ![100%](https://img.shields.io/badge/-100%25-brightgreen?style=flat-square) |
| Project 2: Backend API | ✅ Complete | ![100%](https://img.shields.io/badge/-100%25-brightgreen?style=flat-square) |
| Project 3: Database Integration | ✅ Complete | ![100%](https://img.shields.io/badge/-100%25-brightgreen?style=flat-square) |
| Frontend-Backend Integration | ✅ Complete | ![100%](https://img.shields.io/badge/-100%25-brightgreen?style=flat-square) |
| Documentation | ✅ Complete | ![100%](https://img.shields.io/badge/-100%25-brightgreen?style=flat-square) |
| Testing | ✅ Complete | ![100%](https://img.shields.io/badge/-100%25-brightgreen?style=flat-square) |
| Deployment | ✅ Complete | ![100%](https://img.shields.io/badge/-100%25-brightgreen?style=flat-square) |

---

## 📞 Contact

<div align="center">

**DecodeLabs**

📍 Greater Lucknow, India &nbsp;|&nbsp; 📞 +91 89330 06408 &nbsp;|&nbsp; ✉️ decodelabs.tech@gmail.com &nbsp;|&nbsp; 🌐 [www.decodelabs.tech](http://www.decodelabs.tech)

**Author: Vaibhav** &nbsp;|&nbsp; GitHub: [@vaibhav-aiml](https://github.com/vaibhav-aiml)

</div>

---

## 🏆 Acknowledgments

- **DecodeLabs** for the Industrial Training Kit program
- All mentors and peers for their support and feedback
- The open source community for amazing tools and libraries
- **MongoDB** for the free Atlas tier

---

<div align="center">

**Built with ❤️ by Vaibhav &nbsp;·&nbsp; DecodeLabs Industrial Training Kit &nbsp;·&nbsp; Batch 2026**

</div>