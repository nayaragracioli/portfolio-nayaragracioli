import { FaLinkedin, FaGitAlt, FaWhatsapp } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

export const Footer = () => {

    return (
        <footer>
            <div>
                <h2>Feel free to contact me</h2>
                <p>nayaragraciolisa@gmail.com</p>
                <ul>
                        <li>
                            <a href="https://www.linkedin.com/in/nayaragracioli/" target="blank">
                                <FaLinkedin size={21} color="white" />
                            </a>
                        </li>
                        {/* <li>
                            <a href="" target="blank">
                                <MdOutlineMail size={21} color="white" />
                            </a>
                        </li> */}
                        <li>
                        <a href="https://wa.me/+5541998779474" target="blank">
                                <FaWhatsapp size={21} color="white" />
                            </a>
                        </li>
                        <li>
                            <a href="" target="blank">
                                <FaGitAlt size={21} color="white" />
                            </a>
                        </li>
                    </ul>
            </div>
        </footer>
    )
}