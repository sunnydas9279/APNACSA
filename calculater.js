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
function calculator(X,operator,Y){
  switch(operator){
    case "+":
    return addition(X,Y);
     case "-":
        return subtraction(X,Y);
        case "*":
            return multiplication(X,Y);
            case "**":
            return expo(X,Y)
            case "/":
                return division(X,Y);
                default:
                    return "Invailed Number";

  }

  }
console.log("addition=",calculator(10,"+",5));
console.log("Subtraction=",calculator(50,"-",5));
console.log("multiplication=",calculator(20,"*",5));
console.log("Exponetiation=",calculator(10,"**",5));
console.log("division=",calculator(100,"/",5));
