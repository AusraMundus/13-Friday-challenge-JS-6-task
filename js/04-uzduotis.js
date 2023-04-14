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
    let tekstas = num.toString();
    let even = 0;
    let odd = 0;
    for (let i = 0; i < tekstas.length; i++) {
        if (tekstas[i] % 2 === 0) {
            even++;
        } else {
            odd++;
        }
    }
    return (num + ' -> ' + even + ' skaiciai lyginiai, ' + odd + ' nelyginiai.');
}

console.log(number(63258));