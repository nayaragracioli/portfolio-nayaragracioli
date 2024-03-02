import Styles from "./style.module.scss";

export const Apresentation = () => {
  return (
    <section className={`container ${Styles.apresentationBox}`}>
      <div>
        <div className={Styles.boxInfo}>
          <h1 className="title1">
            Hello, I'm Nayara Gracioli, frontend developer
          </h1>
          <p className="paragraph">
            Former digital-marketing specialist, seeking to apply competent
            development skills with focus on collaboration, communication, and
            passion
          </p>
        </div>
        <div className={Styles.boxButton}>
          <a href="src/assets/CV - Nayara Sá.pdf" download="Currículo Nayara Gracioli de Sá.pdf">Download CV</a>
        </div>
        <div className={Styles.boxImg}>
          <img src="\src\assets\Foto Linkedin1.jpeg" alt="" />
        </div>
      </div>
    </section>
  );
};
