import mongoose from "mongoose";
let m='mongodb+srv://786mdnajamuddin:okB7btwDZxARl7q5@cluster0.d0b4w.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
// okB7btwDZxARl7q5  786mdnajamuddin

const connection = mongoose.connect(m)



export default connection;
