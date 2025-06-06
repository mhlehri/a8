# Library Management System API

A comprehensive RESTful API for managing a library system built with Node.js, Express, TypeScript, and Prisma ORM. This system provides complete functionality for managing books, members, and borrowing/returning operations with overdue tracking.

## 🚀 Live URL

_[Add your deployment URL here]_

## 🛠️ Technology Stack & Packages

### Core Technologies

- **Node.js** - Runtime environment
- **Express.js** - Web application framework
- **TypeScript** - Type-safe JavaScript
- **PostgreSQL** - Database
- **Prisma ORM** - Database toolkit and query builder

### Dependencies

```json
{
  "@prisma/client": "6.9.0",
  "cors": "^2.8.5",
  "express": "^5.1.0",
  "zod": "^3.25.55"
}
```

### Development Dependencies

```json
{
  "@types/cors": "^2.8.18",
  "@types/express": "^5.0.2",
  "@types/node": "^22.15.30",
  "prisma": "^6.9.0",
  "tsx": "^4.19.4"
}
```

## 📥 Setup Instructions

### Prerequisites

- Node.js (v18 or higher)
- pnpm package manager
- PostgreSQL database

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd assignment-8
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Environment Setup**
   Create a `.env` file in the root directory:

   ```env
   DATABASE_URL="postgresql://username:password@localhost:5432/library_db"
   ```

4. **Database Setup**

   ```bash
   # Generate Prisma client
   npx prisma generate

   # Run database migrations
   npx prisma migrate dev

   # (Optional) Seed the database
   npx prisma db seed
   ```

5. **Start the application**

   ```bash
   # Development mode
   pnpm dev

   # Production build
   pnpm build
   ```

The server will start on `http://localhost:3000`

## ✨ Key Features & Functionality

### 📚 Book Management

- **Create Book** - Add new books to the library inventory
- **View All Books** - Retrieve list of all books with availability status
- **View Book Details** - Get detailed information about a specific book
- **Update Book** - Modify book information and inventory
- **Delete Book** - Remove books from the system

### 👥 Member Management

- **Register Member** - Add new library members
- **View All Members** - Retrieve list of all registered members
- **View Member Details** - Get detailed member information
- **Update Member** - Modify member information
- **Delete Member** - Remove members from the system

### 📖 Borrow & Return Operations

- **Borrow Book** - Process book borrowing with automatic inventory update
- **Return Book** - Handle book returns with date tracking
- **Overdue Tracking** - Monitor and retrieve list of overdue books

### 🔧 Technical Features

- **Type Safety** - Full TypeScript implementation with Zod validation
- **Error Handling** - Comprehensive error handling with custom error classes
- **Database Relations** - Proper foreign key relationships between entities
- **Request Validation** - Input validation using Zod schemas
- **CORS Support** - Cross-origin resource sharing enabled
- **Modular Architecture** - Clean separation of concerns with MVC pattern

## 📡 API Endpoints

### Books

```
GET    /api/books           - Get all books
GET    /api/books/:bookId   - Get book by ID
POST   /api/books           - Create new book
PATCH  /api/books/:bookId   - Update book
DELETE /api/books/:bookId   - Delete book
```

### Members

```
GET    /api/members           - Get all members
GET    /api/members/:memberId - Get member by ID
POST   /api/members           - Create new member
PATCH  /api/members/:memberId - Update member
DELETE /api/members/:memberId - Delete member
```

### Borrow & Return

```
POST /api/borrow        - Borrow a book
POST /api/return        - Return a book
GET  /api/borrow/overdue - Get overdue books
```

## 📊 Database Schema

### Book Model

- `bookId` (UUID, Primary Key)
- `title` (String)
- `genre` (String)
- `publishedYear` (Integer)
- `totalCopies` (Integer)
- `availableCopies` (Integer)

### Member Model

- `memberId` (UUID, Primary Key)
- `name` (String)
- `email` (String, Unique)
- `phone` (String)
- `membershipDate` (DateTime)

### BorrowRecord Model

- `borrowId` (UUID, Primary Key)
- `borrowDate` (DateTime)
- `returnDate` (DateTime, Optional)
- `bookId` (Foreign Key to Book)
- `memberId` (Foreign Key to Member)

## 🚨 Known Issues/Bugs

Currently, there are no known critical issues. However, potential areas for improvement include:

- **Input Sanitization** - Additional input sanitization could be implemented
- **Rate Limiting** - API rate limiting is not currently implemented
- **Logging** - Enhanced logging system could be beneficial
- **Pagination** - Large datasets might benefit from pagination
- **Email Notifications** - Overdue book notifications could be automated

## 🏗️ Project Structure

```
src/
├── app/
│   ├── modules/
│   │   ├── book/           # Book-related functionality
│   │   ├── member/         # Member management
│   │   └── borrowReturn/   # Borrow/return operations
│   └── routes/             # Route configurations
├── generated/prisma/       # Auto-generated Prisma client
├── helper/                 # Utility functions
├── middleware/             # Custom middleware
└── shared/                 # Shared utilities
```
