# Library Management System

## 1. Student Information
- **Full Name**: Beka Solomon
- **Student ID / Registration No**: [BR123456]

## 2. Project Description & Detailed Feature Overview
**Project Description**
A backend Command Line Interface (CLI) library management application built with Node.js and ES Modules. It manages an in-memory database of books and members, validating input data and processing borrowing/returning transactions while generating analytical reports.

**Detailed Feature Overview**
- **Book Management**: Add new books to the inventory with automatic data validation (ID, title, publication year, ISBN).
- **Member Management**: Register new members, update member details, search for existing members, and delete members from the records.
- **Borrowing System**: Allows members to borrow available books and return them, automatically updating the `availablecopies` count in real-time.
- **Reporting & Analytics**: Generates library statistics, including book counts by category, total inventory size, and identifying the category with the highest borrow rate using array aggregation.

## 3. JavaScript Concepts, ES6+ Features, & Array Methods Utilized
**ES6+ Features**
- **ES Modules (`import` / `export`)**: Used to break the application into modular files (`data`, `services`, `utils`).
- **Arrow Functions**: Used extensively for concise function expressions.
- **Template Literals**: Utilized for logging output and string interpolation (`${variable}`).
- **Object Destructuring**: Used to extract specific properties from object records for validation and logging.

**Array Methods Used**
- **`.push()`**: Adding new book and member objects to the in-memory arrays.
- **`.splice()`**: Removing/deleting records at specific indices.
- **`.forEach()`**: Iterating through arrays for printing report data (like category insights).
- **`.reduce()`**: Aggregating total book counts and calculating category statistics.
- **`.find()` / `.filter()`** *(inferred)*: Used in the borrowing services to locate specific books or members by ID.

## 4. Folder Structure Breakdown & Execution Instructions
**Folder Structure:**
```text
library-management/
│
├── data/                     # Data sources
│   ├── books.js
│   ├── borrowed-books.js
│   └── members.js
│
├── services/                 # Core business logic
│   ├── bookservice.js
│   ├── borrowservice.js
│   ├── memberservice.js
│   └── reportservice.js
│
├── utils/                    # Helper functions
│   └── validator.js
│
├── app.js                     # Main application entry point
├── package.json               # Project config (type: module)
└── README.md                  # Documentation