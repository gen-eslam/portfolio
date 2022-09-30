const http = require("http");
const fs = require('fs');
const { buffer } = require("stream/consumers");
//create server 
const server = http.createServer(function(req,res){});

console.log(server);
//lisen to server
server.listen(7000,()=>{
    console.log("server is up and runing");
});
//listen to event 


//login
server.on('request',(req,res)=>{
    console.log(req.method);
const url = req.url;
    if(url === '/login'){
        //read content on login page
        fs.readFile('login.html',(err,data)=>{
            //check for error 
            if(err){
                console.log(err);
            }else{
                res.writeHead(200,{"Content-Type":"text/html"});
                res.write(data);
                res.end();
            }
        })}});

//register
server.on('request',(req,res)=>
{
    const url = req.url;
        if(url === '/register'){
            //read content on login page
            fs.readFile('register.html',(err,data)=>{
                //check for error 
                if(err){
                    console.log(err);
                }else{
                    res.writeHead(200,{"Content-Type":"text/html"});
                    res.write(data);
                    res.end();
                }
            });
    
        }
        //parse incoming data(payload)
        if(url ==='/create-post'&& req.method ==='POST'){
            //RECEIVE THE INCOMIG DATA
            const post =[];
            req.on('data',(chunk)=>{
                post.push(chunk);
            }).on('end',function(){
                //pass the buffer data into string
                const postData = Buffer.concat(post).toString();
                res.writeHead(200,{'Content-Type':'text/json'});
                console.log(postData);
                res.write('posted data');
                res.end();
        });



    }
}
);

// home
server.on('request',(req,res)=>{
    const url = req.url;
        if(url === '/'){
            //read content on login page
            fs.readFile('index.html',(err,data)=>{
                //check for error 
                if(err){
                    console.log(err);
                }else{
                    res.writeHead(200,{"Content-Type":"text/html"});
                    res.write(data);
                    res.end();
                }
            })
    
        }
    });

