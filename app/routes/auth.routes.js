
import controller from "../controllers/auth.controller.js";
import express from 'express'
const router = express.Router()

router.use(function(req, res, next) {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );
  next();
});


router.post("/api/auth/signin", controller.signin);
export default router
