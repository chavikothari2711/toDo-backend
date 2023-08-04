import ToDoModel from '../models/ToDoModel.js';

export const getToDo = async(req,res) =>{
    const toDo = await ToDoModel.find()
    res.send(toDo)
}

export const saveToDo = async(req,res) =>{
    try{
        const {text} = req.body;
        const toDo = new ToDoModel({
        text:text,
        }).save();
        console.log("Added Succesfully.....");
        res.send("added");
    }catch(err){
        console.log(err);
    }
}

export const updateToDo = async(req,res)=>{
    try {
        const {_id,text} = req.body;
        const todo = await ToDoModel.findByIdAndUpdate(_id,{text},{new:true});
        console.log('updated successfully');
        res.send('updated succesfully');

        } catch (error) {
        console.log(error)
    }
}

export const deleteToDo = async(req,res)=>{
    try {
        const {_id} = req.body;
        const todo =  await ToDoModel.findByIdAndDelete(_id);
        res.send("deleted succesfully");
    } catch (error) {
        console.log(error)
    }
}

