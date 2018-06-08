import React from 'react';
import { push } from 'react-router-redux'
import { connect } from 'react-redux';

import { flow, values } from 'lodash/fp';

import Schedule from '../../components/Schedule';
import agent from "../../agent";
import {FETCH_CONSULTANCE} from "../../constants/actionTypes";

import {mapConsultance} from '../../selectors/consultance';

const mapStateToProps = state => ({
    events: flow(values, mapConsultance)(state.consultance),
});

const mapDispatchToProps = dispatch => ({
    onSelectSlot: (slot) => {
        const {end, start} = slot;

        console.log(slot);
    },
    onSelectEvent: (event) => {
        dispatch(push(`/consultance/${event.id}`));
    },
    fetchData: () => {
        const payload = agent.Consultance.getAll();

        dispatch({type: FETCH_CONSULTANCE, payload});
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Schedule);
