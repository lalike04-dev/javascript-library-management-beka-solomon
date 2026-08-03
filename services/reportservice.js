import { booksRecord } from "../data/books.js";
import { borrowRecord } from "../data/borrowed-books.js";
import { memberRecord } from "../data/members.js";

export function libraryAnalytics(){
    let activeborrows=borrowRecord.filter(book=>book.hasreturned==false);
    let totalAvailableCopies=booksRecord.reduce((accumulator, currentvalue)=>{
        return accumulator + currentvalue.availablecopies
    },0);
    let totalBook=booksRecord.reduce((accumulator, currentvalue)=>{
        return accumulator + currentvalue.totalcopies;
    },0);
    let totalMembers=memberRecord.length;
    let totalcount=0;
    console.log(`Toatl amount of books is ${totalBook}`);
    console.log(`Total amount of available copies is ${totalAvailableCopies}`);
    console.log(`Total number of members in teh system is ${totalMembers}`);
    console.log(`Number of active borrows is ${activeborrows}`);
    console.log(`Report on unique titles is listed below`);

    for(let i=0;i< booksRecord.length;i++){
        let count=1;
        for(let j=0;j<booksRecord;j++){
            if(booksRecord[i].title==booksRecord[j].title){
                count++;
            }
        }
        totalcount+=count;
        console.log(`${booksRecord[i].title}: count ${count}`);
    }
    console.log(`Total unique titles are ${totalcount}`)
}
//libraryAnalytics();