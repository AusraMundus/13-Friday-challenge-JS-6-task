/*
7. 
Pirmos lietuviškos litų monetos išėjo 1925 metais. Tai buvo 5, 2 ir 1 lito vertės sidabrinės monetos. Duotą pinigų sumą n litais pakeiskite nurodytomis monetomis, panaudojant kuo mažiau monetų.
Atsakymo galimas pvz: „Norint gauti n sumą litais, mums reikės n1 monetų po 5 lt, n2 monetų po 2 litus ir n3 monetų po 1 litą. Viso monetų N skaičius“.
*/

function monetos(pinigai) {
    visoLitai = Math.abs(pinigai);
    let litai5 = Math.floor(visoLitai / 5);
    let litai2 = Math.floor((visoLitai - litai5 * 5) / 2);
    let litai1 = Math.ceil(visoLitai - litai5 * 5 - litai2 * 2); // dalint is vieno prasmes nera
    return 'Norint gauti ' + visoLitai + ' suma litais, mums reikes ' + litai5 + ' monetu po 5 litus ' + litai2 + ' monetu po 2 litus ir ' + litai1 + ' monetos po lita'
}

console.log(monetos(14));