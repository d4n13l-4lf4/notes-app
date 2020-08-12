import React from "react";
import {Grid} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import {createStyles, WithStyles} from "@material-ui/styles";
import withStyles from "@material-ui/core/styles/withStyles";


const styles = createStyles({
    container: {
      flexGrow: 1,
    },
    description: {
        textAlign: 'center',
    }
});


interface Props extends WithStyles<typeof styles> {

}

class NotFound extends React.Component<Props, any> {

    private NOT_FOUND_MESSAGE = 'Sorry! Page not found!';

    render() {
        const { classes } = this.props;

        return (
            <Grid
                container
                alignItems={'center'}
                justify={'center'}
                className={classes.container}
            >
                <Grid item xs={12} md={12} lg={12} className={classes.description}>
                    <Typography
                        variant={'h4'}
                        data-testid={'description'}
                    >{this.NOT_FOUND_MESSAGE}</Typography>
                </Grid>
            </Grid>
        )
    }

}

export default withStyles(styles)(NotFound);
