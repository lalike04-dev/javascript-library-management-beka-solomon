//import { booksRecord } from "../data/books.js";

//import { booksRecord } from "../data/books.js";
export function addBook(
  id,
  title,
  author,
  category,
  publicationyear,
  isbn,
  totalcopies,
  availablecopies,
) {
  let insert = {
    id: id,
    title: title,
    author: author,
    category: category,
    publicationyear: publicationyear,
    isbn: isbn,
    totalcopies: totalcopies,
    availablecopies: availablecopies,
  };
  booksRecord.push(insert);
}

/* addBook(1, "tit", "henesey", "fiction", 2015, 123445645, 2, 0);
console.log(booksRecord); */
