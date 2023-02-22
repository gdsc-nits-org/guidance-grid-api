import * as Interfaces from "@interfaces";
import * as Utils from "@utils";

const login: Interfaces.Middlewares.Async = async (req, res, next) => {
  const body: Interfaces.User = req.body;
  const { username, password } = body;
  const user = await Utils.Auth.getUserByUname(username);
  if (!user) {
    return next(Utils.Response.error("No user found", 404));
  }

  const [hashed, salt] = user.password.split("$");
  const success = Utils.Auth.verifyPassword(hashed, password, salt);

  if (!success) {
    return next(Utils.Response.error("Invalid Credentials", 400));
  }
  if (req.session) {
    req.session.user = { uid: user.id, username: user.uname };
  }
  return res.json(
    Utils.Response.success({ uid: user.id, username: user.uname })
  );
};

export default login;
