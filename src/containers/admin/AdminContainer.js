import {connect} from 'react-redux';
import {HomeComponent} from "../../components/songs/HomeComponent";
import {AdminComponent} from "../../components/admin/AdminComponent";
import {getFilteredSongs} from "../../selectors/SongsSelector";
import {setFilter, updateSong} from "../../actions/SongsActions";
import {SongStatus} from "../../utils/SongStatus";

const mapStateToProps = (state, props) => {
    return {
        songs: getFilteredSongs(state.SongsReducer)
    }
};

const mapDispatchToProps = (dispatch, props) => {
    dispatch(setFilter(SongStatus.all));
    return {
        handleClick: (e, type, songs) => {
            e.preventDefault();
            for (let i in songs) {
                songs[i].status = type === SongStatus.all || (type === SongStatus.played && songs[i].status === SongStatus.played) ? null : songs[i].status;
            }
            dispatch(updateSong(songs));
        }
    }
};

export const AdminContainer = connect(mapStateToProps, mapDispatchToProps)(AdminComponent);