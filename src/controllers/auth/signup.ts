import * as Interfaces from "@interfaces";
import * as Utils from "@utils";

const signup: Interfaces.Controllers.Async = async (req, res, next) => {
  const body: Interfaces.User = req.body;
  try {
    const user = await Utils.Auth.db.createUser(body);
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
