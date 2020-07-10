'use strict';
var Person = require('../config/db');

module.exports = new class PersonService {

    getAll() {
        return Person.find().sort({_id:-1}).lean().limit(200);
    
    }

    //getById(id) {
      //  return Person.findById(id);
    //}

    //create(person) {
      //  return Person.create(person);
    //}

    //update(id, person) {
      //  return Person.findByIdAndUpdate(id,person);
    //}

    //delete(id) {
      //  return Person.findByIdAndDelete(id);
    //}
}