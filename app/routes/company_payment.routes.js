import authJwt from"../middleware/authJwt.js";
import controller  from "../controllers/company_payment.controller.js";
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

  router.get('/api/company-payment', [authJwt.verifyToken], async (req,res) => {
    try{
      const resp = await controller.getAllCompany_payment()
      res.send(resp);
    }
    catch(err){
      logger.error('Exception occured while try to get all users',err);
      res.send([]);
    }
  });
  router.get('/api/company-payment/:id', [authJwt.verifyToken], async (req,res) => {
    try{
      const id = req.params.id
      const resp = await controller.getByIDCompany_payment(id)
      res.send(resp);
    }
    catch(err){
      logger.error('Exception occured while try to get all users',err);
      res.send([]);
    }
  });

  router.post('/api/company-payment',[authJwt.verifyToken], async (req, res) => {
   
    try{
      const company = {
        comid: req.body.comid,
        credit: req.body.credit,
        sspay: req.body.sspay,
        zeropay: req.body.zeropay,
        cash: req.body.cash,
        ggvoucher: req.body.ggvoucher,
        kakaopay: req.body.kakaopay,
        etc: req.body.etc
       
      };
        await controller.CreateCompany_payment(company);
        res.send('Create Company Sccuessfully')
    }
    catch(err){
        console.log(err)
      logger.error('Retrun', err);
      res.send([])
    }
   })

   router.patch('/api/company-payment', async (req, res) => {
   
    try{
      const company = { 
        cpid: req.body.cpid,
        comid: req.body.comid,
        credit: req.body.credit,
        sspay: req.body.sspay,
        zeropay: req.body.zeropay,
        cash: req.body.cash,
        ggvoucher: req.body.ggvoucher,
        kakaopay: req.body.kakaopay,
        etc: req.body.etc
      };
        await controller.UpdateCompany_payment (company);
        res.send('Update Sccuessfully')
    }
    catch(err){
      logger.error('Retrun', err);
      res.send([])
    }
   })
 

  export default router