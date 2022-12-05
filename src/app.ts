import express, {Express} from "express"
import cors from "cors"

const app: Express = express()

app.use(express.json())
app.use(cors())

const port = process.env.PORT || 3003
app.listen(port, ()=>{
    console.log("Server ready!")
})

export default app