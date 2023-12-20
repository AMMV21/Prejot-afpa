window.addEventListener('load',()=>{checkCopyUrl()});

/*
*Permet de rechercher une information "numeroId" dans l'url
*/
function checkCopyUrl()
{
   let url = window.location.href;
   let searchParams = new URLSearchParams(url);

   //si l'url comporte une donnée "numeId" alors l'input "codeEx" prend la valeur de la donnée
   if(searchParams.has('numeroId'))
   {
        codeEx.value = searchParams.get('numeroId');
   }
}
