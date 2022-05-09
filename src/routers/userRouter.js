import express from "express";
import {
  getEdit,
  postEdit,
  logout,
  see,
  startGithublogin,
  finishGithublogin,
} from "./controllers/userController";

const userRouter = express.Router();

userRouter.get("/logout", logout);
userRouter.route("/edit").get(getEdit).post(postEdit);
userRouter.get("/github/start", startGithublogin);
userRouter.get("/github/finish", finishGithublogin);
userRouter.get("/id", see);

export default userRouter;
