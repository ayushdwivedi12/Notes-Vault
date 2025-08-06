const express = require("express");
const {
  getallNotes,
  createNote,
  updateNote,
  deleteNote,
  getNotesbyId,
} = require("../controllers/notesController");

const router = express.Router();

router.get("/", getallNotes);
router.get("/:id", getNotesbyId);
router.post("/", createNote);
router.put("/:id", updateNote);
router.delete("/:id", deleteNote);

module.exports = router;
