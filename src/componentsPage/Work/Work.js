import React, { useEffect, useRef, useState } from "react";
import Footer from "../../componentsBlocks/Footer/Footer";

import './Work.scss';

const listWorks = require('./list-works/list-works.json');

function Work() {

    const refs = [];

    listWorks.map(el => {
        let itemRef = React.createRef();
        refs.push(itemRef);
    });

    useEffect(() => { }, [listWorks]);

    const checkActive = (event, el) => {
        if (event.target.tagName === 'ION-ICON') {
            let elRefs = refs[event.target.id].current;
            // if (elRefs.classList.contains('active')) {
            // closeInfoProfessions();
            // } else {
            // setTimeout(() => getInfoProfessions(elRefs), 500);
            // }
            getInfoProfessions(elRefs)
        }
    }

    const getInfoProfessions = (el) => {
        closeInfoProfessions();
        el.classList.add('active');
        // el.style.display = 'block';
        el.style.height = el.scrollHeight + 'px';
        el.style.opacity = 1;
    }

    const closeInfoProfessions = () => {
        refs.map(el => {
            el.current.classList.remove('active');
            el.current.style.opacity = 0;
            el.current.style.height = 0;
            setTimeout(() => {
                // el.current.style.display = 'none';
            }, 400);
        });
    }


    return (
        <>
            <div className="blc-work">
                <div className="container">
                    {
                        listWorks.map((el, index) => (
                            <div id={`${el.id}`} key={index} className="elem-work">
                                <div className="item-name">
                                    <p className="name">{el.name}</p>
                                    <span className="icon"><ion-icon onClick={checkActive} id={`${index}`} name="arrow-down-outline"></ion-icon></span>
                                </div>
                                <div className="item-text" ref={refs[index]}>
                                    <ul className="list-prof">
                                        {el.works.map((el, index) => (
                                            <li key={index} className="link-prof">{el[0]} - {el[1]}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Work;