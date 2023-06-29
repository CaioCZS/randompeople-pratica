import { Request,Response } from "express"
import { serivceGetPeople } from "../services/people-service"
import * as utils from "../utils/randomNumber"
import httpStatus from "http-status"

export async function getPeople(req: Request,res:Response){
    try{
    const {rows: peoples} = await serivceGetPeople()
    const randomNumber = utils.randomNumber(peoples.length)
    res.send(peoples[randomNumber])

   }catch(err){
    res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err)
   }
}



