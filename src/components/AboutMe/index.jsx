import Styles from "./style.module.scss";
import {FaLinkedin, FaWhatsapp, FaGitAlt} from "react-icons/fa";
import {MdOutlineMail} from "react-icons/md";

export const AboutMe = () => {

    return (
        <section className="container">
            <div>
                <div className={Styles.boxInfo}>
                    <div className={Styles.boxLinks}>
                        <ul>
                            <li>
                                <a href="https://www.linkedin.com/in/nayaragracioli/" target="blank">
                                    <FaLinkedin color="white"/>
                                </a>
                            </li>
                            <li>
                                <a href="" target="blank">
                                    <MdOutlineMail color="white"/>
                                </a>
                            </li>
                            <li>
                                <a href="" target="blank">
                                    <FaWhatsapp color="white"/>
                                </a>
                            </li>
                            <li>
                                <a href="" target="blank">
                                    <FaGitAlt color="white"/>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <h1 className="title1">I am Nayara Gracioli</h1>
                    <p className="paragraph">As a web developer, I come with a robust expertise in vital technologies for crafting top-notch web applications. Additionally, I have a genuine passion for crafting exceptional products, seeking solutions, and tackling challenges. I'm also skilled at engaging with people and thrive as a team player.</p>
                </div>
                <div className={Styles.boxImg}>
                    <img src="https://th.bing.com/th/id/R.ef7b1853c8756791bb1b14f159d7d594?rik=rO3gJRh9iEGFeQ&riu=http%3a%2f%2ftudosobrecachorros.com.br%2fwp-content%2fuploads%2fcachorros-pequenos.jpg&ehk=zq4foo%2fcUI%2bpW%2bekPBhgce19n4t8OTrca49WTfPdj1A%3d&risl=&pid=ImgRaw&r=0" alt="" />
                </div>
            </div>
        </section>
    )
}