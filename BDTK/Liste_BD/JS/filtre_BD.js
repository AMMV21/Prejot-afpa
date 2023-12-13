let serieForm = document.getElementById('serieForm');
let writerForm= document.getElementById('writerForm');
let tVerifSerieTab =[];
let tVerifWriterTab=[];
let tSerieChecked =[];
let tWriterChecked =[];

window.addEventListener('load',()=>{addSerieFilter(serieForm)});
window.addEventListener('load',()=>{addWriterFilter(writerForm)});

function addSerieFilter(div)
{

    for(let i = 0; i<30;i++)
    {
        createSerieFilter(div,i);
    }

}

function addWriterFilter(div)
{

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

        if(!tVerifSerieTab.includes(serieTitle))
        {
            tVerifSerieTab.push(serieTitle);
            div.appendChild(newDiv);
            checkItem.type = 'checkbox';
            checkItem.id=serieTitle;
            checkItem.value=serieTitle;
            labelItem.htmlFor =serieTitle;
            labelItem.textContent=serieTitle;
            newDiv.appendChild(checkItem);
            newDiv.appendChild(labelItem);

            checkItem.addEventListener('click', (e)=>{addEventCheckSerie(e)})
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

        //on verifie si la série est déjà présente

        if(!tVerifWriterTab.includes(writerName))
        {
            tVerifWriterTab.push(writerName);
            div.appendChild(newDiv);
            checkItem.type = 'checkbox';
            checkItem.id=writerName;
            checkItem.value=writerName;
            labelItem.htmlFor =writerName;
            labelItem.textContent=writerName;
            newDiv.appendChild(checkItem);
            newDiv.appendChild(labelItem);

            checkItem.addEventListener('click', (e)=>{addEventCheckWriter(e)})
        }

        labelItem.textContent = labelItem.textContent.replaceAll(',',' ');
    

}


function addEventCheckSerie(event)
{
    let i=0;
    let item = event.srcElement;

    if(item.checked)
    {
        tSerieChecked.push(item.value);
    }
    else
    {
        i = tSerieChecked.indexOf(item.value);
        delete tSerieChecked[i];
    }
}

function addEventCheckWriter(event)
{
    let i=0;
    let item=event.srcElement;

    if(item.checked)
    {
        tWriterChecked.push(item.value);
        showBD(gallery);
    }
    else
    {
        i = tWriterChecked.indexOf(item);
        delete tWriterChecked[i];
        
        showBD(gallery);
    }
}