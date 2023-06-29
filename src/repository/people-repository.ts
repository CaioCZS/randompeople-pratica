import db from "../database/db-connection";
import { People } from "../types/people-type";

export async function dbGetPeople(){
    return db.query<People>(`SELECT * FROM people`)
}