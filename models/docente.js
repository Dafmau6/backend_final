const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const docenteSchema = new mongoose.Schema({

    id: {
        type: String,
        maxlength: 150,
    },
    nombres: {
        type: String,
        required: true,
        maxlength: 150,
    },
    apellidos: {
        type: String,
        required: true,
        maxlength: 150,
    },
    tipocontrato: {
        type: String,
        required: true,
        maxlength: 150,
    },
    genero: {
        type: String,
        required: true,
        maxlength: 150,
    }
    
});

module.exports = mongoose.model('docente', docenteSchema);