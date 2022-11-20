const sugestoes = [
    {
        userName  :"bad.vibes.memes" ,
        userFoto  :"./assets/badvibesmemes 1.png" ,
        userStatus:"Segue você" ,
    },
    {
        userName  :"chibirdart" ,
        userFoto  :"./assets/chibirdart 1.png" ,
        userStatus:"Segue você" ,
    },
    {
        userName  :"razoesparaacreditar" ,
        userFoto  :"./assets/razoesparaacreditar 1.png" ,
        userStatus:"Novo no Instagram" ,
    },
    {
        userName  :"adorable_animals" ,
        userFoto  :"./assets/adorableanimals 1.png" ,
        userStatus:"Segue você" ,
    },
    {
        userName  :"smallcutecats" ,
        userFoto  :"./assets/smallcutecats 1.png" ,
        userStatus:"Segue você" ,
    },
]

export default function Sugestoes() {
    return (
        <div class="sugestoes">
            <div class="sugestao">
                <span>Sugestões para você</span>
                <p>Ver tudo</p>
            </div>
            {sugestoes.map((s)=><Sugestao userFoto={s.userFoto} userName={s.userName} userStatus={s.userStatus} ></Sugestao>   )}
            
        </div>
    )
}

function Sugestao(props) {
    return (
        <div class="sugestao">
            <div>
                <img src={props.userFoto} alt={props.userName} />
                <div>
                    <p>{props.userName}</p>

                    <span>{props.userStatus}</span>
                </div>
            </div>
            <div class="azul">Seguir</div>
        </div>
    )
}