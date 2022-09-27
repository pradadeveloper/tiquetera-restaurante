const db = require("../database/models");

const usuariosController = {
    crear: function(req,res){
        db.usuarios.findAll()
            .then(function(usuarios){
                return res.render("usuarios",{usuarios:usuarios});
            })
    },
    guardado: function(req,res){
        db.usuarios.create(
            {  
                nombres: req.body.nombres,
                apellidos: req.body.apellidos,
                email: req.body.email,
                mobile: req.body.mobile
            }
        ); res.redirect("/");
    }
}
module.exports = usuariosController;