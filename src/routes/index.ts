import express from "express";
import { requestsController } from "../controllers/requests.controller";

const router = express.Router();

router.post("/", requestsController.handler);

export { router };
