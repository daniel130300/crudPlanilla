var express = require('express');
var router = express.Router();
const util = require('util');
const connection = require("../../utilities/db");
const query = util.promisify(connection.query).bind(connection);

//CRUD
//CREATE: POST
//UPDATE: PUT
//DELETE: DELETE
//CONSULTA REGISTROS: GET

router.get("/obtenerEmpleados", async(req, res) => {
    try 
    {
        const rows = await query('SELECT * FROM empleados');
        res.status(200).json({rows});
    }
    catch(ex)
    {
        res.status(500).json({"error": ex});
    }
})

router.get("/obtenerEmpleado/:id", async(req, res) => {
    try 
    {
        const { id } = req.params;
        const row = await query('SELECT * FROM empleados WHERE id_empleado = ?', [id]);
        res.status(200).json({row});
    }
    catch(ex)
    {
        res.status(500).json({"error": ex});
    }
})

module.exports = router;