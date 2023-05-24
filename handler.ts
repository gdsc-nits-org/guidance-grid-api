import app from "./server";
import serverless, { Handler } from "serverless-http";

const serverlessApp = serverless(app);

const handler: Handler = async (...args) => {
  return await serverlessApp(...args);
};

export { handler };
