let library = {
    books:[
        {
            bookId: "", // Identifiant unique du livre
            bookTitle: "", // Titre du livre
            bookAutor: "", // Auteur du livre
            bookStatus: "", // Statut actuel du livre (disponible, prêté)
            loanDate: "", // Date à laquelle le livre a été emprunté
            returnDate: "", // Date à laquelle le livre doit être retourné
            borrowerId: "", // Identifiant unique de l'emprunteur
            borrowerName: "" // Nom de l'emprunteur
        },
    ]
};


// -----Mes fonction-----

// Fonction pour emprunter un livre

function borrowBook(bookId, borrowerId, borrowerName){
    // Trouve le livre dans le tableau de livres
    let book = library.books.find(book => book.bookId === bookId);
    // Si le livre existe et est disponible
    if(book && book.bookStatus === "available"){
        book.bookStatus = "loaned"; 
        // Met à jour le statut du livre
        book.borrowerId = borrowerId;
        // Met à jour l'identifiant de l'emprunteur
        book.borrowerName = borrowerName; 
        // Met à jour le nom de l'emprunteur
        book.loanDate = new Date().toISOString().slice(0, 10); 
        // Met à jour la date de prêt
    }
}

// Fonction pour retourner un livre

function returnBook(bookId){ 
    // Trouve le livre dans le tableau de livres
    let book = library.books.find(book => book.bookId === bookId); 
    // Si le livre existe et est prêté
    if(book && book.bookStatus === "loaned"){
        book.bookStatus = "available"; 
        // Met à jour le statut du livre
        book.borrowerId = ""; 
        // Efface l'identifiant de l'emprunteur
        book.borrowerName = ""; 
        // Efface le nom de l'emprunteur
        book.loanDate = ""; 
        // Efface la date de prêt
        book.returnDate = ""; 
        // Efface la date de retour
    }
}