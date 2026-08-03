import { booksRecord } from "./data/books.js";
import { memberRecord } from "./data/members.js";
import { borrowRecord } from "./data/borrowed-books.js";
import {
  addBook,
  viewAllBooks,
  searchBook,
  updateBook,
  deleteBook,
} from "./services/bookservice.js";
import {
  addMember,
  viewAllMembers,
  searchMember,
  updateMember,
  deleteMember,
} from "./services/memberservice.js";
import { borrowBook, returnBook } from "./services/borrowservice.js";
import {
  libraryAnalytics,
  categoryinsights,
} from "./services/reportservice.js";
import { bookValidator, memberValidator } from "./utils/validator.js";

