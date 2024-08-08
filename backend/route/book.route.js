import express from "express";
import { getBook, getOneBook } from "../controller/book.controller.js";

const router = express.Router();

router.get("/", getBook).get("/:id", getOneBook);

export default router;
