
// Declarations des variables
var codeBon = 2010 ;
var t0 = performance.now();


// Methode de validation du code
function validation(event){

    //Recuperation du code entre par le joueur
  var num1 = document.getElementById("num1").value * 1000;
  var num2 = document.getElementById("num2").value * 100;
  var num3 = document.getElementById("num3").value * 10;
  var num4 = document.getElementById("num4").value * 1;

  var code = num1 + num2 + num3 + num4 ;

  console.log("bouh", code);

    // Test du code
  if (codeBon == code) {
      // Gestion du score
    t1 = performance.now() ;
    var score = Math.floor(t1-t0);

      // Afficher le container ouvert
    mapEurope.removeLayer(coucheContainer);
    var coucheCopain = new L.layerGroup();
    createMarker(5,mapEurope,coucheCopain);
    mapEurope.addLayer(coucheCopain);

      // Alerte pour donner le score et récupérer le pseudo
    var pseudo = prompt("Bravo ! Tu as libéré Marty, ton score est " + score + "\n entre ton pseudo pour qu'il soit enregistré :)","unknown");
    console.log(pseudo);

      // Ajout dans la BDD du score
    addRow(pseudo,score);
  }
  else {
    alert("Mauvaise réponse :( Try again ;)");
  }
}


// Méthode d'ajout dans la BDD
function addRow(npseudo,score){
    // Creation de l envoi AJAX
  var data = "ps= " + npseudo + "&& score=" + score ;
    // Requete AJAX
  var ajax2 = new XMLHttpRequest();
  ajax2.open('POST', 'escape.php');
  ajax2.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  ajax2.addEventListener('load',  function () {
      var result = ajax2.response;
      console.log(result);
    });
  ajax2.send(data);
}
