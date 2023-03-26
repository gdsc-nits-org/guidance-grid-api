import * as Utils from "@utils";
import { Done } from "./strategy";

const deserializeUserCallback = async (username: string, done: Done) => {
  try {
    const user = await Utils.Auth.db.getUserByUname(username);
    if (user) {
      done(null, user);
    }
  } catch (err) {
    done(err);
  }
};

export default deserializeUserCallback;
