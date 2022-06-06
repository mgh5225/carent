// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";
import { store } from "./store";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

import React from "react";
import { render as rtlRender } from "@testing-library/react";

function render(ui, { history, ...renderOptions } = {}) {
  function Wrapper({ children }) {
    if (history == null) {
      history = createMemoryHistory();
    }
    return (
      <Provider store={store}>
        <Router location={history.location} navigator={history}>
          {children}
        </Router>
      </Provider>
    );
  }

  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

export * from "@testing-library/react";
export { render };
