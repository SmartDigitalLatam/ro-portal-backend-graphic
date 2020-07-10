var mongoose = require('mongoose');

mongoose.connect("mongodb://reverseosmosis.mongo.cosmos.azure.com:10255/?ssl=true&replicaSet=globaldb", {
    auth: {
      user: "reverseosmosis",
      password: "RWg02RsBlH3bMe17l0gwBfTfowjSMZPWZ72VA8AmHNsk1bo5FluMJpQgGc6KyN3kT1OefwE4LD6KWzepGYmVhQ==",
      dbName: "reverse_osmosis",
    }
  })

PersonSchema = require('../models/person');

var Person = mongoose.model('Person', PersonSchema, 'reverse_osmosis_1');
module.exports = Person;
