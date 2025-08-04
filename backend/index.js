import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("200");
});

// const requestTime = function (req, res, next) {
//   req.requestTime = Date.now();
//   next();
// };

// app.use(requestTime);

// app.get("/", (req, res) => {
//   let responseText = "Hello World!<br>";
//   responseText += `Requested at: ${req.requestTime}`;
//   res.send(responseText);
// });

// app
//   .route("/web3")
//   .get((req, res) => {
//     res.json({
//       message: "GET request",
//     });
//   })
//   .post((req, res) => {
//     res.json({
//       message: "POST request",
//     });
//   })
//   .put((req, res) => {
//     res.json({
//       message: "PUT request",
//     });
//   })
//   .delete((req, res) => {
//     res.send("DELETE request");
//   });

// app.get("/user/:userId", (req, res) => {
//   res.json({
//     userId: req.params.userId,
//   });
// });

app.listen(3000, () => {
  console.log(`Server running at http://localhost:3000`);
});
