// const { default: mongoose } = require("mongoose");

// const mongoose = require("mongoose")
// const userSchema = new mongoose.Schema({
//     username: {
//         type: String,
//         required: true

//     },
//     password: {
//         type: String,
//         required: true
//     }
// })
// module.exports = mongoose.model("user", userSchema)
const mongoose = require("mongoose")
const Empschema = new mongoose.Schema({
    Employeename: {
        type: String,
        required: true

    },
    Employeeid: {
        type: String,
        required: true

    },
    Employeemob: {
        type: String,
        required: true

    },
    Employeesalary: {
        type: String,
        required: true

    },
})
module.exports = mongoose.model("employee", Empschema)