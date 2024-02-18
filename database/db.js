import mongoose from "mongoose";

const MONGODB_URL =`mongodb+srv://iamaashk:AdnanAhmad11@fileshare.rcrurja.mongodb.net/?retryWrites=true&w=majority`;

const DBConnection = async ()=>{
    try {
        mongoose.connect(MONGODB_URL, {useNewUrlParser:true});
        console.log('DB connected');
    } catch (error) {
        console.error('Error while connecting to database',error.message);
    }
}

export default DBConnection;