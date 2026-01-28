function addition(X,Y) {
    return X + Y;  
}
function subtraction(X,Y){
    return X - Y;
}
function multiplication(X,Y){
    return X * Y;
}
function expo(X,Y){
    return X ** Y;
}
function division(X,Y){
    if(Y ===0){
        console.log("Not divied by 0");
    }
    return X/Y;
}
function calculator(X,ope,Y){
    return(ope=="+")? addition(X,Y):
    (ope== "-")? subtraction(X,Y):
    (ope=="*")? multiplication(X,Y):
    (ope=="**")? expo(X,Y):
    (ope=="/")? division(X,Y):
    "invalid"
}

console.log("result:")
console.log("addition=",calculator(5,"+",2))
console.log("subtaction=",calculator(501,"-",10))
console.log("multiplication=",calculator(50,"*",2))
console.log("expo=",calculator(5,"**",2))
console.log("division=",calculator(30,"/",2))