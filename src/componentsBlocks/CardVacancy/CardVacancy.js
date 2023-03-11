import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { scrollTop } from "../../functions/scrollTop";
import CheckLogo from "../../classes/CheckLogo";
import { whiteBacground } from "../../consts/consts";

import './CardVacancy.scss';

function CardVacancy(props) {

    const [salary, setSalary] = useState('');
    const [src, setSrc] = useState(whiteBacground);

    useEffect(() => {
        createSalary(props.info.salary);
        if (!CheckLogo.prototype.checkLogo(props.info.employer.logo_urls['240'])) {
            setSrc(props.info.employer.logo_urls['240']);
        }
    });

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
        <div className="card-vacanc">
            <div className="blc-title">
                <Link to={`/vacancies/${props.info.id}`} className="link-title" onClick={scrollTop}>{props.info.name}</Link>
                <span className="blc-logo"><img src={src} className="logo" /></span>
            </div>
            <div className="blc-salary">
                <p className="salary">{salary}</p>
            </div>
            <div className="blc-employment">
                <p className="employment">{props.info.employer.name}</p>
            </div>
            <div className="blc-city">
                <p className="city">{props.info.area.name}</p>
            </div>
            <div className="blc-otlick">
                <button className="btn-otclick">
                    <Link to={`/vacancies/${props.info.id}`} className="link-btn">Смотреть</Link></button>
            </div>
        </div>
    )
}

export default CardVacancy;