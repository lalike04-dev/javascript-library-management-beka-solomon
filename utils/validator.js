 function bookvalidator(
  booksRecord,
  id,
  title,
  isbn,
  totalcopies,
  availablecopies,
) {
  let truth = true;
  for (let i = 0; i < booksRecord.length; i++) {
    if (booksRecord[i].id === id) {
      console.log("Error, Id already exists!");
      truth = false;
      break;
    }
    if (booksRecord[i].isbn == isbn) {
      console.log("Error, ISBN already exists");
      truth = false;
      break;
    }
  }
  if (totalcopies <= 0 || availablecopies < 0) {
    console.log("Attention, number of books cannot be negative or zero!");
    truth = false;
  }
  if (title == null) {
    console.log("Attention, a book's title cannot be null!");
    truth = false;
  }
  if (truth) console.log("validation successful!");
}
//console.log(booksRecord);

//bookvalidator(booksRecord, 0, "rd", 876466478, 2, 0);
 function membervalidator(memberRecord, id, email){
  let truth=true;
  for(let i=0; i < memberRecord.length; i++){
    if(memberRecord[i].id==id){
      console.log("Error, Id already exists!");
      truth=false;
      break;
    }
    if(memberRecord[i].email==email){
      console.log("Error, email already exists!");
      truth=false;
      break;
    }
  }
  if(email==null){
    console.log("Error, email cannot be null!");
    truth=false;
  }
  if(truth)
    console.log("Verification Successful!");

}

import { memberRecord } from '../data/members.js';
membervalidator(memberRecord, 7, "netsi73@gmail.com");