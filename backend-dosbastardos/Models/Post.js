const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const PostSchema = new Schema({

    titulo: {
        type: String,
        
    },
    resumen:{
        type: String,
        
    },

    contenido:{
        type: String,
        
    },

    imagen:{
        type: String,
        
    },

    author:{
        type: Schema.Types.ObjectId,
        ref:'User',
    }

}, {timestamps: true})


const postModel = model('Post', PostSchema);

module.exports = postModel;