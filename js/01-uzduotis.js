/* 
1. Mokinys pradėjo spręsti namų darbus, kai elektroninis laikrodis rodė h1 valandų ir min1 minučių, o baigė, kai buvo h2 valandų ir min2 minučių. Parašykite programą, pagal kurią būtų randama, kiek laiko (valandų ir minučių) mokinys sprendė uždavinius. (Laikykite, kad mokinys uždavinius sprendė mažiau kaip parą).

*/

// laikrodis - skaiciuojam 12 valandu
// pradejo 09:15, baige 12:38
// pradejo 18:30, baige 06:20


function laikas (h1, m1, h2, m2) {
    let min1 = (h1 * 60) + m1; // pradzia, suvienodinam mata (paverciam i minutes)
    let min2 = (h2 * 60) + m2; // pabaiga
    let uztruko = 0;
    if (min2 < min1) { // vakarinis darbas
        uztruko = 720 - min1 + min2; // skaiciuojam laika nuo 00:00, 12 val=720min
    } else {
        uztruko = min2 - min1; // dieninis darbas
    }
    return Math.floor(uztruko/60)+':valandu, '+ uztruko%60 + ":minuciu." // is minuciu graziname valandas ir minutes, suapvalintus skaicius
}
console.log(laikas(9, 15, 12, 38));
console.log(laikas(6, 30, 6, 20));