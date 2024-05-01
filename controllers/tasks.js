const Task = require('../models/Task');

const getAllTasks = (req, res)=>{
    res.status(200).send("Hello World!!");
};

const createTask = async (req, res)=>{
    try{
        const task = await Task.create(req.body);
        res.status(201).json(task);
    }catch (err){
        res.status(500).send({err});
    }
    // res.status(200).send('Insert tasks');
};

const getSingleTask = (req, res)=>{
    res.json({id: req.params.id});
    // res.status(200).send(`Read one task ${id}`);
};

const updateTask = (req, res)=>{
    const {id} = req.params;
    res.json(req.body);
    // res.status(200).send(`Update Tasks ${id}`);
};

const deleteTask = (req, res)=>{
    const {id} = req.params;
    res.status(200).send(`Delete Task ${id}`); 
};

module.exports = {getAllTasks, createTask, getSingleTask, updateTask, deleteTask};

