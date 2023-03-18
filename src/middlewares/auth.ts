import * as Interfaces from "@interfaces";
import * as Utils from "@utils";

const isLoggedIn: Interfaces.Middlewares.Sync = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  return res.json(Utils.Response.error("Unauthorized", 401));
};

export default isLoggedIn;
