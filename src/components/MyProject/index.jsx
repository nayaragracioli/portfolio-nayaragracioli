import Styles from "./style.module.scss";
import kenziehub from "../../assets/kenziehub.png";
import nukenzie from "../../assets/nukenzie.png";
import hamburgueria from "../../assets/hamburgueria.png";
import kenziemovie from "../../assets/kenziemovie.png";

export const MyProject = () => {
  return (
    <section className={`container ${Styles.projectsBox}`} id="projects">
      <div>
        <div className={Styles.projectsInfo}>
          {/* <p className="specialText">Projects</p> */}
          <h2 className="title2">My Projects</h2>
        </div>
        <div className={Styles.projectsCard}>
          <ul>
            <div>
              <li>
                <div className={Styles.card}>
                  <div className={`${Styles.cardImg}`}>
                    <img src={kenziehub} alt="Kenzie Hub" />
                    <div className={Styles.cardDescription}>
                      <h3>Kenzie Hub</h3>
                      <p>Responsive ReactJs layout for Kenzie Hub project. React, JavaScript, SASS</p>
                    </div>
                    <div className={Styles.cardLink}>
                      <div>
                        <a
                          href="https://react-entrega-parte3-kenzie-hub-nayaragracioli.vercel.app/"
                          target="_blank"
                        >
                          <p>Live preview</p>
                        </a>
                      </div>
                      <div>
                        <a
                          href="https://github.com/nayaragracioli/kenziehub-nayaragracioli"
                          target="_blank"
                        >
                          <p>GitHub</p>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className={Styles.card}>
                  <div className={`${Styles.cardImg}`}>
                    <img src={nukenzie} alt="NuKenzie" />
                    <div className={Styles.cardDescription}>
                      <h3>NuKenzie</h3>
                      <p>Responsive ReactJs layout for NuKenzie project. React, JavaScript, SASS</p>
                    </div>
                    <div className={Styles.cardLink}>
                      <div>
                        <a
                          href="https://react-entrega-s2-template-nu-kenzie-nayaragracioli.vercel.app/"
                          target="_blank"
                        >
                          <p>Live preview</p>
                        </a>
                      </div>
                      <div>
                        <a
                          href="https://github.com/nayaragracioli/nukenzie-nayaragracioli"
                          target="_blank"
                        >
                          <p>GitHub</p>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className={Styles.card}>
                  <div className={`${Styles.cardImg}`}>
                    <img src={hamburgueria} alt="Site Hamburgueria" />
                    <div className={Styles.cardDescription}>
                      <h3>Site Hamburgueria</h3>
                      <p>Responsive ReactJs layout for Site Hamburgueria project. React, JavaScript, SASS</p>
                    </div>
                    <div className={Styles.cardLink}>
                      <div>
                        <a
                          href="https://react-entrega-s3-template-hamburgueria-nayaragracioli.vercel.app/"
                          target="_blank"
                        >
                          <p>Live preview</p>
                        </a>
                      </div>
                      <div>
                        <a
                          href="https://github.com/nayaragracioli/hamburgueria-nayaragracioli"
                          target="_blank"
                        >
                          <p>GitHub</p>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className={Styles.card}>
                  <div className={`${Styles.cardImg}`}>
                    <img
                      src={kenziemovie}
                      alt="Kenzie Movie"
                    />
                    <div className={Styles.cardDescription}>
                      <h3>Kenzie Movie</h3>
                      <p>Responsive ReactJs layout for Kenzie Movie project. React, JavaScript, SASS, GitFlow</p>
                    </div>
                    <div className={Styles.cardLink}>
                      <div>
                        <a
                          href="https://kenzie-movie-five.vercel.app/"
                          target="_blank"
                        >
                          <p>Live preview</p>
                        </a>
                      </div>
                      <div>
                        <a
                          href="https://github.com/Kenzie-Academy-Brasil-Developers/KenzieMovie-Group-T19"
                          target="_blank"
                        >
                          <p>GitHub</p>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </section>
  );
};
