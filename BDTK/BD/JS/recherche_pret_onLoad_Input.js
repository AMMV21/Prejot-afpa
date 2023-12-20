window.addEventListener('load',()=>{checkCopyUrl()});

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