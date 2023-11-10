import Styles from "./style.module.scss";
import { FaHtml5, FaCss3Alt, FaReact, FaGitAlt, FaGithub, FaPeopleArrows, FaBook, FaClipboardList } from "react-icons/fa";
import { SiJavascript, SiSass } from "react-icons/si";
import {MdGroups2} from "react-icons/md";
import {RiSpeakLine} from "react-icons/ri";
import {AiFillFile} from "react-icons/ai";

export const Skills = () => {

    return (
        <section className={`container ${Styles.skillsBox}`} id="skills">
            <div>
                <div className={Styles.infoTech}>
                    <div className={Styles.infoName}>
                        <p className="specialText">Skills</p>
                        <h2 className="title2">Soft & Hard Skills</h2>
                    </div>

                </div>
                <div className={Styles.imgTech}>
                    <div>
                        <h2>Hard Skills</h2>
                        <div>
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
                    <div>
                        <h2>Soft Skills</h2>
                        <div>
                            <ul>
                                <li>
                                    <AiFillFile size={40} color="#EC6231" />
                                    <p className="paragraph">Responsibility</p>
                                </li>
                                <li>
                                    <FaBook size={40} color="rgb(41 169 223)" />
                                    <p className="paragraph">Self-learning</p>
                                </li>
                                <li>
                                    <MdGroups2 size={40} color="rgb(249 224 62)" />
                                    <p className="paragraph">Team Work</p>
                                </li>
                                <li>
                                    <FaClipboardList size={40} color="rgb(97 219 251)" />
                                    <p className="paragraph">Organization</p>
                                </li>
                                <li>
                                    <RiSpeakLine size={40} color="rgb(204 102 153)" />
                                    <p className="paragraph">Communication</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}