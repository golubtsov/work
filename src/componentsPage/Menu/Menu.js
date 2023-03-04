import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

import "./Menu.scss";

function Menu() {

  const nav = React.createRef();

  function workMenu() {
    if (!nav.current.classList.contains('active')) {
      nav.current.classList.add('active');
      getMenu();
    } else {
      nav.current.classList.remove('active');
      nav.current.style.height = 0 + 'px';
      setTimeout(() => {
        removeMenu();
      }, 0.8);
    }
    console.log(nav.current.classList.contains('active'));
  }

  function getMenu() {
    nav.current.style.display = 'flex';
    setTimeout(() => {
      nav.current.style.height = nav.current.scrollHeight + 'px';
    }, 0.8);
  }

  function removeMenu() {
    nav.current.style.height = 0 + 'px';
    setTimeout(() => {
      nav.current.style.display = 'none';
    }, 0.8);
  }

  return (
    <menu>
      <div className="blc-logo">
        <a href="/" className="link-logo">
          <p>Work Deloper</p>
        </a>
      </div>
      <nav ref={nav}>
        <ul className="list-links">
          <li className="item-link"><Link className="nav-link" to='/'>Главная</Link ></li>
          <li className="item-link"><Link className="nav-link" to='/vacancies'>Вакансии</Link ></li>
          <li className="item-link"><Link className="nav-link" to='/works'>Направления</Link ></li>
        </ul>
      </nav>
      <div className="blc-btn-close" onClick={workMenu}>
        <div className="line-close"></div>
        <div className="line-close"></div>
        <div className="line-close"></div>
      </div>
    </menu>
  );
}

export default Menu;
