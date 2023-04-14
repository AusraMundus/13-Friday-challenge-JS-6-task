/*
6. 
Sugeneruokit atsitiktinių reikšmių masyvą, masyvo elementų skaičius 30, Masyvo elementų reikšmės nuo 1 iki 10. Tai yra klasės mokinių vidurkiai. Rasti geriausiai besimokantį ir blogiausiai.
*/

function minMaxVidurkiai () { // nenurodom, nes atsitiktines reiksmes
    vidurkiai = []; // atsitiktiniu reiksmiu masyvas
    for (let i = 0; i < 30; i++) { // sukam iki 30, nes masyvo elementų skaičius 30
        vidurkiai.push(Math.floor(Math.random() * 10) + 1); // ??? kodel
    }
    let max = Math.max(...vidurkiai); // max pazymis is visu
    let min = Math.min(...vidurkiai); // min pazymis is visu
    return 'Mokiniu vidurkiai: ' + vidurkiai + ' Auksciausias lygu:' + max + ' Zemiausias lygu: ' + min;
}
console.log(minMaxVidurkiai());
