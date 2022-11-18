import Stories from "./Stories.js"
import Posts from "./Posts.js"
import Sidebar from "./Sidebar.js"

export default function Corpo() {
    return (
        <div class="conteudoprinc">
            <div class="coluna1">
                <Stories></Stories>
                <Posts></Posts>
            </div>
            <Sidebar></Sidebar>
        </div>
    )
}