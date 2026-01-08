import { UserPostInput } from "../controller/postUser";
import { prisma } from "../lib/prisma";

export async function postUser(data: UserPostInput) {
  const postUser = await prisma.users.create({
    data: {
      title: data.title,
      image: data.image,
    },
  });

  return postUser;
}

export async function getUser() {
  const userData = await prisma.users.findMany({});
  return userData;
}
