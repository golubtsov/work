import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../componentsBlocks/Footer/Footer";

import './Work.scss';

function Work() {
    return (
        <>
            <div className="blc-work">
                <div className="container">
                    <div id="web-developer" className="elem-work">
                        <div className="item-name">
                            <h2 className="name">Web-разработка</h2>
                        </div>
                        <div className="item-text">
                            <ul className="list-prof">
                                <li className="link-prof">Frontend-разработчик</li>
                                <li className="link-prof">Backend-разработчик</li>
                                <li className="link-prof">Мобильный разработчик</li>
                                <li className="link-prof">Fullstack-разработчик</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Work;