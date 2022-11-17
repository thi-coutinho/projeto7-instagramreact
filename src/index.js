import ReactDOM from "react-dom";

function Lista() {
    return (
        <ul>
            <li>Topico 1</li>
            <li>Topico 2</li>
            <li>Topico 3</li>
        </ul>
    )
}

const lista = Lista()
ReactDOM.render(lista, document.querySelector(".root"))
