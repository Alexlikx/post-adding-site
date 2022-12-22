import mongoose from "mongoose";

const ConnectDB = async () => {
    await mongoose.connect(process.env.DB_URL);
}

export default ConnectDB;