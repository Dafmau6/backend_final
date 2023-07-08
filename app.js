const express = require('express');
const connect = require('./config/db');
const profesoresRoutes = require('./routes/profesores');
const cors=require('cors');
const dotenv = require("dotenv");


const app = express();
connect();
app.use(express.json());
app.use('/profesores', profesoresRoutes);
app.use(cors());

const port = process.env.PORT || 3000;
app.listen(port,
    () => console.log(`La aplicación está
corriendo en http://localhost:${3000}`)
);
module.exports = app;

