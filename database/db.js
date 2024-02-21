import mongoose from "mongoose";

const MONGODB_URL =`mongodb://iamaashk:@AdnanAhmad11@ac-nnmx4ts-shard-00-00.rcrurja.mongodb.net:27017,ac-nnmx4ts-shard-00-01.rcrurja.mongodb.net:27017,ac-nnmx4ts-shard-00-02.rcrurja.mongodb.net:27017/?ssl=true&replicaSet=atlas-1287v5-shard-0&authSource=admin&retryWrites=true&w=majority&appName=fileshare`;

const DBConnection = async ()=>{
    try {
        mongoose.connect(MONGODB_URL, {useNewUrlParser:true});
        console.log('DB connected');
    } catch (error) {
        console.error('Error while connecting to database',error.message);
    }
}

export default DBConnection;