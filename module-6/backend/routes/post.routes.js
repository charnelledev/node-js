import  express from 'express';
const router = express.Router();

router.get('/',(req,res)=>{
    res.json({
        message:'home page'
    })
});

router.get('/post',(req,res)=>{
    res.json({
        id: 1,
        title:'mon premier post',
        content:'contenu du premier post'
    })
});

export default router;