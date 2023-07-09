import express from "express";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js";
import MainContentRoute from "./routes/MainContentRoute.js";
import ContactRoute from "./routes/ContactRoute.js";
import MainTitleRoute from "./routes/MainTitleRoute.js";
import MainTujuanRoute from "./routes/MainTujuanRoute.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(UserRoute);
app.use(MainContentRoute);
app.use(MainTitleRoute);
app.use(MainTujuanRoute);
app.use(ContactRoute);

app.listen(5000, ()=> console.log('Server up and running...'));