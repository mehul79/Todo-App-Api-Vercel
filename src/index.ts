import express from "express"
import { configDotenv } from "dotenv"
import { get_todos } from "./logic.js"
const app = express()
app.use(express.json())
configDotenv()

app.get("/", (req,res)=>{
  res.redirect("/todos")
})

app.get("/todos", (req,res)=>{
  const export_object = get_todos()
  res.json({
    todos: export_object
  })
})


const PORT = process.env.PORT || 5077; 
app.listen(PORT, () => { console.log(`Server is running on port ${PORT}`); });


module.exports = app