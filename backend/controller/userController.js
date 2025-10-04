const addUser= async (req,res)=>{
    try {
         const {name,email,password}=req.body;
        if(!email || !name || !password){
          return res.status(400).json({ message: 'All fields are required.' });
        }
        res.status(201).json({ 
            message: 'User created successfully!',
            user: { name, email } 
        });
    } catch (error) {
        console.error('Error during signup:', error);
        res.status(500).json({ message: 'An internal server error occurred.' });
    }
}
module.exports={
    addUser
};