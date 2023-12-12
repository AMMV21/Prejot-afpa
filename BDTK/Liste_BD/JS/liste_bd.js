//ajout de la div receptrice de la création
let gallery = document.getElementById('bdGallery');

//on utilise la fonction se trouvant: ./data/code_exemplaires.js ligne 20
let newTab= remplirNewTab(); //fonction permettant de créer un tableau et stocker des elements map qui nous seront utile plus tard

//on effectue l'action au chargement de la page
window.addEventListener('load',(()=>{showBD(gallery)}));

/**
 * la fonction permet d'afficher la liste des BD
 * @param {div}  la div dans laquelle ajouter les nouvelle balises 
 */
function showBD(div)
{
    removeAllChild(div); //on reinitialise la div

    //on créer autant de div qu'on a de BD (30 pour le projet)
    for(let i = 0; i<30; i++)
    {
        createBD(div,i)   
    }
}

/**
 * Permet de supprimer tous les enfants d'une div
 * @param {div} la div dans lesquelle on supprime le div enfants 
 */
function removeAllChild(div)
{
    while(div.firstChild)
    {
        div.removeChild(div.lastChild);
    }
}

/**
 * permet de créer un nombre i de div "BD"
 * @param {div} la div receptrice des nouvelles div 
 * @param {Int} l'indice actuelle 
 */
function createBD(div,indice)
{
    //initialisation des div à créer
    let newDiv = document.createElement('div');
    let newImg = document.createElement('img');
    let newTitle = document.createElement('h1');

    newDiv.setAttribute('class','bdDiv');
    //valeurs pour la source de l'image
    let titleVolume = newTab[indice][1].titre;
    let numeroVolume = newTab[indice][1].numero;
    let valSerie = newTab[indice][1].idSerie;
    let titleSerie = series.get(valSerie).nom;


    //initialisation image
    newImg.src='./Ressources/albums/' +titleSerie+'-'+numeroVolume+'-'+titleVolume+'.jpg';


   //on change le nom de la balise titre
    newTitle.textContent = titleVolume;

    div.appendChild(newDiv);
    newDiv.appendChild(newTitle);
    newDiv.appendChild(newImg);
} 