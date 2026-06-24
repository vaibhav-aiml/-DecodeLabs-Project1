# 🚀 DecodeLabs - Industrial Training Kit

## Full Stack Development Project

A complete full-stack application built as part of the DecodeLabs Industrial Training Kit program. This project demonstrates the full spectrum of modern web development - from responsive frontend design to robust backend API development.

---

## 📋 Table of Contents

- [Overview](#overview)
- [Projects](#projects)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [API Endpoints](#api-endpoints)
- [Design System](#design-system)
- [Features](#features)
- [Responsive Testing](#responsive-testing)
- [Accessibility](#accessibility)
- [Performance](#performance)
- [Deployment](#deployment)
- [Future Enhancements](#future-enhancements)
- [Contact](#contact)

---

## 🎯 Overview

This repository contains two complete projects that together form a full-stack web application:

- **Project 1**: Responsive Frontend Interface with glassmorphism design
- **Project 2**: Backend REST API with Node.js and Express

The frontend and backend are fully integrated, allowing users to interact with the API through a beautiful, responsive interface.

---

## 📁 Projects

### Project 1: Responsive Frontend Interface ✅

A production-grade, responsive frontend built with pure HTML5, CSS3, and Vanilla JavaScript.

**Key Features:**
- Mobile-first responsive design (320px → 4K)
- Glassmorphism UI with dark theme
- Animated particle system with mouse interaction
- Scroll animations with Intersection Observer
- Interactive components (Carousel, FAQ, Counters)
- WCAG compliant accessibility
- 95+ Lighthouse scores

### Project 2: Backend API Development ✅

A RESTful API built with Node.js and Express.js that handles CRUD operations and data validation.

**Key Features:**
- Full CRUD operations (GET, POST, PUT, DELETE)
- Data validation and error handling
- JSON file storage (easily upgradable to databases)
- Proper HTTP status codes
- CORS enabled for frontend communication

### 🔗 Full Stack Integration ✅

The frontend and backend are fully connected:

- Users are displayed from the API in the "Community" section
- Contact form creates new users via POST request
- Delete users directly from the frontend
- Real-time data synchronization

---

## 🛠️ Tech Stack

### Frontend (Project 1)
| Technology | Purpose |
|------------|---------|
| HTML5 | Semantic structure |
| CSS3 | Styling (Grid, Flexbox, Variables) |
| JavaScript (Vanilla) | Interactivity |
| Google Fonts | Typography |

### Backend (Project 2)
| Technology | Purpose |
|------------|---------|
| Node.js | Runtime environment |
| Express.js | Web framework |
| CORS | Cross-origin resource sharing |
| dotenv | Environment variables |
| Nodemon | Development auto-reload |

---

## 📂 Project Structure
DecodeLabs-Industrial-Training-Kit/
│
├── index.html # Frontend entry point
├── README.md # Documentation
├── .gitignore # Git ignore file
│
├── assets/ # Frontend assets
│ ├── css/
│ │ ├── main.css # Core styles & variables
│ │ ├── components.css # Component styles
│ │ ├── animations.css # Animation utilities
│ │ └── responsive.css # Media queries
│ │
│ └── js/
│ ├── api.js # API integration layer
│ ├── users.js # User display & management
│ ├── main.js # Entry point
│ ├── navigation.js # Nav functionality
│ ├── animations.js # Scroll & particle effects
│ ├── counters.js # Animated counters
│ ├── carousel.js # Testimonial carousel
│ ├── forms.js # Form validation & API
│ └── utils.js # Utility functions
│
└── backend/ # Backend API
├── server.js # Main server file
├── package.json # Dependencies
├── package-lock.json # Lock file
├── .env # Environment variables
├── .gitignore # Backend git ignore
│
├── src/
│ ├── routes/
│ │ ├── index.js # Route aggregator
│ │ └── userRoutes.js # User endpoints
│ │
│ ├── controllers/
│ │ └── userController.js # Request handlers
│ │
│ ├── models/
│ │ └── userModel.js # Data model
│ │
│ ├── middleware/
│ │ ├── validation.js # Data validation
│ │ └── auth.js # Authentication (optional)
│ │
│ └── utils/
│ └── helpers.js # Utility functions
│
└── data/
└── users.json # JSON storage

---

## 🚦 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher)
- Modern web browser (Chrome, Firefox, Edge)
- VS Code (recommended)

### Installation

1. **Clone the repository:**
```bash
git clone https://github.com/vaibhav-aiml/-DecodeLabs-Project1.git
cd "DecodeLabs - Industrial Training Kit"

Set up the backend:

bash
cd backend
npm install
npm run dev

Server runs on: http://localhost:5000

Open the frontend:

Open index.html in your browser

Or use Live Server in VS Code (right-click → Open with Live Server)

Frontend runs on: http://127.0.0.1:5500

Live Server (VS Code)
Install "Live Server" extension

Right-click index.html

Select "Open with Live Server"

Design System
Colors
Name	Hex	Usage
Electric Blue	#00d4ff	Primary, buttons, accents
Purple	#7c3aed	Secondary, gradients
Neon Cyan	#22d3ee	Accent, hover states
Dark Background	#0a0a0f	Main background
Text Primary	#f1f5f9	Main text
Text Secondary	#94a3b8	Subtext
Typography
Type	Font	Weights
Headings	Space Grotesk	500, 600, 700
Body	Inter	300, 400, 600
Accent	Poppins	300, 400, 500, 600, 700
Breakpoints
Device	Breakpoint
Small Mobile	320px
Mobile	425px
Tablet	768px
Desktop	1024px
Large Desktop	1440px
4K	2560px
✨ Features
Frontend Features
✅ Mobile-first responsive design

✅ Glassmorphism UI components

✅ Animated particle background

✅ Smooth scroll animations

✅ Interactive carousel

✅ FAQ accordion

✅ Animated counters

✅ Form validation

✅ Toast notifications

✅ Back to top button

✅ Keyboard navigation

✅ ARIA accessibility

Backend Features
✅ RESTful API architecture

✅ CRUD operations

✅ Data validation

✅ Error handling

✅ HTTP status codes

✅ CORS enabled

✅ JSON storage

✅ Environment variables

Integration Features
✅ Frontend ↔ Backend communication

✅ Real-time user display

✅ Form submission to API

✅ User deletion from frontend

✅ Live data updates

📱 Responsive Testing
Tested and verified on:

Device	Resolution	Status
iPhone SE	320px	✅
iPhone 12/13/14	375px	✅
Android	425px	✅
iPad	768px	✅
Laptop	1024px	✅
Desktop	1440px	✅
4K	2560px	✅
♿ Accessibility
✅ Semantic HTML5 landmarks

✅ ARIA labels and roles

✅ Keyboard navigation support

✅ Focus indicators

✅ Screen reader friendly

✅ Reduced motion support

✅ Color contrast compliance

⚡ Performance
Optimizations
✅ Lazy loading for images

✅ Debounced scroll handlers

✅ Throttled resize events

✅ requestAnimationFrame for animations

✅ Minimal DOM operations

✅ CSS containment

✅ Efficient network requests

Lighthouse Scores (Target)
✅ Performance: 95+

✅ Accessibility: 95+

✅ Best Practices: 95+

✅ SEO: 95+

📝 Future Enhancements
JWT Authentication

Password hashing (bcrypt)

MongoDB/PostgreSQL database

User login/register pages

Protected routes

Admin dashboard

Course management system

Real-time notifications

Payment integration

Docker containerization

CI/CD pipeline

Unit testing

🤝 Contributing
This is a learning project for the DecodeLabs Industrial Training Kit. For questions or suggestions, please contact the DecodeLabs team.

📄 License
This project is for educational purposes as part of the DecodeLabs Industrial Training Kit program.

📞 Contact
DecodeLabs

📍 Greater Lucknow, India

📞 +91 89330 06408

✉️ decodelabs.tech@gmail.com

🌐 www.decodelabs.tech

Author

Vaibhav

GitHub: vaibhav-aiml

Acknowledgments
DecodeLabs for the Industrial Training Kit program

All mentors and peers for support and feedback

Open source community for amazing tools