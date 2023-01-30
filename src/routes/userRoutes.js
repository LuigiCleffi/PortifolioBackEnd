import express from "express"
import UserSchema from "../controllers/userController.js";

const router = express.Router()

router
    .post("/user/newUser", UserSchema.createUsers)
    .get("/user/", UserSchema.listUser)


export default router;