import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import EmployeeService from '../Service/EmployeeService';

function Form() {
  const [formdetails, setformdetails] = useState({empno:"",ename:"",
   job:"",mgr:"",hiredate:"",sal:"",comm:"",deptno:""});
 const navigate=useNavigate();

  const addEmployee = (event) => {
   event.preventDefault();

   if(formdetails.empno===""|| formdetails.ename===""||formdetails.mgr===""||formdetails.deptno==="")
       { alert("Data can't be blank");
        return; 
       }
    EmployeeService.addEmployee(formdetails)
    .then((result)=>
    {
      console.log("inserted",result);
      setformdetails({empno:"",ename:"",job:"",mgr:"",hiredate:"",
      sal:"",comm:"",deptno:""});
      navigate("/employees");
    })
    }

    const handlechange=(event)=>{
      let{name,value}=event.target
      setformdetails({...formdetails,[name]:value})
    }


  return (
    <div><form>
      <table style={{ width: '100%' }}>
        <tbody>
          <tr>
            <td>
              <label>
                Employee NO.
              </label>
            </td>
            <td>
              <input type="text" name="empno" id="empno" value={formdetails.empno} placeholder='Enter Employee No'
               onChange={handlechange} autoFocus></input>
            </td>
          </tr>
          <tr>
            <td>
              <label>
                Employee Name
              </label>
            </td>
            <td>
              <input type="text" name="ename" id="ename"
               value={formdetails.ename}
               placeholder='Enter Name' 
               onChange={handlechange}></input>
          </td>
        </tr>
        <tr>
          <td>
            <label>
             Job
            </label>
          </td>
          <td>
            <input type="text" name='job' id='job' 
            value={formdetails.job} 
            placeholder='Enter Job'
            onChange={handlechange}></input>
          </td>
        </tr>
        <tr>
          <td>
            <label>
             Manager
            </label>
          </td>
          <td>
            <input type="text" name='mgr' id='mgr' 
            value={formdetails.mgr}
             placeholder='Enter Manager' 
             onChange={handlechange}></input>
          </td>
        </tr>
        <tr>
          <td>
            <label>
             Hiredate
            </label>
          </td>
          <td>
            <input type="date" name='hiredate' id='hiredate'
             value={formdetails.hiredate}
             onChange={handlechange}></input>
          </td>
        </tr>
        <tr>
          <td>
            <label>
              Salary
            </label>
          </td>
          <td>
            <input type="number" name='sal' id='sal' 
            value={formdetails.sal} 
            placeholder='Enter Salary'
              onChange={handlechange}>
            </input>
          </td>
        </tr>
        <tr>
          <td>
            <label>
             Comm
            </label>
          </td>
          <td>
            <input type="number" name='comm'
             id='comm' value={formdetails.comm}
              placeholder='Enter Commision' 
              onChange={handlechange}></input>
          </td>
        </tr>
        <tr>
          <td>
            <label>
             Department
            </label>
          </td>
          <td>
            <input type="text" name='deptno' 
            id='deptno' value={formdetails.deptno}
             placeholder='Enter Department'
             onChange={handlechange}></input>
          </td>
        </tr>
      </tbody>
    </table>
    <Button type="submit" onClick={addEmployee}>Submit form</Button>
      </form>
      </div>
  );
}

export default Form;