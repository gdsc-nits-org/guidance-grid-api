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

const CREATE_ARTICLE_VALIDATORS = [
  body("title").isString().not().isEmpty().trim(),
  body("content").isString().not().isEmpty().trim(),
  body("tags").isArray(),
  body("tags.*").isString().not().isEmpty().trim(),
];

export { SIGNUP_VALIDATORS, LOGIN_VALIDATORS, CREATE_ARTICLE_VALIDATORS };
