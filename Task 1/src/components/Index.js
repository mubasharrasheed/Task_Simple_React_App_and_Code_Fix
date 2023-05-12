import { useState, useEffect } from "react";
import Home from "./Home/index";

function Index() {
  const [notes, setNotes] = useState([]);
  const [note, setNote] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [sortConfig, setSortConfig] = useState({ key: "", direction: "" });
  const [search, setSearch] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [visible, setVisible] = useState(false);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  useEffect(() => {
    const savedNotes = localStorage.getItem("notes")
      ? JSON.parse(localStorage.getItem("notes"))
      : [];
    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  useEffect(() => {
    if (note !== null) {
      setTitle(note.title);
      setBody(note.body);
    }
  }, [note]);
  const filteredNotes = notes.filter(
    (note) =>
      note.title.toLowerCase().includes(search.toLowerCase()) ||
      note.body.toLowerCase().includes(search.toLowerCase())
  );
  const handleUpdate = (status, item) => {
    setVisible(true);
    setIsEdit(true);
    setNote(item);
  };
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this note")) {
      const updatedNotes = [...notes];
      updatedNotes.splice(id, 1);
      setNotes(updatedNotes);
      localStorage.setItem("notes", JSON.stringify(updatedNotes));
      setNote(null);
      setIsEdit(false);
      setVisible(false);
      if (notes.length > 1) {
        localStorage.setItem("notes", JSON.stringify(notes));
      } else {
        localStorage.setItem("notes", JSON.stringify([]));
      }
    }
  };

  const handleUpdateNote = (title, body) => {
    notes[note.index] = {
      title,
      body,
    };
    setNotes(notes);
    localStorage.setItem("notes", JSON.stringify(notes));
    setTitle("");
    setBody("");
    setIsEdit(false);
    setNote(null);
    setVisible(false);
  };

  const handleNoteSubmit = (title, body) => {
    const newNote = {
      title: title,
      body: body,
    };
    // console.log(newNote);
    setNotes([...notes, newNote]);
    localStorage.setItem("notes", JSON.stringify([...notes, newNote]));
    setVisible(false);
    setTitle("");
    setBody("");
  };
  return (
    <div>
      <Home
        notes={filteredNotes}
        search={search}
        setSearch={setSearch}
        isEdit={isEdit}
        setIsEdit={setIsEdit}
        note={note}
        setNote={setNote}
        handleUpdate={handleUpdate}
        handleDelete={handleDelete}
        visible={visible}
        setVisible={setVisible}
        handleNoteSubmit={handleNoteSubmit}
        title={title}
        setTitle={setTitle}
        body={body}
        setBody={setBody}
        handleUpdateNote={handleUpdateNote}
      />
    </div>
  );
}

export default Index;
