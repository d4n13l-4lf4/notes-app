import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import {Alert} from "@material-ui/lab";
import {Box, Button, createStyles, Grid, TextField, WithStyles} from "@material-ui/core";
import {withStyles} from "@material-ui/styles";
import {NoteHomeState} from "./state/note-home.state";
import {Formik} from "formik";
import NoteValidationSchema from "./validation/schema/note-validation.schema";



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

    constructor(props: any) {
        super(props);
        this.state = {
            submitted: false,
            noteDescription: '',
            error: false
        };
    }

    submitNote = (values: any, bag: any) => {
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
            <Box m={2}>
                <Formik
                    initialValues={{
                        description: '',
                    }}
                    enableReinitialize={true}
                    validationSchema={NoteValidationSchema}
                    onSubmit={this.submitNote}
                >
                    {
                        formik => (
                            <Grid direction={'row'} container spacing={1} className={classes.root} alignItems={'center'} justify={'center'}>
                                <form action="" id={'form'} onSubmit={formik.handleSubmit} className={classes.form} data-testid={'form'}>
                                    <Grid item xs={12} md={6} lg={6} className={classes.centerContent}>
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
                                    <Grid item xs={12} md={6} lg={6} className={classes.centerContent} >
                                        <Button id={'submit-note'}
                                                data-testid={'submit-note'}
                                                disabled={!formik.isValid}
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
                        )
                    }
                </Formik>
            </Box>
        );
    }

}


export default withStyles(styles)(Home);
