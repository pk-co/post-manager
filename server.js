const  express = require('express');
const app = express();
require('dotenv').config();
//const postRouter = require('./routes/postRouter')

//app.use(express.json());
app.use('/api/post', require('./routes/postRouter') )


const port = process.env.PORT || 5000;

app.listen(port, ()=>{
    console.log(`server is listning ${port}`);
})