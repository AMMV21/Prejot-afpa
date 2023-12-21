// Récupération éléments DOM
document.getElementById('logoutButton').addEventListener('click', function(){
    try {
        // Récupérer le nom d'utilisateur du localStorage lors de la déconnexion
        let nom = localStorage.getItem('nom');
        let resultat = seDeconnecter(nom);
        console.log(resultat);

        switch(resultat){
            case 'Déconnexion réussie !':
                swal("Succès", "Déconnexion réussie !", "success").then(() =>{
                    setTimeout(function(){
                        window.location.href = 'formConnect.html';
                    }, 1000);
                });
                break;
            case 'Nom d\'utilisateur introuvable.':
                swal("Erreur", "Nom d'utilisateur introuvable.", "error");
                break;
            default:
                swal("Erreur", "Erreur inconnue.", "error");
        }
    } catch (err) {
        console.log('Une erreur s\'est produite lors de la déconnexion :', err.message);
    }
});

let editUserButton = document.getElementById('editUserButton');
editUserButton.addEventListener('click', function(event){
    event.preventDefault();
    let email = document.getElementById('currentEmailAdherant').value;
    let nouveauEmail = document.getElementById('editEmailAdherant').value;
    let nouveauMotdepasse = document.getElementById('editPasswordAdherant').value;

    // Vérification de format d'email
    let emailFormat = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if(!emailFormat.test(email) || !emailFormat.test(nouveauEmail)){
        swal("Erreur", "Veuillez entrer un email valide.", "error");
        return;
    }

    // Vérification de doublon
    if(verifierEmailExistant(nouveauEmail) && email !== nouveauEmail){
        swal("Erreur", "Cet email est déjà utilisé.", "error");
        return;
    }

    let passwordFormat = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
    if(!passwordFormat.test(nouveauMotdepasse)){
        swal("Erreur", "Le mot de passe doit contenir au moins un chiffre, une lettre majuscule, une lettre minuscule et au moins 8 caractères ou plus.", "error");
        return;
    }

    if(email === "" || nouveauEmail === "" || nouveauMotdepasse === ""){
        swal("Erreur", "Veuillez remplir tous les champs", "error");
    }else{
        swal({
            title: "Êtes-vous sûr?",
            text: "Êtes-vous sûr de vouloir modifier cet utilisateur?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
        .then((willEdit) => {
            if (willEdit && !verifierEmailExistant(nouveauEmail)) {
                let resultat = modifierUtilisateur(email, nouveauEmail, nouveauMotdepasse);
                switch(resultat){
                    case 'Utilisateur modifié avec succès !':
                        swal("Succès", "Utilisateur modifié avec succès !", "success").then(() => {
                            setTimeout(function(){
                                window.location.href = 'user_management.html';
                            }, 1000);
                        });
                        break;
                    case 'Utilisateur introuvable.':
                        swal("Erreur", "Utilisateur introuvable", "error");
                        break;
                    case 'Cet email est déjà utilisé.':
                        swal("Erreur", "Cet email est déjà utilisé.", "error");
                        break;
                    default:
                        swal("Erreur", "Erreur inconnue.", "error");
                }
            } else if (willEdit && verifierEmailExistant(nouveauEmail)) {
                swal("Erreur", "Cet email est déjà utilisé.", "error");
            }
        });
    }
});

// Creer un bouton
let btn = document.createElement("button");
btn.innerHTML = "Retour";

// Ajouter une fonction d'écoute
btn.addEventListener('click', function(){
    window.history.back();
});

// Ajouter le bouton au corps du document
document.body.appendChild(btn);

// -------Mes fonction-------
window.onload = function(){
    // Récupérer la div userList
    let userListDiv = document.getElementById('userList');

    // Récupérer les utilisateurs du localStorage
    let users = JSON.parse(localStorage.getItem('users')) || [];

    // Créer un élément HTML pour chaque utilisateur
    users.forEach(user => {
        let userDiv = document.createElement('div');
        userDiv.textContent = 'Email:' + user.email;
        userListDiv.appendChild(userDiv);
    });
}

// Définition de la fonction generateSalt
function generateSalt() {
    let salt = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for (let i = 0; i < 16; i++) {
        salt += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return salt;
}

function hashPassword(password, salt){
    let hash = CryptoJS.SHA256(password + salt);
    return hash.toString(CryptoJS.enc.Hex);
}

function seDeconnecter(){
    // Vérifier si un nom d'utilisateur est stocké dans le localStorage
    if(localStorage.getItem('nom')){
        // Supprimer le nom d'utilisateur du localStorage
        localStorage.removeItem('nom');
        return 'Déconnexion réussie !';
    }else{
        return 'Aucun utilisateur n\'est actuellement connecté.';
    }
}
// Mettre à jour un utilisateur
function modifierUtilisateur(email, nouveauEmail, nouveauMotdepasse){
    let users = JSON.parse(localStorage.getItem('users')) || [];
    let user = users.find(user => user.email === email);
    if(user){
        // Vérification si le nouveauEmail est déjà utilisé par un autre utilisateur
        let autreUtilisateur = users.find(user => user.email === nouveauEmail);
        if(autreUtilisateur && email !== nouveauEmail){
            return 'Cet email est déjà utilisé.';
        }
        user.email = nouveauEmail;
        user.password = hashPassword(nouveauMotdepasse, user.salt);
        // console.log('hashPassword output:', user.password);// Ajouté pour le débogage
        localStorage.setItem('users', JSON.stringify(users));
        return 'Utilisateur modifié avec succès !';
    }else{
        return 'Utilisateur introuvable.';
    }
}
function verifierEmailExistant(email) {
    // Récupérez les utilisateurs du localStorage
    let utilisateurs = JSON.parse(localStorage.getItem('users')) || [];
    // console.log('Utilisateurs:', utilisateurs); // Ajouté pour le débogage

    // Vérifiez si l'email donné existe déjà parmi les utilisateurs
    for(let i = 0; i < utilisateurs.length; i++) {
        // console.log('Vérification de l\'email:', utilisateurs[i].email); // Ajouté pour le débogage
        if(utilisateurs[i].email === email) {
            // console.log('Email trouvé:', email); // Ajouté pour le débogage
            return true;
        }
    }

    // Si aucun utilisateur avec cet email n'a été trouvé, retournez false
    // console.log('Email non trouvé:', email); // Ajouté pour le débogage
    return false;
}