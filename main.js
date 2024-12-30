// //declarations of functions
// function kafia(){
//     console.log(20)
// }
// //function call
// // kafia()


// //another function call

// function container(){
//     let name = "shukri"
//     return name
// }
// console.log(container())



// //function return

// function sum(){
//     let num1 = 10
//     let num2 = 20
//     let add = num1 +num2
//     return add
// }
// console.log(sum())



// //function with prameters

// function multiple(a, b){
//     return a*b
// }
// console.log(multiple(10, 10))



// // function with conditions
// let name = prompt("Enter your name: ");
// function pass(age){
//     if(age >= 18){
//         console.log(`${name} waa lagu ogolyahay`)
//     }
//     else{
//         console.log(`${name} waa yartahay`)
//     }
// }
// pass(prompt("enter your age"))

//assignment-1
let name = prompt("Enter your name: ");
let grade = prompt("Enter your grade: ");
function assignment(geade){
    if(grade >=90 && grade <=100){
        console.log(`${name} grade kaagu ${grade} waa Grade A  waa fiican tahy horey u soco `)
    }
    else if(grade >=80 && grade < 90){
        console.log(`${name} grade kaagu ${grade} waa Grade B  waa fiican tahy horey u dhacday `)
    }
    else if(grade >=70 && grade < 80){
        console.log(`${name} grade kaagu ${grade} waa Grade C  waa fiican tahy lkn waa inad dadaashaa `)
    }
    else if(grade >=60 && grade < 70){
        console.log(`${name} grade kaagu ${grade} waa Grade D  dadaabl badan la imoow `)
    }
    else if(grade >=0 && grade < 60){
        console.log(`${name} grade kaagu ${grade} nasiib xumo , class ka waa ka hartay `)
    }
    else{
        console.log(`${name} grade ${grade} grade  jira ma ahan!!!!!!!!! fadlan soo gali grade sax ah oo u dhaxeeya 0 ilaa 100 `)
    }
}
assignment()
