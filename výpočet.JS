function computeArea() {
  // získání vstupní hodnoty z textového pole
  var sideLength = document.getElementById("side-length").value;
  
  // výpočet obsahu čtverce
  var area = sideLength * sideLength;
  
  // výstup výsledku
  document.getElementById("output").innerHTML = "Obsah čtverce je: " + area;
}

function kontrola() {
  // získání vstupní hodnoty z textového pole
  var kontrola = document.getElementById("kontrola").value;
  var sideLength2 = document.getElementById("side-length").value;
  
  // výpočet obsahu čtverce
  var area2 = sideLength2 * sideLength2;
  
  // výstup výsledku
  
  if (kontrola == area2) {
    document.getElementById("vysledek_kontroly").innerHTML = "Správně!";
    
  } else{
    document.getElementById("vysledek_kontroly").innerHTML = "Zkus to znova!";
  }
}

