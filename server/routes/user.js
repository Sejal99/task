import  express  from "express";
import {createUser,getUsers,getUser,deleteUser,updateUser} from "../controllers/user.js"

const router=express.Router();

router.post("/user",createUser);
router.get("/users",getUsers);
router.get("/user/:id",getUser);
router.delete("/user/:id",deleteUser);
router.put("/user/:id",updateUser);


export default router;