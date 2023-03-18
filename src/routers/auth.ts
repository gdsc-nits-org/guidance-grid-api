import { Auth } from "@controllers";
import passport from "passport";
import { validate, SIGNUP_VALIDATORS, LOGIN_VALIDATORS } from "@middlewares";
import { Router } from "express";

const router: Router = Router({ mergeParams: true });

router.post("/signup", SIGNUP_VALIDATORS, validate, Auth.signup);
router.post(
  "/login",
  LOGIN_VALIDATORS,
  validate,
  passport.authenticate("local", { failWithError: true }),
  Auth.loginSuccess
);

export default router;
