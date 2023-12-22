    // Récuperation des éléments HTML 
    let btnRechercher = document.getElementById("btnRechercher");
    let btn_pret = document.getElementById("btn_pret");
    let btn_annuler = document.getElementById("btn_annuler");
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

    let indiceEx = 0;
    let indiceAd = 0;
    let pageUrl = "";
    let titreBD = "";

    // Expressions régulières  
    let conditionSaisiCodeEx = /^[A-Za-z]\d{3}$/ ; // Ma regexp demande une lettre suivi de 3 chiffres; 
    let conditionSaisiNumAdh = /^\d{2}$/ ; // Ma regexp demande uniquement 1 ou plusieurs chiffres;
    

    //*************  PROGRAMME PRINCIPALE ************************

   // Abbonements 
    btnRechercher.addEventListener("click",function(){  
        initText();
        
        // Si seulement les deux conditions de saisis sont bonnes
        if(conditionSaisiCodeEx.test(codeEx.value) && conditionSaisiNumAdh.test(numAdh.value)){
            let exemplaireOk = rechercheEx(); 
            let adherentOk = rechercheAdh();
            if(exemplaireOk && adherentOk) {
                validerPret.classList.remove("invisible");
                rechercheInfos.classList.add("invisible");
            };
        } 

        // Affichage des erreurs si la saisi n'est pas bonne  
        if(!conditionSaisiCodeEx.test(codeEx.value)){ 
            zoneErrCodeEx.innerText = "Commence par une lettre et suivi 3 chiffres";
        }
        if(!conditionSaisiNumAdh.test(numAdh.value)){
                zoneErrNumAdh.innerText= "Le numéro adhérent doit comporter 2 chiffres !" 
        }               
        
    }); 

    
    btn_annuler.addEventListener('click',function(){
        validerPret.classList.add("invisible");
        rechercheInfos.classList.remove('invisible');
    })

    function rechercheEx() {
        let codeSaisi = codeEx.value;
    
        for (let i=0 ; i < exemplaireLocalStorage.length ; i++) {
            if (codeSaisi.toUpperCase() === exemplaireLocalStorage[i].codeExemplaire) { 
                titreBD = exemplaireLocalStorage[i].titre;
                zoneCodeExemplaire.innerText = exemplaireLocalStorage[i].codeExemplaire;
                zoneTitre.innerText = exemplaireLocalStorage[i].titre;
                zoneAuteur.innerText = exemplaireLocalStorage[i].Auteur;
                zoneSerie.innerText = exemplaireLocalStorage[i].Serie; 
                
                // Si la BD est indisponible ALERT
                if (exemplaireLocalStorage[i].disponibilite === false) {
                    Swal.fire({
                        icon: "error",
                        title: "Exemplaire non disponible!",
                        text: "L'exemplaire est déjà emprunté, ou vous avez fait une erreur de saisie.",
                    });
                    return false;
                }

                indiceEx = i ;
                return true;
            }
        } Swal.fire({
            icon: "error",
            title: "Exemplaire introuvable!",
            text: "Le code exemplaire n'existe pas !",
        });
        return false;
    }
    
    // Au click sur le bouton prêt Pop de confirmation et action
    btn_pret.addEventListener('click', function () { 
        if (exemplaireLocalStorage[indiceEx].disponibilite === false) {
            Swal.fire({
                icon: "error",
                title: "Exemplaire non disponible!",
                text: "L'exemplaire est déjà emprunté, ou vous avez fait une erreur de saisie.",
            });
            return false;
        }
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
              confirmButton: "btn btn-success",
              cancelButton: "btn btn-danger"
            },
            buttonsStyling: false
          });
          swalWithBootstrapButtons.fire({
            title: "Confirmer",
            text: "Cliquer valider pour confirmer le prêt",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Confirmer!",
            cancelButtonText: "Annuler",
            reverseButtons: true
          }).then((result) => {
            if (result.isConfirmed) {
              swalWithBootstrapButtons.fire({
                title: "Prêt confirmé",
                text: "Le prêt a été enregistré avec succès !",
                icon: "success"
              });
              majExemplaire();
              majProfilAdh();
              majStock();
              addEmpruntList();
            } else if (
              /* Read more about handling dismissals below */
              result.dismiss === Swal.DismissReason.cancel
            ) {
              swalWithBootstrapButtons.fire({
                title: "Annuler",
                text: "Le prêt n'a pas été pris en compte.",
                icon: "error"
              });
            }
          });
    });
    /**
     * Compare le numéro saisi dans l'input et vérifie sa présence dans le Map adhérent.
     *  
     */
    function rechercheAdh() {
        let numAdhSaisi = numAdh.value;
        console.log(numAdhSaisi);

        for (let i=0 ; i < adherentStorage.length ; i++) {
            let url = './profilAdherents.html?numeroAdherent=' + (i + 1);
            pageUrl = "<a href='" + url + "'>Consulter le profil</a>";
            if (numAdhSaisi === adherentStorage[i].numeroAdherent) {
                if ((adherentStorage[i].prenom !== "Supprimé" && adherentStorage[i].cotisation === "A jour" && adherentStorage[i].nbr_emprunt < 3 && adherentStorage[i].amende == 0 )){
                    zoneNom.innerText = adherentStorage[i].nom;
                    zonePrenom.innerText = adherentStorage[i].prenom;
                    indiceAd = i ;
                    return true;
                } else if (adherentStorage[i].prenom === "supprimé"){
                    Swal.fire({
                        icon: "error",
                        title: "Adhérent introuvable !",
                        text: "L'adhérent a été supprimé, il ne figure plus dans la liste!",
                        footer: pageUrl,
                    });
                    return false;
                } else if (adherentStorage[i].cotisation === "A jour" && adherentStorage[i].nbr_emprunt < 3){
                    Swal.fire({
                        icon: "error",
                        title: "Prêt impossible !",
                        text: "L'adhérent doit régler ses amendes en cours !",
                        footer: pageUrl,
                    });
                    return false;
                } else if (adherentStorage[i].cotisation === "A jour"){
                    Swal.fire({
                        icon: "error",
                        title: "Prêt impossible !",
                        text: "L'adhérent à déja 3 prêt en cours",
                        footer: pageUrl,
                    });
                    return false;
                } else {
                    Swal.fire({
                        icon: "error",
                        title: "Prêt impossible !",
                        text: "L'adhérent doit remettre à jour sa cotisation",
                        footer: pageUrl,
                    });
                    return false;
                } 
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

    function initText(){
        zoneCodeExemplaire.innerText = "";
        zoneTitre.innerText = "";
        zoneAuteur.innerText = "";
        zoneSerie.innerText = "";
        zoneErrCodeEx.innerText= "";  // Utile pour réinitialiser à zéro les spans erreur.
        zoneErrNumAdh.innerText= "";  // Utile pour réinitialiser à zéro les spans erreur.
    } 

    function majProfilAdh(){
        if (adherentStorage[indiceAd].nbr_emprunt == 0){
            adherentStorage[indiceAd].emprunt1 = exemplaireLocalStorage[indiceEx].codeExemplaire; 
        } else if (adherentStorage[indiceAd].nbr_emprunt == 1) {
            adherentStorage[indiceAd].emprunt2 = exemplaireLocalStorage[indiceEx].codeExemplaire; 
        } else {
            adherentStorage[indiceAd].emprunt3 = exemplaireLocalStorage[indiceEx].codeExemplaire;
        }
        adherentStorage[indiceAd].nbr_emprunt ++ ;
        localStorage.setItem('adherent', JSON.stringify(adherentStorage)); 
    }

    function majExemplaire() {
        exemplaireLocalStorage[indiceEx].disponibilite = false;
        exemplaireLocalStorage[indiceEx].Emprunteur =  indiceAd + 1;
        localStorage.setItem('exemplaires', JSON.stringify(exemplaireLocalStorage));
    } 

   function majStock(){
    // Met à jour le stock
        for (let i=0 ; i< disponibiliteBDStorage.length; i++){
            if(disponibiliteBDStorage[i][0] === titreBD ){
                disponibiliteBDStorage[i][1].disponibilite --;
                }
        }
        localStorage.setItem('disponibilite',JSON.stringify(disponibiliteBDStorage));
    }
   
    let newEmprunt = {};
 
   function addEmpruntList(){
        // Récupérer la date actuelle
        let dateActuelle = new Date();

        // Ajouter 15 jours
        let dateDeRetour = new Date(dateActuelle);
        dateDeRetour.setDate(dateActuelle.getDate() + 15); 

        // L'option permet de mettre l'heure au bon format
        const option = { day: '2-digit', month: '2-digit', year: 'numeric' }; 
        let datePret =  dateActuelle.toLocaleDateString('fr-FR', option);
        let dateRetour = dateDeRetour.toLocaleDateString('fr-FR', option);

        newEmprunt = {
        nomEmprunteur: adherentStorage[indiceAd].nom,
        prenomEmprunteur: adherentStorage[indiceAd].prenom,
        numeroAdherent : adherentStorage[indiceAd].numeroAdherent,
        codeExemplaire: exemplaireLocalStorage[indiceEx].codeExemplaire,
        dateEmprunt: datePret,
        dateRetour: dateRetour,
        };

        listEmpruntsStorage.push(newEmprunt);
        localStorage.setItem('listEmprunts', JSON.stringify(listEmpruntsStorage));
    }





