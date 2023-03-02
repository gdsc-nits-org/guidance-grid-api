import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import cookieSession from "cookie-session";

import * as Middlewares from "./src/middlewares";
import * as Routers from "./src/routers";
import * as Constants from "./src/globals/constants";
import * as Utils from "./src/utils";

const app = express();

// Middlewares
app
  .use(cors())
  .use(helmet())
  .use(morgan("dev"))
  .use(express.json())
  .use(express.urlencoded({ extended: true }))
  .use(
    cookieSession({
      name: "session",
      keys: [
        process.env.COOKIE_SECRET
          ? process.env.COOKIE_SECRET
          : "supersecretkey",
      ],
      maxAge: 2 * 24 * 60 * 60 * 1000,
      secure: process.env.NODE_ENV === "dev" ? false : true,
      httpOnly: process.env.NODE_ENV === "dev" ? false : true,
    })
  );

// Routers
app.use(`${Constants.System.ROOT}/`, Routers.Health);
app.use(`${Constants.System.ROOT}/auth/`, Routers.Auth);

// Error Handlers
app.use(Middlewares.Error.errorHandler);

// Match all routes
app.all("*", (_req, res) => {
  return res.json(Utils.Response.error("Route does not exist", 404));
});

export default app;
