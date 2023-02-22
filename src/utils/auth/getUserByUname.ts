import { prisma } from "@utils";

const getUserByUname = async (username: string) => {
  const User = await prisma.user.findFirst({
    where: {
      uname: username,
    },
  });
  return User;
};

export default getUserByUname;
