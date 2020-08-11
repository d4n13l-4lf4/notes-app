import IconFactoryBase from "./IconFactoryBase";
import React from "react";
import AddIcon from "@material-ui/icons/Add";

export class IconFactory extends IconFactoryBase {
    createIcon(name: string): React.ReactElement | undefined {
        switch (name) {
            case 'add':
                return (<AddIcon />);
            default:
                return undefined;
        }
    }

}
