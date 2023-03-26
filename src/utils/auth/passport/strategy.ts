import { User } from "@prisma/client";
import * as Errors from "@errors";
import * as Utils from "@utils";
import { Strategy as LocalStrategy } from "passport-local";

type Done = (err: any, user?: User | false) => void;

const verifyCallback = async (
  username: string,
  password: string,
  done: Done
) => {
  try {
    const user = await Utils.Auth.login(username, password);
    if (user) {
      return done(null, user);
    } else {
      return done(Errors.Auth.invalidCredentials, false);
    }
  } catch (error) {
    return done(error);
  }
};

const localStrategy = new LocalStrategy(verifyCallback);

export type { Done };
export default localStrategy;
