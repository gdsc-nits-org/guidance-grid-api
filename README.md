# Serverless API for Guidance Grid Client


## API Documentation is [here](https://app.swaggerhub.com/apis-docs/JAYDEEPJD8914/test/1.0.0#/)

## Setting Up Locally

1. Clone the Repository
2. Install `node_modules` : `pnpm_install`
3. Generate Prisma Client : `pnpm primsa generate`
4. Create a MongoDB server on [Atlas](https://www.mongodb.com/atlas/database). Copy the Connection URI.
5. Create a Redis Instance (with TLS enabled) on [Upstash](https://upstash.com/). Copy the Connection URI.
6. Copy `.env.example` to `.env`
7. In `DATABASE_URL`, put the Connection URI from Atlas. Make sure to **remove** url params like `retryWrites=true&w=majority`. Additionally, add a database name where prisma will push the data to. Example: `mongodb+srv://username:password@host:port/dbname"`
8. In `UPSTASH_REDIS_URL`, put the Connection URI from Upstash. It will look something like this `redis://default:password@host:port`. Since TLS is enabled, make sure to add an extra `s` after `redis`. Also omit putting `default` as username as its handled by Redis itself. Your `UPSTASH_REDIS_URL` should look like `rediss://:password@host:port`.
9. Push the schema to Atlas: `pnpm prisma db push`
10. Run the application: `pnpm dev`


#### Note:

To make a local MongoDB server work with Prisma, make sure to enable [`replica_set`](https://github.com/prisma/prisma/issues/8266#issuecomment-1133644139)

## Deploying on AWS

Read this [blog post](https://jdeep.tech/posts/post-006)
