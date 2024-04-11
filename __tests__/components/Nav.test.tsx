import Nav from "@/components/Nav/Nav";
import NavContainer from "@/components/Nav/NavContainer";
import UserDrawerContainer from "@/components/UserDrawer/UserDrawerContainer";
import AppContextProvider from "@/global state management/AppContextProvider";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Nav shows and functions", () => {
  beforeEach(() => {
    render(
      <AppContextProvider>
        <NavContainer/>
      </AppContextProvider>
    );
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
});

describe('User Icon', () => {
  it("displays the user icon when a user is logged in", () => {
    const isLoggedIn = true;

    render(<Nav isLoggedIn={isLoggedIn} />);

    expect(screen.getByTestId("AccountCircleIcon")).toBeInTheDocument();
  });

  it("does not display the user icon when a user is not logged in", () => {
    const isLoggedIn = false;

    render(<Nav isLoggedIn={isLoggedIn} />);

    expect(screen.queryByTestId("AccountCircleIcon")).not.toBeInTheDocument();
  });
})
