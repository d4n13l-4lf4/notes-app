import {createStyles, WithStyles} from "@material-ui/core";
import Drawer from "@material-ui/core/Drawer";
import React from "react";
import withStyles from "@material-ui/styles/withStyles";
import PropTypes from 'prop-types';
import ListItemLink from "../component/ListItemLink";
import List from "@material-ui/core/List";
import {IconFactory} from "../icon/IconFactory";
import clsx from "clsx";

const styles = createStyles({
    drawerPaper: (props: any) => ({
        width: props.drawerWidth
    }),
    drawer: (props: any) => ({
        width: props.drawerWidth,
        flexShrink: 0
    })
});


interface Props extends WithStyles<typeof styles> {
    toggleDrawer: () => void;
    drawerWidth: number;
    open: boolean;
    routes: Array<any>
}

export class Menu extends React.Component<Props, any> {

    static propTypes = {};
    private readonly iconFactory = new IconFactory();


    createMenuLink = (route: any, ind: number) => {
        return (
            <ListItemLink key={ind}
                          to={route.path}
                          primary={route.title}
                          icon={this.iconFactory.createIcon(route.icon)} />
        )
    }

    render() {
        const { classes, toggleDrawer, open, routes } = this.props;

        return (
            <Drawer
                className={clsx(classes.drawer, {drawerOpen: open})}
                anchor={'left'}
                open={open}
                data-testid={'menu'}
                classes={{
                    paper: classes.drawerPaper,
                }}
                onClose={toggleDrawer}
            >
                <List>
                    {
                        routes.map((route, ind) => this.createMenuLink(route, ind))
                    }
                </List>
            </Drawer>
        )
    }
}

Menu.propTypes = {
    toggleDrawer: PropTypes.func,
    classes: PropTypes.object,
    drawerWidth: PropTypes.number.isRequired,
    routes: PropTypes.arrayOf(PropTypes.shape({
        path: PropTypes.string,
        component: PropTypes.elementType,
        icon: PropTypes.elementType
    }))
}

export default withStyles(styles)(Menu);
