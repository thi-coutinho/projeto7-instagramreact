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
            curtidas: 101.523,
        },
        {
            userFoto: "./assets/barked 1.png",
            userName: "barked",
            imagem: "./assets/dog 1.png",
            userCurtiu: {
                userFoto: "./assets/adorableanimals 1.png",
                userName: "adorable_animals",
            },
            curtidas: 99.969,
        },
        {
            userFoto: "./assets/meowed 1.png",
            userName: "meowed",
            imagem: "./assets/gato-telefone 1.png",
            userCurtiu: {
                userFoto: "./assets/respondeai 1.png",
                userName: "respondeai",
            },
            curtidas: 101.523,
        },
    ]
    return (
        <>
            {posts.map((p) => (
                <Post
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
    return (
        <div class="post">
            <div class="post-top">
                <div>
                    <img src={props.userFoto} alt="" />
                    <p>{props.userName}</p>
                </div>
                <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
            <img class="ajuste-mobile" src={props.imagem} alt="" />
            <div class="post-bottom">
                <div class="icones-post">
                    <div>
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <ion-icon name="bookmark-outline"></ion-icon>
                </div>
                <div class="curtidos">
                    <img src={props.userCurtiu.userFoto} alt={props.userCurtiu.userName} />
                    <p>
                        Curtido por <span>{props.userCurtiu.userName}</span> e
                        outras <span> {props.curtidas} </span> pessoas.
                    </p>
                </div>
            </div>
        </div>
    )
}