import { Router } from "express";
import { methods as clientsController, methods } from "../controllers/clients.controller";

const router = Router();

router.get("/", methods.getClients);

export default router;