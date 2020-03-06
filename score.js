// Declarations des variables
var test = document.getElementById('score');


// Methode de creation de la table de score
function createScore(){
    // Requete AJAX
  var ajax = new XMLHttpRequest();
  ajax.open('POST', 'escape.php');
  ajax.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  ajax.addEventListener('load',  function () {
        // Recuperation de la reponse
      var result = JSON.parse(ajax.responseText);
      console.log(result);
      console.log(result.length);

        // Creation de la table en HTML
      var eTable="<tr> <th>Rang</th> <th>Pseudo</th> <th>Score</th> </tr>";
      for (var i = 0; i< result.length; i++){
        eTable += "<tr>";
        eTable += "<td>" + (i+1) + "</td>";
        eTable += "<td>" + result[i].pseudo + "</td>";
        eTable += "<td>" + result[i].temps + "</td>";
        eTable += "</tr>";
      }
      console.log(eTable);
        // Ajout a la page HTML
      test.innerHTML = eTable;
  });
  ajax.send("idScore=toto");
}


// Appel pour creation des chargement
createScore();
