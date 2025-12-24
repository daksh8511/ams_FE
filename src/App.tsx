import { Route, Routes } from 'react-router-dom'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'

const App = () => {
  return (
    <Routes>
      <Route element={<Signup />} path='/signup' />
      <Route element={<Login />} path='/login' />
      <Route element={<Dashboard />} path='/dashboard' />
    </Routes>
  )
}

export default App