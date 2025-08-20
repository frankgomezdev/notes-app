import { useState } from "react";
import TextInput from "./inputs/TextInput";
import SelectInput from "./inputs/SelectInput";
import TextAreaInput from "./inputs/TextAreaInput";

const NoteForm = ({ notes, setNotes }) => {
  //   const [title, setTitle] = useState("");
  //   const [category, setCategory] = useState("");
  //   const [priority, setPriority] = useState("");
  //   const [description, setDescription] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    category: "Personal",
    priority: "High",
    description: "",
  });

  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.description) return;
    const newNote = {
      id: Math.random().toString(36).substring(2, 10),
      ...formData,
    };
    // Log to check that IDs are NOT the same
    console.log("New note added:", newNote);
    setNotes([newNote, ...notes]);
    setFormData({
      title: "",
      category: "Work",
      priority: "Medium",
      description: "",
    });
  };

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsFormVisible(!isFormVisible)}
        className="w-full text-white bg-gray-950 py-2 mb-4 rounded-full cursor-pointer"
      >
        {isFormVisible ? "Hide Form" : "Add New Note"}
      </button>
      {/* Form */}
      {isFormVisible && (
        <form onSubmit={handleSubmit} className="mb-6">
          <TextInput
            label="Title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
          <SelectInput
            label="Category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            options={[
              { value: "Personal", label: "Personal" },
              { value: "Work", label: "Work" },
            ]}
          />
          <SelectInput
            label="Priority"
            name="priority"
            value={formData.priority}
            onChange={handleChange}
            options={[
              { value: "High", label: "High" },
              { value: "Medium", label: "Medium" },
              { value: "Low", label: "Low" },
            ]}
          />
          <TextAreaInput
            label="Description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
          <button className="w-full text-white bg-gray-950 py-2 rounded-lg">
            Add Note
          </button>
        </form>
      )}
    </>
  );
};
export default NoteForm;
