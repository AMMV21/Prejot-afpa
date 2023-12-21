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

