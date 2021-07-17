import {useDispatch, useSelector} from 'react-redux';
import { albumActions } from '../../store/album-slice';
import { ReactComponent as CheckIcon } from '../../assets/images/icon-check.svg';

import styles from './PhotoItem.module.scss';

const PhotoItem = (props) => {

    const dispatch = useDispatch();
    const addPhotoId = useSelector((state) => state.album.addedPhotoId);

    const { title, url, id } = props.favPhotos;

    const addPhotoHandler = () => {
        dispatch(
            albumActions.addPhotoToAlbum({
                id,
                title,
                url
            })
        );

    };
    return (
        <div className={styles.photoItemWrapper}>
            <p>{props.name}</p>
            <img src={props.src}  width="150" alt={props.name} />
            <button
                className={`${styles.styledButton} ${addPhotoId.find((photo) => photo === id) ? styles.added : ''}`}
                onClick={addPhotoHandler}>
                { addPhotoId && addPhotoId.length && addPhotoId.find((photo) => photo === id)
                    ?
                    <p>Added &nbsp; <CheckIcon /> </p>
                    :
                    <p>Add to favorites</p>
                }
            </button>
        </div>
    );
};

export default PhotoItem;