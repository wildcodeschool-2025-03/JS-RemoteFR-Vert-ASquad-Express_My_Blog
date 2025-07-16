import express from "express";

import {
  addArticle,
  getAllArticles,
  getCategoriesByArticle,
  getOneArticle,
  deleteOneArticle,
} from "./articles/articles.controller";
import { login } from "./users/user.controller";

import { validateArticle } from "./articles/articles.middleware";
import { isIdANumber } from "./middlewares/paramsValidation";

const router = express.Router();

router.get("/articles", getAllArticles);
router.get("/articles/:id", getOneArticle);
router.get("/articles/:id/categories", getCategoriesByArticle);
router.post("/articles", validateArticle, addArticle);
router.delete("/articles/:id", isIdANumber, deleteOneArticle);

router.post("/login", login);

export default router;
