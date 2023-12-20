// Récupère le numéro d'adhérent de l'URL
var params = new URLSearchParams(window.location.search);
var numeroAdherent = params.get('numeroAdherent');
if (numeroAdherent) {
    numeroAdherent = parseInt(numeroAdherent);
    // Utilise le numéroAdherent pour récupérer les détails de l'adhérent


    // Fonction pour mettre à jour les détails de l'adhérent sur la page
   
function updateDetails() {
    var zoneNumeroAdherent = document.getElementById("zoneNumeroAdherent");
    zoneNumeroAdherent.innerText = adherentStorage[numeroAdherent-1].numeroAdherent; // -1

    var zoneNumeroAdherent = document.getElementById("zoneNumeroAdherentDeux");
    zoneNumeroAdherent.innerText = adherentStorage[numeroAdherent-1].numeroAdherent;

    var zoneNom = document.getElementById("zoneNom");
    zoneNom.innerText = adherentStorage[numeroAdherent-1].nom;

    var zonePrenom = document.getElementById("zonePrenom");
    zonePrenom.innerText = adherentStorage[numeroAdherent-1].prenom;

    var zoneAdresse = document.getElementById("zoneAdresse");
    zoneAdresse.innerText = adherentStorage[numeroAdherent-1].adresse;

    var zoneVille = document.getElementById("zoneVille");
    zoneVille.innerText = adherentStorage[numeroAdherent-1].codePostal;

    var zoneMail = document.getElementById("zoneMail");
    zoneMail.innerText = adherentStorage[numeroAdherent-1].mail;

    var cotisationStatut = document.getElementById("cotisationStatut");
    cotisationStatut.innerText = adherentStorage[numeroAdherent-1].cotisation;

    var soldeEnEuro = document.getElementById("soldeEnEuro");
    soldeEnEuro.innerText = adherentStorage[numeroAdherent-1].amende;

    var nombreEmpruntsEnCours = document.getElementById("nombreEmpruntsEnCours");
    nombreEmpruntsEnCours.innerText = adherentStorage[numeroAdherent-1].nbr_emprunt;

//Permet d'emprunter une nouvelle BD si surpérieure ou = à 3 le bouton disparait
var boutonEmprunterNouvelleBd = document.getElementById("boutonEmprunterNouvelleBd")

    if (adherentStorage[numeroAdherent-1].nbr_emprunt >= 3)
    boutonEmprunterNouvelleBd.style.display = "none";





//Permet de mettre à jours la cotisation

    var boutonRenouvelerCotisation = document.getElementById("boutonRenouvelerCotisation")
    boutonRenouvelerCotisation.addEventListener("click", function(){
    //pop-up de confirmation
    Swal.fire({
        title: "Voulez-vous renouveller votre cotisation pour la période de 1 ans ?",
        text: "",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "rgba(173, 3, 58, 1)",
        cancelButtonColor: "rgba(220, 130, 39, 1)",
        cancelButtonText: "Annuler",
        confirmButtonText: "Renouveler"
        //Si click sur renouveler, le statut pas à jour deviens à jour
        //Si j'ai le temps modifier à jour avec les expiration dans ou à expiré avec des dates
        }).then((result) => {
            if (result.isConfirmed) {
                cotisationStatut.innerText = "A jour";

                if (adherentStorage[numeroAdherent-1]){
                    adherentStorage[numeroAdherent-1].cotisation = cotisationStatut.innerText;
                    localStorage.setItem("adherent", JSON.stringify(adherentStorage));
                }
                //Message de confirmation
                Swal.fire({
                    confirmButtonColor: "rgba(173, 3, 58, 1)",
                    title: "Le renouvellement de la cotisation à bien été éffectué",
                    text:"",
                    icon:"succes"
                });
                // Met à jour les information de l'adhérent
                updateDetails()
            }
        });
    })
//Permet de payer l'amende
    var boutonPayerAmende = document.getElementById("boutonPayerAmende");

    boutonPayerAmende.addEventListener("click", function () {
        //Message de confirmation avec les information du montant
        Swal.fire({
            title: "Voulez-vous payer votre amende d'un montant de : " + soldeEnEuro.innerText + " € ?",
            text: "",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "rgba(173, 3, 58, 1)",
            cancelButtonColor: "rgba(220, 130, 39, 1)",
            cancelButtonText: "Annuler", // Si annulé rien ne se passe, la mise à jours ne s'effectue pas
            confirmButtonText: "Oui, je veux payer"
            // Si click "oui je veux payer" l'amende passe à 0
        }).then((result) => {
            if (result.isConfirmed) {
                soldeEnEuro.innerText = "0";

                if (adherentStorage[numeroAdherent-1]) {
                    adherentStorage[numeroAdherent -1].amende= soldeEnEuro.innerText;
                    localStorage.setItem("adherent", JSON.stringify(adherentStorage));
                    
                }
                //Message de confirmation que les données ont bien été mise à jours
                Swal.fire({
                    title: "Le paiement a bien été effectué",
                    confirmButtonColor: "rgba(173, 3, 58, 1)",
                    text: "",
                    icon: "success"
                });

                // Met à jour les détails de l'adhérent après le paiement
                updateDetails();
            }
        });
    });
    // Si l'amende est égale à 0 le bouton payer amende disparait
    if (adherentStorage[numeroAdherent-1].amende === '0') {
        boutonPayerAmende.style.display = 'none';
        zoneInfoAmende.style.paddingTop = "30%";
    }
}

    // Affiche les détails dans les zones correspondantes
    if (adherentStorage[numeroAdherent-1]) {
        updateDetails();
    } else {
        console.error("Détails de l'adhérent non trouvés pour le numéro: " + numeroAdherent);
    }
} else {
    console.error("Numéro d'adhérent non spécifié dans les paramètres de l'URL.");
}

// En cliquant sur le bouton modifier la div disparait et une autre div apparait avec des
//  input type text afin de changer les infos
    
var centreInfoVisible = document.getElementById("centreInfoVisible")
var centreInfoInvisible = document.getElementById("centreInfoInvisible")
var boutonModifierAdherent = document.getElementById("boutonModifierAdherent");

boutonModifierAdherent.addEventListener("click", function(){      
    centreInfoVisible.style.display = "none";
    centreInfoInvisible.style.display = "flex";
    
//Permet de mettre l'id dans le placeholder afin d'y voir les infos pendant les modifications

    //Nom
    var zoneNom = document.getElementById("zoneNom");
    var inputNom = document.getElementById("inputNom");
    var valeurNom = zoneNom.innerText;
    inputNom.placeholder = valeurNom;

    //Prenom
    var zonePrenom = document.getElementById("zonePrenom");
    var inputPrenom = document.getElementById("inputPrenom");
    var valeurPrenom = zonePrenom.innerText;
    inputPrenom.placeholder = valeurPrenom;
    //Adresse
    var zoneAdresse = document.getElementById("zoneAdresse");
    var inputAdresse = document.getElementById("inputAdresse");
    var valeurAdresse = zoneAdresse.innerText;
    inputAdresse.placeholder = valeurAdresse;

    //Ville
    var zoneVille = document.getElementById("zoneVille");
    var inputVille = document.getElementById("inputVille");
    var valeurVille = zoneVille.innerText;
    inputVille.placeholder = valeurVille;
    //Mail
    var zoneMail = document.getElementById("zoneMail");
    var inputMail = document.getElementById("inputMail");
    var valeurMail = zoneMail.innerText;
    inputMail.placeholder = valeurMail;
})

//Bouton annuler, cache le formulaire et remet les informations sans les mettre à jour.

var boutonAnnulerAdherent = document.getElementById("boutonAnnulerAdherent")
boutonAnnulerAdherent.addEventListener("click", function(){
    centreInfoInvisible.style.display = "none";
    centreInfoVisible.style.display = "flex";
})

//Bouton Valider, Enregistre les informations si modification

var boutonValiderAdherent = document.getElementById("boutonValiderAdherent");
boutonValiderAdherent.addEventListener("click", function (e) {
    if (!verifierFormulaire()) {
        e.preventDefault();
    }
});

//Controle des champ du formulaire avec pop-up (sweet alert)
function verifierFormulaire() {
    var erreurs = [];
// InputId est le parametre qu'on utilise pour savoir quel champ on vérifie
    function verifierChamp(inputId, regex, errorMessage, obligatoire = false) {
        var inputElement = document.getElementById(inputId); // Grace a cela on récupere le nom du champs que l'on met en parametre
        var inputValue = inputElement.value.trim(); 
        console.log(inputValue);
// Crée une erreur si les conditions ne sont pas respectées
        if (obligatoire && (!inputValue || !regex.test(inputValue) || inputValue.length < 3)) {
            erreurs.push(errorMessage);
        } else if (!obligatoire && inputValue && !regex.test(inputValue)) {
            erreurs.push(errorMessage);
        } else {
            console.log('Changement correct pour ' + inputId);
        }
    }

    
//Mes RegEx
    verifierChamp("inputNom", /^[A-Z][a-zÀ-ÖØ-öø-ÿ]*(?:-[A-Z][a-zÀ-ÖØ-öø-ÿ]*)?$/, 'Veuillez saisir un nom valide avec une majuscule au debut et au moins 3 lettres.');
    verifierChamp("inputPrenom", /^[A-Z][a-zÀ-ÖØ-öø-ÿ]*(?:-[A-Z][a-zÀ-ÖØ-öø-ÿ]*)?$/, 'Veuillez saisir un prénom valide avec une majuscule au debut et au moins 3 lettres.');
    verifierChamp("inputAdresse", /^\d{1,3}\s[A-Za-z0-9\s\-]+$/, 'Veuillez saisir une adresse valide.');
    verifierChamp("inputVille", /^\d{5}\s[A-Za-z0-9\s]+$/, 'Veuillez saisir une ville valide.');
    verifierChamp("inputMail", /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/, 'Veuillez saisir une adresse e-mail valide.');
    
    // Vérification de l'e-mail déjà existant
    var inputMail = document.getElementById("inputMail");
    var nouveauMail = inputMail.value.trim();
    if (emailExists(nouveauMail)) {
        erreurs.push('L\'adresse e-mail existe déjà. Veuillez saisir une adresse e-mail différente.');
    }

//Si il y'a une erreur, d'où vient l'erreur
    if (erreurs.length > 0) {
        Swal.fire({
            icon: 'error',
            confirmButtonColor: "rgba(173, 3, 58, 1)",
            title: 'Erreurs',
            html: erreurs.join('<br>'),
        });
        return false; 
    } 
// S'il n'y à pas d'erreur 
    Swal.fire({
        title: "Les changements ont bien été effectués",
        confirmButtonColor: "rgba(173, 3, 58, 1)",
        text: "",
        icon: "success"
    });

    return true;
}
//Recherche les email déjà utilisées dans le localStorage
function emailExists(newEmail) {
    for (var i = 0; i < adherentStorage.length; i++) {
        if (i !== numeroAdherent - 1 && adherentStorage[i].mail.trim().toLowerCase() === newEmail.toLowerCase()) {
            return true; // E-mail trouvé dans un autre adhérent
        }
    }
    return false; // E-mail non trouvé
}

//Fonction pour mon formulaire
var formModif = document.getElementById('formModif');

formModif.addEventListener("submit", function (e) {
    e.preventDefault(); // Empêche la soumission par défaut du formulaire

    // Récupérez les nouvelles valeurs depuis les champs de formulaire
    var nouveauNom = document.getElementById("inputNom").value;
    var nouveauPrenom = document.getElementById("inputPrenom").value;
    var nouvelleAdresse = document.getElementById("inputAdresse").value;
    var nouvelleVille = document.getElementById("inputVille").value;
    var nouveauMail = document.getElementById("inputMail").value;

    // Vérifiez si les champs sont vides, sinon les anciennes valeurs sont conservées
    nouveauNom = nouveauNom.trim() !== "" ? nouveauNom : adherentStorage[numeroAdherent - 1].nom;
    nouveauPrenom = nouveauPrenom.trim() !== "" ? nouveauPrenom : adherentStorage[numeroAdherent - 1].prenom;
    nouvelleAdresse = nouvelleAdresse.trim() !== "" ? nouvelleAdresse : adherentStorage[numeroAdherent - 1].adresse;
    nouvelleVille = nouvelleVille.trim() !== "" ? nouvelleVille : adherentStorage[numeroAdherent - 1].codePostal;
    nouveauMail = nouveauMail.trim() !== "" ? nouveauMail : adherentStorage[numeroAdherent - 1].mail;

    // Met à jour les valeurs dans le LocalStorage
    if (adherentStorage[numeroAdherent - 1]) {
        adherentStorage[numeroAdherent - 1].nom = nouveauNom;
        adherentStorage[numeroAdherent - 1].prenom = nouveauPrenom;
        adherentStorage[numeroAdherent - 1].adresse = nouvelleAdresse;
        adherentStorage[numeroAdherent - 1].codePostal = nouvelleVille;
        adherentStorage[numeroAdherent - 1].mail = nouveauMail;

        // Sauvegarde les modifications dans le LocalStorage
        localStorage.setItem("adherent", JSON.stringify(adherentStorage));

        // Met à jour les détails sur la page
        updateDetails();

        // Réaffiche la div d'informations après la modification
        centreInfoInvisible.style.display = "none";
        centreInfoVisible.style.display = "flex";
    }
});
function rechercheTitreExemplaire(valeurChercher){
    let exemplaireLocalStorage2 = JSON.parse(localStorage.getItem('exemplaires'));
    for (let [key, value] of exemplaireLocalStorage2.entries()) {

        if (value.codeExemplaire === valeurChercher){
            rechercheBD(value.titre);
            break;
        }
        
    }

}
function rechercheBD(titre){
    for(let i = 0; i < tliste_bd.length; i++ ){
        if(tliste_bd[i][1].titre === titre){
            empruntBD(listeDesEmpruntEnCours,tliste_bd[i][1]);
        }

    }
}

var listeDesEmpruntEnCours = document.getElementById("listeDesEmpruntEnCours");
  function empruntBD(div,bdTableau)
{
    //initialisation des div à créer
    let nouvelleDiv = document.createElement('div');
    nouvelleDiv.setAttribute('class','divEmprunt');
    let nouvelleImage = document.createElement('img');
    let nouveauTitreSerie = document.createElement('h3');
    let newTitle = document.createElement('h2');
    let nouvelAuteur = document.createElement('h4');

    newTitle.textContent = bdTableau.titre;
    let numeroSerie = bdTableau.idSerie;
    nouveauTitreSerie.textContent = series.get(numeroSerie).nom;
    let numeroAuteur = bdTableau.idAuteur;
    nouvelAuteur.textContent = auteurs.get(numeroAuteur).nom.replaceAll(',',' ');
    let numeroVolume = bdTableau.numero;
    nouvelleImage.src=`./Ressources/albums/${series.get(numeroSerie).nom}-${numeroVolume}-${bdTableau.titre}.jpg`;

    div.appendChild(nouvelleDiv);
    nouvelleDiv.appendChild(newTitle);
    nouvelleDiv.appendChild(nouveauTitreSerie);
    nouvelleDiv.appendChild(nouvelAuteur);
    nouvelleDiv.appendChild(nouvelleImage); 
}

if (adherentStorage[numeroAdherent-1].emprunt1 !== "" ){
    rechercheTitreExemplaire(adherentStorage[numeroAdherent-1].emprunt1);
}
if (adherentStorage[numeroAdherent-1].emprunt2 !== "" ){
    rechercheTitreExemplaire(adherentStorage[numeroAdherent-1].emprunt2);
}
if (adherentStorage[numeroAdherent-1].emprunt3 !== "" ){
    rechercheTitreExemplaire(adherentStorage[numeroAdherent-1].emprunt3);
}