import LoginInput from "../../UI/login-input-component/login-input"
import Button from "../../UI/button/button-component"
import './login.styles.scss'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion"
import { ReactComponent as Google } from '../../assets/google.svg'
import { ReactComponent as Apple } from '../../assets/apple.svg'
import { ReactComponent as Facebook } from '../../assets/facebook.svg'
const Login = () => {
    return (
        <motion.div className="login" 
            exit={{ opacity: 0 }}
            animate={{ opacity: 1, transition:{duration : 0.8} }}
            initial={{ opacity: 0 }}>
            <p className="title">Login</p>
            <form method="post" className="login-form">
                <LoginInput type={"text"} label={"Username"} name={"username"} />
                <LoginInput type={"password"} label={"Password"} name={"password"} />
                <Link to="/reset-password" className="forgotten-password">Forgotten password?</Link>
                <Button type={"submit"} className={"submit"} value={"Login"} />
                <div className="other-signin-options">
                    <div>
                        <p className="sign-in-options">Log in using</p>
                        <Google className="signin-logo" />
                        <Facebook className="signin-logo" />
                        <Apple className="signin-logo" />
                    </div>
                    <p className="new-user"><Link to="/register">New User? Register here.</Link>  </p>
                </div>
            </form>
        </motion.div>
    )
}

export default Login;