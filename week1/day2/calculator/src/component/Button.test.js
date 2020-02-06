import React from "react";
import ReactDOM from "react-dom";
import Button from "./Button";
import { act } from "react-dom/test-utils";
import {fireEvent, screen, getByText} from '@testing-library/react';

it("Button has correct classes by default", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Button
    name="TEST"
    clickHandler={jest.fn()}
    />, div);

    const buttonEl = div.querySelector('.component-button');

    expect(Array.from(buttonEl.classList)).toEqual(expect.arrayContaining(["component-button"]))


});

it("Button has correct classes with props", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Button
    name="TEST"
    wide={true}
    orange={true}
    clickHandler={jest.fn()}
    />, div);

    const buttonEl = div.querySelector('.component-button');

    expect(Array.from(buttonEl.classList)).toEqual(expect.arrayContaining(["component-button", "orange", "wide"]))


});

