// conditional flow

// IF Statement

let age=20;
if(age >=18){
    console.log("vote de sakta hai")}

// if-else statement

let experience=30;
if(experience>=25){
    console.log("Your Pramotion");
} if(experience<=20 ){
    console.log("Your Pramotion");
}
else{ 

    console.log("Not pramotion");
}

// if...elseif statement

let marks=70;
if(marks>=90){
    console.log("Grade A");

}else if(marks>=60){
    console.log("Grade B");
}else if (marks >=45){
    console.log("Grade C");
}else {
    console.log("Fail");
}

// Neste if 
let mark=75;
let IdCard=true;
if (mark >=82){
    console.log("Pass Hai");
    if(IdCard){
        console.log("IdCard Hai - Andar Aane do");
    } else {
        console.log("Pass Hai par IdCard Nahi Hai");
    }
} else {
    console.log("Pass Nahi Hai");
}

  

// switch statement

let day=5;
switch(day){
case 1:
    console.log("monday");
    break
case 2:
    console.log("Tuesday");
    break;
case 3:
    console.log("Wednesday");
    break;
case 4:
    console.log("Thursday");
    break;
case 5:
    console.log("Friday");
    break;
default:
    console.log("Other Day");

}
// ternary statement

 let AGE=30;
 let result = (AGE >=25)? "Vote De Sakte ho": "Vote Nahi De Sakte Ho";
 console.log(result);

 let Age = 16;
let Result = (Age <= 18) ? "Minor" : "Adult";
console.log(Result);


// break & continue
for(let a=1; a<10; a++){
    if(a===8){
        break;
    }
    console.log(a);
}

// continue
for(let a=1; a<10; a++){
    if(a===5){
        continue;
    }
    console.log(a);
}

// function

function checkAge(age){
    if(age>=18){
        console.log("You are eligible");
    } else{
        console.log("Not eligible");
    }
} checkAge(15);
    
function greet(name){
    if(name){
        console.log("Hello,${name}");
    } else{
        console.log("Hello:stranger");
    }
} greet("Sunny");

function greet(Hello){
    if(Hello){
        console.log("How Are You");
    } else{
        console.log("Who Are You");
    }
} 
