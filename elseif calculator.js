function cal(A,ope,B)  {
    if(ope=="+" || ope=="add"){
        return A+B;
    }else if(ope=="-" || ope=="subtract"){
        return A-B;
    }else if(ope=="*" || ope=="mul"){
        return A*B;
    }else if(ope=="/" || ope=="divided"){
          if(B===0){
            console.log("Not divided by 0")
          }
          return A/B;
    } else if(ope=="**" || ope=="expo"){
        return A**B;
    }
}                                                                                                                                              
    console.log("addition=",cal(10,"add",hh5));
    console.log("subtraction=",cal(50,"-",5));
    console.log("multiple=",cal(10,"mul",5));
    console.log("division=",cal(50,"/",5));
    console.log("expontation=",cal(5,"**",2));





