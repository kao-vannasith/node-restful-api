import db from "../models/index.js";
import config from "../config/auth.config.js";

const Admin = db.admin

import jwt from "jsonwebtoken";
import bcrypt  from "bcryptjs";



const signin = (req, res) => {
  Admin.findOne({
    where: {
      id: req.body.id
    }
  })
    .then(id => {
      if (!id) {
        return res.status(404).send({ message: "ID Not found." });
      }

      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        id.password
      );

      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password!"
        });
      }

      const token = jwt.sign({ id: id.id },
                              config.secret,
                              {
                                algorithm: 'HS256',
                                allowInsecureKeySizes: true,
                                expiresIn: 86400, // 24 hours
                              });
                            
        res.status(200).send({
          id: id.id,
          accessToken: token
        });
    
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

export default {signin}