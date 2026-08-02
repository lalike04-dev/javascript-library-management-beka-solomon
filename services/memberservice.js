//import { memberRecord } from "../data/members.js";

export function addBook(
  id,
  firstName,
  lastName,
  email,
  phone
) {
  let insert = {
    id: id,
    firstName: firstName,
    lastName: lastName,
    email: email,
    phone: phone
  };
  memberRecord.push(insert);
}

/* addBook(7, "tick tack", "henesey", "fiction@gmail.com", 2015);
console.log(memberRecord); */