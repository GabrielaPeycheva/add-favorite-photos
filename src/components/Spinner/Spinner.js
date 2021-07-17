import React from 'react';
import spinner from '../../assets/images/spinner.gif';

import styles from './Spinner.module.scss';

const Spinner = () => {
    return (
        <div className={styles.spinnerContainer}>
            <h1>Loading...</h1>
            <img
                height="180"
                src={spinner}
                alt="Loading page"
            />
        </div>
    );
};

export default Spinner;