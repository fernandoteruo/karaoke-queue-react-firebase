import {connect} from 'react-redux';
import {ListMusicComponent} from "../../components/songs/ListMusicComponent";

const mapStateToProps = (state, props) => {
    return {
        songs: state.MusicReducer.songs.filter((song) => song.status === 'played')
    }
};
const mapDispatchToProps = (dispatch, props) => {
    return {
    }
};

export const ListPreviousMusicContainer = connect(mapStateToProps, mapDispatchToProps)(ListMusicComponent);