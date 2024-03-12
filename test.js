const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/kitap-db');

const BookSchema = new Schema({
  title: String,
  author: String,
});

const Book = mongoose.model('Book', BookSchema);

//Buradan yukarısı bağlanma mongoose ile beraber mongo db

//VERI EKLEME
// Book.create({
//   title: 'Satranc',
//   author: 'Stefan Zweig',
// });

// Book.create({
//   title: 'Suc ve Ceza',
//   author: 'Dostoyevski',
// });

// VERI OKUMA
// async function ReadData() {
//   let result = await Book.find({});
//   console.log(result);
// }
// ReadData();

//VERI GUNCELLEME
// const id = '65f040e02324e950e4704ffe';
// async function UpdateData() {
//   await Book.findByIdAndUpdate(
//     id,
//     {
//       title: 'Sefiller',
//       author: 'Victor Hugo',
//     },
//     {
//       new: true,
//     }
//   );
// }
// UpdateData();

//VERI SILME
// const id = '65f040e02324e950e4704fff';
// async function deleteData() {
//   await Book.findByIdAndDelete(id, console.log(`${id} li kitap silindi...`));
// }
// deleteData();
