import React from 'react';
import { push } from 'react-router-redux'
import { connect } from 'react-redux';

import EmployeeList from '../../components/EmployeeList';

const data = [{
    id: '1',
    name: 'John Brown',
    age: 32,
    type: 'Pediatr',
}, {
    id: '2',
    name: 'Joe Black',
    age: 42,
    type: 'Hirurg',
}, {
    id: '3',
    name: 'Jim Green',
    age: 32,
    type: 'Pediatr_3',
}, {
    id: '4',
    name: 'Jim Red',
    age: 32,
    type: 'Pediatr_1',
}];

const mapDispatchToProps = (dispatch, props) => ({
    onSelectSlot: (record) => {
        return {
            onClick: () => {
                console.log(record);
                dispatch(push(`/doctors/${record.id}/schedule`));
            },       // click row
        };
    },
});

const mapStateToProps = (state, props) => ({
    data,
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EmployeeList);
