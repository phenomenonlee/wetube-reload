import express from "express";
import { handle } from "express/lib/application";
 
const PORT = 7000;

const app = express();

const logger = (req, res, next) =>{
    console.log(`${req.method}${req.url}`);
    next();
}

const handleHome = (req, res) => {
    return res.send("<h1>i still love you</h1>");
}

app.get("/", logger, handleHome);

const handleListening = () =>
console.log(`✅Server listening on port http://localhost:${PORT} 🚀`);

app.listen(PORT,handleListening);
