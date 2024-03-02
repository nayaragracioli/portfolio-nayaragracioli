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
                                <p>Worked out in which field I want to build a developer's career and started to learn Frontend Development.</p>
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
                                <p>Worked out in which field I want to build a developer's career and started to learn Frontend Development.</p>
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
                                <p>Worked out in which field I want to build a developer's career and started to learn Frontend Development.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}