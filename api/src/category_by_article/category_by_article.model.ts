import client from "../client";

const insertCategoriesByArticle = async (
  categories: [number],
  articleId: number
) => {
  return await client.query(
    "INSERT INTO category_by_article (article_id, category_id) VALUES ?",
    [categories.map((cat: number) => [articleId, cat])]
  );
};

export { insertCategoriesByArticle };
