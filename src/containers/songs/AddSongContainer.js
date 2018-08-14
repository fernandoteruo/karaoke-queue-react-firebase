import {connect} from 'react-redux';
import {AddSongComponent} from "../../components/songs/AddSongComponent";
import {setValue, submitSong} from "../../actions/SongsActions";

const mapStateToProps = (state, props) => {
    return {
        name: state.SongsReducer.name,
        music: state.SongsReducer.music,
        artist: state.SongsReducer.artist,
        code: state.SongsReducer.code
    }
};
const mapDispatchToProps = (dispatch, props) => {
    return {
        handleChange: (input, value) => {
            dispatch(setValue(input, value))
        },
        handleSubmit: (e, name, artist, music, code) => {
            e.preventDefault();
            dispatch(submitSong(name, artist, music, code))
        }
    }
};

export const AddSongContainer = connect(mapStateToProps, mapDispatchToProps)(AddSongComponent);