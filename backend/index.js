import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";
import { sendMail } from "./middleware/sentMail.js";

const app = express();

app.use(cors());
app.use(express.json());

dotenv.config();

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

// connect to mongoDB
try {
  mongoose.connect(URI, {
    dbName: "bookStore",
  });
  console.log("Connected to Cloud DB");
} catch (error) {
  console.log("Error: ", error);
}

// defining routes
app.use("/book", bookRoute);
app.use("/user", userRoute);

app.post("/email", async (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message)
    return res.status(400).json({
      success: false,
      message: "Plz fill all detail",
    });
  try {
    await sendMail({
      email: "sad928370@gmail.com",
      subject: "Book Store",
      message,
      userEmail: email,
    });
    res.status(200).json({
      success: true,
      message: "Messege Send Successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
