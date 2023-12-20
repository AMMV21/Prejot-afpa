window.addEventListener('load',()=>{checkCopyUrl()});

/*
*Permet de rechercher une information "numeroId" dans l'url
*/
function checkCopyUrl()
{
   
   let params = new URL(document.location).searchParams;
   let idExemplaire = params.get("copyItem");
   let idAdherent = params.get('numeroAdherent');

   //si l'url contient une id d'exemplaire
   if(idExemplaire !== null)
   {
        codeEx.value = idExemplaire;
   }
   //si l'utl contient une id d'adhérent
   if(idAdherent !== null)
   {
      numAdh.value = idAdherent;
   }
}
