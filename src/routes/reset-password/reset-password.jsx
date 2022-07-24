import LoginInput from '../../UI/login-input-component/login-input'
import './reset-password.styles.scss'
import { motion } from "framer-motion"
import Button from "../../UI/button/button-component"

const ResetPassword= ()=>{
    return (
        <motion.div className="reset"
            exit={{ opacity: 0 }}
            animate={{ opacity: 1 , transition:{duration : 0.8}}}
            initial={{ opacity: 0 }}>
            <p className="title">Reset Password</p>
            <form method="post" className="register-form">
                <LoginInput type={"text"} label={"Username or Email"} name={"username"} />
                <Button type={"submit"} className={"submit"} value={"Reset"} />
            </form>
        </motion.div>
    )
}
export default ResetPassword