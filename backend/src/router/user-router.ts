import { Application } from "express";
import { postUserController } from "../controller/postUser";
import { getUserController } from "../controller/getuser";

export async function UserRouter(app: Application) {
  //post users data
  app.post("/users/post", postUserController);

  //get user data
  app.get("/users/get", getUserController);
}
