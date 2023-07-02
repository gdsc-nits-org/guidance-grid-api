import { Router } from "express";
import * as Controllers from "@controllers";
import * as Middlewares from "@middlewares";
import { validate, CREATE_ARTICLE_VALIDATORS } from "@middlewares";

const router: Router = Router({ mergeParams: true });

router.post(
  "/post",
  Middlewares.isLoggedIn,
  CREATE_ARTICLE_VALIDATORS,
  validate,
  Controllers.Article.post
);

router.get("/getmany", Controllers.Article.getMany);

export default router;
