import React from 'react';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';

import styles from './Layout.module.scss';

const Layout = () => {

    return (
        <div className={styles.headerWrapper}>
            <Logo />
            <div className={styles.navigation}>
                <Navigation />
            </div>
        </div>
    );
};

export default Layout;