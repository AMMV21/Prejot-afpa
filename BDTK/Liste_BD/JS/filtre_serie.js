//initialisation des formulaires
let serieForm = document.getElementById('serieForm');

//initialisation des tableaux utilitaires
let tVerifSerieTab =[]; //verification doublons
let tSerieChecked =[]; //verification checbox

window.addEventListener('load',()=>{createSerieFilter(serieForm)});

/**
 * boucle qui lance la création du fomulaire qui filtre les series 
 * @param {div} la division receptif 
 */
function createSerieFilter(div)
{

    for(let i = 0; i<tliste_bd.length;i++)
    {
        addSerieFilter(div,i);
    }
}

/**
 * permet de créer dynamiquement le formulaire qui filtre les séries
 * @param {div} la div receptif
 * @param {integer} indice d'itération
 */
function addSerieFilter(div,indice)
{
    let newDiv=document.createElement('div');
    newDiv.setAttribute('class','divSerieItem');
    let checkItem = document.createElement('input');
    let labelItem = document.createElement('label');
    let valSerie = tliste_bd[indice][1].idSerie;
    let serieTitle = series.get(valSerie).nom;

    //on verifie si il n'y a pas de doublons
    if(!tVerifSerieTab.includes(serieTitle))
    {
        //on ajoute la serie dans le tableau des vérifications de doublons
        tVerifSerieTab.push(serieTitle);
        div.appendChild(newDiv);
        //on inclus les valeurs dans la checkbox
        checkItem.type = 'checkbox';
        checkItem.id=serieTitle;
        checkItem.value=serieTitle;
        // on inclus les valeurs dans le label
        labelItem.htmlFor =serieTitle;
        labelItem.textContent=serieTitle;
        newDiv.appendChild(checkItem);
        newDiv.appendChild(labelItem);
        newDiv.classList.add('hidden');

        //on ajoute la fonction à l'élément actuel
        checkItem.addEventListener('click', (e)=>{addEventCheckSerie(e)})
        }  
}

/**
 * permet de récupérer les valeurs des checkbox et d'actualisé le tableau des filtres Serie
 * @param {event} l'event en cours 
 */
function addEventCheckSerie(event)
{
    let item = event.srcElement;

    if(item.checked)
    {
        tSerieChecked.push(item.value);
        removeAllChild(gallery);
        showBD(gallery);
    }
    else
    {
        tSerieChecked = arrayRemove(tSerieChecked, item.value);
        
        removeAllChild(gallery);
        showBD(gallery);
    }
}

/**
 * Permet de vérifié la condition du filtre série
 * @param {string} le titre de la série à filtré 
 * @returns Boolean true or false
 */
function checkSerieFilter(title)
{
    if(tSerieChecked.length === 0 || tSerieChecked.includes(title))
    {
        //si aucun filtre série OU si la série actuelle coresspond au filtre
        return true;
    }
    return false;
}