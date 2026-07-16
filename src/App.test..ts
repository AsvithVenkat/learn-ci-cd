import { describe, it, expect } from "vitest";

describe("Sample Test", () => {
  it("should pass", () => {
    expect(2 + 2).toBe(4);
  });
});

// import { render, screen, fireEvent } from "@testing-library/react";
// import { describe, it, expect, vi } from "vitest";
// import App from "./App";

// // Mock useDebounce hook
// vi.mock("./hooks/debounce", () => ({
//   default: (value: string) => value,
// }));

// // Mock RTK Query hook
// vi.mock("./redux/api/userApi", () => ({
//   useGetUserQuery: vi.fn(() => ({
//     data: [],
//     currentData: [],
//     isLoading: false,
//     isError: false,
//   })),
// }));

// describe("App Component", () => {
//   it("should render Get started heading", () => {
//     render(<App />);

//     expect(
//       screen.getByRole("heading", { name: /Get started/i })
//     ).toBeInTheDocument();
//   });

//   it("should render search input", () => {
//     render(<App />);

//     const input = screen.getByRole("textbox");

//     expect(input).toBeInTheDocument();
//   });

//   it("should update input value", () => {
//     render(<App />);

//     const input = screen.getByRole("textbox");

//     fireEvent.change(input, {
//       target: {
//         value: "React",
//       },
//     });

//     expect(input).toHaveValue("React");
//   });

//   it("should render Documentation section", () => {
//     render(<App />);

//     expect(
//       screen.getByText("Documentation")
//     ).toBeInTheDocument();
//   });

//   it("should render Connect with us section", () => {
//     render(<App />);

//     expect(
//       screen.getByText("Connect with us")
//     ).toBeInTheDocument();
//   });

//   it("should render Explore Vite link", () => {
//     render(<App />);

//     expect(
//       screen.getByRole("link", { name: /Explore Vite/i })
//     ).toBeInTheDocument();
//   });
// });