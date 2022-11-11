const express = require("express")
const app = express()
const userRouter = require("./users")
const showRouter = require("./shows")
app.use(express.json())
app.use("/users", userRouter)
app.use("/shows", showRouter)
const seed = require('../seed')

app.listen(3000, async () => {
    await seed();
    console.log("Listening on port 3000")
})