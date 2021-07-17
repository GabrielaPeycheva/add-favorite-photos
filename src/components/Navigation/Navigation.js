import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Navigation.module.scss';

const Navigation = () => {

    return (
        <Fragment>
            <NavLink to="/" exact className={styles.navlink}>Home</NavLink>
            <NavLink to="/favorite-photos" className={styles.navlink}>Favorite Photos</NavLink>
        </Fragment>
    );
};

export default Navigation;