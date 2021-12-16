import { render, screen } from "@testing-library/react";
import Subtotal from "./Subtotal";

describe("login page tests", () => {
  test("On initail render sign in is disabled", () => {
    render(<Subtotal />);
    screen.debug();
  });
});
