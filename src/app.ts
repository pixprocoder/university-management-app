import express, { Application, Request, Response } from 'express'
import userRouter from './app/modules/users/user.route'
const app: Application = express()
import cors from 'cors'

// middleware
app.use(cors())

// parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Application routes
app.use('/api/v1/users/', userRouter)

app.get('/', async (req: Request, res: Response) => {
  res.send('How are you doing')
})

export default app
