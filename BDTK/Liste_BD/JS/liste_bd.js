let gallery = document.getElementById('bdGallery');

window.addEventListener('load',(()=>{showBD(gallery)}));


function showBD(div)
{
    removeChild(div);


    for(let i = 0; i<29; i++)
    {
        createBD(div,i)
        
    }

}


function removeChild(div)
{
    while(div.firstChild)
    {
        div.removeChild(div.lastChild);
    }
}

function createBD(div,indice)
{
    //initialisation des div à créer
    let newDiv = document.createElement('div');
    let newImg = document.createElement('img');
    let newTitle = document.createElement('h1');
    let newTab= remplirNewTab();

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