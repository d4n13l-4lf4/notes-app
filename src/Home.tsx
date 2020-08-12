import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import {Alert} from "@material-ui/lab";
import {Box, Button, createStyles, Grid, TextField, WithStyles} from "@material-ui/core";
import {withStyles} from "@material-ui/styles";
import {Formik} from "formik";
import NoteValidationSchema from "./validation/schema/note-validation.schema";
import {ADD_NOTE, NotePayload} from "./feature/note/notes.slice";
import { connect as reduxConnect } from "react-redux";

const styles = createStyles({
    root: {
        flexGrow: 1,
        display: 'flex'
    },
    centerContent: {
        margin: 'auto',
        textAlign: 'center'
    },
    form: {
        width: '50%'
    }
});


const mapDispatchToProps = {
    ADD_NOTE
}

interface Props extends WithStyles<typeof styles>{
    ADD_NOTE: (notePayload: NotePayload) => void;
}

interface NoteHomeState {
    submitted: boolean;
    noteDescription: string;
    error: boolean;
}


export class Home extends React.Component<Props, NoteHomeState> {

    SUCCESS_MESSAGE = 'Note submitted successfully';

    constructor(props: any) {
        super(props);
        this.state = {
            submitted: false,
            noteDescription: '',
            error: false
        };
    }

    submitNote = (values: any, bag: any) => {
        this.props.ADD_NOTE({id: 1, ...values});
        this.setState({ submitted: true });
        bag.resetForm();
    }

    handleClose = (event?: React.SyntheticEvent, reason?: string) => {
        this.setState({ submitted: false });
    }


    render() {
        const { submitted } = this.state;
        const { classes } = this.props;

        return (
            <Box m={2}
                 className={classes.root}
            >
                <Formik
                    initialValues={{
                        description: '',
                    }}
                    validationSchema={NoteValidationSchema}
                    onSubmit={this.submitNote}
                >
                    {
                        formik => (
                            <Grid direction={'column'}
                                  container
                                  alignItems={'center'}
                                  justify={'center'}
                            >
                                <form
                                    id={'form'}
                                    onSubmit={formik.handleSubmit}
                                    className={classes.form}
                                    data-testid={'form'}>
                                    <Grid item xs={12} md={12} lg={12} className={classes.centerContent} >
                                        <TextField
                                            id={'description'}
                                            name={'description'}
                                            error={!!formik.errors.description}
                                            label={'Description'}
                                            variant="outlined"
                                            helperText={ formik.touched.description && formik.errors.description ? formik.errors.description : "A note's description" }
                                            size={'small'}
                                            fullWidth={true}
                                            inputProps={{'data-testid': 'description'}}
                                            {...formik.getFieldProps('description')}
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={12} lg={12} className={classes.centerContent} >
                                        <Button id={'submit-note'}
                                                data-testid={'submit-note'}
                                                disabled={!formik.dirty || !formik.isValid}
                                                size={'small'}
                                                type={'submit'}
                                                variant="contained"
                                                color={'primary'}>Submit note</Button>

                                    </Grid>
                                </form>
                                <Snackbar open={submitted}
                                          autoHideDuration={5000}
                                          onClose={this.handleClose}>
                                    <Alert className={'alert-success'}
                                           severity={'success'}
                                           onClose={this.handleClose}>
                                        { this.SUCCESS_MESSAGE }
                                    </Alert>
                                </Snackbar>
                            </Grid>
                        )
                    }
                </Formik>
            </Box>
        );
    }

}


export default reduxConnect(null, mapDispatchToProps)(withStyles(styles)(Home));
