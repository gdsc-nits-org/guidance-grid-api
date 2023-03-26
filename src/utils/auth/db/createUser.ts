import * as Interfaces from "@interfaces";
import hashPassword from "../hashPassword";
import { prisma } from "@utils";

const createUser = async (user: Interfaces.User) => {
  const hash = hashPassword(user.password);
  const User = await prisma.user.create({
    data: {
      name: user.name,
      uname: user.username,
      password: hash,
      email: user.email,
    },
  });
  return User;
};

export default createUser;
