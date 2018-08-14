import {connect} from 'react-redux';
import {ListSongsComponent} from "../../components/songs/ListSongsComponent";
import {SongStatus} from "../../utils/SongStatus";
import {setFilter} from "../../actions/SongsActions";
import {getFilteredSongs} from "../../selectors/SongsSelector";

const mapStateToProps = (state, props) => {
    return {
        songs: getFilteredSongs(state.SongsReducer)
    }
};
const mapDispatchToProps = (dispatch, props) => {
    dispatch(setFilter(SongStatus.played));
    return {
    }
};

export const ListPreviousSongsContainer = connect(mapStateToProps, mapDispatchToProps)(ListSongsComponent);