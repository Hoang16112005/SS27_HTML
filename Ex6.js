let a = [];
let n = parseInt(prompt("Enter amount of digit: "));
function checkArithmeticProgression(){
    for(let i = 0; i < n; i++){
        let newArray = parseInt(prompt("Enter digit "+ i));
        a.push(newArray);
    }

    let x = a[1] - a[0]; 
    let isArithmeticProgression = true; 

    for (let i = 1; i < n - 1; i++) {
        if (a[i + 1] - a[i] !== x) {
            isArithmeticProgression = false;
            break;
        }
    }

    if (isAP) {
        alert("Is Arithmetic Progression");
    } else {
        alert("Not Arithmetic Progression");
    }
}

checkArithmeticProgression();
