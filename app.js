const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname,"public")));

app.get("/api/status",(req,res)=>{

res.json({
status:"Backend running successfully 🚀"
});

});

app.listen(3000,()=>{

console.log("HelloWorld app running on port 3000");

});