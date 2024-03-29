import Styles from "./style.module.scss";
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";

export const Footer = () => {

    return (
        <footer className={`container ${Styles.footerBox}`}>
            <div>
                <h2>Feel free to contact me</h2>
                
                <ul>
                        <li>
                            <a href="https://www.linkedin.com/in/nayaragracioli/" target="blank">
                                <FaLinkedin size={21} color="white" />
                            </a>
                        </li>
                        <li>
                        <a href="https://wa.me/+5541998779474" target="blank">
                                <FaWhatsapp size={21} color="white" />
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/nayaragracioli" target="blank">
                                <FaGithub size={21} color="white" />
                            </a>
                        </li>
                    </ul>
                <p>nayaragraciolisa@gmail.com</p>    
            </div>
        </footer>
    )
}