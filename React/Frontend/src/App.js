import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Compoents/Navbar';
import Employees from './Compoents/Employees';
import Home from './Compoents/Home';
import EmployeeCard from './Compoents/EmployeeCard';
import DeleteEmp from './Compoents/DeleteEmp';
import AddEmployee from './Compoents/AddEmployee'
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <h1 style={{"backgroundColor":"blue",color:"white","border":"2px solid red"}}>Employee Management System</h1>
      <Navbar></Navbar>

      <Routes>
        <Route path="/Home" element={<Home></Home>}></Route>
        <Route path="/employees" element={<Employees></Employees>}></Route>
        <Route path="/empDetails/:empid" element={<EmployeeCard></EmployeeCard>}></Route>
        <Route path="/deleteEmp/:empid" element={<DeleteEmp></DeleteEmp>}></Route>
        <Route path="/addEmployee" element={<AddEmployee></AddEmployee>}></Route>
      </Routes>
    </div>

  );
}

export default App;
