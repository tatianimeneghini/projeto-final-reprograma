const mongoose = require("mongoose");
mongoose.set('useCreateIndex', true);

const DB_URL = process.env.DB_URL;
const connect = () => {
    mongoose.connect(DB_URL, {
        useUnifiedTopology: true,
        useNewUrlParser: true});
const connection = mongoose.connection;
connection.on("error", () => console.log("Erro ao conectar."));
connection.once("open", () => console.log("Conectamos!"));
};

module.exports = {
    connect
};