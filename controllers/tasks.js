const getAllTasks = (req, res)=>{
    res.status(200).send("Hello World!!");
};

const createTask = (req, res)=>{
    res.status(200).send('Insert tasks');
};

const getTask = (req, res)=>{
    const {id} = req.params;
    res.status(200).send(`Read one task ${id}`);
};

const updateTask = (req, res)=>{
    const {id} = req.params;
    res.status(200).send(`Update Tasks ${id}`);
};

const deleteTask = (req, res)=>{
    const {id} = req.params;
    res.status(200).send(`Delete Task ${id}`); 
};

module.exports = {getAllTasks, createTask, getTask, updateTask, deleteTask};

