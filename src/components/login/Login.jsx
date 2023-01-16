import React, { useState } from "react";
import styles from './login.module.scss'
import Input from "../../UI/Input/Input";
import Button from "../../UI/button/Button";
import db from '../../DB/users.json'
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate()
    const [user, setUser] = useState({
        email: '',
        password: ''
    })

    const changeData = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        })
    }

    const authCheck = (db, user) => {
        db.users.forEach(item => {
            if (item.email == user.email && item.password == user.password) {
                localStorage.setItem('isAuth', true)
                localStorage.setItem('userName', item.email)
                localStorage.setItem('userEmail', item.name)
                navigate('/home')
            }
        })
    }

    return (
        <div className={styles.main}>
            <div className={styles.login_form}>
                <Input value={user.email} change={changeData} name={'email'} placeholder={'Email'} />
                <Input value={user.password} change={changeData} name={'password'} placeholder={'Пароль'} />
                <Button auth={() => authCheck(db, user)}>Войти</Button>
                <a href="#">Забыли пароль?</a>
            </div>
        </div>
    )
}

export default Login