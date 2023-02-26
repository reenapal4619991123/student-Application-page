const mongoose =require("mongoose");
mongoose.set("strictQuery",true);

mongoose.connect("mongodb://127.0.0.1:27017/reena")
.then(()=>{
    console.log("data connect");
})
.catch((err)=>{
console.log(err);
})