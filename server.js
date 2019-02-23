const express = require("express");
const path = require("path");
const axios = require("axios");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "public")));

app.get("/products/:id", (req, res) => {
  axios
    .get(
      `http://ec2-3-93-54-61.compute-1.amazonaws.com/products/${req.params.id}`
    )
    .then(response => {
      res.json(response.data);
    })
    .catch(err => {
      console.log("Error with GET request in proxy");
      res.sendStatus(400);
    });
});

app.get("/getFiveRandom", (req, res) => {
  axios
    .get(`http://ec2-3-80-146-248.compute-1.amazonaws.com/getFiveRandom`)
    .then(response => {
      res.json(response.data);
    })
    .catch(err => {
      console.log("Error with GET request in proxy");
      res.sendStatus(400);
    });
});

app.get("/productinfo/:id", (req, res) => {
  axios
    .get(
      `http://ec2-13-59-174-32.us-east-2.compute.amazonaws.com:3030/productinfo/${
        req.params.id
      }`
    )
    .then(response => {
      res.json(response.data);
    })
    .catch(err => {
      console.log("error in Remingtons GET request");
      res.sendStatus(400);
    });
});

// app.get("/products/:id/reviews", (req, res) => {
//   axios
//     .get(
//       `http://ec2-13-58-187-52.us-east-2.compute.amazonaws.com/${
//         req.params.id
//       }/reviews`
//     )
//     .then(product => {
//       res.json(product.data);
//     })
//     .catch(err => {
//       console.log("Error with GET request in proxy");
//       res.sendStatus(400);
//     });
// });

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});
