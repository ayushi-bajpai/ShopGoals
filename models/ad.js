const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const adScehma = new Schema({
    name: String,
    postedBy: ObjectId,
    price: String
    
});

module.exports = mongoose.model("Ad", adScehma)