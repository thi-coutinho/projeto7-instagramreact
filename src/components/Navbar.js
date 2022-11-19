export default function Navbar() {
    return (
       <>
        <div class="barra-fixa">
                <div class="barratopo pc">
                    <div class="bar-left">
                        <ion-icon name="logo-instagram"></ion-icon>
                        <div class="linha-vert"></div>
                        <img src=".\assets\logo 1.svg" alt="" />
                    </div>
                    <div class="bar-middle">
                        <input class="pesquisa" type="text" placeholder="Pesquisar" />
                    </div>
                    <div class="bar-right">
                        <ion-icon name="paper-plane-outline"></ion-icon>
                        <ion-icon name="compass-outline"></ion-icon>
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="person-outline"></ion-icon>
                    </div>
                </div>
                <div class="barratopo-m mobile">
                    <ion-icon name="logo-instagram"></ion-icon>
                    <img src=".\assets\logo 1.svg" alt="" />
                    <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
            </div>
            <div class="barra-fixa-bottom mobile">
                <div class="barratopo-m">
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