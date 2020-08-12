import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Redirect, Switch as RouterSwitch} from 'react-router-dom';
import APP_CONFIG from "./app-constants";
import 'fontsource-roboto';
import {AppBar, IconButton, Toolbar} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import {createStyles, withStyles} from "@material-ui/styles";
import {WithStyles} from "@material-ui/styles/withStyles/withStyles";
import transitions from "@material-ui/core/styles/transitions";
import clsx from "clsx";
import Menu from "./component/Menu";
import ROUTES from "./route/routes";
import NotFound from "./NotFound";

const styles = createStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh'
    },
    menuButton: {
        marginRight: 2
    },
    title: {
        flexGrow: 1
    },
    leftBarShift: {
        width: `calc(100% - ${APP_CONFIG.DRAWER_WIDTH}px)`,
        marginLeft: APP_CONFIG.DRAWER_WIDTH,
        transition: transitions.create(['margin', 'width'], {
            easing: transitions.easing.easeOut,
            duration: transitions.duration.enteringScreen,
        }),
    },
    content: {
        display: 'flex',
        flexGrow: 1
    }
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
            <div className={classes.root}>
                <Router>
                    <AppBar position={'sticky'}
                            className={clsx({
                                [classes.leftBarShift]: open
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
                            <Typography className={classes.title}
                                        variant={'h6'}
                                        component={'h6'}
                                        data-testid={'app-bar-title'}
                                        noWrap
                            >
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
                    <main
                        className={clsx(classes.content, {
                            [classes.leftBarShift]: open
                        })}
                    >
                        <RouterSwitch>
                            {
                                ROUTES.map((route, ind) => this.createRoute(route, ind))
                            }
                            <Redirect from={'/'} to={'/home'} exact={true}/>
                            <Route path={'*'} component={NotFound}/>
                        </RouterSwitch>
                    </main>
                </Router>
            </div>
        );
    }
}

export default withStyles(styles)(App);
