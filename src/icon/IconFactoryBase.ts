import React from "react";

export abstract class IconFactoryBase {

    public abstract createIcon(name: string): React.ReactElement | undefined;
}

export default IconFactoryBase;
