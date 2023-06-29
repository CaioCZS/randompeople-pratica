import { Router } from "express";
import { getPeople } from "../controllers/peoples-controlers";

const peopleRouter = Router()

peopleRouter.get("/person",getPeople)

export default peopleRouter