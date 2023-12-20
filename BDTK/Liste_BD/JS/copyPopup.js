//initialisation des élements necessaires aux fonctions
let copyItemGroup = document.getElementById('availableCopyList');
let copyItemPopup = document.getElementById('copyItemPopup');
let resetBtn = document.getElementById('resetCopyItem');

//initialisation du tableau necessaire pour stocker les id des exemplaires disponible
let tCopyTab= [];

//cache la div et le form si on annule
//on reset éégalement le form
resetBtn.addEventListener('click',()=>{
    removeAllChild(copyItemGroup);
    copyItemPopup.style.display = 'none';
})
/**
 * 
 * @param {string} titre du livre 
 * @param {array<string>} tableau qui va contenir les id exemplaire 
 */
function recupIdCopy(title,tab)
{
    //on va stock les infos du locale storage exmplaire
    let copyList = JSON.parse(localStorage.getItem('exemplaires'));
    //on reinitialise le tableau
    tab = [];
    //on cherche les exemplaires disponibles de la BD et si on en trouve on ajoute son id au tableau
    for (let [key, value] of copyList.entries()) {

        if (value.titre === title && value.disponibilite === true){
            tab.push(value.codeExemplaire);
        }
        
    }
    //si on trouve ua moins 1 exemplaire
    if(tab.length > 0)
    {
        //on reset le form
        if(copyItemGroup.hasChildNodes())
        {
            removeAllChild(copyItemGroup);
        }
        //on ajoute dans le form la liste des exemplaires trouvé
        for(let i = 0; i < tab.length; i++)
        {
            let copyItem = document.createElement('option');

            copyItem.textContent = tab[i];
            copyItem.value = tab[i];
            copyItemGroup.appendChild(copyItem);
        }
    }
    //on affiche la popup qui contient le form
   copyItemPopup.style.display = 'block';    

}