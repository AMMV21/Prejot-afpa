// Fonction pour créer un nouveau tableau avec tous les objets non vides de votre map.
const remplirNew = function () {
    // Créer un tableau vide pour stocker les objets non vides.
    let tabLocal = [];
  
    // Parcourir chaque élément de votre tableau "Exemplaire".
    Exemplaire.forEach(element => {
      // Vérifier si l'élément est un objet.
      if (typeof element === 'object' && element !== null) {
            tabLocal.push(element);
      }
    });
  
    // Retourner le nouveau tableau avec les objets non vides.
    return tabLocal;
  };
  
  // Appeler la fonction et stocker le résultat dans une variable.
  let exemplaireStorage = remplirNew();
  
  // Afficher le nouveau tableau dans la console.
  console.log(exemplaireStorage);
  

 localStorage.setItem("exemplaires", JSON.stringify(Array.from(exemplaireStorage.entries())));