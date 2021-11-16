const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UsuarioSchema = new Schema({
    nombre:{type: String, required: true, max: 60},
    pass:{type: String, required: true, max: 128}
    
});

module.exports = mongoose.model("usuarios", UsuarioSchema); 