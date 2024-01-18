import {useNavigate, useParams } from "react-router-dom";
import EmployeeService from "../Service/EmployeeService";

const DeleteEmp=()=>{
    const params=useParams();
    const Navigate=useNavigate();

    EmployeeService.delete(params.empid)
    .then(() => {
        console.log("Employee deleted");
        Navigate("/employees");
      })
      .catch((error) => {
        console.error("Error deleting employee:", error);
      });
}

export default DeleteEmp;

