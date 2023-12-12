let serieForm = document.getElementById('serieForm');
let writerForm= document.getElementById('writerForm');
let verifSerieTab =[];
let verifWriterTab=[];

window.addEventListener('load',()=>{addSerieFilter(serieForm)});
window.addEventListener('load',()=>{addWriterFilter(writerForm)});

function addSerieFilter(div)
{
    removeAllChild(div);

    for(let i = 0; i<30;i++)
    {
        createSerieFilter(div,i);
    }

}

function addWriterFilter(div)
{
    removeAllChild(div);

    for(let i = 0; i<30;i++)
    {
        createWriterFilter(div,i);
    }
}

function createSerieFilter(div,indice)
{
        let newDiv=document.createElement('div');
        newDiv.setAttribute('class','divSerieItem');
        let checkItem = document.createElement('input');
        let labelItem = document.createElement('label');
        let valSerie = newTab[indice][1].idSerie;
        let serieTitle = series.get(valSerie).nom;

        //on verifie si la série est déjà présente

        if(!verifSerieTab.includes(serieTitle))
        {
            verifSerieTab.push(serieTitle);
            div.appendChild(newDiv);
            checkItem.type = 'checkbox';
            checkItem.id=serieTitle;
            labelItem.htmlFor =serieTitle;
            labelItem.textContent=serieTitle;
            newDiv.appendChild(checkItem);
            newDiv.appendChild(labelItem);
        }

        
}

function createWriterFilter(div,indice)
{
        let newDiv=document.createElement('div');
        newDiv.setAttribute('class','divSerieItem');
        let checkItem = document.createElement('input');
        let labelItem = document.createElement('label');
        let valWriter = newTab[indice][1].idAuteur;
        let writerName = auteurs.get(valWriter).nom;

        writerName =writerName.replaceAll(',',' ');
        //on verifie si la série est déjà présente

        if(!verifWriterTab.includes(writerName))
        {
            verifWriterTab.push(writerName);
            div.appendChild(newDiv);
            checkItem.type = 'checkbox';
            checkItem.id=writerName;
            labelItem.htmlFor =writerName;
            labelItem.textContent=writerName;
            newDiv.appendChild(checkItem);
            newDiv.appendChild(labelItem);
        }

}