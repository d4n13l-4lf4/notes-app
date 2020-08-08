import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import { Alert } from "@material-ui/lab";
import { TextField, Button } from "@material-ui/core";

export class Home extends React.Component<any, {submitted: boolean}> {

    SUCCESS_MESSAGE = 'Note submitted successfully';

    constructor(props: any) {
        super(props);
        this.state = {
            submitted: false
        };
    }

    submitNote = (e: any) => {
        e.preventDefault();
        this.setState({submitted: true});
    }

    handleClose = (event?: React.SyntheticEvent, reason?: string) => {
        this.setState({ submitted: false});
    }


    render() {
        const submitted = this.state.submitted;

        return (
            <div>
                <form action="" id={'form'} onSubmit={this.submitNote}>
                    <div>
                        <TextField id={'description'} label={'Description'} variant="outlined" helperText="A note's description" size={'small'}/>
                    </div>
                    <div>
                        <Button id={'submit-note'} size={'small'} type={'submit'} variant="contained" color={'primary'}>Submit note</Button>
                    </div>
                </form>
                <Snackbar open={submitted} autoHideDuration={5000} onClose={this.handleClose}>
                    <Alert className={'alert-success'} severity={'success'} onClose={this.handleClose}>
                        { this.SUCCESS_MESSAGE }
                    </Alert>
                </Snackbar>
            </div>
        );
    }

}


export default Home;
