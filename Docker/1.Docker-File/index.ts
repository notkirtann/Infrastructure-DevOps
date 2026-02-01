import express from 'express';
import type {Request,Response} from 'express'

const app = express()

app.get('/',(req:Request,res:Response)=>{
    res.send(`server is running fuckin fine bruhh`);
})

app.listen(8000,()=>{
    console.log(`Here we go!`);
})