const express = require('express');
const router = express.Router();


router.get('/', (req,res)=> {
    res.status(200).json({message: 'All Post'});
})

router.post('/', (req,res)=> {
    res.status(200).json({message: 'Create the post'});
})

router.get('/:id', (req,res)=>{
    res.status(200).json({message: 'Post ID'});
})


router.put('/:id', (req,res)=>{
    res.status(200).json({message: 'Updated Post'});
})


router.delete('/:id', (req,res)=>{
    res.status(200).json({message: 'Deleted the post'})
})


module.exports = router;