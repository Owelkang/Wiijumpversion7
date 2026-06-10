# 🚀 Wiijump v7 - Project Overview

## What is Wiijump v7?

Wiijump v7 is a **next-generation digital logging system** for facility operations management. It provides a complete solution for managing facilities with three distinct user portals: Admin, Staff, and Customer.

---

## 📱 Project Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                     WIIJUMP V7                              │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │           FRONTEND (HTML/CSS/JS)                    │   │
│  │  - Modern Dark Theme                               │   │
│  │  - Responsive Design (Mobile-First)                │   │
│  │  - 3 Portal Access: Admin | Staff | Customer       │   │
│  │  - WiijumpAPI Client Integration                   │   │
│  └─────────────────────────────────────────────────────┘   │
│                         ↕ (REST API)                        │
│  ┌─────────────────────────────────────────────────────┐   │
│  │        BACKEND (Node.js + Express)                  │   │
│  │  ✅ Authentication (JWT + Bcryptjs)                 │   │
│  │  ✅ Authorization (Role-Based Access)              │   │
│  │  ✅ Real-time Session Management                   │   │
│  │  ✅ Booking & Reservation System                   │   │
│  │  ✅ System Analytics & Reporting                   │   │
│  └─────────────────────────────────────────────────────┘   │
│                         ↕ (Mongoose ODM)                    │
│  ┌─────────────────────────────────────────────────────┐   │
│  │        DATABASE (MongoDB)                           │   │
│  │  - User Collection (Authentication)                │   │
│  │  - Session Collection (Tracking)                   │   │
│  │  - Booking Collection (Reservations)               │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## 🎯 Three Portal System

### 👨‍💼 **Admin Portal**
**Role:** System Management & Configuration
- User & Permission Management
- System Configuration
- Analytics & Reporting
- Database Management
- View all system statistics
- **Protected by**: Admin role (JWT verified)

### 👥 **Staff Portal**
**Role:** Session & Queue Management
- Active Session Tracking
- Queue Management
- Task Assignment
- Real-time Updates
- Activity Logging
- **Protected by**: Staff role (JWT verified)

### 🎫 **Customer Portal**
**Role:** Booking & Payment Processing
- View Schedule
- Book Sessions
- Manage Reservations
- Process Payments
- View Profile
- **Protected by**: Customer role (JWT verified)

---

## 💾 Data Models

### User
```javascript
{
  username: String,
  email: String,
  password: String (hashed),
  role: 'admin' | 'staff' | 'customer',
  firstName: String,
  lastName: String,
  phone: String,
  isActive: Boolean,
  lastLogin: Date
}
```

### Session
```javascript
{
  userId: ObjectId,
  facilityId: String,
  startTime: Date,
  endTime: Date,
  duration: Number,
  status: 'active' | 'completed' | 'cancelled' | 'paused',
  activities: Array
}
```

### Booking
```javascript
{
  customerId: ObjectId,
  facilityId: String,
  bookingDate: Date,
  startTime: String,
  endTime: String,
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled',
  totalPrice: Number,
  paymentStatus: 'pending' | 'completed' | 'refunded'
}
```

---

## 🔐 Security Implementation

| Feature | Implementation |
|---------|-----------------|
| **Password Security** | bcryptjs with 10-round salt |
| **Token Auth** | JWT with 7-day expiration |
| **Access Control** | Role-based middleware |
| **Input Validation** | express-validator on all endpoints |
| **Request Logging** | Morgan middleware |
| **Security Headers** | Helmet.js |
| **CORS** | Configured origins |
| **Error Handling** | Comprehensive middleware |

---

## 📡 API Endpoints

### **Total: 20+ Endpoints**

#### Auth (2)
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - User login

#### Admin (5)
- `GET /api/admin/users` - List all users
- `GET /api/admin/users/:id` - Get user details
- `PUT /api/admin/users/:id` - Update user
- `DELETE /api/admin/users/:id` - Delete user
- `GET /api/admin/stats` - System statistics

#### Staff (5)
- `GET /api/staff/sessions` - Get active sessions
- `POST /api/staff/sessions` - Create session
- `PUT /api/staff/sessions/:id` - Update session
- `POST /api/staff/sessions/:id/activities` - Log activity
- `GET /api/staff/queue` - Queue status

#### Customer (7)
- `GET /api/customer/bookings` - Get bookings
- `POST /api/customer/bookings` - Create booking
- `GET /api/customer/bookings/:id` - Get booking details
- `PUT /api/customer/bookings/:id` - Update booking
- `POST /api/customer/bookings/:id/cancel` - Cancel booking
- `GET /api/customer/profile` - Get profile
- `PUT /api/customer/profile` - Update profile

---

## 🛠️ Technology Stack

```
Frontend:
├── HTML5
├── CSS3 (with variables & responsive design)
└── JavaScript (ES6+ with async/await)

Backend:
├── Node.js 16+
├── Express.js 4.18
├── MongoDB with Mongoose
├── JWT for authentication
├── Bcryptjs for password hashing
├── Helmet for security
├── Morgan for logging
└── Express-validator for input validation
```

---

## 📂 File Structure

```
Wiijumpversion7/
│
├── Frontend (Main Branch)
│   ├── index.html              # Portal access page
│   ├── styles.css              # ⭐ Enhanced with forms & alerts
│   └── script.js               # ⭐ API client integration
│
├── Backend (Backend-Implementation Branch)
│   ├── server.js               # Express server
│   ├── package.json            # Dependencies
│   ├── .env.example            # Environment config
│   ├── config/
│   │   └── database.js         # MongoDB connection
│   ├── middleware/
│   │   ├── auth.js             # JWT & role verification
│   │   └── errorHandler.js     # Error handling
│   ├── models/
│   │   ├── User.js             # User schema
│   │   ├── Session.js          # Session schema
│   │   └── Booking.js          # Booking schema
│   ├── routes/
│   │   ├── auth.js             # Authentication routes
│   │   ├── admin.js            # Admin routes
│   │   ├── staff.js            # Staff routes
│   │   └── customer.js         # Customer routes
│   └── BACKEND_README.md       # API documentation
│
└── Documentation (Main Branch)
    ├── IMPLEMENTATION_SUMMARY.md
    ├── PROJECT_OVERVIEW.md
    └── README.md
```

---

## 🚀 Quick Start

### Frontend Only
```bash
# Just open index.html in browser
# No installation needed
```

### Full Stack (Frontend + Backend)

```bash
# 1. Clone repository
git clone https://github.com/Owelkang/Wiijumpversion7.git
cd Wiijumpversion7

# 2. Checkout backend branch
git checkout backend-implementation

# 3. Install dependencies
npm install

# 4. Setup environment
cp .env.example .env
# Edit .env with your MongoDB URI and JWT secret

# 5. Start server
npm run dev

# 6. Open frontend
# Go to http://localhost:5000 or open index.html in browser
```

---

## ✨ Key Features

### ✅ Completed
- Complete REST API (20+ endpoints)
- JWT Authentication & Authorization
- Role-Based Access Control (3 roles)
- Password Encryption & Hashing
- Input Validation on all endpoints
- Comprehensive Error Handling
- MongoDB Integration
- Modern Responsive Frontend
- API Client for frontend integration
- Complete Documentation

### 🎯 Ready for
- Production Deployment
- Docker Containerization
- CI/CD Pipeline Integration
- Cloud Hosting (Heroku, Railway, etc.)
- Mobile App Integration
- Testing & QA

---

## 📊 Project Metrics

| Metric | Count |
|--------|-------|
| **Total Files** | 20+ |
| **API Endpoints** | 20+ |
| **Database Models** | 3 |
| **Middleware Functions** | 2 |
| **Route Groups** | 4 |
| **Security Features** | 8+ |
| **Lines of Code** | 2000+ |

---

## 🔄 Request-Response Flow

```
User Request
    ↓
Frontend (HTML/CSS/JS)
    ↓
WiijumpAPI Client
    ↓
HTTP Request + JWT Token
    ↓
Express Server
    ↓
Authentication Middleware (verify JWT)
    ↓
Role Authorization Middleware (check permissions)
    ↓
Route Handler
    ↓
Database Query (Mongoose)
    ↓
MongoDB
    ↓
Response JSON
    ↓
Error Handler (if error)
    ↓
Client Response
    ↓
JavaScript Updates UI
    ↓
User Sees Result
```

---

## 🎓 Learning Resources

This project demonstrates:
- ✅ Full-stack web development (MERN-like stack)
- ✅ REST API design best practices
- ✅ Authentication & Authorization patterns
- ✅ Database design with MongoDB
- ✅ Responsive UI/UX design
- ✅ Security best practices
- ✅ Error handling & validation
- ✅ Frontend-backend integration

---

## 📞 Support & Documentation

- **API Docs**: See `BACKEND_README.md`
- **Implementation Details**: See `IMPLEMENTATION_SUMMARY.md`
- **Code Comments**: Inline documentation throughout
- **Git History**: Detailed commit messages

---

## 🎉 Status

✅ **Version:** 7.0.0  
✅ **Status:** Production Ready  
✅ **Last Updated:** June 2026  
✅ **License:** MIT  

---

**Built with ❤️ by Owelkang**
