var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PersonSchema = new Schema({
    Date: String,
    FeedConductivity: String,
    PermConductivity: String
});

module.exports = PersonSchema;