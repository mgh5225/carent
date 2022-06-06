import React from "react";
import { render, waitFor, fireEvent, screen } from "setupTests";
import { createMemoryHistory } from "history";

import App from "App";
import Login from "components/Login/Login";

import { store } from "../store";

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

describe("Login Functionality", () => {
  const TEST_USERNAME = "test";
  const TEST_PASSWORD = "Test123456789";

  test("if we are logged in we should log out", async () => {
    const component = render(<App />);
    const state = store.getState().auth;

    if (state.isAuthenticated === false) return;

    const logoutCompt = component.findByText("خروج");

    fireEvent.click(logoutCompt);
    await waitFor(() => screen.getByRole("alert"));

    expect(state.me).toEqual(null);
    expect(state.isAuthenticated).toEqual(false);
  });

  test("submit login form", async () => {
    const history = createMemoryHistory();
    history.push("/login");

    const component = render(<App />, { history });

    const username = component.getByTestId("username").querySelector("input");
    const password = component.getByTestId("password").querySelector("input");
    const button = component.getByTestId("submit-button");

    fireEvent.change(username, { target: { value: TEST_USERNAME } });
    fireEvent.change(password, { target: { value: TEST_PASSWORD } });

    fireEvent.click(button);

    await new Promise((r) => setTimeout(r, 4500));
    const state = store.getState().auth;

    expect(state.me).not.toEqual(null);
    expect(state.isAuthenticated).toEqual(true);
  });
});
