const Note = require("../models/Notes");
const Notes = require("../models/Notes");

async function getallNotes(req, res) {
  try {
    const notes = await Notes.find().sort({ createdAt: -1 });
    res.status(200).json(notes);
  } catch (error) {
    console.log("Error in getting AllNotes: ", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

async function getNotesbyId(req, res) {
  try {
    const note = await Note.findById(req.params.id);
    if (!note) return res.status(404).json({ message: "Note not found" });
    res.status(200).json(note);
  } catch (error) {
    console.log("Error in getting Note: ", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

async function createNote(req, res) {
  try {
    const { title, content } = req.body;
    const note = new Note({ title, content });
    const savedNote = await note.save();
    res.status(201).json({ savedNote });
  } catch (error) {
    console.log("Error in CreateNote: ", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

async function updateNote(req, res) {
  try {
    const { title, content } = req.body;
    const updatedNote = await Note.findByIdAndUpdate(
      req.params.id,
      { title, content },
      { new: true }
    );
    if (!updatedNote)
      return res.status(404).json({ message: "Note not Found" });
    res.status(200).json(updatedNote);
  } catch (error) {
    console.log("Error in UpdateNote: ", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

async function deleteNote(req, res) {
  try {
    const deletedNote = await Note.findByIdAndDelete(req.params.id);
    if (!deletedNote)
      return res.status(404).json({ message: "Note not found" });
    res.status(200).json({ message: "Note deleted successfully" });
  } catch (error) {
    console.log("Error in DeleteNote: ", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

module.exports = {
  getallNotes,
  getNotesbyId,
  createNote,
  updateNote,
  deleteNote,
};
