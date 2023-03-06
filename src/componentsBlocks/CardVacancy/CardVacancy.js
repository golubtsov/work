import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import './CardVacancy.scss';

function CardVacancy(props) {

    const [salary, setSalary] = useState('');
    const [src, setSrc] = useState(``);

    useEffect(() => {
        createSalary(props.info.salary);
        logo(props.info.employer.logo_urls['240']);
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

    function logo(src) {
        if (src === 'Не указано') {
            setSrc('');
        } else {
            setSrc(src);
        }
    }

    return (
        <div className="card-vacanc">
            <div className="blc-title">
                <Link to="" key={props.info.id} className="link-title">{props.info.name}</Link>
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
                <button className="btn-otclick">Смотреть</button>
            </div>
        </div>
    )
}

export default CardVacancy;