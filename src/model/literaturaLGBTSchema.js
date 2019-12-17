const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const literaturaLGBTSchema = new Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        auto: true,
        required: true
    },
    titulo: {
        type: String,
        unique: true,
        required: true
    },
    autoria: {
        type: String,
        required: true
    },
    estiloNarrativo: {
        type: String
    },
    generoLiterario: {
        type: String,
        required: true
    },
    editora: {
        type: String
    },
    anoLancamento: {
        type: Number
    },
    acessoLink: {
        type: String 
    }
})

const literaturaLGBTCollection = mongoose.model("literaturaLGBT", literaturaLGBTSchema);
module.exports = literaturaLGBTCollection;