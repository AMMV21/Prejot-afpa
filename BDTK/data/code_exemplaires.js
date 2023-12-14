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
        let k = 0;
        let codeExemplaire = 0;
        let cle = 1;

        for (let i=0 ; i<=29 ;i++){
         let nbrExemplaire = Math.floor(Math.random() * 5) + 1;
 
             for ( let j=1 ; j<= nbrExemplaire ; j++) {
 
                 valeurCle = tliste_bd[i][0]; // NUMERO DE LA CLE ( reste à ajouter le titre)
                 valAuteur = tliste_bd[i][1].idAuteur; // ID DE L'AUTEUR (reste à ajouter le nom)
                 valSerie = tliste_bd[i][1].idSerie; // ID DE LA SERIE (reste à ajouter le nom)
                 
                 codeExemplaire = (k < 10) ? "A00" + k : "A0" + k;
                 // Création d'un exemplaire avec l'attribution de son code
                 exemplaireBd = Exemplaire.set(cle,{codeExemplaire: codeExemplaire , titre: albums.get(valeurCle).titre, Auteur: auteurs.get(valAuteur).nom, Serie: series.get(valSerie).nom});
                 k ++;
                 cle ++;
                 console.log("valeur de i = " + i);
                 console.log("valeur de j = " +j);
                 console.log("Valeur de K = " + k);
                 console.log("Nombre d'exemplaire = " + nbrExemplaire);
                }
            console.log("Fin de répétition création code exemplaire");
 
         }  return exemplaireBd;
     }
 
     console.log(exemplaireBd)

//console.log(Exemplaire.get("1").Serie);
//console.log(Exemplaire.get("1").codeExemplaire) // Je controle est affiche un code exemplaire
// console.log(Exemplaire.get("1").titre) // Je controle est affiche le nom
// console.log(Exemplaire.get("1").Auteur) // Je controle est affiche l'auteur

// console.log(Exemplaire);
// console.log(Exemplaire.get("6").codeExemplaire) // Je controle est affiche un code exemplaire
// console.log(Exemplaire.get("6").titre) // Je controle est affiche le nom
// console.log(Exemplaire.get("6").Auteur) // Je controle est affiche l'auteur


