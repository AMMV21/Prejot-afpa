document.getElementById('returnForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var bookCode = document.getElementById('bookCode').value;

    // Ici, faire une requête à votre base de données pour enregistrer le retour du livre.
    // Afficher un message dans la console.

    console.log('Le livre avec le code ' + bookCode + ' a été retourné.');
});