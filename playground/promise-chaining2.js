require('../src/db/mongoose')
const Task = require('../src/models/task')

const id = "5e783f87dd17627b28999481"
Task.deleteOne({_id: id}).then((result) => {
    console.log(" result: ", result)
}).catch((error) => {
    console.log(" error: ", error)
})