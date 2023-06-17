import express, { Application, Response } from 'express'
const app: Application = express()
import cors from 'cors'

// middleware
app.use(cors())

// parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

export default app
