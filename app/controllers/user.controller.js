import userRepo from "../repositories/user.repo.js";

export default {


  getAllUsers(){
    return userRepo.getAllUsers(); 
  },
  findUserByUsername(username){
   return userRepo.findUserByUsername(username)
  },
  findUserByID(id){
    return userRepo.findUserByID(id)
  },
  UpdateUser(user){
    return userRepo.UpdateUser(user);
  },
  CreateUserCar(usercar){
    return userRepo.CreateUserCar(usercar)
  }


}

  
  
  
 
  
 

  

  //export default {allAccess, userBoard, adminBoard, moderatorBoard}