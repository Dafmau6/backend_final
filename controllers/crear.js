const Profesores = require('../models/docente')

const crearProfesores = async (req, res, next) => {
    try {

        const { id, nombres, apellidos, tipocontrato, genero } = req.body;

        const nuevoProfesor = new Profesores({
            id,
            nombres,
            apellidos,
            tipocontrato,
            genero
        });

        const profesorGuardado = await nuevoProfesor.save();
        res.status(201).json(profesorGuardado);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};
module.exports = crearProfesores;
