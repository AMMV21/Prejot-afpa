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

document.getElementById('addUserButton').addEventListener('click', function(){
    window.location.href = 'user_managementAdd.html';

});

document.getElementById('editUserButton').addEventListener('click', function(){
    window.location.href = 'user_managementEdit.html';
});

document.getElementById('deleteUserButton').addEventListener('click', function(){
    window.location.href = 'user_managementSupp.html';
});

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

// Creer un bouton
let btn = document.createElement("button");
btn.innerHTML = "Retour";

// Ajouter une fonction d'écoute
btn.addEventListener('click', function(){
    window.history.back();
});

// Ajouter le bouton au corps du document
document.body.appendChild(btn);