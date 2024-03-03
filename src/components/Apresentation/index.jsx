import Styles from "./style.module.scss";
import photo from "../../assets/Foto Linkedin1.jpeg";
import curriculum from "../../assets/CV - Nayara Sá.pdf";

export const Apresentation = () => {
  return (
    <section className={`container ${Styles.apresentationBox}`}>
      <div>
        <div className={Styles.boxInfo_Img}>
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
          <div className={Styles.boxImg}>
            <img src={photo} alt="Perfil Image" />
          </div>
        </div>
        <div className={Styles.boxButton}>
          <a href={curriculum} download="Currículo Nayara Gracioli de Sá.pdf">Download CV</a>
        </div>
        
      </div>
    </section>
  );
};
