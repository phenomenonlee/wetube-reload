import express from "express";
import {
  edit,
  remove,
  logout,
  see,
  startGithublogin,
  finishGithublogin,
} from "./controllers/userController";

const userRouter = express.Router();

userRouter.get("/logout", logout);
userRouter.get("/edit", edit);
userRouter.get("/remove", remove);
userRouter.get("/github/start", startGithublogin);
userRouter.get("/github/finish", finishGithublogin);
userRouter.get("/id", see);

export default userRouter;
