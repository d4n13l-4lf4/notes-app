import React from "react";
import NoteItem from "./component/NoteItem";
import {Note} from "./model/Note";
import { connect as reduxConnect } from "react-redux";
import PropTypes from "prop-types";
import NoteShape from "./shape/note.shape";
import {Grid} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

interface Props {
    notes: Array<Note>
}


class MyNotes extends React.Component<Props, any> {

    static propTypes = {}
    static defaultProps = {}
    title = 'Your awesome notes are here'

    render() {
        const { notes } = this.props;

        return (
            <Grid
            container
            >
                <Grid item xs={12} md={12} lg={12}>
                    <Typography variant={'h4'}
                                noWrap
                        data-testid={'page-title'}
                    >
                        { this.title }
                    </Typography>
                </Grid>
                {
                    notes.map(note => <NoteItem key={note.id} note={note}/>)
                }
            </Grid>
        )
    }

}

const mapStateToProps = (state: any, ownProps: any) => (
    {
        notes: state.notes
    }
)

MyNotes.defaultProps = {
    notes: []
}

MyNotes.propTypes = {
    notes: PropTypes.arrayOf(NoteShape)
}

export default reduxConnect(mapStateToProps, null)(MyNotes);
