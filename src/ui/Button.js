import React from 'react';

/**
 * @param.type {String} button|submit|rest
 * @param.color {String} primary|secondary|success|danger|warning|info|light|dark|link
 * @param.children
 * @returns {JSX.Element}
 * @constructor
 */
const Button = (props) => {
    const {
        type = 'button',
        color = 'primary',
        className,
        children,
        disabled,
        ...otherProps
    } = props;

    const classNames = ['btn', `btn-${color}`];

    if (className) {
        classNames.push(className);
    }

    return (
        <button
            className={classNames.join(' ')}
            type={type}
            {...otherProps}
        >{children}</button>
    )
}

export default Button;
