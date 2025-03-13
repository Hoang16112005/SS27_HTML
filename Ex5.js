function splitArray(a, n){
    let a1 = a.splice(0, n);
    let a2 = a.splice(0, n);
    let a3 = a.splice(0, n);
    let a4 = a.splice(0, n);
    console.log(a1, a2, a3, a4);
}

let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let n = 3;
let smallArray = splitArray(a, n);
console.log(smallArray);


