import { useState } from "react"

export default function Usuario() {
    const [nome,setNome] = useState("Catana")
    const [imagem,setImagem] = useState("./assets/catanacomics 1.png")
    function errorImage() {
        setImagem("./assets/person-circle-sharp.svg")
        setTimeout(alert,500,"URL inválida")
    }

    return (
        <div class="profile">
            <img onClick={()=>setImagem(prompt("Qual url da imagem"))} src={imagem} onError={errorImage}alt={nome} />
            <div>
                <p>catanomics</p>
                <span>{nome}</span>
                <ion-icon onClick={()=>setNome(prompt("Qual o nome"))} name="pencil"></ion-icon>
            </div>
        </div>
    )
}