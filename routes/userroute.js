const express = require("express")
const router = express.Router()
const Empschema = require("../models/usermodel")

router.post("/create", async (req, res) => {
    try {
        const createEmp = await Empschema.create(req.body)
        res.status(200).json(createEmp)
    } catch (error) {
        res.status(500).json(error)
    }
})

router.get('/getallemp', async (req, res) => {
    try {
        const getallemp = await Empschema.find()
        res.status(200).json(getallemps)
    } catch (error) {
        res.status(500).json(error)
    }
})

router.get('/getaemp/:id', async (req, res) => {
    try {
        const getaemp = await Empschema.findById(req.params.id)
        res.status(200).json(getaemp)
    } catch (error) {
        res.status(500).json(error)
    }
})

router.put('/updateaemp/:id', async (req, res) => {
    try {
        const updateaemp = await Empschema.findByIdAndUpdate(
            req.params.id,       // Find the user by ID
            { $set: req.body },   // Update with the data from req.body
            { new: true }         // Return the updated document
        );

        if (updateaemp) {
            res.status(200).json({ message: "User updated successfully", updateaemp });
        } else {
            res.status(404).json({ message: "User not found" }); // No user found with the provided ID
        }
    } catch (error) {
        res.status(500).json({ message: "An error occurred", error });
    }
});
router.delete('/deleteaemp/:id', async (req, res) => {
    try {
        const deleteemp = await Empschema.findByIdAndDelete(req.params.id);
        if (deleteemp) {
            res.status(200).json({ message: "User deleted successfully", deleteemp });
        } else {
            res.status(404).json({ message: "User not found" });
        }
    } catch (error) {
        res.status(500).json({ message: "An error occurred", error });
    }
});
router.delete('/deleteallemps', async (req, res) => {
    try {
        const result = await Empschema.deleteMany({});
        res.status(200).json({ message: `${result.deletedCount} users deleted successfully` });
    } catch (error) {
        res.status(500).json({ message: "An error occurred", error });
    }
});

module.exports = router;