import LoginInput from "../../UI/login-input-component/login-input"
import Button from "../../UI/button/button-component"
import './register.styles.scss'
import { motion } from "framer-motion"
import { ReactComponent as Google } from '../../assets/google.svg'
import { ReactComponent as Apple } from '../../assets/apple.svg'
import { ReactComponent as Facebook } from '../../assets/facebook.svg'
const Register = () => {
    return (
        <motion.div className="register"
            exit={{ opacity: 0 }}
            animate={{ opacity: 1 , transition:{duration : 0.8}}}
            initial={{ opacity: 0 }}>
            <p className="title">Registration</p>
            <form method="post" className="register-form">
                <LoginInput type={"email"} label={"Email"} name={"email"} />
                <LoginInput type={"text"} label={"Username"} name={"username"} />
                <LoginInput type={"password"} label={"Password"} name={"password"} />
                <LoginInput type={"password"} label={"Confirm Password"} name={"confirm-password"} />
                <Button type={"submit"} className={"submit"} value={"Register"} />
                <p className="sign-in-options">Register using</p>
                <Google className="signin-logo" />
                <Facebook className="signin-logo" />
                <Apple className="signin-logo" />
            </form>
        </motion.div>
    )
}

export default Register;