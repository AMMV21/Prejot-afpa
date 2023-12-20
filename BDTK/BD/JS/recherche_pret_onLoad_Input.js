window.addEventListener('load',()=>{checkCopyUrl()});

/*
*Permet de rechercher une information "numeroId" dans l'url
*/
function checkCopyUrl()
{
   
   let params = new URL(document.location).searchParams;
   let idExemplaire = params.get("copyItem");

   if(idExemplaire !== null)
   {
        codeEx.value = idExemplaire;
   }
   else
   {
      console.log(idExemplaire);
   }
}
