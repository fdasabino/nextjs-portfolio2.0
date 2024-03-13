import mongoose from "mongoose";

let connection;
// * connect to database
const connectDB = async () => {
    if (connection && mongoose.connection.readyState === 1) {
        console.log("Already connected to database...");
        return;
    }
    try {
        connection = await mongoose.connect(process.env.NEXT_APP_MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("New database connection...");
    } catch (error) {
        console.error("Database connection error:", error.message);
        throw new Error(error.message);
    }
};

const db = { connectDB };
export default db;
