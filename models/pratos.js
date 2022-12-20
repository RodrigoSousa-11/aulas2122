const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const pratosSchema = new Schema({

    nome_do_prato: {type: String, required: true},

    categoria: {type: String, required: true},

    tipo: {type: String, required: true},

    preco: {type: Number, required: true},

    regime: {type: String, required: true},

    ingredientes: {type: Array, required: true},
    
    codigo: {type: Number, required: true, uniqueItem: true},
    }, 
    {
        timestamps: true
    })
    

module.exports = mongoose.model('Pratos', pratosSchema, 'menu_do_dia');
    // {
    //     "_id": {
    //       "$oid": "6390e90dc1e16b3232e70936"
    //     },
    //     "nome_do_prato": "Bacalhau",
    //     "categoria": 1,
    //     "tipo": "normal",
    //     "preco": 12,
    //     "regime": "peixe",
    //     "ingredientes": [
    //       "bacalhau",
    //       "batata",
    //       "couve"
    //     ],
    //     "codigo": "101"
    //   }

