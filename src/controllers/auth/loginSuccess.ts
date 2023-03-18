import * as Interfaces from "@interfaces";
import * as Utils from "@utils";

const loginSuccess: Interfaces.Controllers.Sync = (_req, res) => {
  return res.json(Utils.Response.success("Authenticated"));
};

export { loginSuccess };
