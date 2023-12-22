var params = new URLSearchParams(window.location.search);
var numeroAdherent = params.get('numeroAdherent');
var boutonArchiverAdherent = document.getElementById("boutonArchiverAdherent");

// Ajoute un évenement click sur le bouton Archive
boutonArchiverAdherent.addEventListener("click", function () {
    // Affiche la SweetAlert de confirmation
    Swal.fire({
        title: 'Attention!',
        html:'Êtes-vous sûr de vouloir archiver cet adhérent ? <br> Cette action est irréversible',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: "rgba(173, 3, 58, 1)",
        cancelButtonColor: "rgba(220, 130, 39, 1)",
        confirmButtonText: 'Oui, archiver!',
        cancelButtonText: 'Annuler'
    }).then((result) => {
        if (result.isConfirmed) {
            // Si l'utilisateur confirme, archiver l'adhérent actuellement affiché
            archiverAdherent(numeroAdherent);
            Swal.fire({
                title: 'Adhérent archivé!',
                text: "L'adhérent a été archivé avec succès.",
                icon: 'success',
                confirmButtonColor: "rgba(173, 3, 58, 1)",
            }).then(() => {
                // Redirection vers la page archiveAdherents.html
                window.location.href = 'archiveAdherents.html';
            });
        }
    });
});

function archiverAdherent(numeroAdherentAArchiver) {
   console.log(numeroAdherentAArchiver);

    if(numeroAdherentAArchiver < 10 ){
        numeroAdherentAArchiver = "0"+numeroAdherentAArchiver;
        
    }
    
   
    var indexAdherentAArchiver = adherentStorage.findIndex(adherent => adherent.numeroAdherent === numeroAdherentAArchiver);
    console.log(adherentAArchiver);
    // Vérifiez si l'adhérent à archiver a été trouvé
    if (indexAdherentAArchiver !== -1) {

        // Récupére les données de l'adhérent
        var adherentAArchiver = adherentStorage[indexAdherentAArchiver];

        

        // Ajoute l'adhérent au tableau des archivés
        adherentArchiverStorage.push(adherentAArchiver);
        localStorage.setItem('adherentArchiver', JSON.stringify(adherentArchiverStorage));
        // Retire l'adhérent du tableau actif
        adherentStorage[indexAdherentAArchiver].nom = "Supprimé";
        adherentStorage[indexAdherentAArchiver].prenom = "Supprimé";
        adherentStorage[indexAdherentAArchiver].mail = "Supprimé";
        adherentStorage[indexAdherentAArchiver].codePostal = "Supprimé";
        adherentStorage[indexAdherentAArchiver].adresse = "Supprimé";
        
        

        // Mettre à jour le localStorage
        localStorage.setItem('adherent', JSON.stringify(adherentStorage));
        

    } else {
        // adhérent pas trouvé
        console.error('Adhérent non trouvé dans le tableau actif.');
    }

    adherentArchiverStorage.push(adherentStorage[indexAdherentAArchiver]);
  
}
// Fonction pour obtenir le nombre total d'adhérents (actifs et archivés)
function getTotalAdherents() {
    return adherentStorage.length + adherentArchiverStorage.length;
}
// Fonction pour obtenir un adhérent par son numéro
function getAdherentByNumero(numeroAdherent) {
    // Recherche d'abord dans les adhérents actifs
    var adherentActif = adherentStorage.find(adherent => adherent.numeroAdherent === numeroAdherent);
    // Si non trouvé, recherche dans les adhérents archivés
    if (!adherentActif) {
        adherentActif = adherentsArchives.find(adherent => adherent.numeroAdherent === numeroAdherent);
    }

    return adherentActif;
}


