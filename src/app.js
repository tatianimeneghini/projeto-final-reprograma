const express = require("express");
require("dotenv-safe").config();
const bodyParser = require("body-parser");
const index = require("./routes/index");
const literaturaLGBT = require("./routes/literaturaLGBTRouter");

const dataBase = require("./model/database");
dataBase.connect();

const app = express();

app.use(function (request, response, next){
    response.header("Access-Control-Allow-Origin", "*");
    response.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});

app.use(bodyParser.json());

app.use("/", index);
app.use("/literatura-LGBT", literaturaLGBT);

module.exports = app;