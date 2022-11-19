const stories = [
    {
        userFoto: "./assets/9gag 1.png",
        userName: "9gag"
    },
    {
        userFoto: "./assets/meowed 1.png",
        userName: "meowed"
    },
    {
        userFoto: "./assets/barked 1.png",
        userName: "barked"
    },
    {
        userFoto: "./assets/nathanwpylestrangeplanet 1.png",
        userName: "nathanwpyle..."
    },
    {
        userFoto: "./assets/wawawiwacomicsa 1.png",
        userName: "wawawiwac..."
    },
    {
        userFoto: "./assets/respondeai 1.png",
        userName: "respondeai"
    },
    {
        userFoto: "./assets/filomoderna 1.png",
        userName: "filomoderna"
    },
    {
        userFoto: "./assets/memeriagourmet 1.png",
        userName: "memeriago."
    },

]

export default function Stories() {
    return (
        <div class="barra-stories">
            <a href="#">
                <ion-icon class="pc" name="chevron-forward-circle"></ion-icon>
            </a>
            {stories.map((s)=> <Story userFoto={s.userFoto} userName = {s.userName}/>)}
        </div>
    )
}

function Story(props) {
    return (
        <div class="stories-icones">
                <img src={props.userFoto} />
                <p>{props.userName}</p>
            </div>
    )
    
}