const express = require("express");
const path = require("path");
require('dotenv').config();
require("./dbconnection.js");
const messageRoutes = require("./controller/message.js");
const server = express();
server.use(express.json());

if(process.env.NODE_ENV !== "production"){
  server.use((req, res, next)=>{
        if(req.headers.origin) res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
        res.setHeader('Access-Control-Allow-Headers',"Content-Type");
        res.setHeader('Access-Control-Allow-Methods',"GET, PUT, DELETE, POST");
        res.setHeader('Access-Control-Allow-Credentials', true);
        next();
  })
}

server.use("/messages", messageRoutes);
server.use("/downloads",express.static("downloads"));
server.use("/", express.static("client/build"));
server.get("*",(req, res)=>{
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

const port = process.env.PORT || 5000;
server.listen(port,()=>{
    console.log(`server started on port ${port}`);
});

