import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Route, Switch } from 'react-router-dom';
import { albumActions, fetchAlbums } from './store/album-slice';
import Layout from './components/Layout/Layout';
import AlbumPhotosList from './components/AlbumPhotosList/AlbumPhotosList';
import AlbumItem from './components/AlbumItem/AlbumItem';
import FavoritePhotos from './components/FavoritesPhotos/FavoritePhotos';
import Spinner from './components/Spinner/Spinner';

import styles from './App.scss';

let isInitial = true;

const App = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [album, setAlbum] = useState(0);

    const dispatch = useDispatch();
    const allAlbums = useSelector((state) => state.album.albums);
    const currentAlbum = useSelector((state) => state.album.currentAlbum);

    const getAlbum = (album) => {
        setAlbum(album);
        dispatch(
            albumActions.addCurrentAlbum(album)
        );
        setIsLoading(false);
    };

    useEffect(() => {
        dispatch(fetchAlbums());
        setIsLoading(false);
    }, [dispatch]);

    useEffect(() => {
        if (isInitial) {
            isInitial = false;
            return;
        }

    }, []);
  return (
    <div className={styles.body}>
        <Layout />
        <Switch>
            <Route path="/favorite-photos"  component={FavoritePhotos} />
            <Route path="/photos/id"  render={(props) => (
              <AlbumPhotosList allAlbums={allAlbums} isLoading={isLoading} currentAlbum={currentAlbum} />)}
            /> />
            <Route path="/" exact render={(props) => (
                <div className="albumsWrapper">
                    { !isLoading ? allAlbums.map((res,i) =>
                        <NavLink to={{pathname: '/photos/id', search:`${i}`}} key={i}>
                            <AlbumItem
                              onClick={() => getAlbum(allAlbums[i])}
                              title={i}
                              album={album}
                            />
                        </NavLink>)
                        :
                        <Spinner />
                    }
                </div>
            )} />
            />
        </Switch>
    </div>
  );
}

export default App;
