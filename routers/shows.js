const { Router } = require ("express")
const showRouter = Router();
const Show = require ("../models/Show")


showRouter.get ('/',async(req,res) =>{
    try {
        const showOne = await Show.findByPk(req.params.id);
        res.send(showOne)
    } catch (error) {
        res.send(error)
    }
})


showRouter.get ('/',async(req,res) =>{
    try {
        const showOne = await Show.findByPk(req.params.id);
        res.send(showOne)
    } catch (error) {
        res.send(error)
    }
})








module.exports = showRouter