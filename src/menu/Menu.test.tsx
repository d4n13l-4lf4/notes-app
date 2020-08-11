import {render, RenderResult} from "@testing-library/react";
import React from "react";
import Menu from "./Menu";
import { MemoryRouter } from "react-router-dom";


const routes = [{
    path: '/home',
    component: null,
    title: 'New note',
    icon: 'add'
}];


const menuComponentCreator = (open: boolean, routes: any, classes: object, toggleDrawer: () => void): RenderResult =>
    render(
        <MemoryRouter>
            <Menu open={open} drawerWidth={240} routes={routes} classes={classes} toggleDrawer={toggleDrawer}/>
        </MemoryRouter>
    );



describe('Menu unit test', () => {


    test('should not be open when open prop is set to false', () => {
        const menuComponent = menuComponentCreator(false, routes, {}, () => {});
        const { queryByTestId } = menuComponent;
        expect(queryByTestId('menu')).not.toBeInTheDocument();
    });

    test('it should show have a New note text link', () => {
        const { getByText } = menuComponentCreator(true, routes, {}, () => {});;
        const newNoteMenu = getByText('New note');
        expect(newNoteMenu).toBeInTheDocument();
    });

    test('it should not be open at first rendering', () => {
        const { getByTestId } = menuComponentCreator(true, routes, {}, () => {});;
        const menu = getByTestId('menu');
        expect(menu).toHaveClass('drawerOpen');
    });

});
