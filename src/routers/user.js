const express = require('express')
const User = require('../models/user')
const router = new express.Router()
const auth = require('../middleware/auth')

router.patch('/users/:id', async(req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true})
        if(!user){
            res.status(404).send({message: "UPDATE FAILED"})
        }

        res.status(200).send(user)
    } catch(e) {
        res.status(400).send(e)
    }
})

router.post('/users/login', async(req, res) => {
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password)
        const token = await user.generateAuthToken()
        res.status(200).send({user, token})
    } catch(e) {
        res.status(404).send()
    }
})

// failed // pending
// router.post('/users/logout', auth, async(req, res) => {
//     try {
//         req.user.tokens = req.user.tokens.filter((token) => {
//             return token.token !== req.token
//         })

//         await req.user.save()
//         res.send()
//     } catch(e) {
//         res.status(500).send()
//     }
// })

router.get('/users/me', auth , async (req, res) => {
    res.send(req.user)
    // try{
    //     const user = await User.find({})
    //     res.status(200).send(user)
    // } catch(e) {
    //     res.status(400).send(e)
    // }
})

router.post('/users', async (req, res) => {
    const user = new User(req.body)
    try {
        await user.save()
        const token = await user.generateAuthToken()
        res.status(201).send({user, token})
    } catch(e) {
        res.status(500).send(e)
    }
})


router.get('/users/:id', async (req, res) => {
    const _id = req.params.id

    try {
        const user = await User.findById(_id)
        if(!user) {
            res.status(404).send({
                message: "DATA NOT FOUND"
            })
        }
        res.send(user)
    } catch(e) {
        res.status(400).send(e)
    }

})

router.delete('/users/:id', async(req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id)
        if(!user){
            res.status(404).send()
        }

        res.send(user)
    } catch(e) {
        res.status(500).send()
    }
})

module.exports = router