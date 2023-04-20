/*
7. 
Pirmos lietuviškos litų monetos išėjo 1925 metais. Tai buvo 5, 2 ir 1 lito vertės sidabrinės monetos. Duotą pinigų sumą n litais pakeiskite nurodytomis monetomis, panaudojant kuo mažiau monetų.
Atsakymo galimas pvz: „Norint gauti n sumą litais, mums reikės n1 monetų po 5 lt, n2 monetų po 2 litus ir n3 monetų po 1 litą. Viso monetų N skaičius“.
*/

function monetos(pinigai) {
    visoMonetos = Math.abs(pinigai);
    let moneta5 = Math.floor(pinigai / 5); // dalijam pinigų sumą iš monetų po 5Lt, pvz. 13 / 5 -> 2 monetos po 5Lt (liko suma Lt)
    let moneta2 = Math.floor((pinigai - (moneta5 * 5)) / 2); // dalijam likusią pinigų sumą iš monetų po 2Lt, pvz. 13 - (2 * 5) / 2 -> 1 moneta po 2Lt
    let moneta1 = Math.floor(pinigai - (moneta5 * 5) - (moneta2 * 2)); // suskaiciuojam, kiek monetų po 1Lt, 13 - (2 * 5) - (1 * 2) -> 1 moneta po 1Lt
    return 'Norint gauti ' + visoMonetos + ' sumą litais, mums reikės ' + moneta5 + ' monetų po 5 litus ' + moneta2 + ' monetų po 2 litus ir ' + moneta1 + ' monetų po 1 litą.'
}

console.log(monetos(13));
console.log(monetos(58));