interface UserDrawerProps {
    isOpen:boolean;
    toggleDrawer:(newOpen:boolean) => () => void;
}