import * as Interfaces from "@interfaces";
import * as Utils from "@utils";
import { prisma } from "@utils";

const post: Interfaces.Controllers.Async = async (req, res, next) => {
  const { title, content, tags } = req.body;
  // User is guaranteed to exist as isLoggedIn middleware is used
  const { user } = req.session.passport;
  try {
    await prisma.article.create({
      data: {
        title,
        content,
        tags,
        author: {
          connect: {
            uname: user,
          },
        },
      },
    });

    return res.json(Utils.Response.success("Successfully posted article"));
  } catch (error) {
    return next(error);
  }
};

export { post };
