import {AboutMe, Header, MyProject, Techs, Apresentation, Footer} from "../../components"

export const HomePage = () => {

    return(
        <>
            <Header/>
            <main>
                <Apresentation/>
                <Techs/>
                <MyProject/>
                <AboutMe/>
            </main>
            <Footer/>
        </>
    )
}