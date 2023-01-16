import React, { useEffect, useState } from "react";
import styles from './homePage.module.scss'
import { useSelector, useDispatch } from "react-redux";
import { addUserEmail, addUserName } from "../redux/reducers/user";
import { addAmount} from '../redux/reducers/orders'
import ButtonHome from "../../UI/buttonHome/ButtonHome";
import { useNavigate } from "react-router-dom";
import Select from "../../UI/select/Select";
import db from '../../DB/users.json'


const HomePage = () => {
    const [arr, setArr] = useState([])
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const userName = useSelector(state => state.user.name)
    const userEmail = useSelector(state => state.user.email)
    const orderAmount = useSelector(state => state.orders.ordersAmount)
    const orderList = useSelector(state => state.orders.orderList)
 

    const logOut = () => {
        localStorage.clear()
        navigate('/')
    }

    const showMore = () => {
        dispatch(addAmount(5))
        refresh(db, orderAmount)
    }

    const length = (db, orderAmount) => {
        return db.orders.length - orderAmount
    }

    const refresh = (db, orderAmount) => {
    let temp = []
        db.orders.map(item=> {
            temp.push(item)
        })
        temp.splice(orderAmount, length(db, orderAmount))
        setArr(temp)
        console.log(arr); 
    }

  

    useEffect(() => {
        dispatch(addUserName(localStorage.getItem('userEmail')))
        dispatch(addUserEmail(localStorage.getItem('userName')))
        refresh(db, orderAmount)
    }, [])

    return (
        <div className={styles.main}>

            <div className={styles.user_panel}>
                <div className={styles.user_panel_info}>
                    <div className={styles.user_panel_left}>
                        <div className={styles.user_panel_info_avatar}>
                        </div>
                        <div className={styles.user_panel_info_userdata}>
                            <h3>
                                {userName}
                            </h3>
                            <p>
                                {userEmail}
                            </p>
                        </div>
                    </div>
                    <div className={styles.user_panel_info_right}>
                        <ButtonHome logOut={() => logOut()}>Выход</ButtonHome>
                    </div>
                </div>
            </div>

            <div className={styles.order_panel}>
                <div className={styles.order_panel_info}>
                    <h2>
                        Заказы
                    </h2>
                    <Select />
                </div>
                <table className={styles.table}>
                    <tr className={styles.header_row}>
                        <td>Номер</td>
                        <td>Email</td>
                        <td>Сумма</td>
                        <td>Дата</td>
                    </tr>
                    {arr.map(item => {
                        return (
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.email}</td>
                                <td>{item.amount}</td>
                                <td>{item.date}</td>
                            </tr>
                        )
                    })}
                </table>
                <ButtonHome showmore={() => showMore()}>Показать еще...</ButtonHome>
            </div>
        </div>
    )
}

export default HomePage