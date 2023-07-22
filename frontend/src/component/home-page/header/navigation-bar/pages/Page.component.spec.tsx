import Page from "./Page";
import { describe } from "@testing-library/react";

describe("Page", () => {
  const mockTitle = "Test Page";
  const mockChildren = [
    { title: "Child 1", children: [] },
    { title: "Child 2", children: [] },
    { title: "Child 3", children: [] },
  ];

  test("renders the title", () => {
    render(<Page title={mockTitle} />);
    const titleElement = screen.getByText(mockTitle);
    expect(titleElement).toBeInTheDocument();
  });

  test("renders the children when the button is hovered and menu is open", () => {
    render(<Page title={mockTitle} children={mockChildren} />);
    const buttonElement = screen.getByText(mockTitle);

    fireEvent.mouseEnter(buttonElement); // Simulate hovering the button
    expect(screen.getByRole("list")).toBeInTheDocument();

    fireEvent.mouseLeave(buttonElement); // Simulate leaving the button
    expect(screen.queryByRole("list")).not.toBeInTheDocument();
  });

  test("does not render children when the button is not hovered", () => {
    render(<Page title={mockTitle} children={mockChildren} />);
    expect(screen.queryByRole("list")).not.toBeInTheDocument();
  });

  test("renders the sub-menu when a child is hovered", () => {
    render(<Page title={mockTitle} children={mockChildren} />);
    const buttonElement = screen.getByText(mockTitle);

    fireEvent.mouseEnter(buttonElement);

    const childElement = screen.getByText("Child 1");
    fireEvent.mouseEnter(childElement);

    const subMenuElement = screen.getByText("Child 1");
    expect(subMenuElement).toBeInTheDocument();

    fireEvent.mouseLeave(childElement); // Simulate leaving the child
    expect(screen.queryByText("Child 1")).not.toBeInTheDocument();
  });

  test("does not render the sub-menu when a child is not hovered", () => {
    render(<Page title={mockTitle} children={mockChildren} />);
    const buttonElement = screen.getByText(mockTitle);

    fireEvent.mouseEnter(buttonElement); // Open the menu

    const childElement = screen.getByText("Child 1");
    fireEvent.mouseEnter(childElement); // Simulate hovering a child

    fireEvent.mouseLeave(childElement); // Simulate leaving the child

    expect(screen.queryByText("Child 1")).not.toBeInTheDocument();
  });
});
