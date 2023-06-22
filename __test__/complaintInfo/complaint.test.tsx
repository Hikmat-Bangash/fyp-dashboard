import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Supervisor from "../../components/SupervisorProfile";

// testing link url 
test("Supervisor profile link should be work properly", () => {
    render(<Supervisor/>);
    const linkElement = screen.getByTestId("link_supervioser");
    expect(linkElement).toBeInTheDocument();
})

// testing navigate back button

test("Navigate back button should be work properly", () => {
    render(<Supervisor/>);
    const backButton = screen.getByTestId("back_button");
    expect(backButton).toBeInTheDocument();
})

// teting profile card of supervisor

test("Profile card of supervisor should be work properly", () => {
    render(<Supervisor/>);
    const profileCard = screen.getByTestId("profile_card");
    expect(profileCard).toBeInTheDocument();
})

// if the data not fetched then loading spinner should be display
test("Loading spinner should be display", () => {
    render(<Supervisor/>);
    const loadingSpinner = screen.getByTestId("loading_spinner");
    expect(loadingSpinner).toBeInTheDocument();
})

//testing  supervisor profile image whethear it is fetched or not

test("Supervisor profile image should be work properly", () => {
    render(<Supervisor/>);
    const profileImage = screen.getByTestId("profile_image");
    expect(profileImage).toBeInTheDocument();
})

// testing whethear supervisor name has been fetched or not
test("Supervisor Name should be work properly", () => {
  render(<Supervisor />);
  const profileImage = screen.getByTestId("supervisor-name");
  expect(profileImage).toBeInTheDocument();
});

// testing supervisor phone number
test("Supervisor phone number should be work properly", () => {
  render(<Supervisor />);
  const profileImage = screen.getByTestId("phone");
  expect(profileImage).toBeInTheDocument();
});

// testing supervisor email

test("Supervisor email should be work properly", () => {
  render(<Supervisor />);
  const profileImage = screen.getByTestId("email");
  expect(profileImage).toBeInTheDocument();
});

// testing supervisor address

test("Supervisor address should be work properly", () => {
  render(<Supervisor />);
  const profileImage = screen.getByTestId("address");
  expect(profileImage).toBeInTheDocument();
});