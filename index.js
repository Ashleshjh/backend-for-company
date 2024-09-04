// console.log("hi")
// const express = require('express')

// const app = express()

// const PORT = 4000;

// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })

// app.post('/', (req, res) => {
//     res.send('Got a POST request')
// })

// app.put('/user', (req, res) => {
//     res.send('Got a PUT request at /user')
// })

// app.delete('/user', (req, res) => {
//     res.send('Got a DELETE request at /user')
// })


// app.listen(PORT, () => {
//     console.log(`server is running on port ${PORT}`)
// })

const express = require("express")
const mongoose = require("mongoose")
const userRoute = require("./routes/userroute")
const app = express()
const PORT = 3000
app.use(express.json())
app.use("/", userRoute)

mongoose.connect("mongodb+srv://Ashleshemp:Uzumakinaruto1996@cluster0.brqfk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})