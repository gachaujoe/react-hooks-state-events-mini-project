// import React from "react";

// function Task() {
//   return (
//     <div className="task">
//       <div className="label">CATEGORY HERE</div>
//       <div className="text">TEXT HERE</div>
//       <button className="delete">X</button>
//     </div>
//   );
// }

// export default Task;

// Task.jsx
import React from 'react';

// const Task = ({ task, onDelete }) => (
//   <li>
//     {task.text} - {task.category}
//     <button onClick={() => onDelete(task.id)}>Delete</button>
//   </li>
// );
const Task = ({ task }) => (
  <li className="task">{task.text}</li>
);



export default Task;

