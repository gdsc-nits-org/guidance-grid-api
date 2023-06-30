import { Router } from "express";
import * as Controllers from "@controllers";

const router: Router = Router({ mergeParams: true });

router.post("/post", Controllers.Article.post);

export default router;
