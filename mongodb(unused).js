// CRUD MONGODB DUDE CREATE, READ, UPDATE, DELETE

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
const {MongoClient, ObjectID} = require('mongodb')

const connectionUrl = 'mongodb://127.0.0.1:27017'
const database = 'task-manager'

MongoClient.connect(connectionUrl, {useUnifiedTopology: true}, (error, client) => {
    if(error) {
        return console.log('Unable Connect to database')
    } 

    console.log('Connect to Mongodb & MongoDB Service running')
    const db = client.db(database)

    /* -------------- find or query database ----------------*/

    // db.collection('users').findOne({_id: new ObjectID("5e71b14596893e384c9e5ec8")}, (error, user) => {
    //     if(error) {
    //         return console.log('Unable to fetch')
    //     }

    //     console.log(user)
    // })

    // db.collection('users').find({ age: 27}).toArray((error, users) => {
    //     console.log(users)
    // })

    // db.collection('users').find({ age: 27}).count((error, users) => {
    //     console.log(users)
    // })

    // db.collection('tasks').findOne({_id: new ObjectID("5e71b7e5efcaf23c30d541ad")}, (error, users) => {
    //     console.log(users)
    // })

    // db.collection('tasks').find({task: "Clean my house"}).toArray((error, tasks) => {
    //     console.log(tasks)
    // })

    /* -------- Inser data below -----------*/
    // db.collection('users').insertOne({
    //     _id: id,
    //     name: 'Danill',
    //     age: 27
    // }, (error, result) => {
    //     if(error) {
    //         return console.log('Unable to insert user')
    //     }

    //     console.log(result.ops)
    // })

    // db.collection('users').insertMany([{
    //     name: 'haker',
    //     umur: 34
    // }, {
    //     name: 'watch d-bs',
    //     umur: 40
    // }], (error, result) => {
    //     if(error) {
    //         return console.log('Unable to insert documents')
    //     } 

    //     console.log(result.ops)
    // })

    // db.collection('tasks').insertMany([{
    //     task: 'Clean my house',
    //     purpose: 'Cleaning'
    // }, {
    //     task: 'Learn Coding',
    //     time: '13 AM'
    // }], (error, result) => {
    //     if(error) {
    //         return console.log('Oops sorry your data cannot be proccess to my db')
    //     }

    //     console.log(result.ops)
    // })

    /* ----------- Update Mechanism ------------*/
    // update one 
    // const updatePromise = db.collection('users').updateOne({
    //     _id: new ObjectID("5e71b1327761d23841080a86")
    // }, {
    //     $inc: {
    //         age: 1
    //     }
    // })

    // const dataset = {
    //     $inc: {
    //         age: 200
    //     }
    // }

    // update many
    // const updatePromise = db.collection('users').updateMany({
    //     age: 27
    // }, dataset )

    // updatePromise.then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    /* ----- delete mechanism -------*/

    // delete many
    // db.collection('users').deleteMany({
    //     age: 227
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // delete one
    db.collection('users').deleteOne({_id: new ObjectID("5e71b1327761d23841080a86")}).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })
    
})
