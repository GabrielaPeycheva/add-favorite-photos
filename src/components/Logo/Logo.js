import React from 'react';
import logo from '../../assets/images/logo.png';
import { NavLink } from 'react-router-dom';

import styles from './Logo.module.scss';

const Logo = () => {
    return (
        <NavLink to="/">
            <div className={styles.logo}>
                <img className={styles.logo} src={logo} alt="Food Logo" />
            </div>
        </NavLink>
    );
};

export default Logo;