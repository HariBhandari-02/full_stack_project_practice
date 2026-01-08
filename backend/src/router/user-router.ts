import { Application } from "express";

export async function UserRouter(app: Application) {
  //post users data
  app.post("/users/post");

  //get user data
  app.get("/users/get");
}
