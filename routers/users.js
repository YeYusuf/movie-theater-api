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

userRouter.get("/users/:id",async(req,res)=>{
    try {
        const userOne = await User.findByPk(req.params.id);
        res.send(userOne)
    } catch (error) {
        res.send(error)
    }
})

userRouter.get("/",async(req,res)=>{
    try {
        const userAll = await User.findAll();
        res.send(userAll)
    } catch (error) {
        res.send(error)}
    })



module.exports = userRouter