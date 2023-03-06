import React from "react";
import Banner from "../../componentsBlocks/Banner/Banner";
import Blc_Vacansies from "../../componentsBlocks/Block_Vacancies/Blc_Vacansies";
import WayWork from "../../componentsBlocks/WayWork/WayWork";

import '../Main/Main.scss';

function Main() {
    return (
        <div className="wrapper">
            <Banner />
            <WayWork />
            <Blc_Vacansies />
        </div>
    );
}

export default Main;