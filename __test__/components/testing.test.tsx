import React from "react";
// import (render, screen) from "@testing-library/react";
import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";
import Testing from "../../components/Testing";

describe("Testing Jest", () => {
    it("should be working properly", () => {
        render(<Testing />);

        const header = screen.getByRole("heading");
        const headerText = "Testing page";

        expect(header).toHaveTextContent(headerText);
    })
})