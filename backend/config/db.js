import mongoose from "mongoose";

const connectDB = async() =>{
    try{
        const conn = await mongoose.connect("mongodb://127.0.0.1:27017/Konvo", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDB connected");
    }
    catch(err){
        console.log(err);
        process.exit(1);
    }


}
export default connectDB;