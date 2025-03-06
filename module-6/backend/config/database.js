import mongoose from "mongoose";

const connectDB =  () =>{
// mongoose.set("strictQuery",false);
mongoose.connect(process.env.MONGODB_URI)
.then(()=>{
    console.log("connexion a la base de donnees reussie");
    
})
// .catch((err)=>{
//     console.log("connexion a la base de donnees echouee",err);
    
// });
};
export default connectDB;