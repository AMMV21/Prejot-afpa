    // Récuperation des éléments HTML 
    let btnRechercher = document.getElementById("btnRechercher");
    let btn_pret = document.getElementById("btn_pret");
    let codeEx = document.getElementById("codeEx");
    let numAdh = document.getElementById("numAdherant");
    let zoneErrCodeEx = document.getElementById('zoneErrCodeEx');
    let zoneErrNumAdh = document.getElementById('zoneErrNumAdh'); 

    let zoneCodeExemplaire = document.getElementById('zoneCodeExemplaire');
    let zoneTitre = document.getElementById('zoneTitre');
    let zoneAuteur = document.getElementById('zoneAuteur');
    let zoneSerie = document.getElementById('zoneSerie');

    let zoneNom = document.getElementById('zoneNom');
    let zonePrenom = document.getElementById('zonePrenom');

    let validerPret = document.getElementById('validerPret');
    let rechercheInfos = document.getElementById('rechercheInfos');

    // Récupere les données dans la mémoire du navigateur
    let adherentStorage = new Map(JSON.parse(localStorage.getItem("adherent")));

    // Initialisation des variables 
    let codeTrouvee = false ;   
    let numTrouvee = false ; 

    // Expressions régulières  
    let conditionSaisiCodeEx = /^[A-Za-z]\d{3}$/ ; // Ma regexp demande une lettre suivi de 3 chiffres; 
    let conditionSaisiNumAdh = /^\d+$/ ; // Ma regexp demande uniquement 1 ou plusieurs chiffres; 


    //*************  PROGRAMME PRINCIPALE ************************

   // Abbonements 
    btnRechercher.addEventListener("click",function(){  
        
        zoneCodeExemplaire.innerText = "";
        zoneTitre.innerText = "";
        zoneAuteur.innerText = "";
        zoneSerie.innerText = "";

        zoneErrCodeEx.innerText= "";  // Utile pour réinitialiser à zéro les spans erreur.
        zoneErrNumAdh.innerText= "";  // Utile pour réinitialiser à zéro les spans erreur.

        if(conditionSaisiCodeEx.test(codeEx.value) && conditionSaisiNumAdh.test(numAdh.value)){
            codeTrouvee = rechercheEx();
            numTrouvee = rechercheAdh();
        }

        if(!conditionSaisiCodeEx.test(codeEx.value)){ 
            zoneErrCodeEx.innerText = "Commence par une lettre et suivi 3 chiffres";
        }

        if(!conditionSaisiNumAdh.test(numAdh.value)){
            zoneErrNumAdh.innerText= "Uniquement des chiffres !" 
        }               
        
    });
   
    let indice = 0; // Initialisez la variable à zéro

    function rechercheEx() {
        let codeSaisi = codeEx.value;
    
        for (let i=0 ; i < exemplaireStorage.length ; i++) {
            if (codeSaisi.toUpperCase() === exemplaireStorage[i].codeExemplaire) {
                zoneCodeExemplaire.innerText = exemplaireStorage[i].codeExemplaire;
                zoneTitre.innerText = exemplaireStorage[i].titre;
                zoneAuteur.innerText = exemplaireStorage[i].Auteur;
                zoneSerie.innerText = exemplaireStorage[i].Serie;
    
                indice = i; // Utilisez la clé directement, pas la valeur associée à la clé
    
                // Si la BD est indisponible ALERT
                if (exemplaireStorage[indice].disponibilite === false) {
                    Swal.fire({
                        icon: "error",
                        title: "Exemplaire non disponible!",
                        text: "L'exemplaire est déjà emprunté, ou vous avez fait une erreur de saisie.",
                    });
                    return false;
                }
                return true; 
            }
        }
        return false;
    }
    
    // Au click sur le bouton prêt la valeur de disponibilité change 
    btn_pret.addEventListener('click', function () {
        alert("clické");
        if (rechercheEx()) {
            exemplaireStorage[indice].disponibilite = false;
            localStorage.setItem("exemplaires", JSON.stringify(exemplaireStorage));
        }
    });

   
    
    /**
     * Compare le numéro saisi dans l'input et vérifie sa présence dans le Map adhérent.
     *  
     */
    function rechercheAdh() {
        let numAdhSaisi = numAdh.value;
        numAdhSaisi = (numAdhSaisi < 10) ? "0" + numAdhSaisi : numAdhSaisi;
        
        for (let key of adherent.keys()) {
            if (numAdhSaisi === adherent.get(key).numeroAdherent) {
                zoneNom.innerText = adherent.get(key).nom;
                zonePrenom.innerText = adherent.get(key).prenom;
                
                if ((adherentStorage.get(key).cotisation === "A jour" || adherentStorage.get(key).emprunt >= 3 ) && codeTrouvee === true){
                    validerPret.classList.remove("invisible");
                if (adherentStorage.get(key).cotisation === "A jour" && adherentStorage.get(key).emprunt <=3){
                    rechercheInfos.classList.add('invisible');
                }
                
            } else if (codeTrouvee === true){
                Swal.fire({
                    icon: "error",
                    title: "Prêt impossible !",
                    text: "Consulter le profil adhérant pour régulariser la situation",
                    footer: '<a href="./profilAdherents.html">Consulter le profil</a>'
                });
                }
                return true ;
            } 
        }
        // Si la boucle se termine sans trouver de correspondance
        Swal.fire({
            icon: "error",
            title: "Ce numéro d'adhérent est introuvable !",
            text: "Veuillez saisir le code à nouveau",
        });
        return false ;
    }

  

    // CREATION PAR PETITES FONCTIONS 
    