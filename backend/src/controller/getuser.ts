import { Request, Response } from "express";
import { getUser } from "../model/userModel";

export async function getUserController(req: Request, res: Response) {
  const dbUserData = await getUser();

  res.json({
    message: `All data fetched`,
    data: dbUserData,
  });
}
