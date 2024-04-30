const express = require('express');
const route = express.Router();
const tasks = require('../controllers/tasks');

route.get('/', tasks.getAllTasks);
route.post('/', tasks.createTask);
route.get('/:id', tasks.getSingleTask);
route.patch('/:id', tasks.updateTask)
route.delete('/:id', tasks.deleteTask );

module.exports = route;