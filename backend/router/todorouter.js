const express = require('express')
const router = express.Router();
const {addTodo, getTodos,deleteItem,editItem,toggleTodo} = require('../controllers/todocontroller');

router.post('/add-item',addTodo)
router.get('/get-items',getTodos)
router.delete('/delete-item/:id',deleteItem)
router.put('/edit-item/:id',editItem)
router.patch("/toggle-item/:id", toggleTodo);

module.exports = router