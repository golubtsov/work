import React from "react";
import '../Main/Main.scss';
import Banner from "../../componentsBlocks/Banner/Banner";
import Blc_Vacansies from "../../componentsBlocks/BlockVacancies/BlcVacansies";
import WayWork from "../../componentsBlocks/WayWork/WayWork";
import Footer from "../../componentsBlocks/Footer/Footer";

function Main() {
    return (
        <div className="wrapper">
            <Banner />
            <WayWork />
            <Blc_Vacansies />
            <Footer />
        </div>
    );
}

export default Main;