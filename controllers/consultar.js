const Profesores = require('../models/docente')

const obtenerTodas = async (req, res, next) => {
    try {
        // Busca todas las tareas en la base de datos
        const tareas = await Profesores.find({});
        // Responde con un estado 200 y todas las tareas encontradas
        res.status(200).json(tareas);
    } catch (err) {
        // Llama al siguiente middleware con el error en caso de haberlo
        next(err);
    }
};

module.exports = obtenerTodas;