import {connect} from 'react-redux';
import {ListMusicComponent} from "../../components/songs/ListMusicComponent";
import {updateSong} from "../../actions/MusicActions";

const mapStateToProps = (state, props) => {
    return {
        songs: state.MusicReducer.songs.filter((song) => song.status !== 'played')
    }
};
const mapDispatchToProps = (dispatch, props) => {
    return {
        handleClick: (e, id, songs) => {
            e.preventDefault();
            for (let i in songs) {
                songs[i].status = songs[i].status === 'active' ? 'played' : (songs[i].id === id ? 'active' : songs[i].status);
            }
            dispatch(updateSong(songs));
        }
    }
};

export const ListMusicContainer = connect(mapStateToProps, mapDispatchToProps)(ListMusicComponent);