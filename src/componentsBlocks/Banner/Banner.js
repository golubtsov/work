import React from "react";
import MainSearch from "../MainSearch/MainSearch";

import './Banner.scss';

function Banner() {
    return (
        <div className="blc-banner">
            <div className="blc-img-banner">
                <MainSearch />
            </div>
        </div>
    );
}

export default Banner;