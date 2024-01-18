import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import EmployeeService from '../Service/EmployeeService'

function DarkExample() {
  const [emparr, setemparr] = useState([]);

  useEffect(() => {
    EmployeeService.getAllEmployees()
      .then((result) => {
        console.log(result)
        setemparr([...result.data]);
      })
  }, [])
  return (
    <Table className="table table-striped" >
      <thead>
        <tr>
          <th>EmpNO.</th>
          <th>Name</th>
          <th>Job</th>
          <th><Link to={`/addEmployee`}><Button variant="outline-success">Add Employee</Button></Link></th>
        </tr>
      </thead>
      <tbody>

        {emparr.map(e =>
          <tr key={e.EMPNO}>
            <td>{e.EMPNO}</td>
            <td >
              <Link to={`/empDetails/${e.EMPNO}`}>{e.ENAME}</Link></td>
            <td>{e.JOB}</td>
            <td>
              <Link to={`/empUdpate`} ><Button variant="outline-primary" size="sm" >
              Modify
            </Button>{' '}
            </Link>
              <Link to={`/deleteEmp/${e.EMPNO}`}>
                <Button variant="outline-danger" size="sm">
                  Delete
                </Button>
              </Link>  
            </td>
          </tr>)}

      </tbody>
    </Table>
  );
}

export default DarkExample;