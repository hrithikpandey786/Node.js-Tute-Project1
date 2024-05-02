const mongoose = require('mongoose');
const Task = require('../models/Task');

mongoose.set('useFindAndModify', false);


const getAllTasks = async (req, res)=>{
    try{
        const tasks = await Task.find({});
        res.status(200).json({tasks});
    }catch(error){
        res.status(500).send({error});
    }
    // res.status(200).send("Hello World!!");
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

const getSingleTask = async (req, res)=>{
    try{
        const {id} = req.params;
        const task = await Task.findOne({_id:id});
        if(!task){
            return res.status(404).json(`Task with id ${id} doesn't exists`)
        }
        
        res.status(200).json({task});
    } catch(error){
        res.status(500).json({error});
    }
};

const updateTask = async (req, res)=>{
    try{
        const {id:taskId} = req.params;
        const task = await Task.findOneAndUpdate({_id:taskId}, req.body, {
            new: true,
            runValidators: true
        });
        if(!task){
            return res.status(404).json(`Task with id ${id} doesn't exists`);
        } else {
            res.status(200).json({task});
        }
    } catch(error){
        res.status(500).json({msg: error});
    }
    // const {id} = req.params;
    // res.json(req.body);
    // res.status(200).send(`Update Tasks ${id}`);
};

const deleteTask = async (req, res)=>{
    try{
        const {id:taskId} = req.params;
        const task = await Task.findOneAndDelete({_id:taskId});
        if(!task){
            return res.status(404).json({'msg': `Task with id ${id} doesn't exists`})
        }
        res.status(200).json(task);
    } catch(error){
        res.status(500).json({error});
    }
    
    // res.status(200).send(`Delete Task ${id}`); 
};

module.exports = {getAllTasks, createTask, getSingleTask, updateTask, deleteTask};

