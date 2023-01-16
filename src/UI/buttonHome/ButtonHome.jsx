import styles from './buttonHome.module.scss'

const ButtonHome = ({children, logOut,showmore}) => {
    return (
        <button  onClick={showmore ? showmore : logOut} className={styles.buttonHome}>{children}</button>
    )
}

export default ButtonHome