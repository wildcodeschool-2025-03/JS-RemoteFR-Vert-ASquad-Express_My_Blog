import express from "express";

import {
  getAllArticles,
  getCategoriesByArticle,
  getOneArticle,
} from "./articles/articles.controller";

const router = express.Router();

router.get("/articles", getAllArticles);
router.get("/articles/:id", getOneArticle);
router.get("/articles/:id/categories", getCategoriesByArticle);

export default router;
