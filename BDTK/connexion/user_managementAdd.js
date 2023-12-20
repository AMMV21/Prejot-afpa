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


let addUserButton = document.getElementById('addUserButton');
addUserButton.addEventListener('click', function(event){
    event.preventDefault();

    let email = document.getElementById('newEmailAdherant').value;
    let password = document.getElementById('newPasswordAdherant').value;
    // Verification format mot de passe
    let passwordFormat = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
    if(!passwordFormat.test(password)){
        swal("Erreur", "Le mot de passe doit contenir au moin un chiffre, une lettre majuscule, une lettre minuscule et au moins 8 caractères ou plus.", "error");
        return;
    }
    if(email === "" || password === ""){
        swal("Erreur", "Veuillez remplir tous les champs.", "error");
    }else{
        try{
            createUser(email, password, "user");
            swal("Succès", "Utilisateur ajouté avec succés !", "success").then(() => {
                window.location.href = 'user_management.html';
            });
        }catch(err){
            console.log('Une erreur s\'est produite lors de la création de l\'utilisateur :', err.message);
            swal("Erreur", "Une erreur s'est produite lors de la création de l'utilisateur.", "error");
        }
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

// Créer un utilisateur
function createUser(email, password, role){
    let users = JSON.parse(localStorage.getItem('users')) || [];
    let user = users.find(user => user.email === email);
    if(user){
        throw new Error('Un utilisateur avec cet email existe déjà.');
    }else{
        let salt = generateSalt(); // définir cette fonction pour générer un sel unique pour chaque utilisateur
        let hasedPassword = hashPassword(password, salt);
        users.push({email: email, password: hasedPassword, salt: salt, role: role});
        localStorage.setItem('users', JSON.stringify(users));
    }
}

