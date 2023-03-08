import React from "react";
import BlcVacansies from "../../componentsBlocks/BlockVacancies/BlcVacansies";
import Footer from "../../componentsBlocks/Footer/Footer";

import './Vacancies.scss';

function Vacancies() {
    return (
        <div className="vacans">
            <BlcVacansies />
            <Footer />
        </div>
    );
}

export default Vacancies;