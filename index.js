const express = require("express");
require("dotenv").config();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const routes = require("./routes");

const PORT = process.env.PORT || 8000;

const app = express();

// Middleware
app.use(express.json());
app.use(bodyParser.json());
app.use(cookieParser());

// Routes
app.use("/", routes);

// Listening server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

