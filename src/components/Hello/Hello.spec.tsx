import { render, screen } from "@testing-library/react";
import React from "react";
import Hello from "./Hello";

it('renders "Hello"', () => {
	render(<Hello />);

	const helloComponent = screen.getAllByText("Hello");
	expect(helloComponent.length).toBe(1);
	expect(helloComponent[0]).toBeInTheDocument();
});
