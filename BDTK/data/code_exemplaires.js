// DECLARATION DES VARIABLES
// Les valeurs seront utilisées pour créer un exemplaire
    var Exemplaire = new Map();
    let tabLocal = [];
    var valeurCle = "";
    var valAuteur = "";
    var valSerie = "";


//                          *****************    MES FONCTIONS     **************
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
            for (let j = 1; j <= 3; j++) {
                valeurCle = tliste_bd[i][0]; // NUMERO DE LA CLE (reste à ajouter le titre)
                valAuteur = tliste_bd[i][1].idAuteur; // ID DE L'AUTEUR (reste à ajouter le nom)
                valSerie = tliste_bd[i][1].idSerie; // ID DE LA SERIE (reste à ajouter le nom)

                codeExemplaire = (k < 10) ? "A00" + k : "A0" + k;
                // Création d'un exemplaire avec l'attribution de son code
                // Initialise la disponibilité à disponible si k est impair
                if (k % 2 !== 0) {
                    Exemplaire.set(cle, {
                        codeExemplaire: codeExemplaire,
                        titre: albums.get(valeurCle).titre,
                        Auteur: auteurs.get(valAuteur).nom,
                        Serie: series.get(valSerie).nom,
                        Emprunteur: "Numéro adhérent : " + k + " ",
                        disponibilite: true ,
                    });
                } else {
                    // Initialise la disponibilité à disponible si k est pair
                    Exemplaire.set(cle, {
                        codeExemplaire: codeExemplaire,
                        titre: albums.get(valeurCle).titre,
                        Auteur: auteurs.get(valAuteur).nom,
                        Serie: series.get(valSerie).nom,
                        Emprunteur: "",
                        disponibilite: false
                    });
                }
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
            tabLocal.push(element); // ajout de l'élément au tableau 
      }
    });
    return tabLocal; 
   };


//                         ******************* PROGRAMME PRINCIPALE **************
creerMapExemplaires(); 
let exemplaireStorage = remplirNew();   
console.log(exemplaireStorage)

// *******************  Vérifie si le locale storage à déja été créée dans la session 
if (!exemplaireStorage){ localStorage.setItem("exemplaires", JSON.stringify(Array.from(exemplaireStorage))); } 

// Je décommente la ligne suivant pour réinitialiser le storage avec le tableau de base.
//localStorage.setItem("exemplaires", JSON.stringify(Array.from(exemplaireStorage))); 

   