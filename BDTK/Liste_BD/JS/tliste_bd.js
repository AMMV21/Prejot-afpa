    let tNewAlbums = [];

    // Remplir un tableau avec le contenu de la Map Album
    let tAlbums = Array.from(albums);
    let tliste_bd = remplirNewTab();

    function remplirNewTab() {
        for (let i = 0; i <= 29; i++) {
            tNewAlbums.push(tAlbums[i]);
        }  
        return tNewAlbums;
    }