let pi = 3.14;


function circleS(){
    let r = parseFloat(prompt("Enter radius: "));
    return r*r*pi;
}

function circleP(){
    let r = parseFloat(prompt("Enter radius: "));
    return 2*r*pi;
}

function rectangleS(a, b){
    return a*b;
}

function rectangleP(a, b){
    return (a+b)*2;
}

do {
    let choice = +parseInt(prompt(`        1. Tính diện tích hình tròn
        2. Tính chu vi hình tròn
        3. Tính diện tích hình chữ nhật
        4. Tính chu vi hình chữ nhật
        5. Thoát
        `))

    switch(choice){
        case 1: 
            let dientichtron = circleS();
            alert(dientichtron);
            break;

        case 2:
            let chuvitron = circleP();
            alert(chuvitron);
            break;

        case 3:
            a =+ parseFloat(prompt("Enter length: "));
            b =+ parseFloat(prompt("Enter width: "));
            let dientichhcn = rectangleS(a, b);
            alert(dientichhcn);

        case 4:
            a =+ parseFloat(prompt("Enter length: "));
            b =+ parseFloat(prompt("Enter width: "));
            let chuvihcn = rectangleP(a, b);
            alert(chuvihcn);

        default:
            alert("Invalid choice");
    }
}while(choice != 5);