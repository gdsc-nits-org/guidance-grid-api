import * as Utils from "@utils";

const invalidCredentials = Utils.Response.error(
  "Username or Password is incorrect",
  401
);

export { invalidCredentials };
