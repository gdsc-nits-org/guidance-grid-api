import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cookieSession from "cookie-session";
import passport from "passport";

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
  .use(cookieParser())
  .use(express.urlencoded({ extended: true }))
  .use(
    cookieSession({
      name: "session",
      keys: [process.env.COOKIE_SECRET ?? "supersecretkey"],
      maxAge: 2 * 24 * 60 * 60 * 1000,
      httpOnly: true,
      secure: process.env.NODE_ENV === "prod",
    })
  )
  .use(passport.initialize())
  .use(passport.session());

passport.use(Utils.Auth.passport.localStrategy);
passport.serializeUser(Utils.Auth.passport.serializeUserCallback);
passport.deserializeUser(Utils.Auth.passport.deserializeUserCallback);

// Routers
app.use(`${Constants.System.ROOT}/`, Routers.Health);
app.use(`${Constants.System.ROOT}/auth/`, Routers.Auth);

// Error Handlers
app.use(Middlewares.Error.errorHandler);

// Match all routes
app.all("*", (req, res) => {
  return res.json(
    Utils.Response.error(`Route does not exist: ${req.path}`, 404)
  );
});

export default app;
