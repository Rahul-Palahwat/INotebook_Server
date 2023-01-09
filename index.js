const express= require('express');
const app=express();
const cors=require('cors')
require('dotenv').config();
const port=process.env.PORT;

// this is to import db.js to start connection to the database 
const connectToMongo=require('./db.js');
// yen function ko call kiya h jisko import kiya tha 
connectToMongo();


// now to use req.body we is to use middleware...which will get the data in json format 
app.use(cors());
app.use(express.json());


// end points for requests
//Available routes
// ab yha pr apun log end points ko routes folder se lenge 

app.get('/', (req, res) => {
    res.status(200).send({ message: "App started successfully!" })
  })

app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));



// this is to listen the server 
app.listen(port,()=>{
    console.log(`iNotebook backend Listining at http://localhost:${port}`);
})