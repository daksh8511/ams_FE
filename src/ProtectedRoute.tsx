import { Navigate, useLocation } from "react-router-dom"

const ProtectedRoute = ({ element }) => {
    const token = localStorage.getItem('token')
    const location = useLocation

    if (!token) {
        return <Navigate to={'/'} state={{ from: location }} replace={true} />
    }

    return element
}

export default ProtectedRoute