import express from "express"
import cors from "cors";
import { get_todos } from "./logic.js"
const app = express()
app.use(express.json())
app.use(cors())

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


export default app;