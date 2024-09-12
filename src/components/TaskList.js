// import React from "react";

// function TaskList() {
//   return (
//     <div className="tasks">
//       {/* display a list of tasks using Task component */}
//     </div>
//   );
// }

// export default TaskList;

// TaskList.jsx
import React from 'react';
import Task from './Task';

const TaskList = ({ tasks }) => (
  <ul>
    {tasks.map(task => (
      <Task key={task.id} task={task} />
    ))}
  </ul>
);

export default TaskList;


