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

let deleteUserButton = document.getElementById('deleteUserButton');
deleteUserButton.addEventListener('click', function(event){
    event.preventDefault();
    let email = document.getElementById('deleteEmailAdherant').value;
    // Vérification de format d'email
    let emailFormat = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if(!emailFormat.test(email)){
        swal("Erreur", "Veuillez entrer un email valide.", "error");
        return;
    }
    if(email === ""){
        swal("Erreur", "Veuillez remplir tous les champs.", "error");
    }else{
        swal({
            title: "Êtes-vous sûr?",
            text: "Êtes-vous sûr de vouloir supprimer cet utilisateur?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
        .then((willDelete) => {
            if (willDelete) {
                try{
                    let resultat = deleteUser(email);
                    if(resultat === 'Impossible de supprimer l\'administrateur.'){
                        swal("Erreur", resultat, "error");
                    }else{
                        swal("Succès", "Utilisateur supprimé avec succès !", "success").then(() => {
                            window.location.href = 'user_management.html';
                        });
                    }
                }catch(err){
                    console.log('Une erreur s\'est produite lors de la suppression de l\'utilisateur :', err.message);
                    swal("Erreur", "Une erreur s'est produite lors de la suppression de l'utilisateur.", "error");
                }
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
// Supprimer un utilisateur
function deleteUser(email){
    let users = JSON.parse(localStorage.getItem('users')) || [];
    let adminExists = users.some(user => user.role === 'admin' && user.email === email);
    if(adminExists){
        return 'Impossible de supprimer l\'administrateur.';
    }else{
        users = users.filter(user => user.email !== email);
        localStorage.setItem('users', JSON.stringify(users));
        return 'Utilisateur supprimé avec succès.';
    }
}