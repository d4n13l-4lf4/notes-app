import React from "react";
import {Note} from "../model/Note";
import {Card} from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import NoteShape from "../shape/note.shape";

interface Props {
    note: Note
}


class NoteItem extends React.Component<Props, any > {

    static propTypes = {}

    constructor(props: Props) {
        super(props);
    }


    render() {
        const { note } = this.props;

        return (
            <Card >
                <CardContent>
                    <Typography>
                        {note.description}
                    </Typography>
                </CardContent>
            </Card>
        )
    }
}

NoteItem.propTypes = {
    note: NoteShape
}


export default NoteItem;
