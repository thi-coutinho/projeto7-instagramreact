import { useState } from "react"

export default function Usuario(props) {
    const [name,setName] = useState(props.name)
    const [imagem,setImagem] = useState(props.urlImage)

    function errorImage() {
        setImagem("./assets/person-circle-sharp.svg")
        setTimeout(alert,500,"URL inválida")
    }
    function editImage() {
        const urlImage = prompt("Insira um url da sua nova imagem")
        if (urlImage) setImagem(urlImage)
        else {
            setImagem("./assets/person-circle-sharp.svg")
            setTimeout(alert,500,"URL inválida")
        }
    }
    function editName() {
        let response = prompt("Qual o seu nome?")
        if (response) setName(response)
    }

    return (
        <div data-test="user" className="profile">
            <img data-test="profile-image" onClick={editImage} src={imagem} onError={errorImage} alt={name} />
            <div>
                <p>{props.profile}</p>
                <span data-test="name">{name}</span>
                <ion-icon data-test="edit-name" onClick={editName} name="pencil"></ion-icon>
            </div>
        </div>
    )
}