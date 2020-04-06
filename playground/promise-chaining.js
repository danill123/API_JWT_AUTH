require('../src/db/mongoose')
const User = require('../src/models/user')
const Task = require('../src/models/task')

// User.findByIdAndUpdate('5e742911d468e83d978a86b7', { age:5 }).then((user) => {
//     console.log(user)
//     return User.countDocuments({ age: 5})
// }).then((result) => {
//     console.log(result)
// }).catch((error) => {
//     console.log(error)
// })
const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const incomplete = await Task.countDocuments({complete: false})
    return incomplete
}

deleteTaskAndCount("5e784053ae22857b9ed7bbfa").then((incomplete) => {
    console.log(incomplete)
}).catch((e) => {
    console.log(e)
})

// const updateAgeAndCount = async (id, age) => {
//     const user = await User.findByIdAndDelete(id, {age})
//     const count = await User.countDocuments({age})
//     return count
// }

// updateAgeAndCount("5e742911d468e83d978a86b7", 5).then((count) => {
//     console.log(count)
// }).catch((e) => {
//     console.log(e)
// })