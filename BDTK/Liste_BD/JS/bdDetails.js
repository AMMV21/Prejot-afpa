//initialisation de la div popup et des elements span a modifié
let bdPopup = document.getElementById('bdPopup');
let bdPopupContent = document.getElementById('popupBdContent');
let title = document.getElementById('titreContent');
let serie = document.getElementById('serieContent');
let volume = document.getElementById('volumeContent')
let writer= document.getElementById('writerContent');
let summary = document.getElementById('summaryContent');
let commentary = document.getElementById('commentaryContent');
let available = document.getElementById('availableContent');
let img = document.getElementById('imgContent');


//ajut d'une incone pour recacher la bd
let removeIcon = document.getElementById('removeIcon');
removeIcon.addEventListener('click',()=>{closePopup(bdPopup,copyItemPopup)})


let blur = document.getElementsByClassName('toBlur');

/**
 * Permet d'afficher la popup infoBD avec les valeurs correspondantes
 * @param {div} la div Popup
 * @param {string} Titre du livre 
 * @param {string} Titre de la serie 
 * @param {string} Nom de l'auteur 
 * @param {img} balise image de la bd 
 * @param {integer} numéro du volume
 */
function showDetails(div,bookTitle,serieTitle,writerName,numVolume)
{
    let pinchBtn = document.getElementById('pinchBtn');
    let copyList = JSON.parse(localStorage.getItem('exemplaires'));
    let copyCount = 0;
    //on remet en forme le nom de l'auteur
    writerName = writerName.replaceAll(',','');
    
    //attribution ds valeurs BD dans les span correspondantes
    img.src =`./Ressources/albums/${serieTitle}-${numVolume}-${bookTitle}.jpg`;;
    title.innerHTML = bookTitle;
    serie.textContent = serieTitle;
    writer.textContent = writerName;
    volume.textContent = numVolume;
    
    summary.textContent = 'Eu ullamco mollit adipisicing quis id ut incididunt tempor magna occaecat. Et nostrud aliquip sunt est occaecat excepteur exercitation elit ullamco. Ipsum adipisicing duis adipisicing fugiat et veniam ut culpa nisi enim proident ex. Eu labore irure pariatur enim ad consequat amet aliquip cupidatat anim exercitation velit mollit sit. Aliquip adipisicing fugiat excepteur deserunt cillum velit officia. Ea est nisi officia et sint nostrud dolor sunt nostrud.';
    commentary.textContent = 'Pariatur ullamco pariatur excepteur est aliqua voluptate aliqua mollit ullamco reprehenderit sunt tempor ullamco. Velit aliquip eiusmod minim nulla. Veniam quis nostrud quis consectetur consequat consequat occaecat consequat qui elit laborum velit. Minim adipisicing cillum sit cupidatat non enim cillum ipsum. Nisi id non enim reprehenderit nulla sit. Ex incididunt aliqua esse eu minim aute irure irure id. Cupidatat ex tempor culpa Lorem cupidatat sit laboris cillum quis.';
    
    //je parcours le locale storage pour voir le nombre d'exemplaire de la BD disponible
    for (let [key, value] of copyList.entries()) {

        if (value.titre === bookTitle && value.disponibilite === true){
            copyCount++;
        }
        
    }

    //si il n'y a aucun exemplaire disponible
    if(copyCount === 0)
    {
        pinchBtn.style.display = 'none';
        available.textContent = 'Non Dispobible';
        available.style.color = 'red';
        available.style.fontWeight = 'bold';
    }
    //si au moins un exemplaire est disponible
    else
    {
        pinchBtn.style.display = 'inline-block';
        available.textContent = copyCount;
        available.style.color = 'black';
        available.style.fontWeight = 'none';
        pinchBtn.onclick = ()=>{recupIdCopy(bookTitle,tCopyTab)};
}
    }
    

/**
 * Permet de cacher toutes les divs mis en arguments
 
 */
function closePopup()
{
    for(let i = 0; i < arguments.length; i++)
    {
        arguments[i].style.display='none';
    }
    
    unblurAll();
}

/**
 * Permet de flouter tout les elements lors d el'ouverture de la Popup
 */
function blurAll()
{
    if(!blur[0].classList.contains('blur'))
    {
        for(let i= 0; i < blur.length; i++)
        {
            blur[i].classList.toggle('blur');
        }
    }
    
}

/**
 * permet de retiré le flou de tout les élements flouté
 */
function unblurAll()
{
    if(blur[0].classList.contains('blur'))
    {
        for(let i= 0; i < blur.length; i++)
        {
            blur[i].classList.toggle('blur');
        }
    }
}