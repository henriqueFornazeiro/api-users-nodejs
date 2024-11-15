import express from "express";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const app = express()
app.use(express.json())


app.post('/usuarios', async (req, res)=>{

    try {
        const user = {
            email: req.body.email,
            name: req.body.name,
            age: req.body.age
         }
    
        await prisma.user.create({
            data: user
        })
    
        res.status(201).json(user)
    } catch (error) {        
        res.status(400).send("Erro ao tentar criar usuário.")
    }
    
})

app.get('/usuarios', async (req,res)=>{
    const allUsers = await prisma.user.findMany()

    res.status(200).json(allUsers)
})


app.listen(3000)
