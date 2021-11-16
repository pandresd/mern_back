const express = require('express'); 
const router = express.Router();
const usuariosController = require('../controllers/usuarios.controller')

router.post("/login", usuariosController.login)
router.post("/register", usuariosController.register)

//router.post("/", usuariosController.create)
//router.get("/", usuariosController.find)
//router.get("/:id", usuariosController.findOne)
//router.put("/:id", usuariosController.update)

module.exports = router