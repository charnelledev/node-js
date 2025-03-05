import  express from 'express';
const router = express.Router();

router.post('/',(req,res) => {
    res.json({
         message: req.body.message ,
         auteur: req.body.auteur,
         age:req.body.age
    });
});



router.delete('/post/:id',(req,res)=>{
    res.json({
        message:'post suprimer avec success :'
    }) 
});
router.put('/:id',(req,res)=>{
    res.json({
        message: req.params.message ,
        auteur: req.params.auteur,
        status:'updated with success3333'
    })
});


router.get('/',(req,res)=>{
    res.json({
        message:'message suprimer',
    })
})
router.patch('/like-post/:id',(req,res)=>{
    res.json({
        message:'message suprimer',
    })
})







// router.get('/post',(req,res)=>{
//     res.json({
//         id: 1,
//         title:'mon premier post1',
//         content:'contenu du premier post'
//     })
// });

export default router;