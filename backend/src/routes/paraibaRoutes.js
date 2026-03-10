import express from "express"
import { createParaibaEntry, getParaibaEntries } from "../controllers/paraibaController.js"

const router = express.Router()

router.post("/", createParaibaEntry)
router.get("/", getParaibaEntries)

export default router