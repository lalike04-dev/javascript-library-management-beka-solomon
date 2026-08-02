/* import { booksRecord } from "../data/books.js"; */

import { booksRecord } from "../data/books";

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

export function searchBook(choice, id, title, author, category){
    switch(choice.toLowerCase()){
        case "id":
            for (let i=0; i<booksRecord.length; i++){
                if(id==booksRecord[i].id){
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
                console.log(`id:${id}, Title:${title}, author:${author}, category:${category}, publicationyear:${publicationyear}, isbn:${isbn}, totalcopies:${totalcopies}, availablecopies:${availablecopies}`,);
            }
        }
        break;

        case "title":
            for (let i=0; i<booksRecord.length; i++){
                if(title==booksRecord[i].title){
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
                console.log(`id:${id}, Title:${title}, author:${author}, category:${category}, publicationyear:${publicationyear}, isbn:${isbn}, totalcopies:${totalcopies}, availablecopies:${availablecopies}`,);
            }
        }
        break;

        case "author":
            for (let i=0; i<booksRecord.length; i++){
                if(author==booksRecord[i].author){
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
                console.log(`id:${id}, Title:${title}, author:${author}, category:${category}, publicationyear:${publicationyear}, isbn:${isbn}, totalcopies:${totalcopies}, availablecopies:${availablecopies}`,);
            }
        }
        break;
    
    }
}