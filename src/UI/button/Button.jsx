import React from "react";
import styles from './button.module.scss'

const Button = ({ children, auth }) => {
    return (
        <button onClick={auth}>{children}</button>
    )
}

export default Button