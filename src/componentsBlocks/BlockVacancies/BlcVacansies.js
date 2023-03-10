import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

import './BlcVacansies.scss';
import ChechNull from "../../classes/CheckNull";
import Vacancy from "../../classes/Vacancy";
import CardVacancy from "../CardVacancy/CardVacancy";

function BlcVacansies(props) {

    const listVacancies = React.createRef();
    let [vacancies, setVacancies] = useState([]);

    useEffect(() => {
        axios.get(`https://api.hh.ru/vacancies?text=${props.paramPoisk.text}&page=${props.paramPoisk.page}`)
            .then(res => {
                for (const e of res.data.items) {
                    listVacancies.current.innerHTML = '';
                    createClassVacancy(e);
                }
            })
    }, [props.paramPoisk.text, props.paramPoisk.page]);

    function createClassVacancy(el) {
        let vacancy = new Vacancy(
            el.id,
            el.name,
            el.area,
            el.salary,
            el.employer
        );
        vacancy = new ChechNull().checkNull(vacancy);
        vacancies = [...vacancies, vacancy];
        setVacancies(vacancies);
    }

    return (
        <div className="blc-vacansies">
            <div className="list-vacancies" ref={listVacancies}>
                {vacancies.map(el => <CardVacancy info={el} key={el.id} />)}
            </div>
        </div>
    );
}

export default BlcVacansies;