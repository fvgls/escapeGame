<?php
// Connexion a la BDD
$serveur = 'localhost';
$user = 'root';
$mdp = 'root';
$bdd = 'escape_game';

$link = mysqli_connect($serveur, $user, $mdp, $bdd);
mysqli_set_charset($link, "utf8");

  // Test
if (!$link) {
  die('Erreur de connexion');
} else {
  //echo("Connexion reussi");
}

//Methode de retour de l objet
if (isset($_POST["id"])) {
    // Initialisation
  $id = $_POST["id"];
  $data = [] ;
    // Requete SQL
  $sql = "SELECT * FROM objet WHERE id=".$id ;
  $result = mysqli_query($link,$sql);
    // Recuperation des resultats
  while($ligne= mysqli_fetch_assoc($result)){
    $data = $ligne ;
  }
    // Retour en JSON reconnaissant les integer
  echo json_encode($data, JSON_NUMERIC_CHECK );
}

// Methode de recuperation des 10 meilleurs scores
if (isset($_POST["idScore"])) {
    // Initialisation
  $idScore = $_POST["idScore"];
  $data2 = [] ;
    // Requete SQL
  $sql2 = "SELECT * FROM score ORDER BY temps ASC LIMIT 10" ;
  $result2 = mysqli_query($link,$sql2);
    // Recuperation des resultats
  while($ligne2= mysqli_fetch_assoc($result2)){
    $data2[] = $ligne2 ;
  }
    // Retour en JSON reconnaissant les integer
  echo json_encode($data2, JSON_NUMERIC_CHECK );
}


// Methode d'insertion d un score dans la BDD
if ((isset($_POST["ps"]))) {
    // Initialisation
  $ps = $_POST["ps"];
  $score = $_POST["score"];
    // Requete SQL
  $sql3 = "INSERT INTO score(pseudo,temps) VALUES ('$ps', $score)" ;
  $result3 = mysqli_query($link,$sql3);
    // Test de la realisation
  if ($result3){
    echo("Successfully inserted");
  }else {
    echo("Insertion failed");
  }
}

?>
