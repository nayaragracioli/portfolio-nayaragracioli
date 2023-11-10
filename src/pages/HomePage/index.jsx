import {AboutMe, Header, MyProject, Skills, Apresentation, Footer} from "../../components"

export const HomePage = () => {

    return(
        <>
            <Header/>
            <main>
                <Apresentation/>
                <Skills/>
                <MyProject/>
                <AboutMe/>
            </main>
            <Footer/>
        </>
    )
}