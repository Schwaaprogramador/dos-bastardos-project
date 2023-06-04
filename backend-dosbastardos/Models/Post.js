const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const PostSchema = new Schema({

    titulo: {
        type: String,
        required: true,
        unique: true
        
    },
    resumen:{
        type: String,
        
    },
    contenido:{
        type: String,
        
    },
    imagen:{
        type: String,
        
    }
}, {timestamps: true})


const postModel = model('Post', PostSchema);

module.exports = postModel;