import Styles from "./style.module.scss";

export const Header = () => {

    return(

        <header className="container">
            <div>
                <h1 className="title3">Nayara Gracioli</h1>
                <div>
                    <nav>
                        <ul>
                            <li className="paragraph">About me</li>
                            <li className="paragraph">Projects</li>
                            <li className="paragraph">Contact</li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}