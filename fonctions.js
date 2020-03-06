
// Methode de creation du marker
function createMarker(id,mapEurope,couche){
    // Declaration des variables
  var recupere = false ;

    // Requete AJAX
  var ajax = new XMLHttpRequest();
  ajax.open('POST','escape.php');
  ajax.setRequestHeader('Content-type','application/x-www-form-urlencoded');
  ajax.addEventListener('load',  function () {
      //Recuperation resultats
    var result = JSON.parse(ajax.response) ;
    console.log(result);
    var inv2 = result.needed;
    console.log(inv2);

      // Creation marqueurs
    var myIcon = L.icon({
      iconUrl: './img/' + result.nom + '.png',
      iconSize: [result.tailleX,result.tailleY],
      popupAnchor: [result.ancreX,result.ancreY],
    });
    var mark = new L.marker([result.lat, result.lng], {icon: myIcon});

     // Gestion affichage du marker a un niveau de zoom donne
    mapEurope.on('zoomend', function() {
      if ((mapEurope.getZoom() < result.zoom) && (!recupere)){
        couche.removeLayer(mark);
      }
      else {
        couche.addLayer(mark);
      }
    });

      // Gestion du click (disparition ou affichage du popup)
    if (!(result.type === "recuperable")) {
        // Objet non recuperable donc affichant un message
      mark.bindPopup(result.indice);
    }
    else {
        // Objet recuperable, n affichant pas un message mais allant dans l inventaire
      mark.on('click', function(){
        mapEurope.removeLayer(couche);  // On efface l'objet
        document.getElementById('inventaire1').innerHTML += '<img src="img/'+result.nom+'.png" alt="Photo de ' + result.nom +' " id="'+ result.nom +'"class= "objtrouve" />';

        // jQuery selectionner img dans l'inventaire
        $('#inventaire1 img').click(function(){
          var sel = "";
          if($(this).is('.selected')){
            console.log("deja selectionner");
            $('.selected').removeClass('selected');
          }else{
            $('.selected').removeClass('selected'); // removes the previous selected class
            $(this).addClass('selected'); // adds the class to the clicked image
          }
        });

        // On l ajoute dans l inventaire
        recupere = true ; // On a recupere l objet, on le dit
        console.log("Objet" + result.nom + " recupere");
      });
    }

    // Objets bloques par un autre
    if ((result.type === "objblocked")) {
      mark.on('click', function(){
          // Initialisation
        var objetselectionne = $('#inventaire1').find('.selected').attr('id'); //l'image selectionner dans l'inventaire
        var besoin = result.needed; // de quel objet on a besoin
        if (besoin = objetselectionne){  // Si c est le bon objet
          console.log("yes, l'objet nécéssaire est dans l'inventaire");
            // On cree la couche d acceuil du nouveau marker et on le cree
          var couchesuite = new L.layerGroup();
          createMarker(result.id + 1,mapEurope,couchesuite);
            // On retire l ancienne marker
          mapEurope.removeLayer(couche);
            // On retire l objet debloquant de l inventaire
          document.getElementById('inventaire1').innerHTML = '';
        }
        else {
          console.log("no, l'objet nécéssaire n'est pas dans l'inventaire");
        }
      });
    }

    // Gestion du changement d icone une fois debloque
    if (result.nom.indexOf(2) !== -1){  // Si l'objet chargé est le remplaçant du 1
        // On l ajoute a la carte
      couche.addLayer(mark);
      mapEurope.addLayer(couche);
      mark.bindPopup(result.indice).openPopup();
    };

    // Si on cree le premier objet de la carte (ie id = 1)
    if (result.id == 1){
      couche.addLayer(mark);
      mark.bindPopup(result.indice).openPopup(); // Pour afficher le popup des le chargement de la carte
    };

    // Si on est a l objet final => on veut que son popup s affiche des son chargement
    if (result.id == 5){
      mark.bindPopup(result.indice).openPopup();
    };
  });
  ajax.send("id=" + id);
}
