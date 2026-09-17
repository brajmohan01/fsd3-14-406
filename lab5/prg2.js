import express from "express";
import path from "path";
import{ fileURLToPath } from "node:url";

const app =express();
const Port = 3333;

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

app.use(express.static(path.join(dirname, "frontend")));

app.use((req, res)=>{
    res.status(404).sendFile(path.join(dirname, "frontend", "404.html"));
});

app.listen(Port, ()=>{
    console.log(`Server is running on port ${Port}`);
});