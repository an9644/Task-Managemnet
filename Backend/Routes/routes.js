import {Router} from 'express'
import mongoose from "mongoose"

const router=Router();

mongoose.connect("mongodb://localhost:27017/Task_Management ")

const taskSchema =new mongoose.Schema({
    title: {type: String,required: true,unique: true},
    description: {type: String,required: true},
    status: {type: String,required:true ,default: 'pending' },
    priority: {type: String,required:true,default: 'medium'},
    createdAt: {type: Date,default: Date.now}
 });

 const Task = mongoose.model('allTasks', taskSchema);


 router.post('/addtask',async(req,res)=>{
    try {
        const {title,description,status,priority,createdAt}=req.body;
        console.log("hi");

        const existingtask= await Task.findOne({title:title})
        if(existingtask){
            return res.status(400).json({message:"Task already exists"})
         }else{
            const newtask=new Task({
                title:title,
                description:description,
                status:status,
                priority:priority,
                createdAt:createdAt
            })
            await newtask.save();
            console.log("Task Added Successfully")
         }        
    } catch (error) {
        console.log(error);
        
    }
 });
 router.put('/updatetask',async(req,res)=>{
    try {
        const {title,newdescription,newstatus,newpriority,newcreatedAt}=req.body
        const existingtask= await Task.findOne({title:title})
        if(!existingtask){
            return res.status(400).json({message:"Task not found"})
        }
        existingtask.description=newdescription || existingtask.description
        existingtask.status=newstatus || existingtask.status
        existingtask.priority=newpriority || existingtask.priority
        existingtask.createdAt=newcreatedAt || existingtask.createdAt

        await  save();
        console.log("Task Updated Successfully")
    } catch (error) {
        console.log(error);      
    }
 })

 router.get('/alltask',async(req,res)=>{
    try {
        const result= await Task.find()
        res.json(result)
        console.log(("all Tasks",result));      

    } catch (error) {
        
    }
 })
 router.delete('/deletetask',async(req,res)=>{
    try {
        const search=req.query.title
        const result=await Task.deleteOne({title:search})

        if(!result){
            return res.status(404).json({message:"Task removed"})
        }else{
            return res.status(404).json({message:"Cant remove ,error"})
        }
    } catch (error) {
        
    }
 })

 export default router
