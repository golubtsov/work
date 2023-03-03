import React from "react";
import { Link } from "react-router-dom";

import "./Menu.scss";

function Menu() {
  return (
    <menu>
      <div className="blc-logo">
        <a href="/" className="link-logo">
          <p>Work Deloper</p>
        </a>
      </div>
      <nav>
        <ul className="list-links">
          <li className="item-link"><Link className="nav-link" to='/'>Главная</Link ></li>
          <li className="item-link"><Link className="nav-link" to='/vacancies'>Вакансии</Link ></li>
          <li className="item-link"><Link className="nav-link" to='/works'>Направления</Link ></li>
        </ul>
      </nav>
      <div className="blc-btn-close">
        <div className="line-close"></div>
        <div className="line-close"></div>
        <div className="line-close"></div>
      </div>
    </menu>
  );
}

export default Menu;
