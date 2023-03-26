import * as Interfaces from "@interfaces";
import * as Utils from "@utils";

const login: Interfaces.Controllers.Sync = (req, res) => {
  return res.json(Utils.Response.success(req.session.passport.user));
};

export { login };
