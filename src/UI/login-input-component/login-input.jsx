import './login-input.styles.scss'

const LoginInput = (props) => {
    return (
        <div className="login-input">
            <label htmlFor={props.label} className="label">{props.label}</label>
            <input type={props.type} name={props.name} id={props.label} className="input" />
        </div>
    )
}

export default LoginInput;