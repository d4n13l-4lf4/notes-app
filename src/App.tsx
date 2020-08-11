import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import APP_CONFIG from "./constants/app-constants";
import 'fontsource-roboto';
import {AppBar, IconButton, Toolbar} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import {createStyles, withStyles} from "@material-ui/styles";
import {WithStyles} from "@material-ui/styles/withStyles/withStyles";
import transitions from "@material-ui/core/styles/transitions";
import clsx from "clsx";
import Menu from "./menu/Menu";
import ROUTES from "./route/routes";


const styles = createStyles({
    menuButton: {
        marginRight: 2
    },
    title: {
        flexGrow: 1
    },
    appBarShift: {
        width: `calc(100% - ${APP_CONFIG.DRAWER_WIDTH}px)`,
        marginLeft: APP_CONFIG.DRAWER_WIDTH,
        transition: transitions.create(['margin', 'width'], {
            easing: transitions.easing.easeOut,
            duration: transitions.duration.enteringScreen,
        }),
    },
});


class App extends React.Component<WithStyles<typeof styles>, any> {

    constructor(props: WithStyles<typeof styles>) {
        super(props);
        this.state = {
            open: false
        };
    }


    componentDidMount() {
        document.title = APP_CONFIG.APP_TITLE;
    }


    toggleDrawer = () => (event: React.KeyboardEvent | React.MouseEvent) => {

        if (event.type === 'keydown'
            && (
                (event as React.KeyboardEvent).key === 'Tab'
                || (event as React.KeyboardEvent).key === 'Shift'
            )) {
            return;
        }

        this.setState((state: any) => ({ open: !state.open }));
    }


    createRoute = (route: any, ind: number) => {
        return (
            <Route key={ind} path={route.path} component={route.component} />
        )
    }


    render() {
        const { classes } = this.props;
        const { open } = this.state;

        return (
            <Router>
                <AppBar position={'sticky'}
                        className={clsx({
                            [classes.appBarShift]: open
                        })}
                >
                    <Toolbar>
                        <IconButton
                            color={'inherit'}
                            onClick={this.toggleDrawer()}
                            data-testid={'menu-toggler'}
                            edge={'start'}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography className={classes.title} variant={'h6'} component={'h6'} data-testid={'app-bar-title'}>
                            Notes App
                        </Typography>
                        <Button color="inherit">Sign in</Button>
                    </Toolbar>
                </AppBar>
                <Menu drawerWidth={APP_CONFIG.DRAWER_WIDTH}
                      open={open}
                      toggleDrawer={this.toggleDrawer()}
                      routes={ROUTES}
                />
                {
                    ROUTES.map((route, ind) => this.createRoute(route, ind))
                }
                <Redirect from={'/'} to={'/home'}/>
            </Router>
        );
    }
}

export default withStyles(styles)(App);
