// let obtainmark= prompt("Enter Obtain Mark");
// let totalmark= prompt("Enter Total Marks");
// let result=obtainmark/totalmark*100;
// alert(result+"%");


// function calculate(){
//     let totalMark=document.querySelector("#totalmarks").value;
//     let obtainMark=document.querySelector("#obtainMarks").value;

//     let result=obtainmark/totalmark*100;

//     // alert(result+"%");

//     document.querySelector("#result").innerHTML=`you have got ${result}%`


// }

function calculate(){

    let totalMarks=document.querySelector("#totalMarks").value ;
    let obtainedMarks=document.querySelector("#marksObtined").value ;
    
    let result= obtainedMarks*100/totalMarks;
    
    document.querySelector("#result").innerHTML=`You Have Got ${result}%`
    
    
    }