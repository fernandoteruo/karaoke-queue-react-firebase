import {connect} from 'react-redux';
import {HomeComponent} from "../../components/songs/HomeComponent";

const mapStateToProps = (state, props) => {
    return {
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return {
    }
};

export const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(HomeComponent);