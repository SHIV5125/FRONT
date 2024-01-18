import axios from 'axios';

const baseURL = "http://localhost:9000/employees";

const EmployeeService = {
  getAllEmployees: () => {
    return axios.get(baseURL);
  },

  getById: (empid)=>
  {
    return axios.get(baseURL+"/"+empid);
  },

  delete:(empid)=>
  {
    return axios.delete(baseURL+"/"+empid);
  },

  addEmployee:(emp)=>
  {
    return axios.post(baseURL,emp);
  }

};

export default EmployeeService;
