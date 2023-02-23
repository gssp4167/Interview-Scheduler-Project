import express from 'express';
import Employee from '../model/Employee.js';

const router = express.Router();

router.get("/getAll", async (req, res) => {

    try {
        const allEmployees = await Employee.find();
        res.status(201).json(allEmployees);

    } catch (err) {
        res.status(500).json({ error: err.message })
    }

})


router.get("/get/:id", async (req, res) => {


    try {

        const id = req.params.id;

        const employee = await Employee.findById({ _id: id });
        res.status(201).json(employee);

    }
    catch (err) {
        res.status(500).json({ error: err.message })
    }


})



export default router;