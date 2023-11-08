import Styles from "./style.module.scss";
import { FaLinkedin, FaWhatsapp, FaGitAlt } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

export const Contact = () => {

    return (
        <section className={`container ${Styles.contactsBox}`} id="contact">
            <div>
                <div className={Styles.contactInfo}>
                    <p className="specialText">Contact</p>
                    <h2 className="title2">My Contacts</h2>
                </div>
                <div className={Styles.boxLinks}>
                    <ul>
                        <li>
                            <a href="https://www.linkedin.com/in/nayaragracioli/" target="blank">
                                <FaLinkedin size={30} color="white" />
                            </a>
                        </li>
                        <li>
                            <a href="" target="blank">
                                <MdOutlineMail size={30} color="white" />
                            </a>
                        </li>
                        <li>
                            <a href="" target="blank">
                                <FaWhatsapp size={30} color="white" />
                            </a>
                        </li>
                        <li>
                            <a href="" target="blank">
                                <FaGitAlt size={30} color="white" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}