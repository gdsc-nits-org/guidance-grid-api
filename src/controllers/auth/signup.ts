import * as Interfaces from "@interfaces";
import * as Utils from "@utils";

const signup: Interfaces.Middlewares.Async = async (req, res, next) => {
  const body: Interfaces.User = req.body;
  try {
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
  } catch (error) {
    return next(error);
  }
};

export default signup;
