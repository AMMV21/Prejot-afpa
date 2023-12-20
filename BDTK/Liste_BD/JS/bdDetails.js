//initialisation de la div popup et des elements span a modifié
let bdPopup = document.getElementById('bdPopup');
let bdPopupContent = document.getElementById('popupBdContent');
let title = document.getElementById('titreContent');
let serie = document.getElementById('serieContent');
let writer= document.getElementById('writerContent');
let summary = document.getElementById('summaryContent');
let commentary = document.getElementById('commentaryContent');
let available = document.getElementById('availableContent');
let img = document.getElementById('imgContent');
let tCopyTab= [];

//ajut d'une incone pour recacher la bd
let removeIcon = document.getElementById('removeIcon');
removeIcon.addEventListener('click',()=>{closePopup(bdPopup)})


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
    let pinchBtn = document.getElementById('pinchBtn');
    let copyList = JSON.parse(localStorage.getItem('exemplaires'));
    let copyCount = 0;
    //on remet en forme le nom de l'auteur
    writerName = writerName.replaceAll(',','');
    
    //attribution ds valeurs BD dans les span correspondantes
    img.src = bdImg.src;
    title.innerHTML = bookTitle;
    serie.textContent = serieTitle;
    writer.textContent = writerName;
    
    summary.textContent = 'Eu ullamco mollit adipisicing quis id ut incididunt tempor magna occaecat. Et nostrud aliquip sunt est occaecat excepteur exercitation elit ullamco. Ipsum adipisicing duis adipisicing fugiat et veniam ut culpa nisi enim proident ex. Eu labore irure pariatur enim ad consequat amet aliquip cupidatat anim exercitation velit mollit sit. Aliquip adipisicing fugiat excepteur deserunt cillum velit officia. Ea est nisi officia et sint nostrud dolor sunt nostrud.';
    commentary.textContent = 'Pariatur ullamco pariatur excepteur est aliqua voluptate aliqua mollit ullamco reprehenderit sunt tempor ullamco. Velit aliquip eiusmod minim nulla. Veniam quis nostrud quis consectetur consequat consequat occaecat consequat qui elit laborum velit. Minim adipisicing cillum sit cupidatat non enim cillum ipsum. Nisi id non enim reprehenderit nulla sit. Ex incididunt aliqua esse eu minim aute irure irure id. Cupidatat ex tempor culpa Lorem cupidatat sit laboris cillum quis.';
    
    for (let [key, value] of copyList.entries()) {

        if (value.titre === bookTitle && value.disponibilite === true){
            copyCount++;
        }
        
    }

    available.textContent = copyCount;
    pinchBtn.onclick = (e)=>{recupIdCopy(e,bookTitle,tCopyTab)};
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

function recupIdCopy(event,title,tab)
{
    let copyList = JSON.parse(localStorage.getItem('exemplaires'));
    tab = [];
    for (let [key, value] of copyList.entries()) {

        if (value.titre === title && value.disponibilite === true){
            tab.push(value.codeExemplaire);
            console.log(value.titre);
        }
        
    }
    console.log(tab);
    console.log(event.form);
}