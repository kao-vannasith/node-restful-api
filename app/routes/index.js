import auth from "./auth.routes.js";
import user from "./user.routes.js";
import edit_suggestion from "./edit_suggestion.routes.js";
import admin from "./admin.routes.js"
import company from "./company.routes.js"
import company_infra from "./company_infra.routes.js"
import operating_time from "./operating_time.routes.js";
import company_payment from "./company_payment.routes.js";
import holiday from "./holiday.routes.js";
import banner from "./banner.routes.js";
import express from 'express'
const router = express.Router()

router.use(auth)
router.use(user)
router.use(edit_suggestion)
router.use(admin)
router.use(company)
router.use(company_infra)
router.use(operating_time)
router.use(company_payment)
router.use(holiday)
router.use(banner)

export default router