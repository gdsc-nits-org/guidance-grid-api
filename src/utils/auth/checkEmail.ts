import { CustomValidator } from "express-validator";
import { prisma } from "@utils";

const checkEmail: CustomValidator = async (email: string) => {
  const user = await prisma.user.findFirst({
    where: {
      email: email,
    },
  });
  if (user) {
    throw new Error("Email is taken");
  }
};

export default checkEmail;
