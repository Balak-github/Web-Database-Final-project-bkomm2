const http = require("http");
const fs = require("fs");
const path = require("path");
const {MongoClient} = require("mongodb");

const PORT = 7234;

const getRCBDetails = async (client) =>{
    const cursor = await client.db("RCBSquad").collection("RCBCollection").find({});
    const results = await cursor.toArray();
    const data = JSON.stringify(results);
    return data;
}

http.createServer(async (req,res)=>{
    console.log(req.url);
    if(req.url === "/api"){
        const URL = "mongodb+srv://bkomm2:Yaswanth%40415@rcbcluster.xqeyffp.mongodb.net/?retryWrites=true&w=majority&appName=RCBCluster";
        const client = new MongoClient(URL);
        try{
            await client.connect();
            console.log("Database is connected!");
            const data = await getRCBDetails(client);
            console.log(data);
            res.setHeader("Access-Control-Allow-origin","*")
            res.writeHead(200,{"content-type":"application/json"});
            res.end(data);
        }
        catch(err){
            console.log("Error in connecting database :",err);
        }
        finally{
            await client.close();
            console.log("Database connection is closed!");
        }
    }
    else if(req.url === "/"){
        fs.readFile(path.join(__dirname,"public","index.html"),(err,content)=>{
            if(err){
                console.log("Error in opening file",err);
            }
            else{
                res.writeHead(200,{"content-type":"text/html"});
                res.end(content);
            }
        })
    }
    else{
        res.writeHead(404,{"content-type":"text/html"});
        res.end("<h1>404 Page Not Found!</h1>");
    }

}).listen(PORT,()=>console.log(`Server is running on ${PORT}`));