//import { memberRecord } from "../data/members.js";

import { memberRecord } from "../data/members.js";

export function addMember(
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

/* addMember(7, "tick tack", "henesey", "fiction@gmail.com", 2015);
console.log(memberRecord); */

export function viewAllMembers() {
  for (let i = 0; i < memberRecord.length; i++) {
    let {
    id,
    firstName,
    lastName,
    email,
    phone
    } = memberRecord[i];
    console.log(
      `Member${i}->id:${id}, First name:${firstName}, last name:${lastName}, email:${email}, phone:${phone}`
    );
  }
}
/* viewAllMembers(); */