import express from "express";
import cors from "cors";
import multer from "multer";
import sequelize from "sequelize";
import UserRoute from "./routes/UserRoute.js";
import MainContentRoute from "./routes/MainContentRoute.js";
import ContactRoute from "./routes/ContactRoute.js";
import MainTitleRoute from "./routes/MainTitleRoute.js";
import MainTujuanRoute from "./routes/MainTujuanRoute.js";
import FileRoute from "./routes/FileRoute.js"
// import fileRoutes from "./routes/FileRoute.js"

// const path = require('path');
const app = express();
app.use(cors());
app.use(express.json());
app.use(UserRoute);
app.use(MainContentRoute);
app.use(MainTitleRoute);
app.use(MainTujuanRoute);
app.use(ContactRoute);
app.use("/files", FileRoute);

//Multer config for file uploads
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function(req, file, cb){
        cb(null, file.originalname)
    },
})

// const firebaseServiceAccount = require("./firebaseConfig.js"); // Load your Firebase config here
// admin.initializeApp({
//   credential: admin.credential.cert(firebaseServiceAccount)
// });

//Routes
// const fileRoutes = require('./routes/fileRoutes');
// app.use('/api', fileRoutes)

app.listen(5000, ()=> console.log('Server up and running...'));