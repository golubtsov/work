import React from "react";
import Banner from "../../componentsBlocks/Banner/Banner";
import WayWork from "../../componentsBlocks/WayWork/WayWork";

import '../Main/Main.scss';

function Main() {
    return (
        <div className="wrapper">
            <Banner />
            <WayWork />
        </div>
    );
}

export default Main;