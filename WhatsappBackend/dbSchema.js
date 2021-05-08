import mongoose from 'mongoose';

const WhatsAppSchema=mongoose.Schema({
    messages:String,
    name:String,
    timeStamp:String,
    received:Boolean
});

export default  mongoose.model('messagescontents',WhatsAppSchema);