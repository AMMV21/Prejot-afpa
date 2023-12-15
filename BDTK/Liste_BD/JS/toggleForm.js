//Paragraphe de chaque section
let pSerieForm = document.getElementById('serieHeader');
let pWriterForm = document.getElementById('writerHeader');

//icon de chaque paragraphe
let writerArrow = document.getElementById('writerArrow');
let serieArrow = document.getElementById('serieArrow');


//eventvement si clique sur paragraphe
pSerieForm.addEventListener('click', (e)=>{toggleForm(e,serieForm)});
pWriterForm.addEventListener('click', (e)=>{toggleForm(e,writerForm)});

//evenement si clique icon
writerArrow.addEventListener('click', (e)=>{toggleFormIcon(e,writerForm)});
serieArrow.addEventListener('click', (e)=>{toggleFormIcon(e,serieForm)});
/**
 * Permet de toggle l'affichage du formulaire ainsi que l'icone font-awesome en lien
 * @param {event} l'evenement en cours 
 * @param {form} le formulaire qui correspond à l'evenement 
 */
function toggleForm(event,form)
{
    let element = event.srcElement;

    //permet de corriger l'erreur si click sur l'icon qui se trouve dans la balise paragraphe
    if(element.children[0] !== undefined)
    {
        if(element.lastChild.classList.contains('fa-angle-down'))
         {
            //si la balice "i" contiens la classe "fa-angle-down", on la change
            element.lastChild.classList.replace('fa-angle-down','fa-angle-right');
        }
        else
        {
            //si la balice "i" ne contiens pas la classe "fa-angle-down", on la change
            element.lastChild.classList.replace('fa-angle-right','fa-angle-down');
        }
        form.classList.toggle('hidden');
        form.style.overflowX= 'hidden'
        form.style.overflowY= 'scroll';

        for(let i = 0; i < form.children.length; i++)
        {
            //on cache tout les "enfants" du formulaire
            form.children[i].classList.toggle('hidden');

            if(form.style.height != '350px')
            {
                form.style.height = '350px';
            }
            else
            {
                form.style.height = '40%';
            }
        }
    }
    
}

function toggleFormIcon(event,form)
{
    let element = event.srcElement;

    if(element.classList.contains('fa-angle-down'))
    {
        //si la balice "i" contiens la classe "fa-angle-down", on la change
        element.classList.replace('fa-angle-down','fa-angle-right');
    }
    else
    {
        //si la balice "i" ne contiens pas la classe "fa-angle-down", on la change
        element.classList.replace('fa-angle-right','fa-angle-down');
    }
    form.classList.toggle('hidden'); 
    form.style.overflowX= 'hidden';
    form.style.overflowY= 'scroll';

    for(let i = 0; i < form.children.length; i++)
    {
        //on cache tout les "enfants" du formulaire
        form.children[i].classList.toggle('hidden');
       

        if(form.style.height != '350px')
        {
            form.style.height = '350px';
        }
        else
        {
            form.style.height = '40%';
        }
    }
}
