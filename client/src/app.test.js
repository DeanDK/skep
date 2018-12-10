import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";

import Login from "./containers/Admin/login.js";

Enzyme.configure({ adapter: new EnzymeAdapter() });
const defaultProps = { success: false };
/**
 * Factory function to create a ShallowWrapper for the Login component
 * @function setup
 * @param {object} props - Component props specific to this setup
 * @return {JSX.Element}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<Login {...setupProps} />);
};

test("renders without error", () => {
  const wrapper = setup({ success: false });
  const component = findByTestAttr(wrapper, "component-login");
  expect(component.length).toBe(1);
});

test("does not throw warning with expected props", () => {
  const expectedProps = { success: false };
  checkProps(Login, expectedProps);
});

describe("if there are no words guessed", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({ item: "approved", id: "home" });
  });
  test("renders without error", () => {
    const component = findByTestAttr(wrapper, "component-home");
    expect(component.length).toBe(1);
  });
});
