import React, { useEffect, useState } from "react";
import axios from "axios";

import ChechNull from "../../classes/CheckNull";

import './BlcVacansies.scss';
import Vacancy from "../../classes/Vacancy";
import CardVacancy from "../CardVacancy/CardVacancy";

function Blc_Vacansies() {

    let [page, setPage] = useState(0);
    let [vacancies, setVacancies] = useState([]);

    useEffect(() => {
        axios.get(`https://api.hh.ru/vacancies?text=it+Россия&page=${page}`)
            .then(res => {
                for (const e of res.data.items) {
                    createClassVacancy(e);
                }
            })
    }, []);

    function createClassVacancy(el) {
        let vacancy = new Vacancy(
            el.id,
            el.name,
            el.area,
            el.salary,
            el.employer,
            el.snippet
        );
        vacancy = new ChechNull().checkNull(vacancy);
        vacancies = [...vacancies, vacancy];
        setVacancies(vacancies);
    }

    return (
        <div className="blc-vacansies">
            <div className="list-vacancies">
                {vacancies.map(el =>
                    // <p>№ - {el.id}</p>
                    <CardVacancy info={el} key={el.id} />
                )}
            </div>
        </div>
    );
}

export default Blc_Vacansies;