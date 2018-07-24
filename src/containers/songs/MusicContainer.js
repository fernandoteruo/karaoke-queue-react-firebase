import {connect} from 'react-redux';
import {MusicComponent} from "../../components/songs/MusicComponent";

const mapStateToProps = (state, props) => {
    return {
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return {
    }
};

export const MusicContainer = connect(mapStateToProps, mapDispatchToProps)(MusicComponent);