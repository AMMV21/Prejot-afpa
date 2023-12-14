// Recuperation des elements HTML 
let btnRechercher = document.getElementById("btnRechercher");
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

// Initialisation des variables 
let codeTrouvee = false ;   
let numTrouvee = false ; 

// Expressions régulières  
let conditionSaisiCodeEx = /^[A-Za-z]\d{3}$/ ; // Ma regexp demande une lettre suivi de 3 chiffres; 
let conditionSaisiNumAdh = /^\d+$/ ; // Ma regexp demande uniquement 1 ou plusieurs chiffres; 

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
 

            if(codeTrouvee == true && numTrouvee == true){
            }
            } else {
                if(!conditionSaisiCodeEx.test(codeEx.value)){ 
                    zoneErrCodeEx.innerText = "Commence par une lettre et suivi 3 chiffres";
                    }
                if(!conditionSaisiNumAdh.test(numAdh.value)){
                    zoneErrNumAdh.innerText= "Uniquement des chiffres !" 
                    } 
                    
       }
});

/**
//  * Compare le code saisi dans l'input et vérifie ca présence dans le Map exemplaire.
//  * 
//  */
function rechercheEx() {
    let codeSaisi = codeEx.value;
    for (let key of Exemplaire.keys()) {
        if (codeSaisi.toUpperCase() === Exemplaire.get(key).codeExemplaire) {
            zoneCodeExemplaire.innerText = Exemplaire.get(key).codeExemplaire ;
            zoneTitre.innerText = Exemplaire.get(key).titre ;
            zoneAuteur.innerText= Exemplaire.get(key).Auteur ;
            zoneSerie.innerText = Exemplaire.get(key).Serie;
            return true; // Déplacez cette ligne ici pour sortir de la fonction après avoir trouvé une correspondance
        }
    }
    // Si la boucle se termine sans trouver de correspondance
    Swal.fire({
        icon: "error",
        title: "Code exemplaire introuvable !",
        text: "Veuillez saisir le code à nouveau",
    });  
    return false;
}


/**
 * Compare le numéro saisi dans l'input et vérifie sa présence dans le Map adhérent.
 *  
 */
function rechercheAdh() {
    let numAdhSaisi = numAdh.value;
    numAdhSaisi = (numAdhSaisi < 10) ? "0" + numAdhSaisi : numAdhSaisi;
    
    for (let key of adherent.keys()) {
        if (numAdhSaisi === adherent.get(key).numeroAdherent) {
           // idRef2.innerText = "Numéro adhérent = " + adherent.get(key).numeroAdherent  + " Nom = " + adherent.get(key).nom + " Prénom = " + adherent.get(key).prenom + " Cotisation = " + adherent.get(key).cotisation;
            zoneNom.innerText = adherent.get(key).nom;
            zonePrenom.innerText = adherent.get(key).prenom;
            
            if ((adherent.get(key).cotisation === "A jour" || adherent.get(key).emprunt >= 3 ) && codeTrouvee === true){
                validerPret.classList.remove("invisible");
            if (adherent.get(key).cotisation === "A jour" && adherent.get(key).emprunt <=3){
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
            return true
        } 
    }
    // Si la boucle se termine sans trouver de correspondance
    Swal.fire({
        icon: "error",
        title: "Ce numéro d'adhérent est introuvable !",
        text: "Veuillez saisir le code à nouveau",
      });
    return false
        

}


