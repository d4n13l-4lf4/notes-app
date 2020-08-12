import Home from "../Home";
import MyNotes from "../MyNotes";

const ROUTES = [
    {
        path: '/home',
        component: Home,
        title: 'New note',
        icon: 'add',
    },
    {
        path: '/my-notes',
        component: MyNotes,
        title: 'My notes',
        icon: 'note'
    }
]

export default ROUTES;
