import React from "react";
import {render, RenderResult} from "@testing-library/react";
import ListItemLink from "./ListItemLink";
import { MemoryRouter } from "react-router-dom";

let listItemLink: RenderResult;

const route = {
    path: '/home',
    component: null,
    title: 'New note',
}

beforeEach(() => {
    listItemLink = render(
        <MemoryRouter>
            <ListItemLink primary={route.title} to={route.path} icon={undefined} />
        </MemoryRouter>
    )
})


test('it should have the text "New note"', () => {
    const { getByText } = listItemLink;
    expect(getByText("New note")).toBeInTheDocument();
});

test('it should have a href to /home', () => {
    const { container } = listItemLink;
    const homeRoute = container.querySelector(`a[href='/home']`);
    expect(homeRoute).toBeInTheDocument();
});

