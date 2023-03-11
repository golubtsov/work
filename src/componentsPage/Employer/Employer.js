import React, { useEffect } from 'react';
import EmployerClass from '../../classes/EmployerClass';

import './Employer.scss';

function Employer(props) {

    const popup = React.createRef();

    const closeWindow = () => {
        popup.current.style.display = 'none';
    }

    useEffect(() => { }, []);

    return (
        <div className='popup-employer' ref={popup}>
            <div className="close">
                <div className="btn-close" onClick={closeWindow}></div>
            </div>
            <div className="window-popup"></div>
        </div>
    )
}

export default Employer
