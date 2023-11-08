import Styles from "./style.module.scss";
import { FaHtml5, FaCss3Alt, FaReact, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiJavascript, SiSass } from "react-icons/si";

export const Techs = () => {

    return (
        <section className={`container ${Styles.techBox}`} id="skills">
            <div>
                <div className={Styles.infoTech}>
                    <div className={Styles.infoName}>
                        <p className="specialText">Skills</p>
                        <h2 className="title2">Soft & Hard Skills</h2>
                    </div>
                    
                </div>
                <div className={Styles.imgTech}>
                    <ul>
                        <li>
                            <FaHtml5 size={40} color="#EC6231" />
                            <p className="paragraph">HTML5</p>
                        </li>
                        <li>
                            <FaCss3Alt size={40} color="rgb(41 169 223)" />
                            <p className="paragraph">CSS3</p>
                        </li>
                        <li>
                            <SiJavascript size={40} color="rgb(249 224 62)" />
                            <p className="paragraph">JavaScript</p>
                        </li>
                        <li>
                            <FaReact size={40} color="rgb(97 219 251)" />
                            <p className="paragraph">React</p>
                        </li>
                        <li>
                            <SiSass size={40} color="rgb(204 102 153)" />
                            <p className="paragraph">SASS</p>
                        </li>
                        <li>
                            <FaGitAlt size={40} color="rgb(240 80 51)" />
                            <p className="paragraph">Git</p>
                        </li>
                        <li>
                            <FaGithub size={40} color="rgb(61 117 194)" />
                            <p className="paragraph">GitHub</p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}