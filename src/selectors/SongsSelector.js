import { createSelector } from 'reselect';
import {SongStatus} from "../utils/SongStatus";

const getStatusFilter = (state) => state.filter;
const getSongs = (state) => state.songs;

export const getFilteredSongs = createSelector([getStatusFilter, getSongs], (filter, songs) => {
    switch (filter) {
        case SongStatus.played:
            return songs.filter(song => song.status === SongStatus.played);
        case SongStatus.playingNotPlayed:
            return songs.filter(song => song.status === SongStatus.notPlayed || song.status === SongStatus.playing);
        case SongStatus.all:
            return songs;
        default:
            return [];
    }
});