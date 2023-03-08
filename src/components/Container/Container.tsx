import React from 'react';
import classes from "./Container.module.scss";
import cn from "classnames"

interface ContainerProps  {
    className: string;
    children: React.ReactNode
}


const Container = ({className, children}: ContainerProps) => {
    return (
        <div className={cn(classes.container, className)}>
            {children}
        </div>
    );
};

export default Container;