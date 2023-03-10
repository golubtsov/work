import React from "react";
import { Link } from "react-router-dom";

import './WayWork.scss';

function WayWork() {
    return (
        <div className="blc-way-work">
            <div className="blc-list-wors">
                <div className="blc-title">
                    <h2 className="title">Направления развития</h2>
                </div>
                <div className="blc-cards-work">
                    <div className="blc-card-work">
                        <div className="container">
                            <div className="blc-img-work dev"></div>
                            <div className="blc-link-way">
                                <Link to="/works/web-developer" className="link-way">Web-разработчик</Link>
                            </div>
                        </div>
                    </div>
                    <div className="blc-card-work">
                        <div className="container">
                            <div className="blc-img-work data"></div>
                            <div className="blc-link-way">
                                <Link to="/works/data-cience" className="link-way">Data Science</Link>
                            </div>
                        </div>
                    </div>
                    <div className="blc-card-work">
                        <div className="container">
                            <div className="blc-img-work tester"></div>
                            <div className="blc-link-way">
                                <Link to="/works/testing" className="link-way">Тестирование</Link>
                            </div>
                        </div>
                    </div>
                    <div className="blc-card-work">
                        <div className="container">
                            <div className="blc-img-work dev-game"></div>
                            <div className="blc-link-way">
                                <Link to="/works/game-development" className="link-way">Разработка игр</Link>
                            </div>
                        </div>
                    </div>
                    <div className="blc-card-work">
                        <div className="container">
                            <div className="blc-img-work sisadmin"></div>
                            <div className="blc-link-way">
                                <Link to="/works/administration" className="link-way">Администрирование</Link>
                            </div>
                        </div>
                    </div>
                    <div className="blc-card-work">
                        <div className="container">
                            <div className="blc-img-work security"></div>
                            <div className="blc-link-way">
                                <Link to="/works/information-security" className="link-way">Информационная безопасность</Link>
                            </div>
                        </div>
                    </div>
                    <div className="blc-card-work">
                        <div className="container">
                            <div className="blc-img-work marketer"></div>
                            <div className="blc-link-way">
                                <Link to="/works/marketing" className="link-way">Маркетинг</Link>
                            </div>
                        </div>
                    </div>
                    <div className="blc-card-work">
                        <div className="container">
                            <div className="blc-img-work analyst"></div>
                            <div className="blc-link-way">
                                <Link to="/works/analytics" className="link-way">Аналитика</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="blc-title">
                    <h2 className="title">Вакансии</h2>
                </div>
            </div>
        </div>
    );
}

export default WayWork;