import UserDrawer from "@/components/UserDrawer/UserDrawer";
import UserDrawerContainer from "@/components/UserDrawer/UserDrawerContainer";
import AppContextProvider from "@/global state management/AppContextProvider";
import { render, screen } from "@testing-library/react";

describe('User Drawer Loggeed Out', () => {
    beforeEach(() => {
        const mockToggleDrawer = jest.fn();
        render(
          <UserDrawer
            isOpen={true}
            isLoggedIn={false}
            toggleDrawer={mockToggleDrawer}
          />
        );
    })
    it('should display "Sign In with any of the following methods" when isLoggedIn is false', () => {
        const signInText = screen.getByText('Sign In with any of the following methods');
    
        expect(signInText).toBeInTheDocument();
      });
})

describe('User Drawer Loggeed In', () => {
    it('should display the user name when isLoggedIn is true', () => {
        // Arrange
        const mockToggleDrawer = jest.fn();
        const mockUser = {
            name:"Matt",
            profileImage: 'image',
            favoriteRecipes:[]
        }
        render(
          <UserDrawer
            isOpen={true}
            isLoggedIn={true}
            toggleDrawer={mockToggleDrawer}
            user={mockUser}
          />
        );
    
        // Act
        const userName = screen.getByText(mockUser.name);
    
        // Assert
        expect(userName).toBeInTheDocument();
      });
})