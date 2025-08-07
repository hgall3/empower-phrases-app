import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import DeletePhrase from "../deletePhrase/DeletePhrase";

describe("DeletePhrase", () => {
  it("renders the delete button", () => {
    render(<DeletePhrase id="1" onDelete={() => {}} />);
    const deleteButton = screen.getByRole("button", { name: /delete phrase/i });
    expect(deleteButton).toBeInTheDocument();
  });

  it("shows the modal when the delete button is clicked", () => {
    render(<DeletePhrase id="1" onDelete={() => {}} />);
    const deleteButton = screen.getByRole("button", { name: /delete phrase/i });
    fireEvent.click(deleteButton);
    expect(screen.getByText(/are you sure you want to delete this phrase/i)).toBeInTheDocument();
  });

  it("calls onDelete with the correct id when confirmed", () => {
    const mockOnDelete = vi.fn();
    render(<DeletePhrase id="1" onDelete={mockOnDelete} />);
    fireEvent.click(screen.getByRole("button", { name: /delete phrase/i }));
    fireEvent.click(screen.getByText("Yes"));
    expect(mockOnDelete).toHaveBeenCalledWith("1");
  });

  it("closes the modal when clicking cancel", () => {
    render(<DeletePhrase id="1" onDelete={() => {}} />);
    fireEvent.click(screen.getByRole("button", { name: /delete phrase/i }));
    fireEvent.click(screen.getByText("Cancel"));
    expect(screen.queryByText(/are you sure you want to delete this phrase/i)).not.toBeInTheDocument();
  });
});

