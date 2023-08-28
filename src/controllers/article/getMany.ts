import * as Interfaces from "@interfaces";
import * as Utils from "@utils";
import { prisma } from "@utils";

/*
 To fix: This sometimes causes Lambda Timeout
 since it needs to fetch all articles from a MongoDB
 database again. From what I have discovered, this
 happens when there is a cold start for the Lambda function
 and the database is not yet connected.

 In case, this happens, from the client,
 make a dummy request GET `/api/v1` to get the Lambda instance
 up and running again. Then make the request to GET `/api/v1/article/getmany`.
 Running the lambda function instance for the dummy request will first create 
 a db connection and keep the connection alive for a few minutes.
 Within that time, the request to GET `/api/v1/article/getmany` will be able to
 get articles from the database. This is a temporary fix and I am still looking
 for a better solution.
*/
const getMany: Interfaces.Controllers.Async = async (req, res, next) => {
  // TODO: Add pagination
  // const page = req.query.page;
  try {
    const posts = await prisma.article.findMany({
      select: {
        id: true,
        title: true,
        content: true,
        tags: true,
        createdAt: true,
        Votes: true,
        author: {
          select: {
            uname: true,
            profileImage: true,
          },
        },
      },
    });
    return res.json(Utils.Response.success(posts));
  } catch (error) {
    return next(error);
  }
};

export { getMany };
