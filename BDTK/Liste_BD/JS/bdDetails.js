//initialisation de la div popup et des elements span a modifié
let bdPopup = document.getElementById('bdPopup');
let title = document.getElementById('titreContent');
let serie = document.getElementById('serieContent');
let writer= document.getElementById('writerContent');
let summary = document.getElementById('summaryContent');
let commentary = document.getElementById('commentaryContent');
let available = document.getElementById('availableContent');
let img = document.getElementById('imgContent');

//ajut d'une incone pour recacher la bd
let removeIcon = document.getElementById('removeIcon');

let blur = document.getElementsByClassName('toBlur');

/**
 * Permet d'afficher la popup infoBD avec les valeurs correspondantes
 * @param {div} la div Popup
 * @param {string} Titre du livre 
 * @param {string} Titre de la serie 
 * @param {string} Nom de l'auteur 
 * @param {img} balise image de la bd 
 */
function showDetails(div,bookTitle,serieTitle,writerName,bdImg)
{
    //on remet en forme le nom de l'auteur
    writerName = writerName.replaceAll(',','');
    
    //attribution ds valeurs BD dans les span correspondantes
    img.src = bdImg.src;
    title.innerHTML = bookTitle;
    serie.textContent = serieTitle;
    writer.textContent = writerName;
    available.textContent = '2';
    summary.textContent = 'Eu ullamco mollit adipisicing quis id ut incididunt tempor magna occaecat. Et nostrud aliquip sunt est occaecat excepteur exercitation elit ullamco. Ipsum adipisicing duis adipisicing fugiat et veniam ut culpa nisi enim proident ex. Eu labore irure pariatur enim ad consequat amet aliquip cupidatat anim exercitation velit mollit sit. Aliquip adipisicing fugiat excepteur deserunt cillum velit officia. Ea est nisi officia et sint nostrud dolor sunt nostrud.';
    commentary.textContent = 'Pariatur ullamco pariatur excepteur est aliqua voluptate aliqua mollit ullamco reprehenderit sunt tempor ullamco. Velit aliquip eiusmod minim nulla. Veniam quis nostrud quis consectetur consequat consequat occaecat consequat qui elit laborum velit. Minim adipisicing cillum sit cupidatat non enim cillum ipsum. Nisi id non enim reprehenderit nulla sit. Ex incididunt aliqua esse eu minim aute irure irure id. Cupidatat ex tempor culpa Lorem cupidatat sit laboris cillum quis.';

    //ajout des attribut et fonction de l'icone
    removeIcon.setAttribute('class', 'fa-solid fa-xmark')
    removeIcon.setAttribute('id','removeIcon');

    removeIcon.addEventListener('click',()=>{closePopup(div)})

}

/**
 * Permet de cacher la div
 * @param {div} div Popup 
 */
function closePopup(div)
{
    div.style.display='none';
    unblurAll();
}

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