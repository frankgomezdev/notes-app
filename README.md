# Notes App

A simple note-taking application built with **React** and **Vite**. This project allows users to add, view, and delete notes, with each note categorized and prioritized. The app demonstrates state management, conditional rendering, and dynamic styling using Tailwind CSS.

## Features

- **Add Notes:** Users can add new notes with a title, category, priority, and description.
- **View Notes:** All notes are displayed in a list, showing their details.
- **Delete Notes:** Notes can be removed from the list.
- **Priority Highlighting:** Notes are visually highlighted with a colored border based on their priority (High = red, Medium = yellow, Low = green).
- **Form Validation:** The form requires a title and description before submission.
- **Responsive UI:** Styled with Tailwind CSS for a clean and modern look.

## What I Learned

- **React State Management:** Used `useState` to manage form data and the notes list.
- **Props and Component Structure:** Passed data and functions between components to keep the app modular.
- **Conditional Rendering:** Rendered UI elements based on state (e.g., showing/hiding the form, displaying a message when there are no notes).
- **Dynamic Styling:** Applied Tailwind CSS classes conditionally based on note priority.
- **Unique IDs:** Generated unique IDs for each note to ensure reliable rendering and deletion.
- **Form Handling:** Managed controlled inputs and handled form submission with validation.
- **Debugging:** Used `console.log` to debug and verify note creation and ID generation.

## Getting Started

1. **Install dependencies:**
    ```bash
   npm install
   ```
2. **Run the dev server:**
    ```bash
    npm run dev
    ```
3. **Open the app**:
By default, Vite serves your app at [http://localhost:5173](http://localhost:5173).  
   Check your terminal output after running `npm run dev` to confirm the exact address.

## Project Structure
- **`src/components/NoteForm.jsx`** - Form for adding new notes.
- **`src/components/NoteList.jsx`** - Displays the list of notes.
- **`src/components/Note.jsx`** - Renders individual note details.
- **`src/App.jsx`** - Main app logic and state.

## Future Improvements

- Add editing functionality for notes.
- Persist notes using local storage.

---
*Built as a learning project to practice React fundamentals, component design, and dynamic UI styling.*