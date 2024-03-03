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
              Hello, I'm Nayara Gracioli, Frontend Developer
            </h1>
            <p className="paragraph">
            Graduated in Materials Engineering from the Federal University of Santa Catarina (UFSC) and currently studying Full Stack Development at Kenzie Academy Brasil, seeking to apply competent development skills with focus on collaboration, learning and passion.
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
