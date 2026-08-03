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
let bookid=5;
let title="venom"
let author="Frank Herebert"
let category="Fiction"
let publicationyear=2015
let isbn=172634267
let totalcopies=5
let availablecopies=2

//here we add books to the record by validating the input first

bookValidator(bookid,title,isbn,totalcopies,availablecopies);
addBook(bookid,title,author,category,publicationyear,isbn,totalcopies,availablecopies);
console.log(booksRecord)

//here are the inputs for registering a member
let memberid=1
let firstname="Abebe"
let lastname="Balcha"
let email="abebal@gmail.com"
let phone=null

//insert those values into the following functions and feel free to change them to visualize what these functions do

memberValidator(memberid,email);
addMember(memberid,firstname,lastname,email,phone);
console.log(memberRecord)

//here is the function to view all books and view all members respectively

viewAllBooks()
viewAllMembers()

//here are the functions for searching a book and searching members respectively

searchBook("id",bookid,title,author,category);
searchMember("firstname",memberid,firstname);

//here are the update book and update member functionalities

updateBook(bookid,title,author,category,publicationyear,isbn,totalcopies,availablecopies);
console.log(booksRecord);
updateMember(memberid,firstname,lastname,email,phone); 
console.log(memberRecord);

//here are the delete book and delete member functionalities

deleteBook(bookid);
console.log(booksRecord);
deleteMember(memberid);
console.log(memberRecord);

//here is the function for borrowing a book and it contians all the necessary constrains that the library demands
let date="2025-12-01"
borrowBook(memberid,bookid,date);
console.log(borrowRecord);


//here is the return function for the book

returnBook(memberid,bookid);
console.log(borrowRecord);

//here are the various reports for the input data#

libraryAnalytics()
categoryinsights()



