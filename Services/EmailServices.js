import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const sendMail=async (userInfo)=> {
  try {
    const info = await transporter.sendMail({
      from: `"SoftDeleteManager" <${process.env.EMAIL_USER}>`,
      to: "gichuki.muthoni24@students.dkut.ac.ke", 
      subject: `Hello ${userInfo.name} from SoftDeleteManager Company`,
      text: "Your credentails were Changed Successfully",
    });

    console.log("Message sent: %s", info.messageId);
  } catch (error) {
    console.error("Error sending email:", error);
  }
}


export default sendMail;

