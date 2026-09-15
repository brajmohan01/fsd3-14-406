import express from "express";
const app = express();
const PORT = 5002;

app.get("/", (req, res) => {
  res.send("Hello Express");
});

app.listen(PORT, () => {
  console.log("Server is running at ", PORT);
});