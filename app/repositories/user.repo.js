import db from "../models/index.js";
import logger from "../config/logger.config.js";

const User = db.user;



export default {
  getAllUsers() {
   
    const sql = "select u.id, u.username, u.email from users u order by u.id";
    const resp = User.sequelize.query(sql, {
      type: User.sequelize.QueryTypes.SELECT,
    });
    return resp;
  },

  findUserByUsername(username){
  
    const sql = "select u.id, u.username, u.email from users u where u.username LIKE '%"+username+"%' order by u.id";
    const resp = User.sequelize.query(sql, {
      type: User.sequelize.QueryTypes.SELECT,
    });
    return resp;
  },
  findUserByID(id){
    
    const sql = "select u.id, u.username, u.email from users u where u.id= :id";
    const resp = User.sequelize.query(sql, {
      replacements:{id:id},
      type: User.sequelize.QueryTypes.SELECT,
    });
    return resp;
  },
  UpdateUser(user){
    
    //const sql = "update users set fullname=:fullname, phone=:phone,  where id= :id";
    const resp = User.update(user,
      { where: {id: user.id} })
    return resp;
  },
  CreateUserCar(usercar){
    
    //const sql = "update users set fullname=:fullname, phone=:phone,  where id= :id";
    const resp = User.create(usercar)
  
    return resp;
  }
};
