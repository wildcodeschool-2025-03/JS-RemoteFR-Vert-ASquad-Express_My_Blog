import express from "express";

import {
  addArticle,
  getAllArticles,
  getCategoriesByArticle,
  getOneArticle,
} from "./articles/articles.controller";

import { validateArticle } from "./articles/articles.middleware";

const router = express.Router();

router.get("/articles", getAllArticles);
router.get("/articles/:id", getOneArticle);
router.get("/articles/:id/categories", getCategoriesByArticle);
router.post("/articles", validateArticle, addArticle);

export default router;
