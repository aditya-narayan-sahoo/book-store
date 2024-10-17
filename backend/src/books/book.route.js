const express = require("express");
const Book = require("./book.model");
const {
  postABook,
  getAllBooks,
  getSingleBook,
  updateBook,
  deleteABook,
} = require("./book.controller");
const router = express.Router();

//post a book
router.post("/create-book", postABook);

//get all books
router.get("/", getAllBooks);

//get single book
router.get("/:id", getSingleBook);

//update book
router.put("/edit/:id", updateBook);

//delete book
router.delete("/:id", deleteABook);

module.exports = router;
