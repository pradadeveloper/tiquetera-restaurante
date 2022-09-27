var express = require('express');
var router = express.Router();
var usuariosController = require("../controllers/usuariosController")

// Creación de usuarios

router.get("/crear", usuariosController.crear);
router.post("/crear",usuariosController.guardado);
    
module.exports = router;
