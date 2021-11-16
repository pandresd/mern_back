const Usuario = require("../models/usuarios.model");
const crypto = require("crypto")
const jwt = require("jsonwebtoken")

exports.login = function(req,res, next){
   
    let hashedpass = crypto.createHash("sha512").update(req.body.pass).digest("hex");

    Usuario.findOne({ usuario:req.body.usuario, pass: hashedpass}, function(err,usuario){
        let response = {
            token:null,
        }
        if (usuario !== null){
            response.token = jwt.sign({
                id:usuario._id, 
                usuario: usuario.usuario
                },    "_recret_")
            }
            res.json(response);
            console.log(response)
        }
        )
}

exports.register = function(req,res){
    let hashedpass = crypto.createHash("sha512").update(req.body.pass).digest("hex");
    let usuario = new Usuario({
        usuario:req.body.usuario, 
        pass: hashedpass
    })
    usuario.save(function(err){
        if(err){
            console.log= false,
            response.exito = false,
            response.msg= "Error guardando el empleado"
            res.json(response)
            return;
        }
        response.exito=true,
        response.msg = " El empleado se ha guardado correctamente"
        res.json(response)
    })
}


// exports.create=function(req,res){
//     let usuario = new Usuario({
//         nombre: req.body.nombre,
//         clave: req.body.clave
//     })

    
// }

// exports.find = function(req,res){
//     Usuario.find(function(err, usuarios){
//         res.json(usuarios)
//     })
// }
// exports.findOne = function(req,res){
//     Usuario.findOne({_id: req.params.id},function(err, usuario){
//         res.json(usuario )
//     })
// }

// exports.update = function(req,res){
//     let usuario = {
//         nombre: req.body.nombre,
//         email: req.body.email,
//         clave: req.body.clave  
//     }
//     Usuario.findByIdAndUpdate(req.params.id, {$set: usuario}, function(err){
//         if (err){
//             console.error(err),
//             response.exito = false, 
//             response.msg = "Errror modificando datos de usuario"
//             res.json(response)
//             return;
//         }
//         response.exito = true,
//         response.msg = "Usuario modificado"
//         res.json(response)
//     })
// }