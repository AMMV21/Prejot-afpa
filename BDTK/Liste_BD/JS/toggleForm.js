//Paragraphe de chaque section
let pSerieForm = document.getElementById('serieHeader');
let pWriterForm = document.getElementById('writerHeader');


pSerieForm.addEventListener('click', (e)=>{toggleForm(e,serieForm)})
pWriterForm.addEventListener('click', (e)=>{toggleForm(e,writerForm)})

/**
 * Permet de toggle l'affichage du formulaire ainsi que l'icone font-awesome en lien
 * @param {event} l'evenement en cours 
 * @param {form} le formulaire qui correspond à l'evenement 
 */
function toggleForm(event,form)
{
    let element = event.srcElement

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