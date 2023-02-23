import express from 'express';
import InterView from '../model/InterView.js';

const router = express.Router();

router.post("/create", async (req, res) => {


    try {

        const {
            startDate,
            endDate,
            participants,
        } = req.body;

        const newInterwiew = InterView({
            startDate,
            endDate,
            participants
        })

        const interviewExist = await InterView.find({ startDate, endDate , participants : { $in :participants} });


        if (interviewExist.length > 0) {
            res.status(202).json({ message: "One of the participants have interview at this time" });
        }
        else {
            const saveInterview = await newInterwiew.save();
            res.status(201).json(saveInterview);
        }





    } catch (err) {
        res.status(500).json({ error: err.message })
    }


})


router.get("/getAll", async (req, res) => {

    try {
        const allInterviews = await InterView.find();
        res.status(201).json(allInterviews);

    } catch (err) {
        res.status(500).json({ error: err.message })
    }

})


router.get("/get/:id", async (req, res) => {


    try {

        const id = req.params.id;

        const interview = await InterView.findById({ _id: id });
        res.status(201).json(interview);

    }
    catch (err) {
        res.status(500).json({ error: err.message })
    }


})

router.patch("/update/:id", async (req, res) => {

    try {

        const id = req.params.id;

        const updatedBody = req.body;

        const options = { new: true };

        const getInterview = await InterView.findByIdAndUpdate(id, updatedBody, options);

        res.status(201).json(getInterview);

    } catch (err) {
        res.status(500).json({ error: err.message })
    }

})



router.delete("/delete/:id", async (req, res) => {

    try {
        const id = req.params.id;

        console.log(id);

        const deleteUser = await InterView.findByIdAndDelete({ _id: id });

        res.status(201).json("InterView Deleted");
    }
    catch (error) {
        res.status(501).json({ error: err.message });

    }

})





export default router;