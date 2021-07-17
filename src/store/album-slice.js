import { createSlice } from '@reduxjs/toolkit';
import { current } from '@reduxjs/toolkit'

const albumSlice = createSlice({
    name: 'album',
    initialState: {
        albums: [],
        currentAlbum: [],
        favPhotos: [],
        addedPhotoId: [],
    },
    reducers: {
        showAlbums(state, action) {
            state.albums = action.payload.albums;
        },
        addCurrentAlbum(state, action) {
            state.currentAlbum = [];
            state.currentAlbum.push(action.payload);
        },
        addPhotoToAlbum(state, action) {
            const newPhoto = action.payload;
            const existingPhoto = state.favPhotos.find((photo) => photo.id === newPhoto.id);
            if (!existingPhoto) {
                state.favPhotos.push({
                    id: newPhoto.id,
                    url: newPhoto.url,
                    title: newPhoto.title,
                });
                state.addedPhotoId.push(newPhoto.id);
            }
            console.log(current(state));
        },
    },
});

export const fetchAlbums = () => {
    return async (dispatch) => {
        const fetchData = async () => {
            const response = await fetch(
                'https://jsonplaceholder.typicode.com/photos'
            );

            if (!response.ok) {
                throw new Error('Could not fetch albums data!');
            }

            const data = await response.json();
            const groupAlbums = await function(list, key) {
                return list.reduce(function(rv, x) {
                    (rv[x[key]] = rv[x[key]] || []).push(x);
                    return rv;
                }, []);
            };

            const groupedAlbums = await groupAlbums(data,'albumId');
            return groupedAlbums;
        };

        try {
            const albumData = await fetchData();
            dispatch(
                albumActions.showAlbums({
                    albums: albumData || [],
                })
            );
        } catch (error) {
            throw new Error('Could not fetch albums data!');
        }
    };
};
export const albumActions = albumSlice.actions;

export default albumSlice.reducer;