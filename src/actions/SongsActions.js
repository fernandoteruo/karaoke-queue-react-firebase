import {ActionsType} from "../utils/ActionsType";
import {SongStatus} from "../utils/SongStatus";

import firebase from "firebase";
export const setValue = (param, value) => ({
    type: ActionsType.setValue,
    param: param,
    value: value
});

export const submitSong = (name, artist, music, code) => {
    firebase.database().ref('/songs').push({
        artist: artist || '',
        name: name || '',
        music: music || '',
        code: code || '',
        status: SongStatus.notPlayed
    });
    return {
        type: ActionsType.submitMusic
    }
};

export const listMusic = (songs) => ({
    type: ActionsType.listMusic,
    songs: songs
});

export const readMusic = () =>  async dispatch => {
    firebase.database().ref('/songs').on('value', (snapshot) => {
        let songs = [];
        for (let i in snapshot.val()) {
            let id = i;
            let values = snapshot.val()[i];
            let obj = {
                id: id,
                artist: values.artist,
                name: values.name,
                status: values.status,
                music: values.music,
                code: values.code
            };
            songs.push(obj);
        }
        dispatch(listMusic(songs))
    });
};

export const updateSong = (songs) => async dispatch => {
    const updates = {};
    for (let i in songs) {
        let id = songs[i].id;
        delete songs[i].id;
        updates['/songs/' + id] = songs[i].status ? songs[i] : null;
    }
    console.log(updates);
    await firebase.database().ref().update(updates);
    dispatch(update())
};

export const update = () => ({
    type: ActionsType.updateMusic
});

export const setFilter = (filter) => ({
    type: ActionsType.setFilter,
    filter: filter
});