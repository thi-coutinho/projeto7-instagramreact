import Stories from "./Stories.js"
import Posts from "./Posts.js"
import Sidebar from "./Sidebar.js"

export default function Corpo() {
    return (
        <div className="conteudoprinc">
            <div className="coluna1">
                <Stories></Stories>
                <Posts></Posts>
            </div>
            <Sidebar></Sidebar>
        </div>
    )
}