const { Router } = require ("express")
const userRouter = Router();
const User = require ("../models/User")
userRouter.get ('/',(req,res) =>{
    res.sendStatus(200);
});
userRouter.post("/",async(req,res)=>{
    try {
        const user = await User.create(req.body);
    } catch (error) {
        res.status(500).send(error)
    }
})

module.exports = userRouter