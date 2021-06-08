import React from 'react'
import { Route, Navigate } from "react-router-dom";

function PrivateRoute({login, path, ...props}) {
    return login ? (
        <Route path={path} />
    ) : (
        <Navigate state={{from: path}} replace to="/login" />
    )
}

export default PrivateRoute
