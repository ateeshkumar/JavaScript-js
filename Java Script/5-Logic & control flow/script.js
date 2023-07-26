function calculator(a,b,operator){
    switch (operator) {
        case '+':
            console.log(a+b);
            break;
        case '-':
            console.log(a-b);
            break;    
        case '*':
            console.log(a*b);
            break;    
        case '/':
            console.log(a/b);
            break;   
        default:
            console.error("Not valid massege");
            break;
    }
}
calculator(2,4,'*');