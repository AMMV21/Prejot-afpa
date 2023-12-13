// Recuperation des elements HTML 
let idRef1 = document.getElementById("idRef1");
let idRef2 = document.getElementById("idRef2");
let btnRechercher = document.getElementById("btnRechercher");
let codeEx = document.getElementById("codeEx");
let numAdh = document.getElementById("numAdherant");
let zoneErrCodeEx = document.getElementById('zoneErrCodeEx');
let zoneErrNumAdh = document.getElementById('zoneErrNumAdh');

// Initialisation des variables 
let codeTrouvee = false ;   
let numTrouvee = false ; 

// Expressions régulières  
let conditionSaisiCodeEx = /^[A-Za-z]\d{3}$/ ; // Ma regexp demande une lettre suivi de 3 chiffres; 
let conditionSaisiNumAdh = /^\d+$/ ; // Ma regexp demande uniquement 1 ou plusieurs chiffres; 

// Abbonements 
btnRechercher.addEventListener("click",function(){

    idRef1.innerText = "";
    idRef2.innerText = "";
    zoneErrCodeEx.innerText= "";  // Utile pour réinitialiser à zéro les spans erreur.
    zoneErrNumAdh.innerText= "";  // Utile pour réinitialiser à zéro les spans erreur.

if(conditionSaisiCodeEx.test(codeEx.value) && conditionSaisiNumAdh.test(numAdh.value)){
   codeTrouvee = rechercheEx();
   numTrouvee = rechercheAdh();
 

            if(codeTrouvee == true && numTrouvee == true){
              console.log("infosOK");
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
            idRef1.innerText = "Code exemplaire = " + Exemplaire.get(key).codeExemplaire + " Titre = " + Exemplaire.get(key).titre + " Auteur = " + Exemplaire.get(key).Auteur + " Série = " + Exemplaire.get(key).Serie;
            return true; // Déplacez cette ligne ici pour sortir de la fonction après avoir trouvé une correspondance
        }
    }
    // Si la boucle se termine sans trouver de correspondance
    idRef1.innerText = "Le Code exemplaire ne correspond à aucune référence";
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
            idRef2.innerText = "Nom = " + adherent.get(key).nom + " Prénom = " + adherent.get(key).prenom;
            return true ;
        } 
    }
    // Si la boucle se termine sans trouver de correspondance
    idRef2.innerText = "Le numéro adhérent ne correspond à aucun adhérent";
    return false
        

}


