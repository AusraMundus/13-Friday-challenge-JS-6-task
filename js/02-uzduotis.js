/*
2. Parašyti programą kuri atspausdintu visus Armstrongo skaičius nuo 100 iki 999. Armstongo skaičiaus pvz ABC = A3 + B3 + C3 (visų atskirų skaitmenų pakeltų skaičiaus skaitmenų kiekio laipsniu suma.)
*/

function armstrongNum(n1, n2) {
    let numbersArm = [];
    for (let i = n1; i <= n2; i++) {
        const digits = String(i).split('').map(Number);
        if (digits.reduce((a, b) => a+(b**digits.length),0)===i) {
            numbersArm.push(i);
        }
    }
    return numbersArm;
}
console.log(armstrongNum(100, 999));