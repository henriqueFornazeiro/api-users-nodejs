import express from "express";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const app = express()
app.use(express.json())


app.post('/usuarios', async (req, res)=>{
    await prisma.user.create({
        data:{
           email: req.body.email,
           name: req.body.name,
           age: req.body.age
        }
    })
})


app.listen(3000)
