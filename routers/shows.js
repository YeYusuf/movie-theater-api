const { Router } = require ("express")
const showRouter = Router();

showRouter.get ('/',(req,res) =>{
    res.sendStatus(200);
})

module.exports = showRouter