import { Navigate, Outlet, Route } from "react-router-dom";

const PrivateRouter = () => {
    const auth = localStorage.getItem('isAuth')
    return (
        auth ? <Outlet /> : <Navigate to='/' />
    )
}

export default PrivateRouter