/*
5. 
Žinomi kambario matmenys ilgis ir plotis. Reikia apskaičiuoti, kokią pinigų sumą reiks mokėti už plyteles, skirtas kambario grindims kloti, jei plytelių vieno kvadrato kaina yra 23 eurai. Plytelių reikia pirkti 5 proc. daugiau galimiems nuostoliams padengti. Plytelės supakuotos po 1.5m2 ir parduotuvės darbuotojai nesutinka ardyti pakuočių. Galima pirkti tik pilnas pakuotes.
*/

function plyteliuKaina (ilgis, plotis) {
    let plotas = ilgis * plotis * 1.05;
    const kvadratoKaina = 23;
    const pakuote = 1.5;
    let visoKaina = Math.ceil((plotas / pakuote)) * kvadratoKaina; // apvalinam iki virsaus
    return 'Už plyteles reikės mokėti: ' + visoKaina + ' eur';
}
console.log(plyteliuKaina(4, 3));