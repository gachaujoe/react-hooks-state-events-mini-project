// import React from "react";

// function NewTaskForm() {
//   return (
//     <form className="new-task-form">
//       <label>
//         Details
//         <input type="text" name="text" />
//       </label>
//       <label>
//         Category
//         <select name="category">
//           {/* render <option> elements for each category here */}
//         </select>
//       </label>
//       <input type="submit" value="Add task" />
//     </form>
//   );
// }

// export default NewTaskForm;

// NewTaskForm.jsx
// import React, { useState } from 'react';

// const NewTaskForm = ({ categories, onTaskFormSubmit }) => {
//   const [text, setText] = useState('');
//   const [category, setCategory] = useState(categories[0]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onTaskFormSubmit({ text, category });
//     setText('');
//     setCategory(categories[0]);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//         placeholder="Task text"
//       />
//       <select
//         value={category}
//         onChange={(e) => setCategory(e.target.value)}
//       >
//         {categories.filter(cat => cat !== 'All').map(cat => (
//           <option key={cat} value={cat}>{cat}</option>
//         ))}
//       </select>
//       <button type="submit">Add Task</button>
//     </form>
//   );
// };

// export default NewTaskForm;

import React, { useState } from 'react';

const NewTaskForm = ({ onTaskFormSubmit }) => {
  const [details, setDetails] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onTaskFormSubmit(details);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="details">Details</label>
      <input
        id="details"
        type="text"
        value={details}
        onChange={(e) => setDetails(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default NewTaskForm;