const Profesores = require('../models/docente')

const actualizarProfesores = async (req, res, next) => {
    try {

    const tareaActualizada = await
    Profesores.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!tareaActualizada) {
    res.status(404).json({ message: "Tarea no encontrada" });
    } else {
    res.status(200).json(tareaActualizada);
    }
    } catch (err) {
    next(err);
    }
    };
module.exports = actualizarProfesores;