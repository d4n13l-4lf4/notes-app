import IconFactoryBase from "./IconFactoryBase";
import React from "react";
import AddIcon from "@material-ui/icons/Add";
import NoteIcon from "@material-ui/icons/Note";

export class IconFactory extends IconFactoryBase {
    createIcon(name: string): React.ReactElement | undefined {
        switch (name) {
            case 'add':
                return (<AddIcon />);
            case 'note':
                return (<NoteIcon />);
            default:
                return undefined;
        }
    }

}
