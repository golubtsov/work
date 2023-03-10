import React from "react";
import { useSelector } from "react-redux";

import '../Main/Main.scss';
import Banner from "../../componentsBlocks/Banner/Banner";
import Blc_Vacansies from "../../componentsBlocks/BlockVacancies/BlcVacansies";
import WayWork from "../../componentsBlocks/WayWork/WayWork";
import Footer from "../../componentsBlocks/Footer/Footer";

function Main() {

    let page = useSelector((state) => state.toolkit.page);
    let query = useSelector((state) => state.toolkit.query);

    return (
        <div className="wrapper">
            <Banner />
            <WayWork />
            <Blc_Vacansies paramPoisk={{ "text": query, "page": page }} />
            <Footer />
        </div>
    );
}

export default Main;