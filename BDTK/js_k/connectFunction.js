let myMap = new Map();
myMap.set('debois.kevin@example.com', {password: 'test'});
myMap.set('tintin.milou@example.com', {password: 'herge'});
myMap.set('asterix.obelix@example.com', {password: 'idefix'});
// console.log(myMap);

document.getElementById('btnRechercher').addEventListener('click', function(event){

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
                swal("Succès", "Connexion réussie !", "success");
                break;
            case 'Mot de passe incorrect.':
                swal("Erreur", "Mot de passe incorrect.", "error");
                break;
            case 'Nom d\'utilisateur introuvable.':
                swal("Erreur", "Nom d'utilisateur introuvable.", "error");
                break;
            default:
                swal("Erreur", "Erreur inconnue.", "error");
        }
    }   
});


function seConnecter(nom, motdepasse){
    if(myMap.size === 0){
        return 'Aucun utilisateur enregistré.';
    }else if(myMap.has(nom)){
        let utilisateur = myMap.get(nom);
        if(utilisateur.password === motdepasse){
            return 'Connexion réussie !';
        }else{
            return 'Mot de passe incorrect.';
        }

    }else{
        return 'Nom d\'utilisateur introuvable.';
    }
}