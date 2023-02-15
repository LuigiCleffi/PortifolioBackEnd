import express from "express"
import ProjectsController from "../controllers/projectsController.js";

const router = express.Router()

router
    .get("/user/projects", ProjectsController.listProjects)
    .post("/user/projects", ProjectsController.createProject)

export default router;