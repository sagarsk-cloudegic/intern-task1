import {Link} from 'react-router-dom'
import './home.styles.scss'
import { motion } from "framer-motion"
const Home = () =>{
    return(
        <motion.div className="home" 
        exit={{opacity:0}}
        animate={{opacity:1 , transition:{duration : 0.8}}}
        initial={{opacity:0}}
        >
            <h1>Home Page</h1>
            <Link to='/login'>Click here for Login Page.</Link>
        </motion.div>
    )
}

export default Home;