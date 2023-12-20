window.addEventListener('load',()=>{checkCopyUrl()});

function checkCopyUrl()
{
   let url = window.location.href;
   let searchParams = new URLSearchParams(url);

   if(searchParams.has('numeroId'))
   {
        codeEx.value = searchParams.get('numeroId');
   }
}