export default function Navbar() {
    return (
       <>
        <div className="barra-fixa">
                <div className="barratopo pc">
                    <div className="bar-left">
                        <ion-icon name="logo-instagram"></ion-icon>
                        <div className="linha-vert"></div>
                        <img src=".\assets\logo 1.svg" alt="" />
                    </div>
                    <div className="bar-middle">
                        <input className="pesquisa" type="text" placeholder="Pesquisar" />
                    </div>
                    <div className="bar-right">
                        <ion-icon name="paper-plane-outline"></ion-icon>
                        <ion-icon name="compass-outline"></ion-icon>
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="person-outline"></ion-icon>
                    </div>
                </div>
                <div className="barratopo-m mobile">
                    <ion-icon name="logo-instagram"></ion-icon>
                    <img src=".\assets\logo 1.svg" alt="" />
                    <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
            </div>
            <div className="barra-fixa-bottom mobile">
                <div className="barratopo-m">
                    <ion-icon name="home"></ion-icon>
                    <ion-icon name="search-outline"></ion-icon>
                    <ion-icon name="add-circle-outline"></ion-icon>
                    <ion-icon name="heart-outline"></ion-icon>
                    <ion-icon name="person-outline"></ion-icon>
                </div>
            </div>
       </>
    )
}