import mongoose from "mongoose";
mongoose.set('strictQuery', true);
mongoose.connect("mongodb+srv://luigi:9hL0FR4eZwD1WcRn@portifolio.6ntesa5.mongodb.net/?retryWrites=true&w=majority", { useNewUrlParser: true })

let db = mongoose.connection

export default db

