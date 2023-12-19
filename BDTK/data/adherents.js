var adherent = new Map();
let tAdherent = []; // Tableau qui contiendra les objets de la map

    function creerMapAdherents() {
        adherent.set("1",{numeroAdherent:"01", nom: "Petit", prenom:"Alice", mail: "Apetit1995@hotmail.fr", codePostal: "59155 Faches-Thumesnil",adresse: "38 Rue des Coings", nbr_emprunt: 0 , emprunt1: "" , emprunt2: "" , emprunt3: "" , cotisation:"A jour", amende:"0"})
        adherent.set("2",{numeroAdherent:"02", nom: "Lefevre", prenom:"Léo", mail: "LefevreL1987@outlook.fr", codePostal: "59410 Anzin",adresse: "27 Rue des Losanges", nbr_emprunt: 0 , emprunt1: "" , emprunt2: "" , emprunt3: "" , cotisation:"A jour", amende:"5"})
        adherent.set("3",{numeroAdherent:"03", nom: "Lemaire", prenom:"Léna", mail: "LemaireL@yahoo.com", codePostal: "59460 Jeumont",adresse: "51 Rue des Vignes", nbr_emprunt: 0 , emprunt1: "" , emprunt2: "" , emprunt3: "" , cotisation:"Non à jour", amende:"0"})
        adherent.set("4",{numeroAdherent:"04", nom: "Dupuy", prenom:"Chloé", mail: "ChloéD2002@orange.fr", codePostal: "59115 Leers",adresse: "29 Rue d'Enbas", nbr_emprunt: 0 , emprunt1: "" , emprunt2: "" , emprunt3: "" , cotisation:"Non à jour", amende:"13"})
        adherent.set("5",{numeroAdherent:"05", nom: "Prevost", prenom:"Florian", mail: "Floflodu59@gmail.com", codePostal: "59146 Pecquencourt",adresse: "31 Rue de l'Angle", nbr_emprunt: 0 , emprunt1: "" , emprunt2: "" , emprunt3: "" , cotisation:"A jour", amende:"0"})
        adherent.set("6",{numeroAdherent:"06", nom: "Millet", prenom:"Alexandre", mail: "Alex05@hotmail.fr", codePostal: "59221 Bauvin",adresse: "7 Rue de la Mer", nbr_emprunt: 0 , emprunt1: "" , emprunt2: "" , emprunt3: "" , cotisation:"Non a jour", amende:"0"})
        adherent.set("7",{numeroAdherent:"07", nom: "Pelletier", prenom:"Julie", mail: "Thebestemail@gmail.com", codePostal: "59133 Phalempin",adresse: "17 Rue des Oiseaux", nbr_emprunt: 0 , emprunt1: "" , emprunt2: "" , emprunt3: "" , cotisation:"A jour", amende:"0"})
        adherent.set("8",{numeroAdherent:"08", nom: "Dubois", prenom:"Baptiste", mail: "DuboisB1974@hotmail.fr", codePostal: "59195 Hérin",adresse: "29 Rue Charlemagne", nbr_emprunt: 0 , emprunt1: "" , emprunt2: "" , emprunt3: "" , cotisation:"A jour", amende:"0"})
        adherent.set("9",{numeroAdherent:"09", nom: "Leroy", prenom:"Nathan", mail: "LeroyDu59@orange.fr", codePostal: "59460 Jeumont",adresse: "17 Rue GrandPres", nbr_emprunt: 0 , emprunt1: "" , emprunt2: "" , emprunt3: "" , cotisation:"A jour", amende:"10"})
        adherent.set("10",{numeroAdherent:"10", nom: "Moreau", prenom:"Jeremy", mail: "Moreau-Jeremy@yahoo.com", codePostal: "59410 Anzin",adresse: "35 Rue de la Libérté", nbr_emprunt: 0 , emprunt1: "" , emprunt2: "" , emprunt3: "" , cotisation:"A jour", amende:"2"})
        adherent.set("11",{numeroAdherent:"11", nom: "Bernard", prenom:"Juliette", mail: "Juju1996@outlook.fr", codePostal: "59133 Phalempin",adresse: "27 Rue du Baton", nbr_emprunt: 0 , emprunt1: "" , emprunt2: "" , emprunt3: "" , cotisation:"Non à jour", amende:"0"})
        adherent.set("12",{numeroAdherent:"12", nom: "Lebrun", prenom:"Emilie", mail: "Emi1998@orange.fr", codePostal: "59146 Pecquencourt",adresse: "54 Rue de l'Arbre", nbr_emprunt: 0 , emprunt1: "" , emprunt2: "" , emprunt3: "" , cotisation:"A jour", amende:"0"})
        adherent.set("13",{numeroAdherent:"13", nom: "Bouvier", prenom:"Matthieu", mail: "BouvierMatth@hotmail.fr", codePostal: "59146 Pecquencourt",adresse: "24 Rue des Biquets", nbr_emprunt: 0 , emprunt1: "" , emprunt2: "" , emprunt3: "" , cotisation:"Non à jour", amende:"0"})
        adherent.set("14",{numeroAdherent:"14", nom: "Perrin", prenom:"Sophie", mail: "Soso78459@yahoo.com", codePostal: "59221 Bauvin",adresse: "19 Granderue", nbr_emprunt: 0 , emprunt1: "" , emprunt2: "" , emprunt3: "" , cotisation:"A jour", amende:"0"})
        adherent.set("15",{numeroAdherent:"15", nom: "Girard", prenom:"Margot", mail: "MargotLescargot@gmail.com", codePostal: "59133 Phalempin",adresse: "21 Rue du Colombier", nbr_emprunt: 0 , emprunt1: "" , emprunt2: "" , emprunt3: "" , cotisation:"Non à jour", amende:"10"})
        adherent.set("16",{numeroAdherent:"16", nom: "Collet", prenom:"Lina", mail: "LinaCollet@orange.fr", codePostal: "59155 Faches-Thumesnil",adresse: "21 Rue d'Enhaut", nbr_emprunt: 0 , emprunt1: "" , emprunt2: "" , emprunt3: "" , cotisation:"A jour", amende:"2"})
        adherent.set("17",{numeroAdherent:"17", nom: "Lambert", prenom:"Sarah", mail: "SarahLambert1976@gmail.com", codePostal: "59195 Hérin",adresse: "12 Rue de l'Espoir", nbr_emprunt: 0 , emprunt1: "" , emprunt2: "" , emprunt3: "" , cotisation:"Non à jour", amende:"3"})
        adherent.set("18",{numeroAdherent:"18", nom: "Dumont", prenom:"Thibaut", mail: "Titidu76@hotmail.fr", codePostal: "59221 Bauvin",adresse: "17 Rue De-La-Montagne", nbr_emprunt: 0 , emprunt1: "" , emprunt2: "" , emprunt3: "" , cotisation:"A jour", amende:"0"})
        adherent.set("19",{numeroAdherent:"19", nom: "Charpentier", prenom:"Maxime", mail: "Max55781@outlook.fr", codePostal: "59146 Pecquencourt",adresse: "15 Rue des Fleures", nbr_emprunt: 0 , emprunt1: "" , emprunt2: "" , emprunt3: "" , cotisation:"A jour", amende:"2"})
        adherent.set("20",{numeroAdherent:"20", nom: "Deschamps", prenom:"Océane", mail: "DeschampOcéane@orange.fr", codePostal: "59221 Bauvin",adresse: "28 Rue des Carrés", nbr_emprunt: 0 , emprunt1: "" , emprunt2: "" , emprunt3: "" , cotisation:"Non à jour", amende:"5"})
        adherent.set("21",{numeroAdherent:"21", nom: "Leblanc", prenom:"Olivier", mail: "OlivierB79@orange.fr", codePostal: "59460 Jeumont",adresse: "18 Rue de l'Arc", nbr_emprunt: 0 , emprunt1: "" , emprunt2: "" , emprunt3: "" , cotisation:"A jour", amende:"5"})
        adherent.set("22",{numeroAdherent:"22", nom: "Leveque", prenom:"Isabelle", mail: "IsaDu59@hotmail.fr", codePostal: "59146 Pecquencourt",adresse: "15 Rue de l'Epée", nbr_emprunt: 0 , emprunt1: "" , emprunt2: "" , emprunt3: "" , cotisation:"A jour", amende:"17"})
        adherent.set("23",{numeroAdherent:"23", nom: "Tessier", prenom:"Cedric", mail: "Cedric1975@outlook.fr", codePostal: "59155 Faches-Thumesnil",adresse: "47 Rue des Boucliers", nbr_emprunt: 0 , emprunt1: "" , emprunt2: "" , emprunt3: "" , cotisation:"Non à jour", amende:"0"})
        adherent.set("24",{numeroAdherent:"24", nom: "Collin", prenom:"Marc", mail: "CollinMarc@yahoo.com", codePostal: "59195 Hérin",adresse: "18 Rue des Fléches", nbr_emprunt: 0 , emprunt1: "" , emprunt2: "" , emprunt3: "" , cotisation:"Non à jour", amende:"0"})
        adherent.set("25",{numeroAdherent:"25", nom: "Brun", prenom:"Christian", mail: "ChrisBrun1958O@orange.fr", codePostal: "59115 Leers",adresse: "24 Rue du Marteau", nbr_emprunt: 0 , emprunt1: "" , emprunt2: "" , emprunt3: "" , cotisation:"A jour", amende:"2"})
        adherent.set("26",{numeroAdherent:"26", nom: "Pichon", prenom:"Marie", mail: "PichonM@outlook.fr", codePostal: "59146 Pecquencourt",adresse: "29 Rue du Tournevis", nbr_emprunt: 0 , emprunt1: "" , emprunt2: "" , emprunt3: "" , cotisation:"Non à jour", amende:"4"})
        adherent.set("27",{numeroAdherent:"27", nom: "Perret", prenom:"Elodie", mail: "Elodu59@orange.fr", codePostal: "59410 Anzin",adresse: "17 Rue du Boulon", nbr_emprunt: 0 , emprunt1: "" , emprunt2: "" , emprunt3: "" , cotisation:"A jour", amende:"0"})
        adherent.set("28",{numeroAdherent:"28", nom: "Marechal", prenom:"Charlotte", mail: "Chacha59@outlook.fr", codePostal: "59155 Faches-Thumesnil",adresse: "13 Rue des Cerfs-Volants", nbr_emprunt: 0 , emprunt1: "" , emprunt2: "" , emprunt3: "" , cotisation:"Non à jour", amende:"5"})
        adherent.set("29",{numeroAdherent:"29", nom: "Brunet", prenom:"Giles", mail: "Giles1951@hotmail.fr", codePostal: "59195 Hérin",adresse: "14 Rue des Nuages", nbr_emprunt: 0 , emprunt1: "" , emprunt2: "" , emprunt3: "", cotisation:"A jour", amende:"0"})
        adherent.set("30",{numeroAdherent:"30", nom: "Lacroix", prenom:"Jean-Philippe", mail: "JeanJeanDu59@orange.fr", codePostal: "59115 Leers",adresse: "27 Rue du Vent", nbr_emprunt: 0 , emprunt1: "" , emprunt2: "" , emprunt3: "" , cotisation:"Non à jour", amende:"2"})
    }

    // A partir de ma map je rempli un nouveau tableau qui contient des uniquement les objet
    // cela facilite la l'accés au données du tableau
    const remplirNewAdh = function () {
        
        adherent.forEach(element => {  // Parcouri chaque élément du tableau "Exemplaire".
            if (typeof element === 'object' && element !== null) { // Vérifier si l'élément est un objet et non null.
                tAdherent.push(element); // ajout de l'élément au tableau 
            }
        });
    }

    creerMapAdherents();
    remplirNewAdh();

    // *******************  Vérifie si le locale storage à déja été créée dans la session 
   if (!localStorage.adherent){ localStorage.setItem("adherent", JSON.stringify(Array.from(tAdherent))); } 
   
   let adherentStorage = JSON.parse(localStorage.getItem('adherent'));
   console.log(adherentStorage)
   
   // Je décommente la ligne suivant pour réinitialiser le storage avec le tableau de base.
   // localStorage.setItem("adherent", JSON.stringify(Array.from(tAdherent)));


