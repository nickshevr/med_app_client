import React from 'react';
import { push } from 'react-router-redux'
import { connect } from 'react-redux';

import Schedule from '../../components/Schedule';

const mapStateToProps = state => ({
    consultance: state.consultance,
});

const mapDispatchToProps = dispatch => ({
    onSelectSlot: (slot) => {
        const {end, start} = slot;

        console.log(slot);
    },
    onSelectEvent: (event) => {
        dispatch(push(`/consultance/${event.id}`));
    },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Schedule);
