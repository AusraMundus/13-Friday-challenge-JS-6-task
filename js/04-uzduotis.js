/*
4. 
Parašykite programą, kuri suskaičiuotų , kiek duotas skaičius num turi lyginių ir nelyginių skaitmenų . 
@param {number} num 
@example: 63258 => ‘3 skaičiai lyginiai, 2 nelyginiai’
*/

/*let num = 63258;
output = [];
sNum = num.toString();*/

//1. Skaiciu paversti i stringa
//2. Nustatyti lyginius ir nelyginius
//3. Isrinkti lyginius ir nelyginius skaicius

function number (num) {
    let skaiciuSeka = num.toString(); // skaiciu seka paverciam i stringa
    let even = 0; // lyginiai
    let odd = 0; // nelyginiai
    for (let i = 0; i < skaiciuSeka.length; i++) { // sukam per visus skaicius
        if (skaiciuSeka[i] % 2 === 0) { // jei lyginiai, atiduok visus lyginius
            even++;
        } else { // jei nelyginiai, atiduok visus nelyginius
            odd++;
        }
    }
    return (num + ' -> ' + even + ' skaiciai lyginiai, ' + odd + ' nelyginiai.');
}

console.log(number(63258));