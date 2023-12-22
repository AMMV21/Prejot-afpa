var adherentArchiver = new Map();
let tAdherentArchiver = []; // Tableau qui contient les objets de la map

    function creerMapAdherentsArchiver() {
        
    }
    const remplirNewAdhArchiver = function () {
        
        adherentArchiver.forEach(element => {  // Parcours chaque élément du tableau "Exemplaire".
            if (typeof element === 'object' && element !== null) { // Vérifier si l'élément est un objet et non null.
                tAdherentArchiver.push(element); // ajout de l'élément au tableau 
            }
        });
    }
    creerMapAdherentsArchiver();
    remplirNewAdhArchiver();

    // *******************  Vérifie si le locale storage à déja été créée dans la session 
   if (!localStorage.adherentArchiver){ localStorage.setItem("adherentArchiver", JSON.stringify(Array.from(tAdherentArchiver))); } 
   
   let adherentArchiverStorage = JSON.parse(localStorage.getItem('adherentArchiver'));
   console.log(adherentArchiverStorage)
   
   // Je décommente la ligne suivant pour réinitialiser le storage avec le tableau de base.
//    localStorage.setItem("adherentArchiver", JSON.stringify(Array.from(tAdherentArchiver)));