import {AboutMe, Header, MyProject, Techs, Contact} from "../../components"

export const HomePage = () => {

    return(
        <>
            <Header/>
            <main>
                <AboutMe/>
                <Techs/>
                <MyProject/>
                <Contact/>
            </main>
        </>
    )
}