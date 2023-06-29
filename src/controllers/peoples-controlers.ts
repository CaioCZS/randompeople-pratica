import { Request,Response } from "express"
import { serivceGetPeople } from "../services/people-service"

export async function getPeople(req: Request,res:Response){
    const {rows: peoples} = await serivceGetPeople()
    const randomNumber:number = Math.floor(Math.random()*peoples.length)

    res.send(peoples[randomNumber])
}



