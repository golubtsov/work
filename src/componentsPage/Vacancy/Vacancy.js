import React, { useEffect, useState } from "react";
import axios from "axios";
import ChechNull from "../../classes/CheckNull";

import '../../componentsBlocks/CardVacancy/CardVacancy.scss';
import './Vacancy.scss';

function Vacancy() {

    const [infoVacancy, setInfoVacancy] = useState({});
    const [salary, setSalary] = useState('');

    useEffect(() => {
        axios.get(`https://api.hh.ru/vacancies/${getIdVacancy()}`)
            .then(res => {
                setInfoVacancy(new ChechNull().checkNull(res.data));
                createSalary(new ChechNull().checkNull(res.data.salary));
            });
    }, []);

    function getIdVacancy() {
        let idVacancy = new URL(window.location).pathname.split('/')[2];
        return idVacancy;
    }

    function createSalary(el) {
        if (el === 'Не указано') {
            setSalary('');
            return;
        }
        if (el.from !== 'Не указано' && el.to !== 'Не указано') {
            let res = `от ${el.from} до ${el.to} руб.`;
            setSalary(res);
        } else if (el.from === 'Не указано') {
            let res = `до ${el.to} руб.`;
            setSalary(res);
        } else if (el.to === 'Не указано') {
            let res = `от ${el.from} руб.`;
            setSalary(res);
        }
    }

    return (
        <div className="container">
            <div className="blc-info">
                <div className="card-vacanc">
                    <div className="blc-title">
                        <p>{infoVacancy.name}</p>
                        <span className="blc-logo"><img src="https://hhcdn.ru/employer-logo-original/812403.png" className="logo" /></span>
                    </div>
                    <div className="blc-salary">
                        <p className="salary">{salary}</p>
                    </div>
                    <div className="blc-employment">
                        {/* <p className="text-info">Требуемый опыт работы: {infoVacancy.experience.name}</p> */}
                    </div>
                    <div className="blc-employment">
                        {/* <p className="employment">{infoVacancy.employer.name}</p> */}
                    </div>
                    <div className="blc-otlick">
                        <button className="btn-otclick">Смотреть</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Vacancy;