const express = require('express');

const crearProfesores = require('../controllers/crear');
const obtenerTodas= require('../controllers/consultar');
const actualizarProfesores = require('../controllers/actualizar');
const eliminarProfesores = require('../controllers/eliminar');

const router= express.Router();
router.get('/',obtenerTodas);
//router.get('/id',profesores.obtenerId);
router.post('/',crearProfesores);
router.put('/id',actualizarProfesores);
router.delete('/id',eliminarProfesores)

module.exports=router;
