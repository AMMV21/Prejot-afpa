let copyItemGroup = document.getElementById('availableCopyList');
let copyItemPopup = document.getElementById('copyItemPopup');
let resetBtn = document.getElementById('resetCopyItem');


resetBtn.addEventListener('click',()=>{
    removeAllChild(copyItemGroup);
    copyItemPopup.style.display = 'none';
})
function recupIdCopy(title,tab)
{
    
    let copyList = JSON.parse(localStorage.getItem('exemplaires'));
    tab = [];
    for (let [key, value] of copyList.entries()) {

        if (value.titre === title && value.disponibilite === true){
            tab.push(value.codeExemplaire);
        }
        
    }
    if(tab.length > 0)
    {
        if(copyItemGroup.hasChildNodes())
        {
            removeAllChild(copyItemGroup);
        }
        for(let i = 0; i < tab.length; i++)
        {
            let copyItem = document.createElement('option');

            copyItem.textContent = tab[i];
            copyItem.value = tab[i];
            copyItemGroup.appendChild(copyItem);
        }
    }
   
   copyItemPopup.style.display = 'block';    

}