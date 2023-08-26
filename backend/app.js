require("dotenv").config();
const express = require("express");
const app = express();
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const fileUpload = require("express-fileupload");
const cors = require('cors');
const path = require("path");

//regular middleware
const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
    optionsSuccessStatus: 200,
    exposedHeaders: ["set-cookie"],
}
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//cookies and file middleware
app.use(cookieParser());
app.use(
    fileUpload({
        useTempFiles: true,
        tempFileDir: "/tmp/",
    })
);

//morgan middleware
app.use(morgan("tiny"));

//import all routes here

const authRoutes = require("./routes/authRoutes");

//router middleware
app.use('/api/v1/auth', authRoutes);


// export app js
module.exports = app;
