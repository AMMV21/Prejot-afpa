// Recuperation des elements HTML 
let idRef1 = document.getElementById("idRef1");
let btnRechercher = document.getElementById("btnRechercher");
let codeEx = document.getElementById("codeEx");
let affichage

// Abbonements 
btnRechercher.addEventListener("click",function(){
    rechercheEx();
});


function rechercheEx(){
   let codeSaisi= codeEx.value; 
   for (let key of Exemplaire.keys()){
        if (codeSaisi === Exemplaire.get(key).codeExemplaire ){
        idRef1.innerText = "Code exemplaire = " + Exemplaire.get(key).codeExemplaire + " Titre = " + Exemplaire.get(key).titre + " Auteur = " + Exemplaire.get(key).Auteur; 
        break;
    } else {
        idRef1.innerText = "Le Code exemplaire n'est pas correct";
    }
 }  return idRef1.innerText
}
