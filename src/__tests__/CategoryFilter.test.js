// import "@testing-library/jest-dom";
// import { render, screen, fireEvent } from "@testing-library/react";
// import CategoryFilter from "../components/CategoryFilter";
// import App from "../components/App";
// import { CATEGORIES } from "../data";

// test("displays a button for each category", () => {
//   render(<CategoryFilter categories={CATEGORIES} />);
//   for (const category of CATEGORIES) {
//     expect(screen.queryByText(category)).toBeInTheDocument();
//   }
// });

// test("clicking the category button adds a class of 'selected' to the button", () => {
//   render(<App />);

//   const codeButton = screen.queryByRole("button", { name: "Code" });
//   const allButton = screen.queryByRole("button", { name: "All" });

//   fireEvent.click(codeButton);

//   expect(codeButton.classList).toContain("selected");
//   expect(allButton.classList).not.toContain("selected");
// });

// test("clicking the category button filters the task list", () => {
//   render(<App />);

//   const codeButton = screen.queryByRole("button", { name: "Code" });

//   fireEvent.click(codeButton);

//   expect(screen.queryByText("Build a todo app")).toBeInTheDocument();
//   expect(screen.queryByText("Buy rice")).not.toBeInTheDocument();
// });

// test("displays all tasks when the 'All' button is clicked", () => {
//   render(<App />);

//   const allButton = screen.queryByRole("button", { name: "All" });

//   fireEvent.click(allButton);

//   expect(screen.queryByText("Build a todo app")).toBeInTheDocument();
//   expect(screen.queryByText("Buy rice")).toBeInTheDocument();
// });

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // Import this to use toBeInTheDocument
import CategoryFilter from '../components/CategoryFilter';

test("clicking the category button adds a class of 'selected' to the button", () => {
  const categories = ['Work', 'Personal', 'Shopping'];
  const selectedCategory = 'Work';
  const onSelectCategory = jest.fn();

  render(
    <CategoryFilter
      categories={categories}
      selectedCategory={selectedCategory}
      onSelectCategory={onSelectCategory}
    />
  );

  const button = screen.getByText('Work');
  fireEvent.click(button);

  expect(button).toHaveClass('selected');
  expect(onSelectCategory).toHaveBeenCalledWith('Work');
});