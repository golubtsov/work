import React from "react";
import Banner from "../../componentsBlocks/Banner/Banner";
import Blc_Vacansies from "../../componentsBlocks/BlockVacancies/BlcVacansies";
import WayWork from "../../componentsBlocks/WayWork/WayWork";
import Footer from "../../componentsBlocks/Footer/Footer";

import '../Main/Main.scss';

function Main() {
    return (
        <div className="wrapper">
            <Banner />
            <WayWork />
            <Blc_Vacansies paramPoisk={{ "text": 'it+Россия', "page": 0 }} />
            <Footer />
        </div>
    );
}

export default Main;