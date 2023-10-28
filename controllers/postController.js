//description - Get All Post
//route - GET /api/post
//access - public.

const getPosts =  (req,res) => {
    //res.status(200).json({message: 'All Post'});
    res.send('All Post.')
} 


//des - Create the post
//route - POST /api/post
//access - public
const createPost = (req,res)=> {
    res.status(200).json({message: 'Create the post'});
}


//des - Get specific post by Id
//route - GET /api/post/:id
//access - public
const getPost = (req,res)=>{
    res.status(200).json({message: 'Post ID'});
}


//des - Update the post by Id
//route - PUT /api/post/:id
//access - public
const updatePost = (req,res)=>{
    res.status(200).json({message: 'Updated Post'});
}


//desc - Delete the post by Id
//route - DELETE /api/post/:id
//access - public
const deletePost = (req,res)=>{
    res.status(200).json({message: 'Deleted the post'})
}

module.exports = {getPosts, createPost, getPost, updatePost, deletePost}