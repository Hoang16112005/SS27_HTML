function searchLost(totalArray, totalCurrentElement){
    return totalArray - totalCurrentElement;
}

let a = [1, 2, 4, 5];
let n = a.length + 1;
let totalArray = (n * (n + 1)) / 2;
let totalCurrentElement = 0;
for (let i = 0; i < a.length; i++){
    totalCurrentElement += a[i];
}

let find = searchLost(totalArray, totalCurrentElement);
console.log(find);