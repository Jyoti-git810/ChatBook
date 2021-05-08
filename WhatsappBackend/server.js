import express from'express';
import mongoose from 'mongoose';
import Messages from './dbSchema.js';
import Pusher from 'pusher';
import cors from 'cors'

//app config
const app=express();
const PORT=process.env.PORT || 9000;

const pusher = new Pusher({
    appId: "1188863",
    key: "2771cb64aa796a404ec5",
    secret: "347900d03d2fb763772d",
    cluster: "ap2",
    useTLS: true
  });

//middleware
app.use(express.json());
app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Headers','*');
    next()
})
app.use(cors());

//DB config
const ConnectUrl='mongodb+srv://jyoti:jyoti1234@cluster0.pncyt.mongodb.net/WhatsAppDb?retryWrites=true&w=majority';

mongoose.connect(ConnectUrl,{
    useCreateIndex:true,
    useNewUrlParser: true,
    useUnifiedTopology: true
})
 const db=mongoose.connection;
 db.once('open',()=>{
     console.log("DB connected")
     const msgCollection=db.collection("messagescontents");
    const changeStream=msgCollection.watch();

 changeStream.on('change',(change)=>{
     if(change.operationType=='insert'){
         const messageDetails=change.fullDocument;
         pusher.trigger('messages','inserted',{
             name:messageDetails.name,
             message:messageDetails.messages,
             timeStamp:messageDetails.timeStamp,
             received:messageDetails.received
         })
     }
     else{
         console.log("error occured")
     }
 })
 })
 
//api routes
 app.get("/",(req,res)=>res.status(200).send("jjjjjj"));

 app.get('/messages/sync',(req,res)=>{
    Messages.find((err,data)=>{
        if(err){
            res.status(500).send(err);
        }
        else{
            res.status(200).send(data)
        }

    })
 })

 app.post('/messages/new',(req,res)=>{
     const dbMessages=req.body;
     Messages.create(dbMessages,(err,data)=>{
         if(err){
             res.status(500).send(err);
         }
         else{
             res.status(201).send(`${data}`)
         }

     })
 })
 app.listen(PORT,()=>{
     console.log(`running on ${PORT}`)
 })