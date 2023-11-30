import {initializeApp, applicationDefault} from 'firebase-admin/app'
import {getMessaging} from 'firebase-admin/messaging'
import express, {json, response} from 'express'


process.env.GOOGLE_APPLICATION_CREDENTIALS

const app = express();
 app.use(express.json());

 initializeApp({
 credential: applicationDefault(),
 projectId: 'project-node-test-auto'
})


app.post("/send", (req, res) => {
    const receivedToken = req.body.fcmToken
 const message = {
 notification: {
 title: "Notification",
 body: "This is a Test Notification"
},
 token: "",
};
getMessaging()
 .send(message)
 .then((response) =>{
    res.status(200).json({
        message: "ok" , response,
        token: receivedToken
    })
})
})