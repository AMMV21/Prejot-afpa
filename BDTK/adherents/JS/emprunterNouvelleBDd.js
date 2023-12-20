
boutonEmprunterNouvelleBd.addEventListener('click',()=>{
    envoiInfoAdherent()
});

console.log(boutonEmprunterNouvelleBd);

function envoiInfoAdherent()
{
    let envoiUrl = 'recherche_pret.html';
    let numero = zoneNumeroAdherent.textContent;
    
    window.location.href = `${envoiUrl}?numeroAdherent=${numero}`;
}