import mongoose from "mongoose";

const Connection = async (username, password) => {
    const db_url = "mongodb://localhost:27017/whatsappclone";
        // `mongodb+srv://${username}:${password}@cluster0.jnloq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
        // `mongodb+srv://${username}:${password}@whatsapp.m4eke.mongodb.net/whatsapp?retryWrites=true&w=majority`;

        // 'mongodb://localhost:27017/whatsappclone'
        // `mongodb+srv://${username}:${password}@whatsapp.m4eke.mongodb.net/whatsapp?retryWrites=true&w=majority`;
  try {
   await mongoose.connect(db_url, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
   });
      console.log('Database connected successfull!!');
  } catch (error) {
    console.log("Error while connecting to mongodb", error);
  }
};

export default Connection;
