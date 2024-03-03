import {AboutMe, Header, MyProject, Skills, Apresentation, Footer} from "../../components"

export const HomePage = () => {

    return(
        <>
            <Header/>
            <main>
                <Apresentation/>
                <MyProject/>
                <Skills/>
                <AboutMe/>
            </main>
            <Footer/>
        </>
    )
}