    // DECLARATION DES VARIABLES 
        // Les valeurs seront utilisé pour créer un exemplaire
        var Exemplaire = new Map (); 
        var  valeurCle = "";
        var  valAuteur = "";
        var  valSerie = "";
        var exemplaireBd = "";

    let MapExemplaire = creerMapExemplaires();

    // *********** MES FONCTIONS **************
 
    /**
     * Le programme me permet de créer un code exemplaire à chaque boucle et ainsi de créer et récuperer le titre, nom, série
     * @returns chaine de caractères
     */
    function creerMapExemplaires(){   
       for (let i=0 ; i<=29 ;i++){
            valeurCle = tliste_bd[i][0]; // NUMERO DE LA CLE ( reste à ajouter le titre)
            valAuteur = tliste_bd[i][1].idAuteur; // ID DE L'AUTEUR (reste à ajouter le nom)
            valSerie = tliste_bd[i][1].idSerie; // ID DE LA SERIE (reste à ajouter le nom)

            let codeExemplaire = 0;
            codeExemplaire = (i < 10) ? "A00" + i : "A0" + i;

            // Création d'un exemplaire avec l'attribution de son code
            exemplaireBd = Exemplaire.set(valeurCle,{codeExemplaire: codeExemplaire , titre: albums.get(valeurCle).titre, Auteur: auteurs.get(valAuteur).nom, Serie: series.get(valSerie).nom});

        }  return exemplaireBd;
    }

//console.log(Exemplaire.get("1").Serie);
//console.log(Exemplaire.get("1").codeExemplaire) // Je controle est affiche un code exemplaire
// console.log(Exemplaire.get("1").titre) // Je controle est affiche le nom
// console.log(Exemplaire.get("1").Auteur) // Je controle est affiche l'auteur

// console.log(Exemplaire);
// console.log(Exemplaire.get("6").codeExemplaire) // Je controle est affiche un code exemplaire
// console.log(Exemplaire.get("6").titre) // Je controle est affiche le nom
// console.log(Exemplaire.get("6").Auteur) // Je controle est affiche l'auteur


