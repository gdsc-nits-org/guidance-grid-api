import { redis } from "@utils";
import { rateLimit } from "express-rate-limit";
import RedisStore from "rate-limit-redis";

const limiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 120, // Limit each IP to 120 requests per `window` (here, per 1 minute)
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  store: new RedisStore({
    // @ts-expect-error - Known issue: the `call` function is not present in @types/ioredis
    sendCommand: (...args: string[]) => redis.call(...args),
  }),
});

export default limiter;
