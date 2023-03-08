import React from "react";
import { Link } from "react-router-dom";

import './Footer.scss';

function Footer() {
    return (
        <footer>
            <div className="container">
                <nav>
                    <ul>
                        <li><Link to="/" className="footer-link">Главная</Link></li>
                        <li><Link to="/vacancies" className="footer-link">Вакансии</Link></li>
                        <li><Link to="/works" className="footer-link">Направления</Link></li>
                    </ul>
                </nav>
            </div>
            <div className="copy">
                <p className="text-copy">© 2023 Work Developer</p>
            </div>
        </footer>
    )
}

export default Footer;