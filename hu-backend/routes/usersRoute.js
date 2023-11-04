import express from 'express';
import { getUsers } from '../controllers/usersControl.js';

const router = express.Router();

router.get("/getusers", getUsers)
router.get("/getusers/:id")
router.post("/createusers")
router.put("/updateusers/:id")
router.delete("/deleteusers/:id");

export default router;