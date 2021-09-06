const express = require("express");
const app = express();
const cors = require("cors");
const videoRoutes = require("./routes/videoRoutes");
const detailsRoute = require("./routes/detailsRoute");

//Run the port using the env file
require("dotenv").config();

const PORT = process.env.PORT;

app.use(express.json());

//For images
app.use(express.static("public"));
app.use("/static-files", express.static("public"));

//Implementing middleware
app.use(cors());

app.use((_req, _res, next) => {
  console.log("Incoming Request");
  next();
});

app.use("/videos", videoRoutes);

app.use("/:id", detailsRoute);

// Start the server listening
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
