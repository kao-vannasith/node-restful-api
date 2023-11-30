import authJwt from"../middleware/authJwt.js";
import controller  from "../controllers/banner.conntroller.js";
import express from 'express'
import logger from "../config/logger.config.js";


const router = express.Router()


  router.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  router.get('/api/banner', [authJwt.verifyToken], async (req,res) => {
    try{
      const resp = await controller.getAllBanner()
      res.send(resp);
    }
    catch(err){
      logger.error('Exception occured while try to get all users',err);
      res.send([]);
    }
  });
  router.get('/api/banner/:id', [authJwt.verifyToken], async (req,res) => {
    try{
      const id = req.params.id
      const resp = await controller.getByIDBanner(id)
      res.send(resp);
    }
    catch(err){
      logger.error('Exception occured while try to get all users',err);
      res.send([]);
    }
  });

  router.post('/api/banner',[authJwt.verifyToken], async (req, res) => {
   
    try{
      const banner = {
        name: req.body.name,
        link: req.body.link,
        modifydate: req.body.modifydate,
        writedate: req.body.writedate,
     
      };
        await controller.CreateBanner(banner);
        res.send('Create Banner Sccuessfully')
    }
    catch(err){
        console.log(err)
      logger.error('Retrun', err);
      res.send([])
    }
   })

   router.patch('/api/banner', async (req, res) => {
   
    try{
      const banner = { 
        bnid: req.body.bnid,
        name: req.body.name,
        link: req.body.link, 
        modifydate: req.body.modifydate,
        writedate: req.body.writedate,
      };
        await controller.UpdateBanner (banner);
        res.send('Update Sccuessfully')
    }
    catch(err){
      logger.error('Retrun', err);
      res.send([])
    }
   })
 

  export default router