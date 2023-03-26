import { body } from "express-validator";
import * as Utils from "@utils";

const SIGNUP_VALIDATORS = [
  body("username").isString().not().isEmpty().trim(),
  body("name").isString().not().isEmpty().trim(),
  body("password").isString().not().isEmpty(),
  body("email").not().isEmpty().isEmail().trim(),
  body("username").custom(Utils.Auth.db.checkUsername),
  body("email").normalizeEmail().custom(Utils.Auth.db.checkEmail),
];

const LOGIN_VALIDATORS = [
  body("username").isString().not().isEmpty(),
  body("password").isString().not().isEmpty(),
];

export { SIGNUP_VALIDATORS, LOGIN_VALIDATORS };
