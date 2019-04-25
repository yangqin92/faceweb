var express=require('express');
var app=express();
var x;
//var fs = require('fs');
// app.get('/',function(req,res){
//     res.sendfile(__dirname+'/index.html')
// })
app.post('/server',function(req,res){
    req.on('data',function(data){
        obj=JSON.parse(data);
        x=data;
       // console.log(x);
        res.send('OK！');
        
    })
})
app.post('/client',function(req,res){
    req.on('data',function(data){
        ob=JSON.parse(data);
        //console.log(ob);
        if (ob['appid']==1) {
            res.send(x);        
        }
       
    })
})
app.listen(3000,'192.168.0.14');

