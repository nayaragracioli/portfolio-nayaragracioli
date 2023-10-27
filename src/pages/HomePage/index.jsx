import {AboutMe, Header, Projects, Techs} from "../../components"

export const HomePage = () => {

    return(
        <>
            <Header/>
            <main>
                <AboutMe/>
                <Techs/>
                <Projects/>
            </main>
        </>
    )
}