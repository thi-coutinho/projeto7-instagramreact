import Usuario from "./Usuario.js"
import Sugestoes from "./Sugestoes.js"

export default function Sidebar() {
    return (
        <div class="sidebar">
            <Usuario></Usuario>
            <Sugestoes></Sugestoes>
            <div class="textoinfo">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos •
                Localizações • Contas mais relevantes • Hashtags • Idioma
            </div>
            <div class="textoinfo">© 2021 INSTAGRAM DO FACEBOOK</div>
        </div>
    )
}