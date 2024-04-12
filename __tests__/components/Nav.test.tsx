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
        <UserDrawerContainer/>
      </AppContextProvider>
    );
  });

  it("renders the nav child component", () => {
    expect(screen.getByTestId("nav")).toBeInTheDocument();
  });

  it("UserDrawer appears when user clicks on icon", () => {

    const hamburgerButton = screen.getByLabelText("menu");

    fireEvent.click(hamburgerButton);
    
    const drawer = screen.getByTestId("drawer");

    expect(drawer).toBeInTheDocument();
  });
});

describe('User Icon', () => {
  const handleHamburgerClick = () => {};
  it("displays the user icon when a user is logged in", () => {
    const isLoggedIn = true;
    

    render(<Nav isLoggedIn={isLoggedIn} handleHamburgerClick={handleHamburgerClick}/>);

    expect(screen.getByTestId("AccountCircleIcon")).toBeInTheDocument();
  });

  it("does not display the user icon when a user is not logged in", () => {
    const isLoggedIn = false;

    render(<Nav isLoggedIn={isLoggedIn} handleHamburgerClick={handleHamburgerClick}/>);

    expect(screen.queryByTestId("AccountCircleIcon")).not.toBeInTheDocument();
  });
})
