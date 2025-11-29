import React from "react";

type IconProps = {
    name: string;
    size?: number;
    classname?: string;
    children?: React.ReactNode;
};

const Icon: React.FC<IconProps> = ({name, size, classname = ""}) => {
    return(
        <svg
        className=""
        width={size}
        height={size}
        aria-hidden="true">
            <use href={`/icons.svg#${name}`} />
        </svg>
    )
}

export default Icon;