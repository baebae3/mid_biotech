import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../homePage/HomePage";
import Login from "../login/Login";
import PrivateRouter from "./PrivateRouter";

const Router = () => {
    return (
        <Routes>
            <Route element={<PrivateRouter />}>
                <Route path="/home" element={<HomePage />} />
            </Route>
            <Route path="/" element={<Login />} />
        </Routes>
    )
}

export default Router