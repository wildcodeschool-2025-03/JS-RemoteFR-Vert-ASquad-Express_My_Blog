import client from "../client";

const readOneArticles = async (id: number) => {
  return await client.query(`SELECT * FROM article WHERE id = ?`, [id]);
};

const insertArticle = async (article: any) => {
  const {
    title,
    subtitle,
    summary,
    description,
    image_src,
    image_alt,
    rating,
    is_archived,
    visit_duration,
    country_id,
  } = article;

  return await client.query(
    "INSERT INTO article (title, subtitle, summary, description, image_src, image_alt, rating, is_archived, visit_duration, country_id) VALUES (?,?,?,?,?,?,?,?,?,?)",
    [
      title,
      subtitle,
      summary,
      description,
      image_src,
      image_alt,
      rating,
      is_archived,
      visit_duration,
      country_id,
    ]
  );
};

export { readOneArticles, insertArticle };
