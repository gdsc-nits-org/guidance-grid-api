import { CustomValidator } from "express-validator";
import { prisma } from "@utils";

const checkUsername: CustomValidator = async (username: string) => {
  const user = await prisma.user.findFirst({
    where: {
      uname: username,
    },
  });
  if (user) {
    throw new Error("Username is taken");
  }
};

export default checkUsername;
