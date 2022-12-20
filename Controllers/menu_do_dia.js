var express = require('express');
var router = express.Router();

const Pratos = require("../Models/pratos");

//module.exports = function (app, collection) {

    router.get('/', (req, res) => {
       // var collection = req.app.get('collection');

    //     collection.find().toArray().then(result => {
    //     res.send(result)
    //     res.status(200);
    // })

    Pratos.find({}).then(result => {
        if (result != null) {
        return res.status(200).send(result);
        } else {
        return res.status(400).send("Não encontrado")
        }
        })
});

    router.get("/:codigo", (req, res) => {
        //var collection = req.app.get('collection');

        // Pratos.find({"codigo": req.params.codigo},function(err,result){
        //     // if(err) return res.status(400).send(err)
        //     // res.status(200).send(result)

        //     if (result != null) {
        //         return res.status(200).send(result);
        //     }else if(err){
        //         return res.status(400).send("Not Found")
        //     }else {
        //         return res.status(400).send("Not Found")
        //     }
        // })


        Pratos.findOne({"codigo": req.params.codigo}).then(result => {
            if (result != null) {
            return res.status(200).send(result);
            } else {
            return res.status(400).send("Não encontrado")
            }
            })
    })


    router.post("/", (req, res) => {
        //var collection = req.app.get('collection');

        const { nome_do_prato, categoria, tipo, preco, regime, ingredientes, codigo } = req.body;

        // return Pratos.insertOne({ nome_do_prato, categoria, tipo, preco, regime, ingredientes, codigo})
        //     .then((data, err) => {
        //         if (err) return res.status(400).send()
        //         return res.status(200).send("OK! Adicionado")
        //     })
        //     .catch(error => {
        //         console.log(error)
        //         return res.status(400).send()
        //     })

        if (req.body != null) {
            Pratos.create({ nome_do_prato, categoria, tipo, preco, regime, ingredientes, codigo }).then((prato) => {
            return res.status(200).send(prato);
            }).catch((error) => {
            return res.status(400).send(error.message);
            })
            }
            return res.status(400).send("");
});

    router.put("/:codigo", (req, res) => {
        //var collection = req.app.get('collection');

            let novo_prato = req.body

            // Pratos.findOneAndUpdate({ "codigo": req.params.codigo },
            //     { $set: novo_prato },
            //     { upsert: false })
            //     .then(result => {
            //         res.status(200).send("OK! Atualizado")
            //     })
            //     .catch(error => res.status(400).send(error))

            if (req.body != null && req.params != null) {
                Pratos.update({ codigo: req.params.codigo }, req.body).then((prato) => {
                return res.status(200).send(prato);
                }).catch((error) => {
                return res.status(400).send(error.message );
                })
                }
        })

    router.delete("/:codigo", (req, res) => {
        //var collection = req.app.get('collection');

        Pratos.deleteOne({ "codigo": req.params.codigo },)
        .then(result => {
            if(result.deletedCount===0){
                return res.status(400).send("Não encontrado")
            }
            res.status(200).send("Apagado com suecesso")
        })
        .catch(error => res.status(400).send(error))
    })

    router.delete("/", (req, res) => {
        //var collection = req.app.get('collection');

        Pratos.deleteMany({}, (err) => {
            if(err) return res.status(400).send(err)
            res.status(200).send("Todos os pratos foram apagados.")
        });
    })


module.exports = router;