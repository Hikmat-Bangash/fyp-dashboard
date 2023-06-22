import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Navbar from "../../components/Navbar/Navbar";



test("WSSC LOGO should be fetched and rendered properly", () => {
    render(<Navbar />);
    const wsscLogo = screen.getByTestId("wssc-logo");
    expect(wsscLogo).toBeInTheDocument();
})

test("WSSC associated name should be fetched and rendered", () => {
    render(<Navbar />);
    const wsscName = screen.getByTestId("wssc-name");
    expect(wsscName).toBeInTheDocument();
})

test("WSSC profile data should be rendered and working properly", () => {
    render(<Navbar />);
    const wsscProfile = screen.getByTestId("wssc-profile");
    expect(wsscProfile).toBeInTheDocument();
})