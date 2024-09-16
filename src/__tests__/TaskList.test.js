// import "@testing-library/jest-dom";
// import { render } from "@testing-library/react";
// import TaskList from "../components/TaskList";
// import { TASKS } from "../data";

// test("displays all items when initially rendered", () => {
//   const { container } = render(<TaskList tasks={TASKS} />);
//   expect(container.querySelectorAll(".task")).toHaveLength(TASKS.length);
// });

// import React from 'react';
// import { render } from '@testing-library/react';
// import TaskList from '../components/TaskList';

// const TASKS = [
//   { id: 1, text: 'Task 1' },
//   { id: 2, text: 'Task 2' },
//   { id: 3, text: 'Task 3' },
//   { id: 4, text: 'Task 4' },
//   { id: 5, text: 'Task 5' },
//   { id: 6, text: 'Task 6' },
//   { id: 7, text: 'Task 7' },
// ];

// import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // Add this import

import Task from '../components/Task';

test("displays the task text", () => {
  const task = { text: "text!", category: "category!" };
  render(<Task task={task} />);
  expect(screen.queryByText("text!")).toBeInTheDocument();
});
import React from 'react';
// import { render } from '@testing-library/react';
import TaskList from '../components/TaskList';

const TASKS = [
  { id: 1, text: 'Task 1' },
  { id: 2, text: 'Task 2' },
  { id: 3, text: 'Task 3' },
  { id: 4, text: 'Task 4' },
  { id: 5, text: 'Task 5' },
  { id: 6, text: 'Task 6' },
  { id: 7, text: 'Task 7' },
];

test("displays all items when initially rendered", () => {
  const { container } = render(<TaskList tasks={TASKS} />);
  expect(container.querySelectorAll(".task")).toHaveLength(TASKS.length);
});
test("displays all items when initially rendered", () => {
  const { container } = render(<TaskList tasks={TASKS} />);
  expect(container.querySelectorAll(".task")).toHaveLength(TASKS.length);
});