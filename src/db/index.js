import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const CONNECT_DB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`,
    );

    console.log(
      `\nMongoDB connected. DB Host: ${connectionInstance.connection.host}`,
    );
  } catch (error) {
    console.log(`MONGODB connection FAILED: ${error}`);
    process.exit(1); // Exit the process with failure
  }
};

export default CONNECT_DB;
