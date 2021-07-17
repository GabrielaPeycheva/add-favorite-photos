import React from 'react';

import styles from './AlbumItem.module.scss';

const AlbumItem = ({onClick, title}) => {

    return (
        <div
            className={styles.albumContainer}
             onClick={onClick}
        >
            <p>Album {title}</p>
        </div>
    );
};

export default AlbumItem;