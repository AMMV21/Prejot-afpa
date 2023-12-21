// Recuperer les elements html
let btn_new_pret = document.getElementById('btn_new_pret');
// abbonenement 
btn_new_pret.addEventListener('click', ()=> { window.location.href = "./recherche_pret.html";} );

$(document).ready(function () {
    var tableEmprunt = $('#tableEmprunts').DataTable({
        responsive: true,
        //Permet de changer la langue de la barre de recherche
        "oLanguage": {
            "sSearch": "Recherche"
        },
        //Modifie le nombre de ligne que l'ont peux afficher
        "lengthMenu": [10, 20, 30],
        //mofifie l'ensemble de la langue du tableau
        "language": {
            "lengthMenu": "Voir par _MENU_ Emprunts",
            "info": "",
            "paginate": {
                "first": "Première",
                "last": "Dernière",
                "previous": "Précédent",
                "next": "Suivant"
            },
            "emptyTable": "Aucun résultat trouvé",
            "infoEmpty": "Affichage de 0 à 0 sur 0 Emprunts",
            "infoFiltered": "Recherche sur un total de _MAX_ Emprunts.",
            "zeroRecords": "Aucun résultat trouvé"
        },
        //Cache la première colonne avec les clée valeur pour chaque emprunts
        "columnDefs": [
            { "targets": 0, "visible": false }
        ]
    }); 
    
    //Ajoute un evenement click sur les tr qui permet de se rendre sur la page profilAdherents
    $('#tableEmprunts tbody').on('click', 'tr', function () {
        // Récupérer les données de la ligne
        var rowData = table.row(this).data();

        // Construire l'URL avec l'identifiant unique (numéro d'adhérent)
        var pageUrl = "profilAdherents.html?numeroAdherent=" + rowData[0];
         
        // Rediriger l'utilisateur vers la page profilAdherents.html avec les informations de l'adhérent
        window.location.href = pageUrl;
    });

    let i = 0;
    // Ajouter les colonnes à DataTable en utilisant les clés de la carte
    listEmpruntsStorage.forEach(function (values) {
        // Ajouter une nouvelle ligne dans le tableau
        var rowData = [
            i,
            values.nomEmprunteur,
            values.prenomEmprunteur,
            values.numeroAdherent,
            values.codeExemplaire,
            values.dateEmprunt,
            values.dateRetour,
        ]; 
        i++;
        // Ajouter la nouvelle ligne au tableau DataTable
        tableEmprunt.row.add(rowData);
    });

    // Redessine le tableau pour appliquer les modifications
    tableEmprunt.draw();
});

