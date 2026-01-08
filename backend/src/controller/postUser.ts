import { Request, Response } from "express";
import { postUser } from "../model/userModel";

export type UserPostInput = {
  title: string;
  image: string;
};

export async function postUserController(req: Request, res: Response) {
  const body = req.body as UserPostInput;

  const postedUser = await postUser(body);

  res.json({
    message: `User post created successfully`,
    data: postedUser,
  });
}
