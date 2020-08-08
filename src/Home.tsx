import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import {Alert} from "@material-ui/lab";
import {Box, Button, createStyles, Grid, TextField, WithStyles} from "@material-ui/core";
import {withStyles} from "@material-ui/styles";
import {NoteHomeState} from "./state/note-home.state";


const styles = createStyles({
    root: {
        flexGrow: 1,
    },
    form: {
        flexGrow: 1
    },
    centerContent: {
        margin: 'auto',
        textAlign: 'center'
    }
});


interface Props extends WithStyles<typeof styles>{

}


export class Home extends React.Component<Props, NoteHomeState> {

    SUCCESS_MESSAGE = 'Note submitted successfully';
    ERROR_DESCRIPTION = 'Description shouldn\'t be empty';
    ERROR_AID = 'A note\'s description'

    constructor(props: any) {
        super(props);
        this.state = {
            submitted: false,
            noteDescription: '',
            error: false
        };
    }

    validateNote = (): boolean => {
        const { noteDescription } = this.state;

        return !!noteDescription;
    }

    submitNote = (e: React.SyntheticEvent) => {
        e.preventDefault();

        const validNote = this.validateNote();

        if (validNote) {
            this.setState({ submitted: true });
        }

        if (!validNote) {
            this.setState({ error: true });
        }
    }

    handleClose = (event?: React.SyntheticEvent, reason?: string) => {
        this.setState({ submitted: false});
    }

    handleDescriptionChange = (event: any) => {
        event.preventDefault();
        let description = event.target.value;

        if (description)
            this.setState({noteDescription: description, error: false });
        else
            this.setState({ noteDescription: description, error: true });
    }

    render() {
        const { submitted, noteDescription, error } = this.state;
        const { classes } = this.props;

        return (
            <Box m={2}>
                <Grid direction={'row'} container spacing={1} className={classes.root} alignItems={'center'} justify={'center'}>
                    <form action="" id={'form'} onSubmit={this.submitNote} className={classes.form}>
                        <Grid item xs={12} md={6} lg={6} className={classes.centerContent}>
                            <TextField
                                id={'description'}
                                error={error}
                                label={'Description'}
                                variant="outlined"
                                helperText={error ? this.ERROR_DESCRIPTION : this.ERROR_AID }
                                size={'small'}
                                fullWidth={true}
                                onChange={this.handleDescriptionChange}
                                value={noteDescription}
                            />
                        </Grid>
                        <Grid item xs={12} md={6} lg={6} className={classes.centerContent} >
                            <Button id={'submit-note'}
                                    size={'small'}
                                    type={'submit'}
                                    variant="contained"
                                    color={'primary'}>Submit note</Button>

                        </Grid>
                    </form>
                    <Snackbar open={submitted} autoHideDuration={5000} onClose={this.handleClose}>
                        <Alert className={'alert-success'} severity={'success'} onClose={this.handleClose}>
                            { this.SUCCESS_MESSAGE }
                        </Alert>
                    </Snackbar>
                </Grid>
            </Box>
        );
    }

}


export default withStyles(styles)(Home);
