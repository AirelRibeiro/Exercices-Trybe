// type Book = {
//   book: string;
//   author: string;
//   genre: string;
// }

// class ReadingTracker {
//   private readingGoal: number;
//   private booksRead: number;
//   private wishlist: Book[];
//   constructor(readingGoal: number) {
//     this.readingGoal = readingGoal;
//     this.booksRead = 0;
//     this.wishlist = [];
//   }

//   trackReadings(readsCount: number): void {
//     this.booksRead += readsCount;
//     if (this.booksRead >= this.readingGoal) {
//       this.progressNotification(
//         'Congratulations! You\'ve reached your reading goal!',
//       );
//       return;
//     }
//     this.progressNotification(
//       'There are still some books to go!',
//     );
//   }

//   addToWishlist(book: Book): void {
//     this.wishlist.push(book);
//   }

//   showWishlist(): void {
//     console.log(this.wishlist);
//   }

//   progressNotification(message: string): void {
//     console.log(message);
//   }
// }

// const readTracker = new ReadingTracker(20);
// readTracker.addToWishlist({ book: 'The Road', author: 'Cormac McCarthy', genre: 'Dystopia' });
// readTracker.showWishlist();
// readTracker.trackReadings(12);
// readTracker.trackReadings(9);

//

// FUNÇÃO PARA SUBSTITUIR MÉTODO ReadingTracker.progressNotification

// function progressNotification(message: string): void {
//   console.log(message);
// }

//

//  CLASS PARA REGISTRAR LIVROS LIDOS

// class ReadingTracker {
//   private readingGoal: number;
//   private booksRead: number;
//   constructor(readingGoal: number) {
//     this.readingGoal = readingGoal;
//     this.booksRead = 0;
//   }

//   trackReadings(readsCount: number): void {
//     this.booksRead += readsCount;
//     if (this.booksRead >= this.readingGoal) {
//       progressNotification(
//         'Congratulations! You\'ve reached your reading goal!',
//       );
//       return;
//     }
//     progressNotification(
//       'There are still some books to go!',
//     );
//   }
// }

// PARA TESTAR
// const readTracker = new ReadingTracker(20);
// readTracker.trackReadings(12);
// readTracker.trackReadings(9);

// // // // // // // /// // /// //  / /// /// // // /// /// /  / ////

// TIPO BOOK

// type Book = {
//   book: string;
//   author: string;
//   genre: string;
// };

//

// CLASSE PARA BOOKS, SEPARANDO A wishlist PARA A ReadingTracker NÃO PRECISAR TER VÁRIA RESPONSABILIDADES
// class BooksWishlist {
//   private wishlist: Book[];

//   constructor(book: Book) {
//     this.wishlist = [];
//     this.wishlist.push(book);
//   }

//   addToWishlist(newBook: Book): void {
//     this.wishlist.push(newBook);
//   }

//   showWishlist(): void {
//     return console.log(this.wishlist);
//   }
// }

// const wishlist = new BooksWishlist({
//   book: 'The Road',
//   author: 'Cormac McCarthy',
//   genre: 'Dystopia',
// });
// wishlist.addToWishlist({
//   book: 'Misery',
//   author: 'Stephen King',
//   genre: 'Thriller',
// });
// wishlist.showWishlist();
