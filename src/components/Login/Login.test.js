import React from "react";
import { render, fireEvent } from "setupTests";

import Login from "./Login";

describe("Login Component", () => {
  test("username should be in document", () => {
    const component = render(<Login />);
    const usernameNode = component.getByTestId("username");
    expect(usernameNode).toBeInTheDocument();
  });

  test("password should be in document", () => {
    const component = render(<Login />);
    const passwordNode = component.getByTestId("password");
    expect(passwordNode).toBeInTheDocument();
  });

  test("submit button should be in document", () => {
    const component = render(<Login />);
    const buttonNode = component.getByTestId("submit-button");
    expect(buttonNode).toBeInTheDocument();
  });
});
