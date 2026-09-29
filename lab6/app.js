import {products} from "./data.js";
import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Hello From Express</h1>");
});

app.get("/api/products", (req, res) => {
     const {description, rating, ...rest} = products[0];
     const fileterProducts = products.map((product) => {
        const { description, rating, ...rest } = product;
        return rest;
     })
    // res.json(fileterProducts);
   //res.send(products);
   res.json({ count: fileterProducts.length, data: fileterProducts})

});

app.get("/api/products/:id",(req, res) => {

    const {id} = req.params;
    const product = products.find((item) => item.id === Number(id))

    if (!product){
        return res.status(400).json({ msg:`product not found with id:${id}`})
    } else {
        res.status(200).json(product);
    }
})

app.listen(3333, () => {
    console.log("Server is running at 3333");
});

