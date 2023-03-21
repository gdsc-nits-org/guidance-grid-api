import * as Interfaces from "@interfaces";
import * as Utils from "@utils";

const logout: Interfaces.Controllers.Sync = (req, res) => {
  req.logout(() => false);
  return res.json(Utils.Response.success("Successfully logged out"));
};

export { logout };
