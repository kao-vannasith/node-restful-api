import _admin from "./admin.js";
import _answer from "./answer.js";
import _banner from "./banner.js";
import _cars from "./cars.js";
import _category_company_map from "./category_company_map.js";
import _company from "./company.js";
import _company_infra from "./company_infra.js";
import _company_payment from "./company_payment.js";
import _configuration from "./configuration.js";
import _edit_suggestion from "./edit_suggestion.js";
import _event from "./event.js";
import _event_comment from "./event_comment.js";
import _faq from "./faq.js";
import _favorite_company from "./favorite_company.js";
import _holiday from "./holiday.js";
import _inquiry from "./inquiry.js";
import _member from "./member.js";
import _member_car from "./member_car.js";
import _member_tire from "./member_tire.js";
import _notification from "./notification.js";
import _operating_time from "./operating_time.js";
import _popup from "./popup.js";
import _product from "./product.js";
import _push_his from "./push_his.js";
import _receipt_auth from "./receipt_auth.js";
import _reservation from "./reservation.js";
import _reservation_item from "./reservation_item.js";
import _review from "./review.js";
import _review_reply from "./review_reply.js";
import _s3_ref from "./s3_ref.js";
import _service_category from "./service_category.js";
import _simple_login from "./simple_login.js";
import _visit_his from "./visit_his.js";

import config from "../config/db.config.js";
import Sequelize from "sequelize";
import logger from "../config/logger.config.js";

const sequelize = new Sequelize(config.DB, config.USER, config.PASSWORD, {
  host: config.HOST,
  dialect: config.dialect,
  define: {
    freezeTableName: true,
    timestamps: false,
  },
  pool: {
    max: config.pool.max,
    min: config.pool.min,
    acquire: config.pool.acquire,
    idle: config.pool.idle,
  },
});

const connect = async () => {
  try {
    const conn = await sequelize.authenticate();
    logger.info("connection database successfull");
  } catch (error) {
    logger.error("Exception occured while try to connect to database ", error);
  }
};
connect();

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;


  db.admin = _admin(sequelize, Sequelize);
  db.answer = _answer(sequelize, Sequelize);
  db.banner = _banner(sequelize, Sequelize);
  db.cars = _cars(sequelize, Sequelize);
  db.category_company_map = _category_company_map(sequelize, Sequelize);
  db.company = _company(sequelize, Sequelize);
  db.company_infra = _company_infra(sequelize, Sequelize);
  db.company_payment = _company_payment(sequelize, Sequelize);
  db.configuration = _configuration(sequelize, Sequelize);
  db.edit_suggestion = _edit_suggestion(sequelize, Sequelize);
  db.event = _event(sequelize, Sequelize);
  db.event_comment = _event_comment(sequelize, Sequelize);
  db.faq = _faq(sequelize, Sequelize);
  db.favorite_company = _favorite_company(sequelize, Sequelize);
  db.holiday = _holiday(sequelize, Sequelize);
  db.inquiry = _inquiry(sequelize, Sequelize);
  db.member = _member(sequelize, Sequelize);
  db.member_car = _member_car(sequelize, Sequelize);
  db.member_tire = _member_tire(sequelize, Sequelize);
  db.notification = _notification(sequelize, Sequelize);
  db.operating_time = _operating_time(sequelize, Sequelize);
  db.popup = _popup(sequelize, Sequelize);
  db.product = _product(sequelize, Sequelize);
  db.push_his = _push_his(sequelize, Sequelize);
  db.receipt_auth = _receipt_auth(sequelize, Sequelize);
  db.reservation = _reservation(sequelize, Sequelize);
  db.reservation_item = _reservation_item(sequelize, Sequelize);
  db.review = _review(sequelize, Sequelize);
  db.review_reply = _review_reply(sequelize, Sequelize);
  db.s3_ref = _s3_ref(sequelize, Sequelize);
  db.service_category = _service_category(sequelize, Sequelize);
  db.simple_login = _simple_login(sequelize, Sequelize);
  db.visit_his = _visit_his(sequelize, Sequelize);

  db.notification.belongsTo(db.admin, { as: "adm", foreignKey: "admid" });
db.admin.hasMany(db.notification, { as: "notifications", foreignKey: "admid" });
db.popup.belongsTo(db.admin, { as: "adm", foreignKey: "admid" });
db.admin.hasMany(db.popup, { as: "popups", foreignKey: "admid" });
db.answer.belongsTo(db.company, { as: "com", foreignKey: "comid" });
db.company.hasMany(db.answer, { as: "answers", foreignKey: "comid" });
db.category_company_map.belongsTo(db.company, { as: "com", foreignKey: "comid" });
db.company.hasMany(db.category_company_map, {
  as: "category_company_maps",
  foreignKey: "comid", 
});
db.company_infra.belongsTo(db.company, { as: "com", foreignKey: "comid" });
db.company.hasMany(db.company_infra, { as: "company_infras", foreignKey: "comid" });
db.company_payment.belongsTo(db.company, { as: "com", foreignKey: "comid" });
db.company.hasMany(db.company_payment, {
  as: "company_payments",
  foreignKey: "comid",
});
db.edit_suggestion.belongsTo(db.company, { as: "com", foreignKey: "comid" });
db.company.hasMany(db.edit_suggestion, {
  as: "edit_suggestions",
  foreignKey: "comid",
});
db.favorite_company.belongsTo(db.company, { as: "com", foreignKey: "comid" });
db.company.hasMany(db.favorite_company, {
  as: "favorite_companies",
  foreignKey: "comid",
});
db.holiday.belongsTo(db.company, { as: "com", foreignKey: "comid" });
db.company.hasMany(db.holiday, { as: "holidays", foreignKey: "comid" });
db.operating_time.belongsTo(db.company, { as: "com", foreignKey: "comid" });
db.company.hasMany(db.operating_time, {
  as: "operating_times",
  foreignKey: "comid",
});
db.product.belongsTo(db.company, { as: "com", foreignKey: "comid" });
db.company.hasMany(db.product, { as: "products", foreignKey: "comid" });
db.reservation.belongsTo(db.company, { as: "com", foreignKey: "comid" });
db.company.hasMany(db.reservation, { as: "reservations", foreignKey: "comid" });
db.event_comment.belongsTo(db.event, { as: "ev", foreignKey: "evid" });
db.event.hasMany(db.event_comment, { as: "event_comments", foreignKey: "evid" });
db.answer.belongsTo(db.inquiry, { as: "iq", foreignKey: "iqid" });
db.inquiry.hasMany(db.answer, { as: "answers", foreignKey: "iqid" });
db.favorite_company.belongsTo(db.member, { as: "mid_member", foreignKey: "mid" });
db.member.hasMany(db.favorite_company, {
  as: "favorite_companies",
  foreignKey: "mid",
});
db.member_car.belongsTo(db.member, { as: "mid_member", foreignKey: "mid" });
db.member.hasMany(db.member_car, { as: "member_cars", foreignKey: "mid" });
db.push_his.belongsTo(db.member, { as: "mid_member", foreignKey: "mid" });
db.member.hasMany(db.push_his, { as: "push_his", foreignKey: "mid" });
db.receipt_auth.belongsTo(db.member, { as: "mid_member", foreignKey: "mid" });
db.member.hasMany(db.receipt_auth, { as: "receipt_auths", foreignKey: "mid" });
db.reservation.belongsTo(db.member, { as: "mid_member", foreignKey: "mid" });
db.member.hasMany(db.reservation, { as: "reservations", foreignKey: "mid" });
db.review.belongsTo(db.member, { as: "mid_member", foreignKey: "mid" });
db.member.hasMany(db.review, { as: "reviews", foreignKey: "mid" });
db.review_reply.belongsTo(db.member, { as: "mid2_member", foreignKey: "mid2" });
db.member.hasMany(db.review_reply, { as: "review_replies", foreignKey: "mid2" });
db.simple_login.belongsTo(db.member, { as: "mid_member", foreignKey: "mid" });
db.member.hasMany(db.simple_login, { as: "simple_logins", foreignKey: "mid" });
db.visit_his.belongsTo(db.member, { as: "mid_member", foreignKey: "mid" });
db.member.hasMany(db.visit_his, { as: "visit_his", foreignKey: "mid" });
db.member_tire.belongsTo(db.member_car, { as: "mc", foreignKey: "mcid" });
db.member_car.hasMany(db.member_tire, { as: "member_tires", foreignKey: "mcid" });
db.reservation_item.belongsTo(db.product, { as: "pid_product", foreignKey: "pid" });
db.product.hasMany(db.reservation_item, {
  as: "reservation_items",
  foreignKey: "pid",
});
db.reservation_item.belongsTo(db.reservation, { as: "rsv", foreignKey: "rsvid" });
db.reservation.hasMany(db.reservation_item, {
  as: "reservation_items",
  foreignKey: "rsvid",
});
db.review.belongsTo(db.reservation, { as: "rsv", foreignKey: "rsvid" });
db.reservation.hasMany(db.review, { as: "reviews", foreignKey: "rsvid" });
db.review_reply.belongsTo(db.reservation, { as: "rsv", foreignKey: "rsvid" });
db.reservation.hasMany(db.review_reply, {
  as: "review_replies",
  foreignKey: "rsvid",
});
db.review_reply.belongsTo(db.review, { as: "review", foreignKey: "reviewid" });
db.review.hasMany(db.review_reply, {
  as: "review_replies",
  foreignKey: "reviewid",
});
db.category_company_map.belongsTo(db.service_category, {
  as: "sc",
  foreignKey: "scid",
});
db.service_category.hasMany(db.category_company_map, {
  as: "category_company_maps",
  foreignKey: "scid",
});
db.product.belongsTo(db.service_category, { as: "sc", foreignKey: "scid" });
db.service_category.hasMany(db.product, { as: "products", foreignKey: "scid" });


export default db;

