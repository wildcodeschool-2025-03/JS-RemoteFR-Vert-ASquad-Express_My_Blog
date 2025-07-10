import client from "../client";

const readOneArticles = async (id: number) => {
  return await client.query(`SELECT * FROM article WHERE id = ?`, [id]);
};

export { readOneArticles };
