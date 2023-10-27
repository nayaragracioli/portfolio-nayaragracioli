import Styles from "./style.module.scss";
import { FaHtml5, FaCss3Alt, FaReact, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiJavascript, SiSass, SiTailwindcss } from "react-icons/si";

export const Techs = () => {

    return (
        <section className={`container ${Styles.techBox}`}>
            <div>
                <div className={Styles.infoTech}>
                    <div className={Styles.infoName}>
                        <p className="specialText">tech</p>
                        <h2 className="title2">Technologies</h2>
                    </div>
                    <div className={Styles.infoText}>
                        <p className="paragraph">I have a high level of proficiency in HTML and CSS, which I use to build sturdy structures and stylish designs. My in-depth knowledge of Sass further enhances the styling process. Additionally, my advanced expertise in React enables me to craft dynamic and captivating interfaces. Also, my proficiency in JavaScript enables me to implement advanced features and address any challenges. Furthermore, my solid experience in Git and GitHub, I ensure effective version control and efficient collaboration within the team.</p>
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
                            <SiTailwindcss size={40} color="rgb(56 189 248)" />
                            <p className="paragraph">Tailwind</p>
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