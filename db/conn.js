import mongoose from "mongoose";

const Connection = async () => {
    try {
        await mongoose.connect(process.env.DB_URL);
        console.log("Connection successful");
    } catch (error) {
        console.log(error);
    }
}

export default Connection;