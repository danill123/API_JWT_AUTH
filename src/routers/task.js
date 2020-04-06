const express = require('express')
const router = express.Router()
const Task = require('../models/task')

router.post('/task', async (req, res) => {
    const task = new Task(req.body)

    try {
        await task.save()
        res.status(200).send(task)
    } catch(e) {
        res.status(400).send(e)
    }
    
})

router.get('/task', async (req, res) => {

    try {
        const user = await Task.find({})
        res.status(200).send(user)
    } catch(e) {
        res.status(400).send(e)
    }

})

router.get('/task/:id', async (req, res) => {
    const _id = req.params.id
    try {
        const user = await Task.findById(_id)
        if(!user){
            res.status(404).send({
                message: "DATA NOT FOUND"
            })
        }
        res.status(200).send(user)
    } catch(e) {
        res.status(400).send(e)
    }
    // Task.findById(_id).then((task) => {
    //     res.send(task)
    // }).catch(() => {
    //     res.status(500).send()
    // })
})

router.patch('/task/:id', async (req, res) => {
    try {
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, {new:true, runValidators:true})
        if(!task){
            res.status(404).send({message:"UPDATE FAILED"})
        }

        res.status(200).send(task)
    } catch(e) {
        res.status(400).send(e)
    }
})

router.delete('/task/:id', async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id)

        if(!task){
            res.status(404).send()
        }
        
        res.send(task)
    } catch(e) {
        res.status(500).send()
    }
})

module.exports = router