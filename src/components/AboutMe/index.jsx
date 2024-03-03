import Styles from "./style.module.scss";


export const AboutMe = () => {

    return (
        <section className={`container ${Styles.aboutMeBox}`} id="aboutme">
            <div>
                <div className={Styles.contactInfo}>
                    {/* <p className="specialText">About Me</p> */}
                    <h2 className="title2">About Me</h2>
                </div>
                <div className={Styles.experience__sections}>
                    <div className={Styles.experience__content}>
                        <div className={Styles.experience__data}>
                            <div>
                                <h3>2015</h3>
                            </div>
                            <div>
                                <span className={Styles.experience__rounder}></span>
                                <span className={Styles.experience__line}></span>
                            </div>
                            <div className={Styles.experience__text}> 
                                <p>Beginning of the Graduation in Materials Engineering at UFSC.</p>
                            </div>
                        </div>
                        <div className={Styles.experience__data}>
                            <div>
                                <h3>2019</h3>
                            </div>
                            <div>
                                <span className={Styles.experience__rounder}></span>
                                <span className={Styles.experience__line}></span>
                            </div>
                            <div className={Styles.experience__text}>
                                <p>1 year of volunteering at Empresa Jr, initially working as an administrative advisor and then as vice president.</p>
                            </div>
                        </div>
                        <div className={Styles.experience__data}>
                            <div>
                                <h3>2021</h3>
                            </div>
                            <div>
                                <span className={Styles.experience__rounder}></span>
                                <span className={Styles.experience__line}></span>
                            </div>
                            <div className={Styles.experience__text}>
                                <p>1 year internship in Manufacturing Engineering, working with continuous improvement projects.</p>
                            </div>
                        </div>
                        <div className={Styles.experience__data}>
                            <div>
                                <h3>2022</h3>
                            </div>
                            <div>
                                <span className={Styles.experience__rounder}></span>
                                <span className={Styles.experience__line}></span>
                            </div>
                            <div className={Styles.experience__text}>
                                <p>After graduating, I started as an engineering analyst.</p>
                            </div>
                        </div>
                        <div className={Styles.experience__data}>
                            <div>
                                <h3>2023</h3>
                            </div>
                            <div>
                                <span className={Styles.experience__rounder}></span>
                                <span className={Styles.experience__line}></span>
                            </div>
                            <div className={Styles.experience__text}>
                                <p>Became more interested in IT and started the Full Stack Development course at Kenzie.</p>
                            </div>
                        </div>
                        <div className={Styles.experience__data}>
                            <div>
                                <h3>2023</h3>
                            </div>
                            <div>
                                <span className={Styles.experience__rounder}></span>
                                <span className={Styles.experience__line}></span>
                            </div>
                            <div className={Styles.experience__text}>
                                <p>I was invited by Kenzie to be a frontend monitor for a period of 2 months.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}