import { User } from "@prisma/client";
import * as Utils from "@utils";

const login = async (
  username: string,
  password: string
): Promise<User | void> => {
  const user = await Utils.Auth.db.getUserByUname(username);
  if (!user) {
    return;
  }
  const [hashed, salt] = user.password.split("$");
  const success = Utils.Auth.verifyPassword(hashed, password, salt);

  if (!success) {
    return;
  }
  return user;
};

export default login;
