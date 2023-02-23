import mongoose from "mongoose";

const InterViewSchema = mongoose.Schema({

    startDate : {
        type : String,
        require : true,
    },

    endDate : {
        type : String,
        require : true,
    },

    participants : {
        type : Array,
        require : true,
    },

});

const InterView = mongoose.model("InterView",InterViewSchema)

export default InterView;