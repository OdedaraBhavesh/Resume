import  Express from "express";
const app = Express()
const port = process.env.port || '8000'       

import web from './routes/web.js'

//set Template Engine
app.set('view engine','ejs')

//Middleware static files
app.use(Express.static('public'))

//Load Routes
app.use('/',web)
app.use('/skill',web)
app.use('/contact',web)
app.use('/service',web)



app.listen(port,()=>{
    console.log(`Server running this http://localhost:${port}`);
})