import { useState } from "react";
import Styles from "./style.module.scss";
import {FaPager, FaGitAlt, FaReact, FaHtml5} from "react-icons/fa";
import {SiJavascript, SiSass} from "react-icons/si";

export const Projects = () => {
    const [isFlipped, setFlipped] = useState(false);

    const handleFlip = () => {
        setFlipped(!isFlipped);
    }

    return(
        <section className={`container ${Styles.projectsBox}`} id="projects">
            <div>
                <div className={Styles.projectsInfo}>
                    <p className="specialText">Projects</p>
                    <h2 className="title2">My Projects</h2>
                </div>
                <div className={Styles.projectsCard}>
                    <ul>
                        <div>
                            <li>
                                <div className={`${Styles.card} ${isFlipped ? "flipped" : ""}`} onClick={handleFlip}>
                                    <div className={`${Styles.cardImg}`}>
                                        <img src="https://vivariomarrecife.com.br/wp-content/uploads/2021/03/pastor-de-shetland.jpg" alt="Dog" />
                                        <div className={Styles.cardLogos}>
                                            <FaReact/>
                                            <FaHtml5/>
                                            <SiJavascript/>
                                            <SiSass/>
                                        </div>
                                    </div>
                                    <div className={Styles.cardInfo}>
                                        <h3 className="title3">NuKenzie</h3>
                                        <p className="paragraph">Apresento uma página de Hamburgueria responsiva que tem funções de filtragem por nome, adição, exclusão e soma de valores do lanche escolhido além de dark mode. Este projeto é responsivo que foi realizado com React e SCSS.</p>
                                        <div className={Styles.cardLink}>
                                            <a href="https://react-entrega-s2-template-nu-kenzie-nayaragracioli.vercel.app/"><FaPager color="white"/></a>
                                            <a href="https://github.com/nayaragracioli/portfolio-nayaragracioli"><FaGitAlt color="white"/></a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </div>
                        <div>
                            <li>
                                <div className={Styles.card}>
                                    <div className={Styles.cardImg}>
                                        <img src="https://vivariomarrecife.com.br/wp-content/uploads/2021/03/pastor-de-shetland.jpg" alt="Dog" />
                                        <div className={Styles.cardLogos}>
                                            <FaReact/>
                                            <FaHtml5/>
                                            <SiJavascript/>
                                            <SiSass/>
                                        </div>
                                    </div>
                                    <div className={Styles.cardInfo}>
                                        <h3 className="title3">NuKenzie</h3>
                                        <p className="paragraph">Apresento uma página de Hamburgueria responsiva que tem funções de filtragem por nome, adição, exclusão e soma de valores do lanche escolhido além de dark mode. Este projeto é responsivo que foi realizado com React e SCSS.</p>
                                        <div className={Styles.cardLink}>
                                            <a href="https://react-entrega-s2-template-nu-kenzie-nayaragracioli.vercel.app/"><FaPager color="white"/></a>
                                            <a href="https://github.com/nayaragracioli/portfolio-nayaragracioli"><FaGitAlt color="white"/></a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </div>
                        <div>
                            <li>
                                <div className={Styles.card}>
                                    <div className={Styles.cardImg}>
                                        <img src="https://vivariomarrecife.com.br/wp-content/uploads/2021/03/pastor-de-shetland.jpg" alt="Dog" />
                                        <div className={Styles.cardLogos}>
                                            <FaReact/>
                                            <FaHtml5/>
                                            <SiJavascript/>
                                            <SiSass/>
                                        </div>
                                    </div>
                                    <div className={Styles.cardInfo}>
                                        <h3 className="title3">NuKenzie</h3>
                                        <p className="paragraph">Apresento uma página de Hamburgueria responsiva que tem funções de filtragem por nome, adição, exclusão e soma de valores do lanche escolhido além de dark mode. Este projeto é responsivo que foi realizado com React e SCSS.</p>
                                        <div className={Styles.cardLink}>
                                            <a href="https://react-entrega-s2-template-nu-kenzie-nayaragracioli.vercel.app/"><FaPager color="white"/></a>
                                            <a href="https://github.com/nayaragracioli/portfolio-nayaragracioli"><FaGitAlt color="white"/></a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </div>
                        <div>
                            <li>
                                <div className={Styles.card}>
                                    <div className={Styles.cardImg}>
                                        <img src="https://vivariomarrecife.com.br/wp-content/uploads/2021/03/pastor-de-shetland.jpg" alt="Dog" />
                                        <div className={Styles.cardLogos}>
                                            <FaReact/>
                                            <FaHtml5/>
                                            <SiJavascript/>
                                            <SiSass/>
                                        </div>
                                    </div>
                                    <div className={Styles.cardInfo}>
                                        <h3 className="title3">NuKenzie</h3>
                                        <p className="paragraph">Apresento uma página de Hamburgueria responsiva que tem funções de filtragem por nome, adição, exclusão e soma de valores do lanche escolhido além de dark mode. Este projeto é responsivo que foi realizado com React e SCSS.</p>
                                        <div className={Styles.cardLink}>
                                            <a href="https://react-entrega-s2-template-nu-kenzie-nayaragracioli.vercel.app/"><FaPager color="white"/></a>
                                            <a href="https://github.com/nayaragracioli/portfolio-nayaragracioli"><FaGitAlt color="white"/></a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </div>
                    </ul>
                </div>
            </div>
        </section>
    )
}