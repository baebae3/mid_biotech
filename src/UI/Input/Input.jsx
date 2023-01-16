import React from "react";
import styles from './input.module.scss'

const Input = ({ placeholder, name, value, change }) => {
    return (
        <input value={value} name={name} placeholder={placeholder} onChange={change} type="text" />
    )
}

export default Input