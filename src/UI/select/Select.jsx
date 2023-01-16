import styles from './select.module.scss'

const Select = () => {
    return (
        <select className={styles.select_style} name="sort" id="sortorder">
            <option value="num">По номеру заказа</option>
            <option value="price">По цене</option>
            <option value="date">По дате</option>
            <option value="email">По email</option>
        </select>
    )
}

export default Select