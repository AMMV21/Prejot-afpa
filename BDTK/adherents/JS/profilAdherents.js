// Récupére le numéro d'adhérent de l'URL
var params = new URLSearchParams(window.location.search);

console.log(params);

var numeroAdherent = params.get('numeroAdherent');
if (numeroAdherent) {
    // Utiliser le numéroAdherent pour récupérer les détails de l'adhérent
    var detailsAdherent = adherent.get(numeroAdherent);

    // Afficher les détails dans les zones correspondantes
    if (detailsAdherent) {
        var zoneNom = document.getElementById("zoneNom");
        zoneNom.innerText = detailsAdherent.nom;

        var zonePrenom = document.getElementById("zonePrenom");
        zonePrenom.innerText = detailsAdherent.prenom;

        var zoneAdresse = document.getElementById("zoneAdresse");
        zoneAdresse.innerText = detailsAdherent.adresse;

        var zoneVille = document.getElementById("zoneVille");
        zoneVille.innerText = detailsAdherent.codePostal;

        var zoneMail = document.getElementById("zoneMail");
        zoneMail.innerText = detailsAdherent.mail;

        var cotisationStatut = document.getElementById("cotisationStatut");
        cotisationStatut.innerText = detailsAdherent.cotisation;

        var soldeEnEuro = document.getElementById("soldeEnEuro");
        soldeEnEuro.innerText = detailsAdherent.amende;
    } else {
        console.error("Détails de l'adhérent non trouvés pour le numéro: " + numeroAdherent);
    }
} else {
    console.error("Numéro d'adhérent non spécifié dans les paramètres de l'URL.");
}