const todo = require('../models/todo')

const addTodo = async (req,res)=>{
    try{
        const newItem = new todo({
            text : req.body.text
        });
        await newItem.save()
        res.status(201).json({message:"saved succesfully"})
    }catch (err){
        console.log("error in saving",err)
        res.status(500).json({error : "error in saving"})
    }
}

const getTodos = async(req,res)=>{
    try{
        const items = await todo.find()
        res.status(201).json(items) 
    }catch (err){
        res.status(500).json("failed to fetch items")
    }
}

const deleteItem = async (req,res)=>{
    try{
        const {id} = req.params
        await todo.findByIdAndDelete(id)
        res.status(201).json("item deleted succesfully")
    }catch(err){
        console.log("error is here",err)
    }
}

const editItem = async (req,res)=>{
    try{
        const {id} = req.params
        const {text} = req.body 
        await todo.findByIdAndUpdate(id,{text})
        res.status(201).json("edited item succesfully")
    }catch(err){
        console.log("error is here",err)
    }
}

const toggleTodo = async (req, res) => {
  try {
    const todoItem = await todo.findById(req.params.id); // Step 1
    todoItem.completed = !todoItem.completed;            // Step 2
    await todoItem.save();                               // Step 3
    res.json({ message: "Toggle success" });             // Step 4
  } catch (err) {
    res.status(500).json({ error: "Toggle failed" });    // Error handling
  }
};


module.exports = {addTodo,getTodos,deleteItem,editItem,toggleTodo}