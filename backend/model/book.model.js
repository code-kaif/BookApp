import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
  id: Number,
  name: String,
  price: Number,
  category: String,
  image: String,
  title: String,
  author: String,
  view: String,
});
const Book = mongoose.model("Book", bookSchema);

export default Book;
