import React from 'react';
import { useSelector } from 'react-redux';

import styles from './FavoritePhotos.module.scss';

const FavoritePhotos = (props) => {
    const favoritePhotos = useSelector((state) => state.album.favPhotos);

    return (
        <>
            <h1>Your Favorite Photos:</h1>
            <div className={styles.favPhotoWrapper}>
                { favoritePhotos.length ? favoritePhotos.map((res) =>
                   <div className={styles.favPhoto} key={res.id}>
                       <p>PhotoId: {res.id}</p>
                       <p>Title :{res.title}</p>
                       <img src={res.url} width='150' alt={res.title}/>
                   </div>)
                    :
                    <h1>Sorry, you did not add any photos yet.</h1>
                }
            </div>
        </>
    );
};

export default FavoritePhotos;