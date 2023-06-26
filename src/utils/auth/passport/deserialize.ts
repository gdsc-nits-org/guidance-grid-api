import * as Utils from "@utils";

const deserializeUserCallback = async (username: string, done: any) => {
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
