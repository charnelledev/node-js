import express from 'express';
import connectDB from './config/database.js';
import dotenv from'dotenv';
dotenv.config();
const port = 3001;
const app =   express();
import postRoutes from './routes/post.routes.js';

// app.get('/post',(req,res) =>{
//     res.json({
//         message: 'home page'
//     });
// });


app.use(express.urlencoded({extended:false}))


 app.use(express.json());

 app.use('/' ,postRoutes)
 app.use('/post' ,postRoutes)
 app.use('/:id',postRoutes);
 app.use('/post/:id',postRoutes);
 app.use('/like-post/:id',postRoutes);

 


// app.get('/post',(req,res) =>{
//     res.json({
//         id:1,
//         title:'mon premier post',
//         content:'contenu du premier post'
//     })
// })
//lancer le server

app.listen(port, () =>{
    console.log(`serveur demarre sur le port ${port} avec succes ok`);
    
});
connectDB();