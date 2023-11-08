import Styles from "./style.module.scss";


export const AboutMe = () => {

    return (
        <section className={`container ${Styles.aboutmeBox}`} id="aboutme">
            <div>
                <div className={Styles.boxInfo}>
                    <h1 className="title1">Hello, I'm Nayara Gracioli, frontend developer</h1>
                    <p className="paragraph">Former digital-marketing specialist, seeking to apply competent development skills with focus on collaboration, communication, and passion</p>
                </div>
                <div className={Styles.boxImg}>
                    <img src="./src/assets/Perfil LinkedIn1.jpg" alt="" />
                </div>
            </div>
        </section>
    )
}