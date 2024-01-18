const express=require("express");
var router=express.Router();

var connection=require("../db/dbconnect")

router.get("/employees",function(req,resp){
    connection.query("select * from emp",(err,data,fields)=>{
        if(err)
        {
            resp.status(500).send("Data didn't found");
        }
        else{
            console.log(data);
            console.log(fields);
            resp.send(data);
        }
    })
});

router.get("/employees/:empno",function(req,resp)
{
    connection.query("select * from emp where empno=?",req.params.empno,(err,data,fields)=>
    {
        if(err)
        {
            resp.status(500).send("Data didn't found");
        }
        else{
            console.log(data);
            console.log(fields);
            resp.send(data[0]);
        }
    })
});

router.post("/employees",function(req,resp){
    console.log(req.body);
    connection.query("insert into emp values(?,?,?,?,?,?,?,?)",[req.body.empno,req.body.ename,req.body.job,req.body.mgr,req.body.hiredate,req.body.sal,req.body.comm,req.body.deptno],(err,result)=>
    {   if(err)
        {
            resp.status(500).send("No data added",err);
            console.log("Data isn't added");
        }
        else{
           console.log(result);
           console.log("Data added");
        }
    })
});

router.delete("/employees/:empno", function(req, resp) {
    connection.query("delete from emp where empno=?", [req.params.empno], (err, data) => {
        if (err) {
            console.error("Error deleting data:", err);
            resp.status(500).json( "Data not deleted");
        } else {
            console.log("Data deleted successfully");
            resp.json("Data deleted successfully" );
        }
    });
});

router.put("/employees/emp/:empno",function(req,resp){
    connection.query("update emp set ename=?, sal=? where empno=?",[req.body.ename,req.body.sal,req.body.empno],(err,result)=>
    {
           if(err)
           {
            resp.status(500).send("Data can't be updated");
           }
           else{
            console.log(result);
            console.log("Data updated");
           }
    })
})

module.exports = router ;

