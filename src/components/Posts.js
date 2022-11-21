import { useState } from "react"

export default function Posts() {
    const posts = [
        {
            userFoto: "./assets/meowed 1.png",
            userName: "meowed",
            imagem: "./assets/gato-telefone 1.png",
            userCurtiu: {
                userFoto: "./assets/respondeai 1.png",
                userName: "respondeai",
            },
            curtidas: 101523,
        },
        {
            userFoto: "./assets/barked 1.png",
            userName: "barked",
            imagem: "./assets/dog 1.png",
            userCurtiu: {
                userFoto: "./assets/adorableanimals 1.png",
                userName: "adorable_animals",
            },
            curtidas: 99969,
        },
        {
            userFoto: "./assets/meowed 1.png",
            userName: "meowed",
            imagem: "./assets/gato-telefone 1.png",
            userCurtiu: {
                userFoto: "./assets/respondeai 1.png",
                userName: "respondeai",
            },
            curtidas: 101523,
        },
    ]
    return (
        <>
            {posts.map((p, i) => (
                <Post
                    key={i}
                    userFoto={p.userFoto}
                    userName={p.userName}
                    imagem={p.imagem}
                    userCurtiu={p.userCurtiu}
                    curtidas={p.curtidas} >

                </Post>))}
        </>
    )
}

function Post(props) {
    const [save, setSave] = useState("bookmark-outline")
    const [like, setLike] = useState("heart-outline")
    const [curtidas, setCurtidas] = useState(props.curtidas)
    const [heartAnimate, setHeartAnimate] = useState(<></>)

    function curtir() {
        if (like === "heart") {
            setLike("heart-outline")
            setCurtidas(curtidas - 1)
        } else {
            setLike("heart")
            setCurtidas(curtidas + 1)
        }

    }
    function curtirImagem() {
        const timeDelayAnimation = 500
        setHeartAnimate(<ion-icon name="heart"></ion-icon>)
        setTimeout(setHeartAnimate, timeDelayAnimation, <></>)

        if (like === "heart-outline") {
            setLike("heart")
            setCurtidas(curtidas + 1)
        }
    }

    return (
        <div data-test="post" className="post">
            <div className="post-top">
                <div>
                    <img src={props.userFoto} alt="" />
                    <p>{props.userName}</p>
                </div>
                <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
            <div className="post-image">
                <img data-test="post-image" onDoubleClick={curtirImagem} className="ajuste-mobile" src={props.imagem} alt="" />
                {heartAnimate}
            </div>
            <div className="post-bottom">
                <div className="icones-post">
                    <div>
                        <ion-icon data-test="like-post" onClick={curtir} name={like}></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <ion-icon data-test="save-post" onClick={() => (save === "bookmark" ?
                        setSave("bookmark-outline") :
                        setSave("bookmark"))} name={save}></ion-icon>
                </div>
                <div className="curtidos">
                    <img src={props.userCurtiu.userFoto} alt={props.userCurtiu.userName} />
                    <p>
                        Curtido por <span>{props.userCurtiu.userName}</span> e
                        outras <span data-test="likes-number"> {curtidas.toLocaleString('pt-BR')} </span> pessoas.
                    </p>
                </div>
            </div>
        </div>
    )
}