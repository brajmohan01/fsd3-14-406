import express from "express";
const app = express();
const PORT = 5002;

app.get("/", (req, res) => {
  res.send("Hello Express");
});
app.get("/about", (req, res) => {
  res.send("We are FSD developers");
});
app.get("/enquiry", (req, res) => {
  res.send("Contact us for more information");
});
app.use((req, res) => {
  res.status(404).send("Page not found");
});
app.post("/login", (req, res) => {
  res.send({ msg: "Login page" });
});
app.put("/user/update/1", (req, res) => {
  res.send({ msg: "User updated" });
});
app.delete("/user/delete/1", (req, res) => {
  res.send({ msg: "User deleted" });
});

app.listen(PORT, () => {
  console.log("Server is running at ", PORT);
});
