const express = require('express')
const app = express()
const http = require('http')
const bodyParser = require('body-parser')
const mongoose = require('mongoose') //mongo db library
const cors = require('cors') //Cors will let us accept cross origin request from our frontend to backend.
const dotenv = require('dotenv') //for keep secret and non shareable properies
// const multer = require('multer') //Multer is a middleware that will let us handle multipart/form data sent from our frontend form.
const morgan = require('morgan') //used to log information of each request that server receives.
// var forms = multer();
// const config = require('./config');
// const Grid = require('gridfs-stream');

const server = http.createServer(app)

//api configuration
app.use(express.json({extended : true}))
app.use(express.urlencoded({extended : true}))
// app.use(forms.array()); 
app.use(bodyParser.json({limit : '30mb', extended : true}))
app.use(bodyParser.urlencoded({limit : '30mb', extended : true}))
app.use(morgan("common"))
dotenv.config()

//allow cross origin policy
const corsOptions ={
    origin:'*', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));
app.use(function(req, res,next){
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'content-type');
    next();
});


//user management function api(owner)
const userRoutes = require('./routes/UserManagement_route')
app.use('/user_api',userRoutes);


const courseRoutes = require('./routes/course_route');
const enrollRoutes = require('./routes/courseEnroll');
app.use('/api/courses', courseRoutes);
app.use('/api/enroll', enrollRoutes);


const adminRoutes = require('./routes/admin_routes');
app.use('/api/admin',adminRoutes);

const quizeRoutes= require('./routes/quize');
app.use('/api/quize',quizeRoutes);


//mongo setup
const PORT = process.env.PORT
mongoose.set('strictQuery', true)
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        server.listen(PORT, () => {console.log(`server running on port ${PORT}`);
    console.log(`Mongo Database connected successfully `)})
    })
    .catch((err) => {console.log(err);})
