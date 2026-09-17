import express from "express";
import path from "path";
import{ fileURLToPath } from "node:url";

const app =express();
const Port = 3333;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname,"public", "index.html"));
});

app.get("/about", (req, res)=>{
    res.sendFile(path.join(__dirname,"public", "about.html"));
});

app.get('/enquiry', (req, res)=>{
    res.sendFile(path.join(__dirname,"public", "enquiry.html"));
});

app.listen(Port, ()=>{
    console.log(`Server is running on port ${Port}`);
});