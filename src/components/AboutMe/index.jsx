import Styles from "./style.module.scss";
import {FaLinkedin, FaWhatsapp, FaGitAlt} from "react-icons/fa";
import {MdOutlineMail} from "react-icons/md";

export const AboutMe = () => {

    return (
        <section className={`container ${Styles.aboutmeBox}`} id="aboutme">
            <div>
                <div className={Styles.boxInfo}>
                    <h1 className="title1">I am Nayara Gracioli</h1>
                    <p className="paragraph">As a web developer, I come with a robust expertise in vital technologies for crafting top-notch web applications. Additionally, I have a genuine passion for crafting exceptional products, seeking solutions, and tackling challenges. I'm also skilled at engaging with people and thrive as a team player.</p>
                </div>
                <div className={Styles.boxImg}>
                    <img src="./src/assets/Perfil LinkedIn1.jpg" alt="" />
                </div>
            </div>
        </section>
    )
}