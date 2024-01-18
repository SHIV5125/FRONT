const express=require("express");
const cors=require("cors");
const bodyparser=require("body-parser");
const routes=require("./Routes/routers");
const app=express();


app.use(cors());

app.use(bodyparser.urlencoded({extended:false}));

app.use(bodyparser.json());

app.use("/",routes);

app.listen(9000,function(){
    console.log("Server got connected")
});


module.exports=app;





