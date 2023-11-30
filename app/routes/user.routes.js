import authJwt from"../middleware/authJwt.js";
import controller  from "../controllers/user.controller.js";
import express from 'express'
import logger from "../config/logger.config.js";
import transporter from "../config/nodemailer.js"


const router = express.Router()


  router.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  router.get('/api/users',async (req,res) => {
    try{
      const resp = await controller.getAllUsers();
      res.send(resp);
    }
    catch(err){
      logger.error('Exception occured while try to get all users',err);
      res.send([]);
    }
  });
  router.get('/api/username', async (req,res) => {
    const username = req.query.username ? req.query.username : ''
    try{
        const resp = await controller.findUserByUsername(username);
        res.send(resp)
    }
    catch(err){
      logger.error('Exception occured while try to get all username', err);
      res.send([])
    }
  })

  router.get( '/api/userprofile',[authJwt.verifyToken], async (req,res) => {
    const id = req.userId
    try{
        const resp = await controller.findUserByID(id);
        res.send(resp)
    }
    catch(err){
      logger.error('Exception occured while try to get all username', err);
      res.send([])
    }
  })



  router.patch('/api/user', async (req, res) => {
   
    try{
      const user = {
        id: req.body.id,
        fullname: req.body.fullname,
        phone: req.body.phone,
        image: req.body.image,
      };
        await controller.UpdateUser(user);
        res.send('Update Sccuessfully')
    }
    catch(err){
      logger.error('Retrun', err);
      res.send([])
    }
   })

  router.get("/api/test/user", (req, res) => {
    
    var mailOptions = {
    from: process.env.EMAIL_NAME, 
    to: '2023016@auton1108.onmicrosoft.com',
    subject: process.env.EMAIL_NAME,
    text: `
            Thank you for using our service. `
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) console.log(error);
    console.log(info);
  });
  res.send('Sccuessfully')
 });



  export default router