import { Request, Response } from "express";

export type UserPostInput = {
  title: string;
  image: string;
};

export async function postUser(req: Request, res: Response) {
  const body = req.body as UserPostInput;

  const postedUser = await postUser(body);

  res.json({
    message: `User post created successfully`,
    data: postedUser,
  });
}
