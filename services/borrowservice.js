/* import { booksRecord } from "../data/books.js";
import { memberRecord } from "../data/members.js";
import { borrowRecord } from "../data/borrowed-books.js"; */
export function borrowBook(memberid, bookid, date) {
  let truth = true;
  let truth2 = true;
  let i = 0;
  let j = 0;
  for (; i < booksRecord.length; i++) {
    if (bookid == booksRecord[i].id) {
      truth = true;
      //console.log("book found")
      break;
    } else truth = false;
  }
  for (; j < memberRecord.length; j++) {
    if (memberid == memberRecord[j].id) {
      truth2 = true;
      //console.log("member found")
      break;
    } else truth2 = false;
  }
  if (truth && truth2) {
    let availablebook= booksRecord.find(book=> {
        return book.availablecopies>0 && book.id==bookid})
        if(availablebook!=[] && availablebook!= undefined){
            let check=borrowRecord.find(mem=>{
                return mem.bookid==bookid && mem.memberid==memberid})
                if(check!=[] && check!=undefined){
                    console.log(2)
                    if(check.hasreturned){
                        //console.log(23)
                        borrowRecord.push({
                            memberid:memberid,
                            bookid:bookid,
                            borrowdate:date,
                            hasreturned:false
                            })
                        console.log("Borrow Successful!");
                    }
                    else console.log("Member has not returned thier book yet!");
                }
                else{
                    //console.log(21)
                    borrowRecord.push({
                            memberid:memberid,
                            bookid:bookid,
                            borrowdate:date,
                            hasreturned:false
                            })
                        console.log("Borrow Successful!");
                }
        }
        else console.log("book aint available!");

  }
}
    //borrowBook(3, 2, "2013-12-12");
/* console.log(booksRecord.find(mem=> {
    return mem.id==6 && mem.availablecopies>0})) */

export function returnBook(memberid, bookid){
    let availableborrow=borrowRecord.find(borrowBook=>{
        return borrowBook.bookid==bookid && borrowBook.memberid==memberid
    })
    if(availableborrow!=[] && availableborrow!=undefined){
        if(!availableborrow.hasreturned){
            availableborrow.hasreturned=true;
            console.log("Book Returned Succesfully!")
        }
        else console.log("Book already returned!")
    }
    else console.log("Borrow record does not exist!")
}

//returnBook(3, 5);