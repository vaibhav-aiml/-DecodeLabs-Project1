
DECODELABS
Industrial Training Kit
Full Stack Development Project
Author:
Vaibhav
GitHub: vaibhav-aiml
Organization:
DecodeLabs, Greater Lucknow, India
decodelabs.tech@gmail.com  |  +91 89330 06408  |  www.decodelabs.tech
Batch 2026
 

1. Overview
This repository contains three complete projects that together form a comprehensive full-stack web application. All three layers are fully integrated, allowing users to interact with persistent data through a responsive, modern interface.

Project	Description	Status
Project 1	Responsive Frontend Interface with glassmorphism design	✅ Complete
Project 2	Backend REST API with Node.js and Express	✅ Complete
Project 3	MongoDB Database Integration with Mongoose ODM	✅ Complete

2. Technology Stack
2.1  Frontend (Project 1)
Technology	Purpose
HTML5	Semantic structure & markup
CSS3	Styling with Grid, Flexbox & Custom Properties
JavaScript (Vanilla)	Interactive components & API integration
Google Fonts	Professional web typography

2.2  Backend (Project 2)
Technology	Purpose
Node.js	Server-side JavaScript runtime environment
Express.js	Fast, minimalist web framework
CORS	Cross-origin resource sharing middleware
dotenv	Secure environment variable management
Nodemon	Development hot-reload utility

2.3  Database (Project 3)
Technology	Purpose
MongoDB Atlas	Cloud-hosted NoSQL database
Mongoose ODM	Object Document Mapper for MongoDB
MongoDB Compass	GUI client for data visualization

3. API Endpoints
The backend exposes a RESTful API running on http://localhost:5000. All endpoints return JSON.

Method	Endpoint	Description	Status
GET	/	Health check	✅ Complete
GET	/api/users	Get all users	✅ Complete
GET	/api/users/:id	Get user by ID	✅ Complete
POST	/api/users	Create a user	✅ Complete
PUT	/api/users/:id	Update a user	✅ Complete
DELETE	/api/users/:id	Delete a user	✅ Complete

4. Database Schema
4.1  User Schema — Field Reference
Field	Type	Required	Unique	Default	Validation
name	String	Yes	No	—	Min 2, Max 50 chars
email	String	Yes	Yes	—	Valid email format
password	String	Yes	No	—	Min 6 chars
role	String	No	No	'user'	user or admin only
message	String	No	No	—	Max 500 chars
createdAt	Date	Auto	No	Auto	Timestamp (auto)
updatedAt	Date	Auto	No	Auto	Timestamp (auto)

All documents include automatic createdAt and updatedAt timestamps managed by Mongoose. The email field carries a unique index to enforce one account per address.

5. Design System
5.1  Color Palette
Name	Hex Code	Usage
Electric Blue	#00d4ff	Primary buttons & accents
Purple	#7c3aed	Secondary color & gradients
Neon Cyan	#22d3ee	Accent & hover states
Dark Background	#0a0a0f	Main background
Text Primary	#f1f5f9	Main text
Text Secondary	#94a3b8	Subtext & captions

5.2  Typography
Type	Font Family	Weights
Headings	Space Grotesk	500, 600, 700
Body	Inter	300, 400, 600
Accent	Poppins	300, 400, 500, 600, 700

5.3  Responsive Breakpoints
Technology	Purpose
Small Mobile	320px
Mobile	425px
Tablet	768px
Desktop	1024px
Large Desktop	1440px
4K Display	2560px

6. Feature Checklist
6.1  Frontend Features
Feature	Status
Mobile-first responsive design	✅ Complete
Glassmorphism UI components	✅ Complete
Animated particle background	✅ Complete
Smooth scroll animations	✅ Complete
Interactive carousel	✅ Complete
FAQ accordion	✅ Complete
Animated counters	✅ Complete
Form validation	✅ Complete
Toast notifications	✅ Complete
Back-to-top button	✅ Complete
Keyboard navigation	✅ Complete
ARIA accessibility compliance	✅ Complete

6.2  Backend Features
Feature	Status
RESTful API architecture	✅ Complete
CRUD operations	✅ Complete
Data validation	✅ Complete
Error handling	✅ Complete
Proper HTTP status codes	✅ Complete
CORS enabled	✅ Complete
Environment variables	✅ Complete

6.3  Database Features
Feature	Status
MongoDB Atlas cloud storage	✅ Complete
Mongoose schema validation	✅ Complete
Automatic timestamps	✅ Complete
Unique email constraint	✅ Complete
Role-based user types	✅ Complete
Connection error handling	✅ Complete

6.4  Integration Features
Feature	Status
Frontend to Backend communication	✅ Complete
Real-time user display	✅ Complete
Form submission to API	✅ Complete
User deletion from frontend	✅ Complete
Live data updates	✅ Complete
Persistent data storage	✅ Complete

7. Responsive Testing
Device	Resolution	Status
iPhone SE	320px	✅ Complete
iPhone 12/13/14	375px	✅ Complete
Android	425px	✅ Complete
iPad	768px	✅ Complete
Laptop	1024px	✅ Complete
Desktop	1440px	✅ Complete
4K Display	2560px	✅ Complete

8. Accessibility
Feature	Status
Semantic HTML5 landmarks	✅ Complete
ARIA labels and roles	✅ Complete
Keyboard navigation support	✅ Complete
Focus indicators	✅ Complete
Screen reader friendly	✅ Complete
Reduced motion support	✅ Complete
Color contrast compliance	✅ Complete

9. Performance
9.1  Optimizations
Feature	Status
Lazy loading for images	✅ Complete
Debounced scroll handlers	✅ Complete
Throttled resize events	✅ Complete
requestAnimationFrame for animations	✅ Complete
Minimal DOM operations	✅ Complete
CSS containment	✅ Complete
Efficient network requests	✅ Complete
MongoDB indexing	✅ Complete

9.2  Lighthouse Scores
Metric	Target	Status
Performance	95+	✅ Complete
Accessibility	95+	✅ Complete
Best Practices	95+	✅ Complete
SEO	95+	✅ Complete

10. Future Enhancements
Feature	Priority
JWT Authentication	High
Password Hashing (bcrypt)	High
User Login / Register Pages	High
Protected Routes	High
Admin Dashboard	Medium
Course Management System	Medium
Real-Time Notifications	Medium
Payment Integration	Low
Docker Containerization	Low
CI / CD Pipeline	Low
Unit Testing	Low
API Rate Limiting	Low

11. Project Status
Project	Status	Completion
Project 1: Frontend	✅ Complete	100%
Project 2: Backend API	✅ Complete	100%
Project 3: Database Integration	✅ Complete	100%
Frontend-Backend Integration	✅ Complete	100%
Documentation	✅ Complete	100%
Testing	✅ Complete	100%
Deployment	✅ Complete	100%

12. Contact
Organization
Location	Greater Lucknow, India
Phone	+91 89330 06408
Email	decodelabs.tech@gmail.com
Website	www.decodelabs.tech

Author
Name	Vaibhav
GitHub	github.com/vaibhav-aiml

Built with care by Vaibhav as part of the DecodeLabs Industrial Training Kit — Batch 2026.
