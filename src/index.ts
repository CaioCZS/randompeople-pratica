import express from "express"
import peopleRouter from "./routers/people-router"


const app = express()
app.use(express.json())
app.use(peopleRouter)

const port : number = 5000
app.listen(port , ()=>console.log(`app running(port: ${port})`))