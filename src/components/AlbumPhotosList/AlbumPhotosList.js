import React from 'react';
import { NavLink } from 'react-router-dom';
import PhotoItem from '../PhotoItem/PhotoItem'

import styles from './AlbumPhotosList.module.scss';

const AlbumPhotosList = ({ isLoading, currentAlbum}) => {

    return (
        <div className={styles.albumPhotosWrapper}>
            <h1>All Photos Available</h1>
            <div className={styles.photosWrapper}>
                { !isLoading && currentAlbum.length ? currentAlbum[0].map((res,i) =>
                    <NavLink to={{pathname: '/photos/id', search:`${i}`}} key={res.id}>
                        <PhotoItem
                            key={res.albumId}
                            {...currentAlbum}
                            favPhotos={{
                                id: res.id,
                                title: res.title,
                                url: res.url,
                            }}
                            addedPhotoId = {res.id}
                            name = {res.title}
                            src = {res.url}
                        />
                    </NavLink>)
                    :
                    '...'
                }
            </div>
        </div>
    )
};

export default AlbumPhotosList;