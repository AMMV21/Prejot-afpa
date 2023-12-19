// -------Mes fonction-------
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

function seConnecter(email, motdepasse){
    let users = JSON.parse(localStorage.getItem('users')) || [];
    let user = users.find(user => user.email === email);
    if(user){
        if(user.password === hashPassword(motdepasse, user.salt)){
    
            // Stocker le nom d'utilisateur dans le localStorage lors de la connexion réussie
            localStorage.setItem('nom', email);
            localStorage.setItem('role', user.role);
            return 'Connexion réussie !';
        }
    }
    // Si l'identifiant ou le mot de passe est incorrect, renvoyez le message d'erreur générique
    return 'Identifiant ou mot de passe incorrect.';
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

document.getElementById('btnRechercher').addEventListener('click', function(event){
    try {
        // Empêche le formulaire d'être soumis normalement
        event.preventDefault();

        // Récupérez les valeurs des champs de saisie de l'email et du mot de passe
        let email = document.getElementById('emailAdherant').value;
        let motdepasse = document.getElementById('passwordAdherant').value;
        
        // Verifier si les champs ne sont pas vides
        if(email === "" || motdepasse === ""){
            swal("Erreur", "Veuillez remplir tous les champs.", "error");
        }else{
           // Appelez la fonction seConnecter avec ces valeurs
           let resultat = seConnecter(email, motdepasse);
        
        // Switch alert
        switch(resultat){
            case 'Connexion réussie !':
                swal("Succès", "Connexion réussie !", "success").then(() => {
                    setTimeout(function(){
                        let role = localStorage.getItem('role');
                        switch(role){
                            case 'admin':
                                window.location.href = 'user_management.html';
                                break;
                            case 'user':
                                window.location.href = 'index.html';
                                break;
                            default:
                                console.log('Rôle inconnu :', role);
                        }
                    }, 1000);
                });
                break;
            case 'Identifiant ou mot de passe incorrect':
                swal("Erreur", "Identifiant ou mot de passe incorrect.", "error");
                break;
            default:
                swal("Erreur", "Erreur inconnue.", "error");
            }
        }
    }catch(err){
        console.log('Une erreur s\'est produite lors de la connexion :', err.message);
    }
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
