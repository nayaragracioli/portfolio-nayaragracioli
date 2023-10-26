import Styles from "./style.module.scss";
import {FaHtml5, FaCss3Alt, FaReact, FaGitAlt, FaGithub} from "react-icons/fa";
import {SiJavascript, SiSass, SiTailwindcss} from "react-icons/si";

export const Techs = () => {

    return(
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
                        <li><FaHtml5 size={27}/></li>
                        <li><FaCss3Alt size={27}/></li>
                        <li><SiJavascript size={27}/></li>
                        <li><FaReact size={27}/></li>
                        <li><SiSass size={27}/></li>
                        <li><SiTailwindcss size={27}/></li>
                        <li><FaGitAlt size={27}/></li>
                        <li><FaGithub size={27}/></li>
                    </ul>
                </div>
            </div>
        </section>
    )
}