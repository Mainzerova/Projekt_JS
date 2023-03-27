document.write("zadání příkladu:")
let a = document.getElementById("a").value;




function vypocetObsahuCtverce(a) {
    var obsah = a * a;
    return obsah;
  }

var obsah = vypocetObsahuCtverce(a);

console.log("Obsah ctverce se stranou " + a + " je " + obsah + " cm^2.");




// Získání vstupní hodnoty od uživatele
let strana = prompt("Zadej délku strany čtverce:");

// Převod vstupní hodnoty na číslo
strana = parseFloat(strana);

// Výpočet obsahu čtverce
let obsah = strana * strana;

// Vypsání výsledku
console.log("Obsah čtverce o délce strany " + strana + " je " + obsah);
