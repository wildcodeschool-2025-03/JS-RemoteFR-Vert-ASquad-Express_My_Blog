import { NextFunction, Request, Response } from "express";
import z from "zod";

const validateArticle = (req: Request, res: Response, next: NextFunction) => {
  const articleSchema = z.object({
    title: z.string(),
    subtitle: z.string(),
    summary: z.string(),
    description: z.string(),
    image_src: z.string(),
    image_alt: z.string(),
    rating: z.number(),
    is_archived: z.boolean(),
    visit_duration: z.string(),
    country_id: z.number(),
    categories: z.array(z.number()),
  });

  const validData = articleSchema.safeParse(req.body);

  if (!validData.success) {
    res.sendStatus(422); // UNprocessable Entity
  } else {
    next();
  }
};

export { validateArticle };
