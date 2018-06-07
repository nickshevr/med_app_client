import React from 'react';
import { Table, Input, Button, Icon } from 'antd';
import { map, uniq, flow } from 'lodash/fp';

const getDataFilters = flow(map('type'), uniq, map(elem => ({ text: elem, value: elem })));

class EmployeeList extends React.Component {
    state = {
        filterDropdownVisible: false,
        data: {},
        searchText: '',
        filtered: false,
    };
    onInputChange = (e) => {
        this.setState({ searchText: e.target.value });
    }
    onSearch = () => {
        const { searchText, data } = this.state;
        const reg = new RegExp(searchText, 'gi');
        this.setState({
            filterDropdownVisible: false,
            filtered: !!searchText,
            data: data.map((record) => {
                const match = record.name.match(reg);
                if (!match) {
                    return null;
                }
                return {
                    ...record,
                    name: (
                        <span>
              {record.name.split(new RegExp(`(?<=${searchText})|(?=${searchText})`, 'i')).map((text, i) => (
                  text.toLowerCase() === searchText.toLowerCase() ?
                      <span key={i} className="highlight">{text}</span> : text // eslint-disable-line
              ))}
            </span>
                    ),
                };
            }).filter(record => !!record),
        });
    }
    render() {
        const {data, onRowClick} = this.props;
        this.state.data = data;
        const filters = getDataFilters(data);

        const columns = [{
            title: 'Имя',
            dataIndex: 'name',
            key: 'name',
            filterDropdown: (
                <div className="custom-filter-dropdown">
                    <Input
                        ref={ele => this.searchInput = ele}
                        placeholder="Search name"
                        value={this.state.searchText}
                        onChange={this.onInputChange}
                        onPressEnter={this.onSearch}
                    />
                    <Button type="primary" onClick={this.onSearch}>Search</Button>
                </div>
            ),
            filterIcon: <Icon type="smile-o" style={{ color: this.state.filtered ? '#108ee9' : '#aaa' }} />,
            filterDropdownVisible: this.state.filterDropdownVisible,
            onFilterDropdownVisibleChange: (visible) => {
                this.setState({
                    filterDropdownVisible: visible,
                }, () => this.searchInput && this.searchInput.focus());
            },
        }, {
            title: 'Стаж',
            dataIndex: 'age',
            key: 'age',
        }, {
            title: 'Специальность',
            dataIndex: 'type',
            key: 'type',
            filters: filters,
            onFilter: (value, record) => record.type === value,
        }];

        return <Table
            columns={columns}
            dataSource={this.state.data}
            onRow={onRowClick}
        />;
    }
}

export default EmployeeList;
