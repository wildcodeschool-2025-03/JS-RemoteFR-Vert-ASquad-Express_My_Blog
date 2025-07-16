import client from "../client";
import { Request, Response } from "express";
import {
  readOneArticles,
  insertArticle,
  deleteOneArticleById,
} from "./articles.model";

import { insertCategoriesByArticle } from "../category_by_article/category_by_article.model";

const getAllArticles = async (req: Request, res: Response) => {
  try {
    const articles = await client.query("SELECT * FROM article");
    res.status(200).json(articles[0]);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};

const getOneArticle = async (req: Request, res: Response) => {
  try {
    const rows = await readOneArticles(+req.params.id);

    const articles = rows[0] as [any];

    if (articles.length > 0) {
      res.status(200).json(articles[0]);
    } else {
      res.sendStatus(404);
    }
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};

const getCategoriesByArticle = async (req: Request, res: Response) => {
  try {
    const rows = await client.query(
      `SELECT category.id, category.label FROM category
INNER JOIN category_by_article ON category_by_article.category_id = category.id
INNER JOIN article ON article.id = category_by_article.article_id WHERE article.id = ? `,
      [req.params.id]
    );

    res.status(200).json(rows[0]);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};

const addArticle = async (req: Request, res: Response) => {
  try {
    const { categories, ...rest } = req.body;
    const insert = await insertArticle(rest);
    const articles = insert[0] as { insertId: number };

    await insertCategoriesByArticle(categories, articles.insertId);

    res.status(201).json({ id: articles.insertId });
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};

const deleteOneArticle = async (req: Request, res: Response) => {
  try {
    const result = await deleteOneArticleById(+req.params.id);
    res.sendStatus(204);
  } catch (error) {
    res.sendStatus(500);
  }
};

export {
  getAllArticles,
  getOneArticle,
  getCategoriesByArticle,
  addArticle,
  deleteOneArticle,
};
