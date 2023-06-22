import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom"
import Auth from "../../../components/Auth/Auth";


test("Username input should be rendered", () => {
  render(<Auth />);
  const username = screen.getByTestId("username");
    expect(username).toBeInTheDocument();
})

test("Password input should be rendered", () => {
  render(<Auth />);
  const password = screen.getByTestId("password");
    expect(password).toBeInTheDocument();
})

test("Forget Password should be rendered properly", () => {
  render(<Auth />);
  const forget = screen.getByTestId("forgetpassword");
    expect(forget).toBeInTheDocument();
})

test("Remember checkbox should be rendered properly", () => {
  render(<Auth />);
  const remembered = screen.getByTestId("remember");
    expect(remembered).toBeInTheDocument();
})

test("Submit button should be rendered", () => {
  render(<Auth />);
  const submit = screen.getByTestId("submit");
    expect(submit).toBeInTheDocument();
})