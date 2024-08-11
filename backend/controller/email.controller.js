import { sendDetail } from "../middleware/sentMail.js";

export const sendMail = async (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message)
    return res.status(400).json({
      success: false,
      message: "Plz fill all detail",
    });
  try {
    await sendDetail({
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
};
