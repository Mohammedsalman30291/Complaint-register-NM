const mongoose = require("mongoose")

mongoose.connect(
   "mongodb+srv://root:rootxyz@comp-reg.hvcsb.mongodb.net/?retryWrites=true&w=majority&appName=Comp-Reg"
)
   .then(()=>{
      console.log("connected to mongodb")
   })

 // mongoose.connect("mongodb+srv://sheikxm:sheik053123@sheikprojects.otin9.mongodb.net/?retryWrites=true&w=majority&appName=sheikprojects")
// .then(()=>{
//    console.log("connected to mongodb")
// })
