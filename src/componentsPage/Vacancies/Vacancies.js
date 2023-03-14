import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { newQuery } from "../../redux/reducer";
import BlcVacansies from "../../componentsBlocks/BlockVacancies/BlcVacansies";
import Footer from "../../componentsBlocks/Footer/Footer";

import './Vacancies.scss';

function Vacancies() {

    const dispath = useDispatch();
    const intText = React.createRef();
    let query = useSelector((state) => state.toolkit.query);

    useEffect(() => { }, [query]);

    function getQueryPoisk() {
        let poisk = intText.current.value;
        if (poisk == '') {
            alert('Пустой запрос');
        } else {
            dispath(newQuery(poisk));
        }
        intText.current.value = '';
    }

    function keyEnter(key) {
        if (key.keyCode === 13) {
            getQueryPoisk();
        }
    }

    return (
        <div className="vacans">
            <div className='blc-poisk'>
                <div className="poisk">
                    <input onKeyDown={keyEnter} type="text" ref={intText} placeholder="Профессия, должность" />
                    <button onClick={getQueryPoisk} className='btn-poisk'>Найти</button>
                    <div className="blc-param-poisk"></div>
                </div>
            </div>
            <>
                <BlcVacansies />
            </>
            <Footer />
        </div>
    );
}

export default Vacancies;