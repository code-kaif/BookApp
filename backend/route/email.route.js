import express from "express";
import { sendMail } from "../controller/email.controller.js";

const emailRouter = express.Router();

emailRouter.post("/", sendMail);

export default emailRouter;
