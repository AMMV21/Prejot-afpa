// Récupère le numéro d'adhérent de l'URL
let adherentStorage = new Map(JSON.parse(localStorage.getItem("adherent")));

var params = new URLSearchParams(window.location.search);

console.log(params);

var numeroAdherent = params.get('numeroAdherent');
if (numeroAdherent) {
    // Utilise le numéroAdherent pour récupérer les détails de l'adhérent
    var detailsAdherent = adherentStorage.get(numeroAdherent);
    console.log(detailsAdherent);

    // Fonction pour mettre à jour les détails de l'adhérent sur la page
    function updateDetails() {
        var zoneNumeroAdherent = document.getElementById("zoneNumeroAdherent");
        zoneNumeroAdherent.innerText = detailsAdherent.numeroAdherent;

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
        
        var empruntNumeroUn = document.getElementById("empruntNumeroUn");
        empruntNumeroUn.innerText = detailsAdherent.emprunt1;

        var empruntNumeroDeux = document.getElementById("empruntNumeroDeux");
        empruntNumeroDeux.innerText = detailsAdherent.emprunt2;

        var boutonPayerAmende = document.getElementById("boutonPayerAmende");

        boutonPayerAmende.addEventListener("click", function () {
            Swal.fire({
                title: "Voulez-vous payer votre amende d'un montant de : " + soldeEnEuro.innerText + " € ?",
                text: "",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                cancelButtonText: "Annuler",
                confirmButtonText: "Oui, je veux payer"
            }).then((result) => {
                if (result.isConfirmed) {
                    soldeEnEuro.innerText = "0";

                    if (detailsAdherent) {
                        detailsAdherent.amende = soldeEnEuro.innerText;
                        adherentStorage.set(numeroAdherent, detailsAdherent);
                        localStorage.setItem("adherent", JSON.stringify([...adherentStorage.entries()]));
                        
                    }

                    Swal.fire({
                        title: "Le paiement a bien été effectué",
                        text: "",
                        icon: "success"
                    });

                    // Mettre à jour les détails après le paiement
                    updateDetails();
                }
            });
        });

        if (detailsAdherent.amende === '0') {
            boutonPayerAmende.style.display = 'none';
            zoneInfoAmende.style.paddingTop = "30%";
        }
    }

    // Affiche les détails dans les zones correspondantes
    if (detailsAdherent) {
        updateDetails();
    } else {
        console.error("Détails de l'adhérent non trouvés pour le numéro: " + numeroAdherent);
    }
} else {
    console.error("Numéro d'adhérent non spécifié dans les paramètres de l'URL.");
}
    



