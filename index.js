const express=require('express')
const app=express()

app.get('/',function(req,res){
    res.send("hello world");
})
app.get('/asd',function(req,res){
    res.send(" hello world from asd");
})
app.post('/',function(req,res){
    res.send("hi from the post");
})

app.listen(5000);
