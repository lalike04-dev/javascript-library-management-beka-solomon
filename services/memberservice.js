import { memberRecord } from "../data/members.js";
import { borrowRecord } from "../data/borrowed-books.js";
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
    id: id,
    firstname: firstName,
    lastname: lastName,
    email: email,
    phone: phone
    } = memberRecord[i];
    console.log(
      `Member${i}->id:${id}, First name:${firstName}, last name:${lastName}, email:${email}, phone:${phone}`
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
            phone: phone
            } = memberRecord[i];
          console.log(
            `id:${id}, fisrtName:${firstName}, lastName:${lastName}, email:${email}, phone:${phone}`
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
            if (firstname.toLowerCase() == memberRecord[i].firstname.toLowerCase()) {
          truth2 = true;
          let {
            id: id,
            firstname: firstName,
            lastname: lastName,
            email: email,
            phone: phone
            } = memberRecord[i];
          console.log(
            `id:${id}, fisrtName:${firstName}, lastName:${lastName}, email:${email}, phone:${phone}`
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
            memberRecord[i].firstname=firstname;
            memberRecord[i].lastname=lastname;
            memberRecord[i].email=email;
            memberRecord[i].phone=phone;
            console.log("Updated Succesfully!");
          break;
        }
        truth = false;
      }
      if (!truth) console.log("Member doesnt exist");
    }
//updateMember(9,"feta","belu","feta@gmail.com",null);

export function deleteMember(id) {
  let truth = true;
  for (let i = 0; i < memberRecord.length; i++) {
    if (id == memberRecord[i].id) {
    for(let j=0; j<borrowRecord.length; j++){
      if(borrowRecord[j].hasreturned){
      memberRecord.splice(i, 1);
      truth = true;
      console.log("Deleted successfully");
      break;}
    truth = false;
    }
    }
    }
  if (!truth) console.log("Member doesnt exist!");
}
//deleteMember(6);
