import * as Interfaces from "@interfaces";
import * as Utils from "@utils";

const signup: Interfaces.Middlewares.Async = async (req, res) => {
  const body: Interfaces.User = req.body;
  const user = await Utils.Auth.createUser(body);
  if (req.session) {
    req.session.user = { uid: user.id, username: user.uname };
  }
  return res.json(
    Utils.Response.success({
      uid: user.id,
      username: user.uname,
      name: user.name,
    })
  );
};

export default signup;
