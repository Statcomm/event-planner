const express = require("express")
const { route } = require("express/lib/application")
const router = express.Router()

const { getEvent, createEvent, deleteEvent, updateEvent, searchEvent} = require("./controllers")

router.get("/", getEvent)
router.post("/", createEvent)
router.delete("/:eventId", deleteEvent)
router.put("/:eventId", updateEvent)
router.get("/:eventName", searchEvent)

module.exports = router
