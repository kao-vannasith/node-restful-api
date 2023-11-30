import express from "express";
import cors from "cors";
import swaggerDocs from './swagger.js';
import dotenv from 'dotenv';
import logger from "./app/config/logger.config.js";
import { createServer } from 'http';
import { Server } from 'socket.io'; //replaces (import socketIo from 'socket.io')
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import mock from 'mock-json-server'
import datahome from './app/config/data.json' assert { type: "json" };

import {initializeApp, applicationDefault} from 'firebase-admin/app'
import {getMessaging} from 'firebase-admin/messaging'
process.env.GOOGLE_APPLICATION_CREDENTIALS

const app = express();

var corsOptions = {
  origin: "*"
};
dotenv.config();

initializeApp({
  credential: applicationDefault(),
  projectId: 'fbauth-fb252'
 })
 
 
 app.post("/send", (req, res) => {
    //  const receivedToken = req.body.fcmToken
  const message = {
  notification: {
  title: "Notification",
  body: "This is a Test Notification"
 },
   token: "eyJhbGciOiJSUzI1NiIsImtpZCI6ImY1ZjRiZjQ2ZTUyYjMxZDliNjI0OWY3MzA5YWQwMzM4NDAwNjgwY2QiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiIxODI1Mzc5MTI4NTUtcWVlNzdjcHB2OGZlZjZ1YmVoMG5iMG42dGozajd2ZjYuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiIxODI1Mzc5MTI4NTUtcWtoNnVuaWRpcDlvN2J1cXNwazJiY2ttZGVvM21vcGUuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMTMwMjM5NjcwODY4Nzc2MTIxODYiLCJlbWFpbCI6ImFub3VzYWs1MkBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwibmFtZSI6InBldGVyIGFub3VzYWsiLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EvQUNnOG9jSzFWWTE3M2ZIWWtLNWFhb0ljUnFtZnVHNDRYd2tEZEZYRkl6WHhqcDEzMmprPXM5Ni1jIiwiZ2l2ZW5fbmFtZSI6InBldGVyIiwiZmFtaWx5X25hbWUiOiJhbm91c2FrIiwibG9jYWxlIjoibG8iLCJpYXQiOjE2OTkzNDkwMjIsImV4cCI6MTY5OTM1MjYyMn0.c8FsuGXxsuVBh3457hMqJeQpOz9GsZNiWoxAdOra7ovkADZMgE-GrSbG5NaRrYs4ZRDCwdkChcOpoB6vJsv_NvATqNssP5KpjHrBzjKP2r_7dxYp-VGoQICoazgoFJIUc0tNeM-3q2ajFDU3LGsnUubad5yt5Cxp50PK32VLg1OLYb-KIb-FVhXym0tzfN4dv349-xGRxKrwv67w_IWgFZDhZGJWPIQpWp0E2CtI7x8jweK510FIJiMR49DkLvutxpD5D3kl3UQmduUH3gyBzwJTWHDkVW_4p-t_soPnULOGH0RDdPSUHUPkZ-8HI6UWZm99mFSgb4CV04hE5m-Ifw",
 };
 getMessaging()
  .send(message)
  .then((response) =>{
     res.status(200).json({
         message: "ok" , response,
        //  token: receivedToken
     })
 })
 .catch((error) =>{
  res.status(400);
  res.send(error)
})
 })


const rubmock = mock(datahome,9000)
rubmock.start()

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// socketIO
//const socketIO = new Server(createServer(app))
const httpServer = createServer(app);
const io = new Server(httpServer, { cors: corsOptions });

io.on('connection', (socket) => {
  console.log('connection')
  socket.on('chat message', (msg) => {
    console.log('message: ' + msg);
    io.emit('chat message', msg)
  });
  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});


// set port, listen for requests
app.set('port', process.env.PORT || 5000);
httpServer.listen(app.get('port'), function () {
  var port = httpServer.address().port;
  logger.info('Running on : ', port)
  
   swaggerDocs(app, port)
});


// router
import router from "./app/routes/index.js"
app.use(router)


///////////////////
import db from "./app/models/index.js";


db.sequelize.sync();


  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
  });

