
import bannerRepo from "../repositories/banner.repo.js";

export default {

  getAllBanner(){
    return bannerRepo.getAllBanner();
  },

  getByIDBanner(id){
    return bannerRepo.getByIDBanner(id)
  },

  CreateBanner(banner){
    return bannerRepo.CreateBanner(banner);
  },

  UpdateBanner(banner){
    return bannerRepo.UpdateBanner(banner)
  }
}

