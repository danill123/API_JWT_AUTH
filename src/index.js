const express = require('express')
const bodyParser = require('body-parser')
const app = express()
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const port = process.env.PORT || 3000

// app.use((req, res, next) => {
//     if(req.method === 'GET') {
//         res.send('GET REQUEST DISABLED DUDE')
//     } else {
//         next() 
//     }
// })

// app.use((req, res, next) => {
    
//     res.status(501).send('GET REQUEST DISABLED DUDE')
    
// })

app.use(bodyParser.urlencoded())
app.use(bodyParser.json())
app.use(userRouter)
app.use(taskRouter)

const jwt = require('jsonwebtoken')

const myFunction = async () => {
    const token = jwt.sign({ _id: 'abc123' }, 'thisismycourse')
    console.log(token)
    const verify = jwt.verify(token, 'thisismycourse')
    console.log(verify)
}

myFunction()

app.listen(port, () => {
    console.log("Server is up on port = " + port)
})