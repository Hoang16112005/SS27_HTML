
let choice = 0;

function sum(a, b){
    return a + b;
}

function sub(a, b){
    return a - b;
}

function multi(a, b){
    return a * b;
}

function div(a, b){
    return a / b;
}

do{
    a = +parseInt(prompt("Enter a: "));
    b = +parseInt(prompt("Enter b: "));
    choice = +parseInt(prompt(`        1. Summary
        2. Subtraction
        3. Multiplication
        4. Division
        5. Exit
        Enter operation: `));
    switch(choice){
        case 1:
            let tong = sum(a, b);
            alert(tong);
            break;
        
        case 2:
            let hieu = sub(a, b);
            alert(hieu);
            break;

        case 3: 
            let tich = multi(a,b);
            alert(tich);
            break;

        case 4: 
        let thuong = div(a, b)
        alert(thuong);
        break;

        default:
        alert("Choice not in menu");
        break;
    }
}while(choice != 5);