import { body } from "express-validator";
import * as Utils from "@utils";

const SIGNUP_VALIDATORS = [
  body("username").isString().not().isEmpty(),
  body("name").isString().not().isEmpty(),
  body("password").isString().not().isEmpty(),
  body("email").not().isEmpty().isEmail(),
  body("username").custom(Utils.Auth.checkUsername),
  body("email").normalizeEmail().custom(Utils.Auth.checkEmail),
];

const LOGIN_VALIDATORS = [
  body("username").isString().not().isEmpty(),
  body("password").isString().not().isEmpty(),
];

export { SIGNUP_VALIDATORS, LOGIN_VALIDATORS };
