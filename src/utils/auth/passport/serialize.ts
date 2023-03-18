import { User } from "@prisma/client";
import { Done } from "./strategy";

const serializeUserCallback = (user: User, done: Done) => {
  done(null, user);
};

export default serializeUserCallback;
