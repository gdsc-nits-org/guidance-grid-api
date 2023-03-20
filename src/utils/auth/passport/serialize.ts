import { User } from "@prisma/client";

const serializeUserCallback = (
  user: User,
  done: (a: Error | null, b: string) => void
) => {
  done(null, user.uname);
};

export default serializeUserCallback;
