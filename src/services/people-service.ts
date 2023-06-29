import { dbGetPeople } from "../repository/people-repository";

export async function serivceGetPeople(){
    return dbGetPeople()
}