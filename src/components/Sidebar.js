import Usuario from "./Usuario.js"
import Sugestoes from "./Sugestoes.js"

export default function Sidebar() {
    const user = {
        name: "Catana",
        urlImage: "./assets/catanacomics 1.png",
        profile: "catanomics"
    }
    return (
        <div className="sidebar">
            <Usuario name={user.name} urlImage={user.urlImage} profile={user.profile}></Usuario>
            <Sugestoes></Sugestoes>
            <div className="textoinfo">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos •
                Localizações • Contas mais relevantes • Hashtags • Idioma
            </div>
            <div className="textoinfo">© 2021 INSTAGRAM DO FACEBOOK</div>
        </div>
    )
}