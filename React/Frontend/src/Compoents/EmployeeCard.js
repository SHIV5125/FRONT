import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import {useParams} from 'react-router-dom';
import EmployeeService from '../Service/EmployeeService';
import { useEffect, useState } from 'react';
const EmployeeCard=()=>
    {
 const params=useParams();
 const[emp,setemp]=
 useState({})
 useEffect(()=>{
    EmployeeService.getById(params.empid)
    .then((result)=>{
    console.log(result.data);
    setemp({...result.data});
     })
 },[params.empid]);
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{emp.EMPNO}</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>NAME: {emp.ENAME}</ListGroup.Item>
        <ListGroup.Item>Job: {emp.JOB}</ListGroup.Item>
        <ListGroup.Item>Manager: {emp.MGR}</ListGroup.Item>
        <ListGroup.Item>Hiredate: {emp.HIREDATE}</ListGroup.Item>
        <ListGroup.Item>Salary: {emp.SAL}</ListGroup.Item>
        <ListGroup.Item>Department: {emp.DEPTNO}</ListGroup.Item>
        <ListGroup.Item>Commission: {emp.COMM}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="/updateEmp">Update</Card.Link>
        <Card.Link href={`/deleteEmp/${emp.EMPNO}`}>Delete</Card.Link>
        <Card.Link href="/employees">back</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default EmployeeCard;