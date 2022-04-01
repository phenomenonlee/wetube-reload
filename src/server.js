import express from "express";
import morgan from "morgan";
 
const PORT = 5000;

const app = express(); 
const logger = morgan("dev");
app.use(logger);

const globalRouter = express.Router();

const handleHome = (req, res) => res.send("home");

globalRouter.get("/", handleHome);


const userRouter = express.Router();

const handleEditUser = (req, res) => res.send("Edit User");

userRouter.get("/edit",handleEditUser);


const videoRouter = express.Router();

const handleWatchvideo = (req, res) => res.send("Watch Video");

videoRouter.get("/watch", handleWatchvideo);

app.use("/", globalRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);

const handleListening = () =>
console.log(`✅Server listening on port http://localhost:${PORT} 🚀`);

app.listen(PORT,handleListening);
