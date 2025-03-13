let a = [];

let n = parseInt(prompt("Enter amount of element: "));

function createArray(){
    for(let i = 0; i < n; i++){
        let num = parseFloat(prompt("Enter digit " + i));
        a.push(num);
        console.log(num);
    }
}

function avarage(){
    let aver = a.reduce((acc, curr) => acc + curr);
    console.log(aver / n);
}

function greatestEven(){
    let great = a.filter((digit) => digit % 2 == 0);
    
    console.log(Math.max(...great));
}

function smallestOdd(){
    let small = a.filter((digit) => digit % 2 != 0);
    
    console.log(Math.min(...small));
}


do {
    choice = +parseInt(prompt(`       1. Nhập danh sách số nguyên.
       2. Tính trung bình các số. 
       3. Tìm số chẵn lớn nhất.
       4. Tìm số lẻ nhỏ nhất.
       5. Exit
       `))

    switch(choice){
        case 1:
            createArray();
            break;

        case 2:
            avarage();
            break;

        case 3:
            greatestEven();
            break;

        case 4:
            smallestOdd();
            break;
    }
}while(choice != 5);