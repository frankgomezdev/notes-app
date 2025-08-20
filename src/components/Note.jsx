const Note = ({ note, deleteNote }) => {
    const borderPriortiy = {
    High: "border-red-500",
    Medium: "border-yellow-500",
    Low: "border-green-500",
};

  return (
    <div
      className={`p-4 bg-white rounded-lg shadow-md border-l-4 ${
        borderPriortiy[note.priority] || "border-gray-300"
      }`}
    >
      <h3 className="text-lg font-bold">{note.title}</h3>
      <p className="text-sm text-grey-600">
        <strong>Category: </strong> {note.category}
      </p>
      <p className="text-sm text-grey-600">
        <strong>Priority: </strong> {note.priority}
      </p>
      <p className="mt-2">{note.description}</p>

      <button
        onClick={() => deleteNote(note.id)}
        className="mt-3 text-red-500 font-bold"
      >
        Delete
      </button>
    </div>
  );
};
export default Note;
