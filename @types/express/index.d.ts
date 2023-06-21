import { User } from "@prisma/client";

declare global {
  namespace Express {
    export interface User {
      id: string;
      uname: string;
      email: string;
      name: string;
      password: string;
      profileImage: string | null;
      profileBanner: string | null;
      bio: string | null;
      linkedInHandle: string | null;
      githubHandle: string | null;
      facebookHandle: string | null;
      article: any[];
      Bookmark: any[];
      Comment: any[];
      Vote: any[];
    }
    export interface Request {
      session?: any;
    }
  }
}
