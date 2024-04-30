const express = require('express');
const route = express.Router();
const task = require('../controllers/tasks');

route.get('/', task.getAllTasks)
route.post('/', task.createTask);
route.get('/:id', task.getTask);
route.patch('/:id', task.updateTask)
route.delete('/:id', task.deleteTask );

module.exports = route;