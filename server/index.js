import cors from "cors"
import express from "express"
import { download } from "./download.js"
const app = express()
app.use(cors())
app.get("/summary/:id", (request, response) => {
  download()
  response.send("ID do vídeo:" + request.params.id)
})
app.listen(3333, () => console.log("server is running on port 3333"))
