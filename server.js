const express = require("express");
const dotEnv = require("dotenv");
const cors = require("cors");
const dbConnection = require("./database/connection");

dotEnv.config();

const app = express();

// Db connectivity
dbConnection();

// const middleware = (req, res, next) => {
//     console.log("Hey wassup");
//     next();
// };

// Cors installed with npm install -s cors
app.use(cors());

// Request payload middleware for json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res, next) => {
    res.send("Hello from nodejs api 2 server");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});

// Error handler middleware
app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).send({
        status: 500,
        message: err.message,
        body: {},
    });
});
