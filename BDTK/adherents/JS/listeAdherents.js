$(document).ready(function () {
    var table = $('#myTable').DataTable({
        //Permet de changer la langue de la barre de recherche
        "oLanguage": {
            "sSearch": "Recherche"
        },
        //Modifie le nombre de ligne que l'ont peux afficher
        "lengthMenu": [10, 20, 30],
        //mofifie l'ensemble de la langue du tableau
        "language": {
            "lengthMenu": "Voir par _MENU_ adhérents",
            "info": "",
            "paginate": {
                "first": "Première",
                "last": "Dernière",
                "previous": "Précédent",
                "next": "Suivant"
            },
            "emptyTable": "Aucun résultat trouvé",
            "infoEmpty": "Affichage de 0 à 0 sur 0 adhérents",
            "infoFiltered": "Recherche sur un total de _MAX_ adhérents.",
            "zeroRecords": "Aucun résultat trouvé"
        },
        //Cache la première colonne avec les clée valeur pour chaque adhérent
        "columnDefs": [
            { "targets": 0, "visible": false }
        ]
    });
    //Ajoute un evenement click sur les tr qui permet de se rendre sur la page profilAdherents
    $('#myTable tbody').on('click', 'tr', function () {
        // Récupérer les données de la ligne
        var rowData = table.row(this).data();

        // Construire l'URL avec l'identifiant unique (numéro d'adhérent)
        var pageUrl = "profilAdherents.html?numeroAdherent=" + rowData[0];

        // Rediriger l'utilisateur vers la page profilAdherents.html avec les informations de l'adhérent
        window.location.href = pageUrl;
    });

    let i = 1;
    // Ajouter les colonnes à DataTable en utilisant les clés de la carte
    adherent.forEach(function (values) {
        // Ajouter une nouvelle ligne dans le tableau
        var rowData = [
            i,
            values.numeroAdherent,
            values.nom,
            values.prenom,
            values.mail,
            values.codePostal,
            // values.cotisation,
            // values.amende
        ];
        i++;
        // Ajouter la nouvelle ligne au tableau DataTable
        table.row.add(rowData);
    });

    // Redessiner le tableau pour appliquer les modifications
    table.draw();
});