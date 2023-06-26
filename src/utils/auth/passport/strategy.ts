import * as Errors from "@errors";
import * as Utils from "@utils";
import { Strategy as LocalStrategy } from "passport-local";

const verifyCallback = async (
  username: string,
  password: string,
  done: any
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

export default localStrategy;
