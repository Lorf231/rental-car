import React from "react";

type IconProps = {
    name: string;
    width?: number;
    height?: number;
    classname?: string;
    children?: React.ReactNode;
};

const Icon: React.FC<IconProps> = ({name, width, height, classname = ""}) => {
    return(
        <svg
        className=""
        width={width}
        height={height}
        aria-hidden="true">
            <use href={`/icons.svg#${name}`} />
        </svg>
    )
}

export default Icon;