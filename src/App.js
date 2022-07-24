import Navigation from './routes/navigation/navigation'
import Login from './routes/login/login-component'
import Register from './routes/register/register-component'
import { Routes, Route, useLocation  } from 'react-router-dom'
import Home from './routes/home/home'
import ResetPassword from './routes/reset-password/reset-password'
import { AnimatePresence } from 'framer-motion'
function App() {
  const location = useLocation();
  return (
    <div className="App">
      <AnimatePresence>
        <Routes>
          <Route path="/" element={<Navigation />}  location={location} key={location.pathname}>
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="reset-password" element={<ResetPassword />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </div>
  )
}

export default App
