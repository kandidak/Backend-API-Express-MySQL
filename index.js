const express = require("express");
const cors = require("cors");
const multer = require("multer");
const sequelize = require("sequelize");
const UserRoute = require("./routes/UserRoute.js");
const MainContentRoute = require("./routes/MainContentRoute.js");
const ContactRoute = require("./routes/ContactRoute.js");
const MainTitleRoute = require("./routes/MainTitleRoute.js");
const MainTujuanRoute = require("./routes/MainTujuanRoute.js");
const FileRoute = require("./routes/FileRoute.js");

// const path = require('path');
const app = express();
app.use(cors());
app.use(express.json());
app.use(UserRoute);
app.use(MainContentRoute);
app.use(MainTitleRoute);
app.use(MainTujuanRoute);
app.use(ContactRoute);
app.use(FileRoute);

//Multer config for file uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
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

app.listen(5000, () => console.log('Server up and running...'));