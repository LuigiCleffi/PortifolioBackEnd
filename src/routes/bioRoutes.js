import express from "express"
import BiosController from "../controllers/biosController.js";

const router = express.Router()

router
    .get("/user/bios/", BiosController.listBios)
    .get("/user/bios/:id", BiosController.listBioByUser)
    .post("/user/bios", BiosController.createBios)
    .put("/user/bios/:id", BiosController.updateListBioByUser)
    .delete("/user/bios/:id", BiosController.deleteListBioByUser)

export default router;