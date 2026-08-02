import { booksRecord } from "../data/books.js";

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

/* addBook(1, "tick tack", "henesey", "fiction", 2015, 123445645, 2, 0);
console.log(booksRecord); */

export function viewAllBooks() {
  for (let i = 0; i < booksRecord.length; i++) {
    let {
      id,
      title,
      author,
      category,
      publicationyear,
      isbn,
      totalcopies,
      availablecopies,
    } = booksRecord[i];
    console.log(
      `Book${i}->id:${id}, Title:${title}, author:${author}, category:${category}, publicationyear:${publicationyear}, isbn:${isbn}, totalcopies:${totalcopies}, availablecopies:${availablecopies}`,
    );
  }
}
/* viewAllBooks(); */

export function searchBook(choice, id, title, author, category) {
  switch (choice.toLowerCase()) {
    case "id":
      let truth = true;
      for (let i = 0; i < booksRecord.length; i++) {
        if (id == booksRecord[i].id) {
          truth = true;
          let {
            id,
            title,
            author,
            category,
            publicationyear,
            isbn,
            totalcopies,
            availablecopies,
          } = booksRecord[i];
          console.log(
            `id:${id}, Title:${title}, author:${author}, category:${category}, publicationyear:${publicationyear}, isbn:${isbn}, totalcopies:${totalcopies}, availablecopies:${availablecopies}`,
          );
          break;
        }
        truth = false;
      }
      if (!truth) console.log("enter a valid ID please");
      break;

    case "title":
      let truth2 = true;
      for (let i = 0; i < booksRecord.length; i++) {
        if (title.toLowerCase() == booksRecord[i].title.toLowerCase()) {
          truth2 = true;
          let {
            id,
            title,
            author,
            category,
            publicationyear,
            isbn,
            totalcopies,
            availablecopies,
          } = booksRecord[i];
          console.log(
            `id:${id}, Title:${title}, author:${author}, category:${category}, publicationyear:${publicationyear}, isbn:${isbn}, totalcopies:${totalcopies}, availablecopies:${availablecopies}`,
          );
          break;
        }
        truth2 = false;
      }
      if (!truth2) console.log("enter a valid title please");
      break;

    case "author":
      let truth3 = true;
      for (let i = 0; i < booksRecord.length; i++) {
        if (author == booksRecord[i].author) {
          truth3 = true;
          let {
            id,
            title,
            author,
            category,
            publicationyear,
            isbn,
            totalcopies,
            availablecopies,
          } = booksRecord[i];
          console.log(
            `id:${id}, Title:${title}, author:${author}, category:${category}, publicationyear:${publicationyear}, isbn:${isbn}, totalcopies:${totalcopies}, availablecopies:${availablecopies}`,
          );
          break;
        }
        truth3 = false;
      }
      if (!truth3) console.log("enter a valid author name please");
      break;

    case "category":
      let truth4 = true;
      for (let i = 0; i < booksRecord.length; i++) {
        if (category.toLowerCase() == booksRecord[i].category.toLowerCase()) {
          truth4 = true;
          let {
            id,
            title,
            author,
            category,
            publicationyear,
            isbn,
            totalcopies,
            availablecopies,
          } = booksRecord[i];
          console.log(
            `id:${id}, Title:${title}, author:${author}, category:${category}, publicationyear:${publicationyear}, isbn:${isbn}, totalcopies:${totalcopies}, availablecopies:${availablecopies}`,
          );
          break;
        }
        truth4 = false;
      }
      if (!truth4) console.log("enter a valid category name please");
      break;

    default:
      console.log("Error, incompatable input...try again!");
  }
}

//searchBook("category", 4, "Dune", "Fredrich ", "Scifi");

export function updateBook(
  id,
  Ntitle,
  Nauthor,
  Ncategory,
  Npublicationyear,
  Nisbn,
  Ntotalcopies,
  Navailablecopies,
) {
  let truth = true;
  for (let i = 0; i < booksRecord.length; i++) {
    if (id == booksRecord[i].id) {
      booksRecord[i].title = Ntitle;
      booksRecord[i].author = Nauthor;
      booksRecord[i].category = Ncategory;
      booksRecord[i].publicationyear = Npublicationyear;
      booksRecord[i].isbn = Nisbn;
      booksRecord[i].totalcopies = Ntotalcopies;
      booksRecord[i].availablecopies = Navailablecopies;
      console.log("Updated succuesfully");
      truth = true;
      break;
    }
    truth = false;
  }
  if (!truth) console.log("Enter a valid ID number please");
}

//updateBook(6, "v", "v", "v", "v", 2001, 1234567, 2,2);

export function deleteBook(id) {
  let truth = true;
  for (let i = 0; i < booksRecord.length; i++) {
    if (id == booksRecord[i].id) {
      booksRecord.splice(i, 1);
      truth = true;
      console.log("Deleted successfully");
      break;
    }
    truth = false;
  }
  if (!truth) console.log("Enter a valid Id number please");
}

//deleteBook(0);
