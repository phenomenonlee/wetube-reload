import express from "express";
import morgan from "morgan";
 
const PORT = 5000;

const app = express(); 
const logger = morgan("combined");

const home = (req, res) => {
    console.log("I will respond.")
    return res.send("Hello");
}

const login = (req,res) => {
    return res.send("login")
}
app.use(logger);
app.get("/",home);
app.get("/login", login);

const handleListening = () =>
console.log(`✅Server listening on port http://localhost:${PORT} 🚀`);

app.listen(PORT,handleListening);
