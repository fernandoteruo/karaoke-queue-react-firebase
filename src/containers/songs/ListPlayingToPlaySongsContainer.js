import {connect} from 'react-redux';
import {ListSongsComponent} from "../../components/songs/ListSongsComponent";
import {setFilter, updateSong} from "../../actions/SongsActions";
import {SongStatus} from "../../utils/SongStatus";
import {getFilteredSongs} from "../../selectors/SongsSelector";


const mapStateToProps = (state, props) => {
    return {
        songs: getFilteredSongs(state.SongsReducer)
    }
};
const mapDispatchToProps = (dispatch, props) => {
    dispatch(setFilter(SongStatus.playingNotPlayed));
    return {
        handleClick: (e, id, songs) => {
            e.preventDefault();
            for (let i in songs) {
                songs[i].status = songs[i].status === SongStatus.playing ? SongStatus.played : (songs[i].id === id ? SongStatus.playing : songs[i].status);
            }
            dispatch(updateSong(songs));
        }
    }
};

export const ListPlayingToPlaySongsContainer = connect(mapStateToProps, mapDispatchToProps)(ListSongsComponent);