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

//Down here are our inputs that we are gona use for the operation of teh program
let id=7;
let title="venom"
let author="Frank Herebert"
let category="Fiction"
let publicationyear=2015
let isbn=172634267
let totalcopies=5
let availablecopies=2
bookValidator(id,title,isbn,totalcopies,availablecopies);