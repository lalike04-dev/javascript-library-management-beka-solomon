/* import { memberRecord } from "../data/members.js";
import { borrowRecord } from "../data/borrowed-books.js"; */
export function addMember(id, firstName, lastName, email, phone) {
  let insert = {
    id: id,
    firstName: firstName,
    lastName: lastName,
    email: email,
    phone: phone,
  };
  memberRecord.push(insert);
}

/* addMember(7, "tick tack", "henesey", "fiction@gmail.com", 2015);
console.log(memberRecord); */

export function viewAllMembers() {
  for (let i = 0; i < memberRecord.length; i++) {
    let {
      id: id,
      firstname: firstName,
      lastname: lastName,
      email: email,
      phone: phone,
    } = memberRecord[i];
    console.log(
      `Member${i}->id:${id}, First name:${firstName}, last name:${lastName}, email:${email}, phone:${phone}`,
    );
  }
}
/* viewAllMembers(); */

export function searchMember(choice, id, firstname) {
  switch (choice.toLowerCase()) {
    case "id":
      let truth = true;
      for (let i = 0; i < memberRecord.length; i++) {
        if (id == memberRecord[i].id) {
          truth = true;
          let {
            id: id,
            firstname: firstName,
            lastname: lastName,
            email: email,
            phone: phone,
          } = memberRecord[i];
          console.log(
            `id:${id}, fisrtName:${firstName}, lastName:${lastName}, email:${email}, phone:${phone}`,
          );
          break;
        }
        truth = false;
      }
      if (!truth) console.log("Member doesnt exist");
      break;

    case "firstname":
      let truth2 = true;
      for (let i = 0; i < memberRecord.length; i++) {
        if (
          firstname.toLowerCase() == memberRecord[i].firstname.toLowerCase()
        ) {
          truth2 = true;
          let {
            id: id,
            firstname: firstName,
            lastname: lastName,
            email: email,
            phone: phone,
          } = memberRecord[i];
          console.log(
            `id:${id}, fisrtName:${firstName}, lastName:${lastName}, email:${email}, phone:${phone}`,
          );
          break;
        }
        truth2 = false;
      }
      if (!truth2) console.log("Member doesnt exist!");
      break;

    default:
      console.log("Error, incompatable input...try again!");
  }
}
//searchMember("id", 9, "Melu");

export function updateMember(id, firstname, lastname, email, phone) {
  let truth = true;
  for (let i = 0; i < memberRecord.length; i++) {
    if (id == memberRecord[i].id) {
      truth = true;
      memberRecord[i].firstname = firstname;
      memberRecord[i].lastname = lastname;
      memberRecord[i].email = email;
      memberRecord[i].phone = phone;
      console.log("Updated Succesfully!");
      break;
    }
    truth = false;
  }
  if (!truth) console.log("Member doesnt exist");
}
//updateMember(9,"feta","belu","feta@gmail.com",null);

export function deleteMember(id) {
  let i = 0;
  let j = 0;
  let truth = true;
  let truth2 = true;
  for (; i < memberRecord.length; i++) {
    if (id == memberRecord[i].id) {
      truth = true;
      break;
    }
    truth = false;
  }

  for (; j < borrowRecord.length; j++) {
    if (id == borrowRecord[j].memberid) {
      truth = true;
      break;
    }
    truth = false;
  }
  if (truth && truth2) {
    if (borrowRecord[j].hasreturned) {
      memberRecord.splice(i, 1);
      console.log("Deleted Sucessfully");
    } else console.log("Member hasnt returned the borrowed book!");
  } else
    console.log("Member doesnt exist or member have not borrowed a book yet");
}
//deleteMember(2);
