import Styles from "./style.module.scss";

export const Header = () => {

    return(

        <header className="container">
            <div>
                <h1 className="title3">Nayara Gracioli</h1>
                <div>
                    <nav>
                        <ul>
                            <li><a className="paragraph" href="#aboutme">About me</a></li>
                            <li><a className="paragraph" href="#projects">Projets</a></li>
                            <li><a className="paragraph" href="#contact">Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}