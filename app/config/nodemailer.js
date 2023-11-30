import nodemailer from 'nodemailer'
import dotenv from "dotenv"
dotenv.config()
const transporter = nodemailer.createTransport({
    service: 'gmail',

    secure: true, 
    auth: {
        user: process.env.EMAIL_NAME,
        pass: process.env.EMAIL_PASSWORD
    }
})
export default transporter