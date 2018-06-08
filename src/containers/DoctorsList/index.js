import React from 'react';
import { values } from 'lodash/fp';
import { push } from 'react-router-redux'
import { connect } from 'react-redux';

import EmployeeList from '../../components/EmployeeList';
import {FETCH_EMPLOYEE} from "../../constants/actionTypes";
import agent from "../../agent";

const mapDispatchToProps = (dispatch, props) => ({
    onRowClick: record => ({
        onClick: () => {
            console.log(record);
            dispatch(push(`/doctors/${record.id}/schedule`));
        }
    }),
    fetchData: () => {
        const payload = agent.Employee.getAll();

        dispatch({type: FETCH_EMPLOYEE, payload});
    }
});

const mapStateToProps = (state, props) => ({
    data: values(state.employee),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EmployeeList);
