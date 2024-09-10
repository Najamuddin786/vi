import express, { json } from "express";
import connection from "./db.js"; // Assuming your MongoDB connection is handled in this file
// import cors from cors


let app = express();
let port = 3000;
// app.use(cors());

// Middleware to parse JSON
app.use(json());

// Define routes
app.get('/home', (req, res) => {
    res.send("This is the home page"); // Corrected the response method
});
app.get('/product', (req, res) => {
    res.send("This is the product page"); // Corrected the response method
});

// Start server after database connection
app.listen(port,async()=>{
    try {
        await connection
        console.log("Mongodb connected")
    } catch (error) {
        console.log("Mongodb not connected")
    }
    console.log(`Server is running port number ${port}`)
});
