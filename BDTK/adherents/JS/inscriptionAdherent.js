// Récupère les adhérents stockés dans le localStorage
let adherentStorage = JSON.parse(localStorage.getItem('adherent')) || [];
let adherentArchiverStorage = JSON.parse(localStorage.getItem('adherentsArchiver')) || [];

// Fonction pour inscription
function inscription(e) {

    e.preventDefault();

    // Récupère les valeurs des champs du formulaire
    var nom = document.getElementById('nomAdherentInscrit').value;
    var prenom = document.getElementById('prenomAdherentInscrit').value;
    var mail = document.getElementById('mailAdherentInscrit').value;
    var adresse = document.getElementById('adresseAdherentInscrit').value;
    var codePostal = document.getElementById('codePostalAdherentInscrit').value;

    // Valide les champs avec un regEx
    var erreurs = [];

    if (!validerChamp(nom, /^[A-Z][a-zÀ-ÖØ-öø-ÿ]{2,}(?:-[A-Z][a-zÀ-ÖØ-öø-ÿ]*)?$/)) {
        erreurs.push('Veuillez saisir un nom valide pas de chiffre, avec une majuscule au début et au moins 3 lettres.');
    }

    if (!validerChamp(prenom, /^[A-Z][a-zÀ-ÖØ-öø-ÿ]{2,}(?:-[A-Z][a-zÀ-ÖØ-öø-ÿ]*)?$/)) {
        erreurs.push('Veuillez saisir un prénom valide pas de chiffre, avec une majuscule au début et au moins 3 lettres.');
    }

    if (!validerChamp(adresse, /^\d{1,3}\s[\p{L}0-9\s\-'']+$/u)) {
        erreurs.push('Veuillez saisir une adresse valide.');
    }

    if (!validerChamp(codePostal, /^\p{N}{5}\s[\p{L}0-9\s\-'']+$/u)) {
        erreurs.push('Veuillez saisir un code postal valide.');
    }

    if (!validerChamp(mail, /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/)) {
        erreurs.push('Veuillez saisir une adresse e-mail valide.');
    } else if (emailExisteDeja(mail)) {
        erreurs.push('Cet e-mail est déjà utilisé.');
    }

    // Vérifie si un adhérent avec le même nom et prénom existe déjà
    if (adherentExisteDeja(nom, prenom, adresse, codePostal)) {
        erreurs.push("Cet adhérent existe déjà.");
    }

    // Si des erreurs sont présentes, elles sont affichée dans une seule SweetAlert
    if (erreurs.length > 0) {
        afficherErreurs(erreurs);
        return;
    }

    // Crée un nouvel objet adhérent avec les données du formulaire
    var nouvelAdherent = {
        numeroAdherent: nouveauNumeroAdherent(), // Obtient un nouveau numéro d'adhérent unique
        nom: nom,
        prenom: prenom,
        mail: mail,
        adresse: adresse,
        codePostal: codePostal,
        nbr_emprunt: 0,
        emprunt1: "",
        emprunt2: "",
        emprunt3: "",
        cotisation: "A jour",
        amende: "0"
    };
//     function genererNouveauNumeroAdherent() {
//   // Utilisez le nombre total d'adhérents (actifs et archivés) plutôt que le dernier numéro actif
//     var totalAdherents = ( adherentStorage.length + 2 ) +  adherentArchiverStorage.length;
//     return totalAdherents.toString();
// }

    // Ajoute le nouvel adhérent au tableau d'adhérents existant
    adherentStorage.push(nouvelAdherent);

    // Enregistre le tableau mis à jour dans le localStorage
    localStorage.setItem("adherent", JSON.stringify(adherentStorage));

    // Affiche une fenêtre (SweetAlert) pour indiquer le succès de l'inscription
    Swal.fire({
        title: 'Inscription réussie!',
        text: 'Vous êtes maintenant inscrit comme adhérent.',
        icon: 'success',
        confirmButtonText: 'OK'
    }).then(() => {
        // Redirige l'utilisateur vers la page de profil avec le numéro d'adhérent en paramètre
        window.location.href = "profilAdherents.html?numeroAdherent=" + nouvelAdherent.numeroAdherent;
    });
}

// Fonction pour vérifier si un adhérent existe déjà
function adherentExisteDeja(nom, prenom, adresse, codePostal) {
    return adherentStorage.some(adherent => adherent.nom === nom && adherent.prenom === prenom && adherent.adresse===adresse && adherent.codePostal === codePostal);
}
//Fonction pour vérifier si l'email est déjà utilisé
function emailExisteDeja(email) {
    return adherentStorage.some(adherent => adherent.mail === email);
}

// Fonction pour valider un champ
function validerChamp(champ, regex) {
    return regex.test(champ);
}

// Fonction pour afficher les messages d'erreur
function afficherErreurs(erreurs) {
    Swal.fire({
        title: 'Erreurs',
        html: erreurs.join('<br>'),
        icon: 'error',
        confirmButtonText: 'Ok',
        confirmButtonColor: "rgba(173, 3, 58, 1)",
        customClass: {
            content: 'pre-line', //Sauts de ligne
        },
    });
}

var formulaire = document.querySelector('form');
formulaire.addEventListener('submit', inscription);

// Fonction pour obtenir un nouveau numéro d'adhérent unique
function nouveauNumeroAdherent() {
    // Si aucun adhérent n'existe, retourne "1" comme premier numéro d'adhérent
    if (adherentStorage.length === 0) {
        return "1";
    }

    // Obtient le dernier adhérent dans le tableau
    var dernierAdherent = adherentStorage[adherentStorage.length - 1];

    // Calcule un nouveau numéro en incrémentant le dernier numéro et le convertit en chaîne de caractères
    var nouveauNumero = parseInt(dernierAdherent.numeroAdherent) + 1;
    return nouveauNumero.toString();
}