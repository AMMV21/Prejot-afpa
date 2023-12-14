//initialisation de l'input
let titleInput = document.getElementById('titleFilter');

titleInput.addEventListener('keyup',()=>{createTitleFilter(gallery)});

/**
 * Permet la creation des div suite au changement du filtre
 * @param {div} la div receptrice 
 */
function createTitleFilter(div)
{
    let exactTitle= false;
    if(titleInput.value !== normalizeText(titleInput.value))
    {
         exactTitle = checkExactTitle(titleInput.value);
    }
    
    removeAllChild(div);
    showBD(div,(titleInput.value).trimStart(),exactTitle);
    
}

/**
 * Normalise une chaine de caractère
 * @param {string} la chaine de caractère a normalisé 
 * @returns la fonction qui normalise
 */
function normalizeText(str)
{
   return str.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
}

/**
 * permet de vérifié, dans la liste des BD, si il y a un livre comportant la chaine saisie sans normalisation
 * @param {string} chaine de caractère saisie 
 * @returns 
 */
function checkExactTitle(searchTitle)
{
    for(let i = 0; i < tliste_bd.length;i++)
    {
        if(tliste_bd[i][1].titre.includes(searchTitle))
        {
            return true;
        }
    }
    return false;
    
}

/**
 * Permet de vérifié si le filtre comporte l'intitulé exact du livre
 * @param {string}  nom du livre
 * @param {string} chaine de caractère du filtre
 * @returns 
 */
function checkExactTitleFilter(bookTitle,searchTitle)
{
    if((bookTitle.toLowerCase()).includes(searchTitle))
    {
        //si un live correspond a l'exact intitulé (avec accents)
        return true;
    } 
    return false;
}

/**
 * Permet de véifié le filtre titre et d'affiché les BD en lien
 * @param {div} div la div receptrice
 * @param {string} nom du livre
 * @param {string} chaine de caractère saisie
 * @param {integer} itération de la BD 
 * @returns 
 */
function checkTitleFilter(div,bookTitle,searchTitle,indice)
{
    if(searchTitle.length === 0 || (normalizeText(bookTitle.toLowerCase()).includes(normalizeText(searchTitle)) && div.children.length === 0))
    {
        //si aucun filtre Titre OU si le livre actuelle comporte la chaine saisie sans accents ET qu'il n'y a eu aucun livre avec l'intitulé exact de la recherche
        return true;
    }
}