import mongoose from "mongoose";

const EmployeeSchema = mongoose.Schema({

    startDate : {
        type : String,
        require : true,
    },
    endDate : {
        type : String,
        require : true,
    },
    email : {
        type : String,
        require : true,
    },
});

const Employee = mongoose.model("Employee",EmployeeSchema)

export default Employee;