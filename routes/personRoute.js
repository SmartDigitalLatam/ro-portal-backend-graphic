const express = require('express');
const router = express.Router();
const controller = require('../controllers/personController')

var bodyParser = require('body-parser');

value = controller.get;
//value.use(bodyParser.json());

console.log(value);


for (var i = 0; i < value.length; i++) {
	console.log(i);
}


router.get('/', controller.get);
//router.get('/:id', controller.getById);
//router.post('/', controller.post);
//router.put('/:id', controller.put);
//router.delete('/:id', controller.delete);

module.exports = router;