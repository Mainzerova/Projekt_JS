document.write("zadání příkladu:")
let a = document.getElementById("a").value;




function vypocetObsahuCtverce(a) {
    var obsah = a * a;
    return obsah;
  }

var obsah = vypocetObsahuCtverce(a);

console.log("Obsah ctverce se stranou " + a + " je " + obsah + " cm^2.");
