

const express =require('express')
const path = require("path");
const members = require ('./api/Members')

const app = express();


app.get('/api/members', (req,res)=>{
    res.json(members)});

const date =new Date()
const day=date.getDay()
const hours=date.getHours()
console.log(hours)

app.use(

    middle=(req,res,next)=>{
        ((day>0&&day<6)&&(8<hours&&hours<18))?next():res.send("<h1>Arja3 Ghodwa</h1>")
    }
)


// app.get('/', (req, res) => {
//     res.sendfile(path.join(__dirname,"public", "index.html"));
// });

app.use(express.static(path.join(__dirname, "one-page-website-html-css-project")))

const port =process.env.port || 3000;

app.listen(port, ()=>console.log(`server is running on port ${port}`));

