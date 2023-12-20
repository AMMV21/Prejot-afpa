// DECLARATION DES VARIABLES
// Les valeurs seront utilisées pour créer un exemplaire
    var Exemplaire = new Map();
    var DisponibiliteBD = new Map();
    let tExemplaires = [];
    let tDisponibiliteBD = [];
    var valeurCle = "";
    var valAuteur = "";
    var valSerie = "";
    let nbr_dispo = 0;
    /**
     * La fonction crée 3 exemplaires de chaque BD et leur assigne un CODE EXEMPLAIRE unique
     * et une disponibilité true ou false
     * @returns Map
    */

        function creerMapExemplaires() {
            let k = 0;
            let codeExemplaire = 0;
            let cle = 0;
        
            for (let i = 0; i <= 29; i++) {
                for (let j = 0; j <= 2; j++) {
                    valeurCle = tliste_bd[i][0];
                    valAuteur = tliste_bd[i][1].idAuteur;
                    valSerie = tliste_bd[i][1].idSerie;
        
                    codeExemplaire = (k < 10) ? "A00" + k : "A0" + k;
        
                    // Création d'un exemplaire avec l'attribution de son code
                    Exemplaire.set(cle, {
                        codeExemplaire: codeExemplaire,
                        titre: albums.get(valeurCle).titre,
                        Auteur: auteurs.get(valAuteur).nom,
                        Serie: series.get(valSerie).nom,
                        Emprunteur: "",
                        disponibilite: true,
                    });
        
                    // Mettre à jour la disponibilité dans la carte DisponibiliteBD
                    DisponibiliteBD.set(albums.get(valeurCle).titre, { disponibilite: 3 });


        
                    k++;
                    cle++;
                }
            }
        }
        
        
   // A partir de ma map je rempli un nouveau tableau qui contient des uniquement les objet 
   // cela facilite la l'accés au données du tableau
   const remplirNew = function () {

        Exemplaire.forEach(element => {  // Parcouri chaque élément du tableau "Exemplaire".
        if (typeof element === 'object' && element !== null) { // Vérifier si l'élément est un objet et non null.
                tExemplaires.push(element); // ajout de l'élément au tableau 
        }
        });
   };


    creerMapExemplaires(); 
    remplirNew();   

    // *******************  Vérifie si le locale storage à déja été créée dans la session 
    if (!localStorage.exemplaires){ localStorage.setItem("exemplaires", JSON.stringify(Array.from(tExemplaires))); }
    if (!localStorage.disponibilite){ localStorage.setItem("disponibilite", JSON.stringify(Array.from(DisponibiliteBD))); }
   
   // Je décommente la ligne suivant pour réinitialiser le storage avec le tableau de base.

    // localStorage.setItem("exemplaires", JSON.stringify(Array.from(tExemplaires))); 
    // localStorage.setItem("disponibilite", JSON.stringify(Array.from(DisponibiliteBD))); 


   let exemplaireLocalStorage = JSON.parse(localStorage.getItem('exemplaires'));
   let disponibiliteBDStorage = JSON.parse(localStorage.getItem('disponibilite'));
    