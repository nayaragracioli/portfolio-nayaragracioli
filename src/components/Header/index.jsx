import Styles from "./style.module.scss";
import { FaLinkedin, FaGitAlt } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

export const Header = () => {

    return(

        <header className={`container ${Styles.headerBox}`}>
            <div>
                <h1 className="title3">Nayara</h1>
                <div>
                    <nav>
                        <ul>
                            <li><a className="paragraph" href="#projects">Projets</a></li>
                            <li><a className="paragraph" href="#skills">Skills</a></li>
                            <li><a className="paragraph" href="#aboutme">About me</a></li>
                        </ul>
                    </nav>
                </div>
                <div className={Styles.boxLinks}>
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
                        {/* <li>
                            <a href="" target="blank">
                                <FaWhatsapp size={21} color="white" />
                            </a>
                        </li> */}
                        <li>
                            <a href="" target="blank">
                                <FaGitAlt size={21} color="white" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}