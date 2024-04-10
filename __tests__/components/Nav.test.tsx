import NavContainer from "@/components/Nav/NavContainer";
import UserDrawerContainer from "@/components/UserDrawer/UserDrawerContainer";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Nav show and functions", () => {
  beforeEach(() => {
    render(<NavContainer />);
  });

  it("renders the nav child component", () => {
    expect(screen.getByTestId("nav")).toBeInTheDocument();
  });

  it("UserDrawer appears when user clicks on icon", () => {
    render(<UserDrawerContainer />);

    const hamburgerButton = screen.getByTestId("hamburger-button");
    const drawer = screen.getByTestId("drawer");

    expect(drawer).toHaveAttribute("aria-hidden", "true");

    fireEvent.click(hamburgerButton);

    expect(drawer).toHaveAttribute("aria-hidden", "false");
  });

  it("displays the user icon when a user is logged in", () => {
    const isLoggedIn = true;

    render(<NavContainer isLoggedIn={isLoggedIn} />);

    expect(screen.getByTestId("user-icon")).toBeInTheDocument();
  });

  it("does not display the user icon when a user is not logged in", () => {
    const isLoggedIn = false;

    render(<NavContainer isLoggedIn={isLoggedIn} />);

    expect(screen.queryByTestId("user-icon")).not.toBeInTheDocument();
  });
});
